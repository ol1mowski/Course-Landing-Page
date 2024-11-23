import { render, screen } from '@testing-library/react';
import HeroFeature from './HeroFeature.component';


describe('HeroFeature', () => {
  test('renders text and icon', () => {
    const testText = 'Test Feature';
    render(<HeroFeature text={testText} />);
    
    expect(screen.getByText(testText)).toBeInTheDocument();
    expect(screen.getByAltText('check icon')).toBeInTheDocument();
  });
}); 