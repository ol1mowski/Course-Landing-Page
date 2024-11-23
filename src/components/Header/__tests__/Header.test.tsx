import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header.component';

describe('Header', () => {
  test('otwiera menu mobilne po kliknięciu w przycisk hamburger', () => {
    render(<Header />);
    
    // Sprawdź czy menu początkowo nie jest wyrenderowane
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
    
    // Znajdź i kliknij przycisk hamburger
    const hamburgerButton = screen.getByAltText('Hamburger menu icon');
    fireEvent.click(hamburgerButton);
    
    // Sprawdź czy menu zostało wyrenderowane
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  test('zamyka menu mobilne po drugim kliknięciu w przycisk hamburger', () => {
    render(<Header />);
    
    // Otwórz menu
    const hamburgerButton = screen.getByAltText('Hamburger menu icon');
    fireEvent.click(hamburgerButton);
    
    // Sprawdź czy menu jest otwarte
    expect(screen.getByRole('complementary')).toBeInTheDocument();
    
    // Zamknij menu
    fireEvent.click(hamburgerButton);
    
    // Sprawdź czy menu zostało zamknięte
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
  });

  test('renderuje logo', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('Logo platformy Kariera W IT');
    expect(logo).toBeInTheDocument();
  });

  test('renderuje nawigację desktopową', () => {
    render(<Header />);
    
    const desktopNav = screen.getByRole('navigation');
    expect(desktopNav).toBeInTheDocument();
  });
}); 