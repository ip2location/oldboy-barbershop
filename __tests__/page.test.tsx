import { render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header';

describe('Header', () => {
  it('should pass all the tests', () => {
    render(<Header />);
    expect(screen.getByText('Главная')).toBeInTheDocument();
  });
});
