import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome Component', () => {
  test('wyświetla powitalne wiadomości z podanym imieniem', () => {
    const testName = 'Jan';
    
    render(<Welcome name={testName} />);
    
    expect(screen.getByText(`Witaj, ${testName}!`)).toBeInTheDocument();
    expect(screen.getByText('Witamy w naszej platformie kursowej')).toBeInTheDocument();
  });

}); 