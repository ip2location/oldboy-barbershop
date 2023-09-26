import React from 'react';
import { render, screen } from '@testing-library/react';

import { RoyalShaving } from './RoyalShaving';

describe('RoyalShaving', () => {
  test('Should render correctly', () => {
    const mainNavList = [{ title: 'Главная', href: '/' }];

    render(<RoyalShaving mainNavList={mainNavList} />);

    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Бритьё, достойное королей/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Что же необходимо для того, чтобы бритьё стало «королевским»?/i),
    ).toBeInTheDocument();
  });
});
