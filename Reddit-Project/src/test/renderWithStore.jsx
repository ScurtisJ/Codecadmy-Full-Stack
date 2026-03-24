import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import subredditReducer from '../features/subreddits/subredditSlice';
import searchReducer from '../features/search/searchSlice';
import postDetailReducer from '../features/postDetail/postDetailSlice';

// Creates a fresh store with optional preloaded state, wraps component in Provider
export const renderWithStore = (component, preloadedState = {}) => {
  const store = configureStore({
    reducer: {
      posts: postsReducer,
      subreddit: subredditReducer,
      search: searchReducer,
      postDetail: postDetailReducer,
    },
    preloadedState,
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
