import { describe, it, expect } from 'vitest';
import postDetailReducer, { setSelectedPost, clearSelectedPost } from './postDetailSlice';

const mockPost = {
  id: '123',
  title: 'Great surf today',
  author: 'surfer1',
  subreddit: 'surfing',
  ups: 42,
  permalink: '/r/surfing/comments/123/great_surf_today/',
};

describe('postDetailSlice', () => {
  it('should return initial state', () => {
    const state = postDetailReducer(undefined, { type: 'unknown' });
    expect(state.selectedPost).toBeNull();
    expect(state.comments).toEqual([]);
    expect(state.isLoading).toBe(false);
  });

  it('should set selected post', () => {
    const state = postDetailReducer(undefined, setSelectedPost(mockPost));
    expect(state.selectedPost).toEqual(mockPost);
  });

  it('should clear selected post and comments', () => {
    const prevState = {
      selectedPost: mockPost,
      comments: [{ id: 'c1', body: 'nice!' }],
      isLoading: false,
      error: null,
    };
    const state = postDetailReducer(prevState, clearSelectedPost());
    expect(state.selectedPost).toBeNull();
    expect(state.comments).toEqual([]);
  });
});
