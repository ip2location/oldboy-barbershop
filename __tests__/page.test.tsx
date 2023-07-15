import { render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header/Header';
import { PromoBanner } from '../src/components/promo-banner/promo-banner';
import React, { ClassAttributes, ImgHTMLAttributes } from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>,
  ) => <div />,
}));

describe('Header', () => {
  it('should pass all the tests', () => {
    render(<Header />);
    expect(screen.getByText('Главная')).toBeInTheDocument();
  });
});

describe('Promo Banner', () => {
  test('pass the promo banner test', () => {
    render(<PromoBanner />);
    expect(screen.getByText('Крупнейшая сеть барбершопов')).toBeInTheDocument();
    expect(screen.getByText('294')).toBeInTheDocument();
    expect(
      screen.getByText('намного больше чем просто мужская парихмахерская'),
    ).toBeInTheDocument();
  });
});
