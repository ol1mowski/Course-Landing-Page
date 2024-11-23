import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Rozszerzamy expect o matchery z @testing-library/jest-dom
expect.extend(matchers);

// Czyścimy po każdym teście
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Konfiguracja środowiska testowego
const setupTests = () => {
  // Mockowanie window i document jeśli nie istnieją
  if (typeof window === 'undefined') {
    const { window } = new (require('jsdom').JSDOM)('<!doctype html><html><body></body></html>');
    global.window = window;
    global.document = window.document;
    global.navigator = {
      userAgent: 'node.js',
    } as Navigator;
  }
};

setupTests(); 