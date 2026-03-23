import { describe, it, expect } from 'vitest';
import subredditReducer, { setCurrentSubreddit } from './subredditSlice';

describe('subredditSlice', () => {
  it('should return initial state', () => {
    const state = subredditReducer(undefined, { type: 'unknown' });
    expect(state.currentSubreddit).toBe('surfing');
    expect(state.subreddits).toHaveLength(7);
  });

  it('should update current subreddit', () => {
    const state = subredditReducer(undefined, setCurrentSubreddit('sailing'));
    expect(state.currentSubreddit).toBe('sailing');
  });
});
