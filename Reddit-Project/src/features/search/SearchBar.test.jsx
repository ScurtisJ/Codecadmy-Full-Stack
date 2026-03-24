import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStore } from '../../test/renderWithStore';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render the search input and button', () => {
    renderWithStore(<SearchBar />);
    expect(screen.getByPlaceholderText('Search Reddit...')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('should update input value on typing', async () => {
    renderWithStore(<SearchBar />);
    const input = screen.getByPlaceholderText('Search Reddit...');
    await userEvent.type(input, 'surfing');
    expect(input.value).toBe('surfing');
  });

  it('should show search history when input is focused and history exists', async () => {
    renderWithStore(<SearchBar />, {
      search: { searchTerm: '', searchHistory: ['surfing', 'sailing'] },
      subreddit: { subreddits: [], currentSubreddit: 'surfing' },
    });
    const input = screen.getByPlaceholderText('Search Reddit...');
    await userEvent.click(input);
    expect(screen.getByText('surfing')).toBeInTheDocument();
    expect(screen.getByText('sailing')).toBeInTheDocument();
  });

  it('should not show search history when there is no history', async () => {
    renderWithStore(<SearchBar />);
    const input = screen.getByPlaceholderText('Search Reddit...');
    await userEvent.click(input);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
