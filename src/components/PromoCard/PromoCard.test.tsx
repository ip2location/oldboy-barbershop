import { render, screen } from '@testing-library/react';
import React from 'react';
import { PromoCard } from './PromoCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('Promo Card', () => {
  test('pass the promo card test', () => {
    render(<PromoCard />);
    expect(screen.getByText('Oldboy barbershop')).toBeInTheDocument();
  });
});
