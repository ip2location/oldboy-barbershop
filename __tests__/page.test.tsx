import { Header } from '../src/components/Header/Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should pass all the tests', () => {
    render(<Header />);
    expect(screen.getByText('Главная')).toBeInTheDocument();
  });
});
