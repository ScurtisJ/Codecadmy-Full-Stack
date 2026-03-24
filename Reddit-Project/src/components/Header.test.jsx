import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithStore } from '../test/renderWithStore';
import Header from './Header';

describe('Header', () => {
  it('should render the app title', () => {
    renderWithStore(<Header />);
    expect(screen.getByText('OceanBoard')).toBeInTheDocument();
  });

  it('should render the search bar', () => {
    renderWithStore(<Header />);
    expect(screen.getByPlaceholderText('Search Reddit...')).toBeInTheDocument();
  });
});
