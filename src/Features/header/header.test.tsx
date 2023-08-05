import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HeaderPage } from './header';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('HeaderMainPage', () => {
  test('pass the header main page buttons', async () => {
    render(<HeaderPage />);

    const btnRecord = screen.getByRole('button', { name: 'Запись онлайн' });
    await userEvent.click(btnRecord);

    expect(btnRecord).toBeEnabled();

    const btnBuy = screen.getByText('Купить косметику');
    expect(btnBuy).toBeInTheDocument();
  });
});
