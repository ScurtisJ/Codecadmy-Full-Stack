import { useDispatch } from 'react-redux';
import { setSelectedPost, loadComments } from '../postDetail/postDetailSlice';

// Get the best available image from a post
const getPostImage = (post) => {
  // Try to get a preview image (Reddit provides multiple resolutions)
  if (post.preview?.images?.[0]?.source?.url) {
    // Reddit HTML-encodes the URLs in preview
    return post.preview.images[0].source.url.replace(/&amp;/g, '&');
  }
  // Fall back to the post URL if it's a direct image link
  if (post.url && post.url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    return post.url;
  }
  // Fall back to thumbnail if it's a real URL
  if (post.thumbnail && post.thumbnail.startsWith('http')) {
    return post.thumbnail;
  }
  return null;
};

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedPost(post));
    dispatch(loadComments(post.permalink));
  };

  const image = getPostImage(post);

  return (
    <article className="post-card" onClick={handleClick}>
      <div className="post-votes">
        <span className="vote-arrow up">&#9650;</span>
        <span className="vote-count">{abbreviateNumber(post.ups)}</span>
        <span className="vote-arrow down">&#9660;</span>
      </div>
      <div className="post-content">
        <div className="post-header">
          <span className="post-subreddit">r/{post.subreddit}</span>
          <span className="post-author">Posted by u/{post.author}</span>
        </div>
        <h3 className="post-title">{post.title}</h3>
        {image && (
          <div className="post-image-wrapper">
            <img className="post-image" src={image} alt="" loading="lazy" />
          </div>
        )}
        <div className="post-footer">
          <span className="post-stat">&#128172; {post.num_comments} comments</span>
          <span className="post-stat">&#8593; {abbreviateNumber(post.score)} score</span>
        </div>
      </div>
    </article>
  );
};

const abbreviateNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
};

export default PostCard;
