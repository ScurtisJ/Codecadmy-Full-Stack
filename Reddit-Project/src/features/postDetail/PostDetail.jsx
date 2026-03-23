import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedPost } from './postDetailSlice';
import Comment from './Comment';

const PostDetail = () => {
  const { selectedPost, comments, isLoading, error } = useSelector(
    (state) => state.postDetail
  );
  const dispatch = useDispatch();

  if (!selectedPost) return null;

  // Close when clicking the overlay (but not the detail card itself)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(clearSelectedPost());
    }
  };

  return (
    <div className="post-detail-overlay" onClick={handleOverlayClick}>
      <div className="post-detail">
        <button className="back-btn" onClick={() => dispatch(clearSelectedPost())}>
          &larr; Back
        </button>

        <h2>{selectedPost.title}</h2>
        <div className="post-detail-meta">
          <span>r/{selectedPost.subreddit}</span>
          <span>u/{selectedPost.author}</span>
          <span>{selectedPost.ups} upvotes</span>
          <span>{selectedPost.num_comments} comments</span>
        </div>

        {selectedPost.selftext && (
          <p className="post-detail-body">{selectedPost.selftext}</p>
        )}

        {selectedPost.url && selectedPost.url.match(/\.(jpg|png|gif|webp)$/i) && (
          <img className="post-detail-image" src={selectedPost.url} alt={selectedPost.title} />
        )}

        <h3>Comments ({comments.length})</h3>
        {isLoading && <p className="loading">Loading comments...</p>}
        {error && <p className="error">Failed to load comments.</p>}
        <div className="comments-list">
          {comments.map((comment, index) => (
            <Comment key={comment.id || index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
