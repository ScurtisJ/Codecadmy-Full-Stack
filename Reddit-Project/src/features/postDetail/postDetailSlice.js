import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostComments } from '../../api/reddit';

// Async thunk: fetches comments for a post
export const loadComments = createAsyncThunk(
  'postDetail/loadComments',
  async (permalink) => {
    const comments = await fetchPostComments(permalink);
    return comments;
  }
);

const postDetailSlice = createSlice({
  name: 'postDetail',
  initialState: {
    selectedPost: null,   // the full post object when clicked
    comments: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    clearSelectedPost: (state) => {
      state.selectedPost = null;
      state.comments = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(loadComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedPost, clearSelectedPost } = postDetailSlice.actions;
export default postDetailSlice.reducer;
