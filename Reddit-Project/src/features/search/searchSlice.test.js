import { describe, it, expect } from 'vitest';
import searchReducer, { setSearchTerm, addToHistory } from './searchSlice';

describe('searchSlice', () => {
  it('should return initial state with empty search term and history', () => {
    const state = searchReducer(undefined, { type: 'unknown' });
    expect(state.searchTerm).toBe('');
    expect(state.searchHistory).toEqual([]);
  });

  it('should update search term', () => {
    const state = searchReducer(undefined, setSearchTerm('spearfishing tips'));
    expect(state.searchTerm).toBe('spearfishing tips');
  });

  it('should clear search term', () => {
    const prevState = { searchTerm: 'surfing', searchHistory: [] };
    const state = searchReducer(prevState, setSearchTerm(''));
    expect(state.searchTerm).toBe('');
  });

  it('should add a term to search history', () => {
    const state = searchReducer(undefined, addToHistory('surfing'));
    expect(state.searchHistory).toEqual(['surfing']);
  });

  it('should move duplicate to front of history', () => {
    const prevState = { searchTerm: '', searchHistory: ['sailing', 'surfing'] };
    const state = searchReducer(prevState, addToHistory('surfing'));
    expect(state.searchHistory).toEqual(['surfing', 'sailing']);
  });

  it('should limit history to 8 entries', () => {
    const prevState = {
      searchTerm: '',
      searchHistory: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    };
    const state = searchReducer(prevState, addToHistory('new'));
    expect(state.searchHistory).toHaveLength(8);
    expect(state.searchHistory[0]).toBe('new');
  });
});
