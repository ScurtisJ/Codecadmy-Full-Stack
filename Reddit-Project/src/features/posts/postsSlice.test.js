import { describe, it, expect } from 'vitest';
import postsReducer from './postsSlice';
import { loadPosts, loadSearchResults } from './postsSlice';

describe('postsSlice', () => {
  it('should return initial state', () => {
    const state = postsReducer(undefined, { type: 'unknown' });
    expect(state.items).toEqual([]);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should set loading on loadPosts.pending', () => {
    const state = postsReducer(undefined, loadPosts.pending('requestId', 'surfing'));
    expect(state.isLoading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should store posts on loadPosts.fulfilled', () => {
    const mockPosts = [{ id: '1', title: 'Post 1' }, { id: '2', title: 'Post 2' }];
    const state = postsReducer(undefined, loadPosts.fulfilled(mockPosts, 'requestId', 'surfing'));
    expect(state.isLoading).toBe(false);
    expect(state.items).toEqual(mockPosts);
  });

  it('should set error on loadPosts.rejected', () => {
    const error = { message: 'Network error' };
    const state = postsReducer(
      undefined,
      loadPosts.rejected(error, 'requestId', 'surfing')
    );
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe('Network error');
  });

  it('should set loading on loadSearchResults.pending', () => {
    const state = postsReducer(undefined, loadSearchResults.pending('requestId', 'cats'));
    expect(state.isLoading).toBe(true);
  });

  it('should store results on loadSearchResults.fulfilled', () => {
    const mockPosts = [{ id: '3', title: 'Search result' }];
    const state = postsReducer(undefined, loadSearchResults.fulfilled(mockPosts, 'requestId', 'cats'));
    expect(state.items).toEqual(mockPosts);
    expect(state.isLoading).toBe(false);
  });
});
