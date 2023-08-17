import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from './Modal';

describe('Test Modal component', () => {
  const clickCloseButton = jest.fn();

  test('Should render correctly', () => {
    render(<Modal showModal onClose={clickCloseButton} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Handler is called 1 time', async () => {
    render(<Modal showModal onClose={clickCloseButton} />);

    await userEvent.click(screen.getByRole('button'));

    expect(clickCloseButton).toBeCalledTimes(1);
  });
});
