import { render, screen } from '@testing-library/react';

import { AppButton } from './AppButton';

describe('Test AppButton component', () => {
  test('Should render Google Play Button correctly', () => {
    render(
      <AppButton variant="appButton" link="">
        Google Play
      </AppButton>,
    );

    expect(screen.getByText(/Google Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Google Play/i)).toHaveClass('text-sm');
    expect(screen.getByText(/Google Play/i)).toHaveClass('font-bold');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Should render App Store Button correctly', () => {
    render(
      <AppButton variant="appButton_thin" link="">
        App Store
      </AppButton>,
    );

    expect(screen.getByText(/App Store/i)).toBeInTheDocument();
    expect(screen.getByText(/App Store/i)).toHaveClass('text-xs');
    expect(screen.getByText(/App Store/i)).toHaveClass('font-normal');
    expect(screen.getByText(/App Store/i)).toHaveClass('uppercase');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
