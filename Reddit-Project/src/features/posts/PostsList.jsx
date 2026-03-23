import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from './postsSlice';
import PostCard from './PostCard';

const PostsList = () => {
  const { items, isLoading, error } = useSelector((state) => state.posts);
  const currentSubreddit = useSelector((state) => state.subreddit.currentSubreddit);
  const dispatch = useDispatch();

  // Fetch posts on first load
  useEffect(() => {
    dispatch(loadPosts(currentSubreddit));
  }, []);

  if (isLoading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>Failed to load posts.</p>
        <button onClick={() => dispatch(loadPosts(currentSubreddit))}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="posts-list">
      {items.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
