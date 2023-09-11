import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReduxProvider } from '../../store/provider';
import { HeaderPage } from './header';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <div />,
}));

jest.mock('./components/Sidebar', () => ({
  __esModule: true,
  Sidebar: () => <div />,
}));

describe('HeaderMainPage', () => {
  test('pass the header main page buttons', async () => {
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

    render(
      <ReduxProvider>
        <HeaderPage mainNavList={mainNavList} branchesTotal={294} />
      </ReduxProvider>,
    );

    const buttonRecord = screen.getByRole('button', { name: 'Запись онлайн' });
    await userEvent.click(buttonRecord);

    expect(buttonRecord).toBeEnabled();

    const buttonBuy = screen.getByRole('button', { name: 'Купить косметику' });
    await userEvent.click(buttonBuy);

    expect(buttonBuy).toBeEnabled();
  });
});
