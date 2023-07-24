import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HeaderPage } from './header';
import { Sidebar } from './sidebar';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <div />,
}));

const isOpen = false;
const setIsOpen = jest.fn();

describe('HeaderMainPage', () => {
  test('pass the header main page buttons', () => {
    render(<HeaderPage />);

    const btnRecord = screen.getByRole('button', {
      name: 'запись онлайн',
    });
    userEvent.click(btnRecord);
    expect(btnRecord).toBeEnabled();

    const btnBuy = screen.getByRole('button', {
      name: 'купить косметику',
    });
    expect(btnBuy).toBeEnabled();
  });

  test('pass the sidebar test', () => {
    render(<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />);

    // Search bar
    const searchBox = screen.getByPlaceholderText('Найти города', { exact: false });
    expect(searchBox).toBeInTheDocument();
  });
});
