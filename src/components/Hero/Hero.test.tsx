import { render, screen } from '@testing-library/react';

import Hero from './Hero';

import { HERO_FEATURES } from '../../data/CourseFeature.data';

describe('Hero', () => {
  test('renders Hero component', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Zostań programistą/i)).toBeInTheDocument();
    
    HERO_FEATURES.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    expect(screen.getByText('Dowiedz się więcej')).toBeInTheDocument();
  });
}); 