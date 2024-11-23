import { describe, test, expect } from 'vitest';

import HeaderDesktopNavBar from './HeaderDesktopNavBar.component';
import { render, screen } from '@testing-library/react';

import { MENU_ITEMS } from '../../../data/MenuItems.data';

describe('HeaderDesktopNavBar', () => {
  test('render all menu items', () => {
    render(<HeaderDesktopNavBar />);

    MENU_ITEMS.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });
});
