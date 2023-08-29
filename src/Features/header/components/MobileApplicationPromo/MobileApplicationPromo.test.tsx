import { render, screen } from '@testing-library/react';

import { MobileApplicationPromo } from './MobileApplicationPromo';

describe('Test MobileApplicationPromo component', () => {
  test('Should render correctly', () => {
    render(<MobileApplicationPromo />);

    expect(screen.getByText(/Установите специальное/i)).toBeInTheDocument();
    expect(screen.getByText(/Мобильное приложение/i)).toBeInTheDocument();
    expect(screen.getByText(/Для удобной онлайн-записи/i)).toBeInTheDocument();
    expect(screen.getByText(/Google Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Google Play/i)).toHaveClass('text-sm');
    expect(screen.getByText(/Google Play/i)).toHaveClass('font-bold');
    expect(screen.getByText(/App Store/i)).toBeInTheDocument();
    expect(screen.getByText(/App Store/i)).toHaveClass('text-xs');
    expect(screen.getByText(/App Store/i)).toHaveClass('font-normal');
    expect(screen.getByText(/App Store/i)).toHaveClass('uppercase');
  });
});
