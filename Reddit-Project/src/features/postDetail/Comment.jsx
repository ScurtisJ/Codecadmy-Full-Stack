const Comment = ({ comment }) => {
  // Skip non-comment objects (like "more comments" links)
  if (comment.kind !== undefined && comment.kind !== 't1') return null;
  if (!comment.body) return null;

  return (
    <div className="comment">
      <div className="comment-meta">
        <span className="comment-author">u/{comment.author}</span>
        <span className="comment-ups">{comment.ups} points</span>
      </div>
      <p className="comment-body">{comment.body}</p>
    </div>
  );
};

export default Comment;
