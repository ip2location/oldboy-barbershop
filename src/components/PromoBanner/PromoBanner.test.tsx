import { render, screen } from '@testing-library/react';
import { PromoBanner } from './PromoBanner';
import React, { ClassAttributes, ImgHTMLAttributes } from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>,
  ) => <div />,
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
