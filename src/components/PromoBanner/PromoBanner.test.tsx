import { render, screen } from '@testing-library/react';

import { PromoBanner } from './PromoBanner';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('PromoBanner', () => {
  test('pass the promo banner test', () => {
    render(<PromoBanner barbershopCount={0} />);
    expect(screen.getByText('Крупнейшая сеть барбершопов')).toBeInTheDocument();
    expect(
      screen.getByText('намного больше чем просто мужская парихмахерская'),
    ).toBeInTheDocument();
  });
});
