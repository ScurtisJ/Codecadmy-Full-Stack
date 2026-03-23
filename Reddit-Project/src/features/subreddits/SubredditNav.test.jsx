import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStore } from '../../test/renderWithStore';
import SubredditNav from './SubredditNav';

describe('SubredditNav', () => {
  it('should render all subreddit buttons', () => {
    renderWithStore(<SubredditNav />);
    expect(screen.getByText('Spearfishing')).toBeInTheDocument();
    expect(screen.getByText('Surfing')).toBeInTheDocument();
    expect(screen.getByText('Kiteboarding')).toBeInTheDocument();
    expect(screen.getByText('Sailing')).toBeInTheDocument();
    expect(screen.getByText('Swimming')).toBeInTheDocument();
    expect(screen.getByText('Sea Life')).toBeInTheDocument();
    expect(screen.getByText('Deep Water')).toBeInTheDocument();
  });

  it('should highlight the active subreddit', () => {
    renderWithStore(<SubredditNav />);
    const surfingBtn = screen.getByText('Surfing');
    expect(surfingBtn.className).toContain('active');
  });
});
