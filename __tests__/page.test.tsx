import { Header } from '../src/components/Header/Header';
import { render, screen } from '@testing-library/react';
import { PromoBanner } from '../src/app/components/promo-banner/promo-banner';

describe('Header', () => {
  it('should pass all the tests', () => {
    render(<Header />);
    expect(screen.getByText('Главная')).toBeInTheDocument();
  });
});
