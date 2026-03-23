import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    searchHistory: [],
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addToHistory: (state, action) => {
      const term = action.payload;
      // Remove duplicate if it exists, then add to front
      state.searchHistory = [
        term,
        ...state.searchHistory.filter((t) => t !== term),
      ].slice(0, 8); // Keep max 8 entries
    },
  },
});

export const { setSearchTerm, addToHistory } = searchSlice.actions;
export default searchSlice.reducer;
