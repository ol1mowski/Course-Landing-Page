import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound.component';

describe('NotFound Component', () => {
  const renderNotFound = () => {
    return render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  };

  it('should render 404 heading', () => {
    renderNotFound();
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('should render error message', () => {
    renderNotFound();
    expect(screen.getByText('Ups! Strona nie została znaleziona')).toBeInTheDocument();
  });

  it('should render home link', () => {
    renderNotFound();
    const homeLink = screen.getByText('Wróć do strony głównej');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
}); 