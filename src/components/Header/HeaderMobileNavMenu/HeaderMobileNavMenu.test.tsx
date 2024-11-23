import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { MENU_ITEMS } from '../../../data/MenuItems.data';

import HeaderMobileNavMenu from './HeaderMobileNavMenu.component';

describe('HeaderMobileNavMenu', () => {
  const mockSetMobileMenuStatus = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('render all menu items', () => {
    render(<HeaderMobileNavMenu setMobileMenuStatus={mockSetMobileMenuStatus} />);

    MENU_ITEMS.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('close menu on close button click', () => {
    render(<HeaderMobileNavMenu setMobileMenuStatus={mockSetMobileMenuStatus} />);

    const closeButton = screen.getByLabelText('Zamknij menu');
    fireEvent.click(closeButton);

    expect(mockSetMobileMenuStatus).toHaveBeenCalledWith(false);
    expect(mockSetMobileMenuStatus).toHaveBeenCalledTimes(1);
  });

  test('close menu on menu item click', () => {
    render(<HeaderMobileNavMenu setMobileMenuStatus={mockSetMobileMenuStatus} />);

    const firstMenuItem = screen.getByText(MENU_ITEMS[0].label);
    fireEvent.click(firstMenuItem);

    expect(mockSetMobileMenuStatus).toHaveBeenCalledWith(false);
  });

});