import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import subredditReducer from '../features/subreddits/subredditSlice';
import searchReducer from '../features/search/searchSlice';
import postDetailReducer from '../features/postDetail/postDetailSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddit: subredditReducer,
    search: searchReducer,
    postDetail: postDetailReducer,
  },
});

export default store;
