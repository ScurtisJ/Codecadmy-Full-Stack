import { createSlice } from '@reduxjs/toolkit';

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    // Our water-themed subreddits
    subreddits: [
      { name: 'Spearfishing', displayName: 'Spearfishing' },
      { name: 'surfing', displayName: 'Surfing' },
      { name: 'Kiteboarding', displayName: 'Kiteboarding' },
      { name: 'sailing', displayName: 'Sailing' },
      { name: 'Swimming', displayName: 'Swimming' },
      { name: 'marinebiology', displayName: 'Sea Life' },
      { name: 'thalassophobia', displayName: 'Deep Water' },
    ],
    currentSubreddit: 'surfing', // default on load
  },
  reducers: {
    setCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload;
    },
  },
});

export const { setCurrentSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;
