import { render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header';

describe('Header', () => {
  it('should pass all the tests', () => {
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

    render(<Header mainNavList={mainNavList} />);

    expect(screen.getByText('Главная')).toBeInTheDocument();
  });
});
