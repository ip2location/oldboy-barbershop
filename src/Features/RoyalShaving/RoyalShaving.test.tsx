import React from 'react';
import { render, screen } from '@testing-library/react';

import { RoyalShaving } from './RoyalShaving';

describe('RoyalShaving', () => {
  test('Should render correctly', () => {
    const mainNavList = [
      { title: 'Главная', href: '/' },
      { title: 'Услуги', href: '/services' },
      { title: 'Косметика', href: '/cosmetics' },
      { title: 'Блог', href: '/blog' },
      { title: 'Франшиза', href: '/franchising' },
      { title: 'Инвестиции', href: '/investment' },
      { title: 'Вакансии', href: '/vacancies' },
      { title: 'Барберы', href: '/barbers' },
      { title: 'Контакты', href: '/contacts' },
      { title: 'Филиалы', href: '#' },
    ];

    render(<RoyalShaving mainNavList={mainNavList} />);

    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Бритьё, достойное королей/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Что же необходимо для того, чтобы бритьё стало «королевским»?/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
