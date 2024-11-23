import { describe, test, expect } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header.component';

describe('Header', () => {
  test('open mobile menu on hamburger button click', () => {
    render(<Header />);
    
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
    
    const hamburgerButton = screen.getByAltText('Hamburger menu icon');
    fireEvent.click(hamburgerButton);
    
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  test('close mobile menu on hamburger button click', () => {
    render(<Header />);
    
    const hamburgerButton = screen.getByAltText('Hamburger menu icon');
    fireEvent.click(hamburgerButton);
    
    expect(screen.getByRole('complementary')).toBeInTheDocument();
    
    fireEvent.click(hamburgerButton);
    
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
  });

  test('render logo', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('Logo platformy Kariera W IT');
    expect(logo).toBeInTheDocument();
  });

  test('render desktop navigation', () => {
    render(<Header />);
    
    const desktopNav = screen.getByRole('navigation');
    expect(desktopNav).toBeInTheDocument();
  });
});