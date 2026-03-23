// In development, requests to /api get proxied through Vite to Reddit
// This lets us set the User-Agent header (which browsers block)
const BASE_URL = '/api';

// Fetch posts from a subreddit
export const fetchSubredditPosts = async (subreddit) => {
  const response = await fetch(`${BASE_URL}/r/${subreddit}.json`);
  const json = await response.json();
  return json.data.children.map((child) => child.data);
};

// Search Reddit for posts matching a query
export const searchPosts = async (searchTerm) => {
  const response = await fetch(`${BASE_URL}/search.json?q=${searchTerm}`);
  const json = await response.json();
  return json.data.children.map((child) => child.data);
};

// Fetch comments for a specific post
export const fetchPostComments = async (permalink) => {
  const response = await fetch(`${BASE_URL}${permalink}.json`);
  const json = await response.json();
  // Reddit returns an array: [post, comments]
  return json[1].data.children.map((child) => child.data);
};