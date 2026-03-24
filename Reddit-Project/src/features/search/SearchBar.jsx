import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, addToHistory } from './searchSlice';
import { loadSearchResults } from '../posts/postsSlice';
import { setCurrentSubreddit } from '../subreddits/subredditSlice';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const searchHistory = useSelector((state) => state.search.searchHistory);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowHistory(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const executeSearch = (term) => {
    setInputValue('');
    setShowHistory(false);
    inputRef.current?.blur();
    dispatch(setCurrentSubreddit(''));
    dispatch(setSearchTerm(term));
    dispatch(addToHistory(term));
    dispatch(loadSearchResults(term));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    executeSearch(inputValue.trim());
  };

  const handleFocus = () => {
    if (searchHistory.length > 0) {
      setShowHistory(true);
    }
  };

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <form className="search-bar" onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Reddit..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleFocus}
          />
          {showHistory && searchHistory.length > 0 && (
            <ul className="search-history">
              {searchHistory.map((term) => (
                <li key={term}>
                  <button type="button" onClick={() => executeSearch(term)}>
                    <svg className="history-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span className="history-term">{term}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className="search-submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
