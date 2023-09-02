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
    render(
      <ReduxProvider>
        <HeaderPage barbershopCount={0} />
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
