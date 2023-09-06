import React from 'react';
import { render, screen } from '@testing-library/react';

import { FooterNavList } from './FooterNavList';

describe('FooterNavList', () => {
  test('Should render correctly', () => {
    const footerMainList = [
      { title: 'Главная', href: '#' },
      { title: 'Услуги', href: '#' },
      { title: 'Косметика', href: '#' },
      { title: 'Франшиза', href: '#' },
      { title: 'Инвестиции', href: '#' },
      { title: 'Блог', href: '#' },
      { title: 'FAQ', href: '#' },
    ];

    render(<FooterNavList navTitle="Меню" navList={footerMainList} />);

    expect(screen.getByText(/Меню/i)).toBeInTheDocument();
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Услуги/i)).toBeInTheDocument();
    expect(screen.getByText(/Франшиза/i)).toBeInTheDocument();
    expect(screen.getByText(/Инвестиции/i)).toBeInTheDocument();
    expect(screen.getByText(/Блог/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
  });
});
