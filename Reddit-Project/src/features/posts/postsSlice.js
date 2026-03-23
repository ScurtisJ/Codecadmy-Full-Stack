import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubredditPosts, searchPosts } from '../../api/reddit';

// Async thunk: fetches posts from a subreddit
export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async (subreddit) => {
    const posts = await fetchSubredditPosts(subreddit);
    return posts;
  }
);

// Async thunk: fetches posts from a search query
export const loadSearchResults = createAsyncThunk(
  'posts/loadSearchResults',
  async (searchTerm) => {
    const posts = await searchPosts(searchTerm);
    return posts;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],       // the array of post objects
    isLoading: false, // are we currently fetching?
    error: null,      // did the fetch fail?
  },
  reducers: {},
  // extraReducers handle the async thunk lifecycle
  extraReducers: (builder) => {
    builder
      // loadPosts
      .addCase(loadPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // loadSearchResults — same pattern
      .addCase(loadSearchResults.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(loadSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
