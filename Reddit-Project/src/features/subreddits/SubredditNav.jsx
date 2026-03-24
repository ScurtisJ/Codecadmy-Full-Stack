import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSubreddit } from './subredditSlice';
import { loadPosts } from '../posts/postsSlice';
import { setSearchTerm } from '../search/searchSlice';

const SubredditNav = () => {
  const { subreddits, currentSubreddit } = useSelector((state) => state.subreddit);
  const dispatch = useDispatch();

  const handleClick = (subredditName) => {
    dispatch(setCurrentSubreddit(subredditName));
    dispatch(setSearchTerm(''));       // clear any active search
    dispatch(loadPosts(subredditName)); // fetch posts for this subreddit
  };

  return (
    <nav className="subreddit-nav">
      {subreddits.map((sub) => (
        <button
          key={sub.name}
          className={`subreddit-btn ${currentSubreddit === sub.name ? 'active' : ''}`}
          onClick={() => handleClick(sub.name)}
        >
          {sub.displayName}
        </button>
      ))}
    </nav>
  );
};

export default SubredditNav;
