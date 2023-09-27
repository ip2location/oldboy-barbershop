import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Cosmetics } from './Cosmetics';

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe('<Cosmetics />', () => {
  it('should display the title correctly', () => {
    render(<Cosmetics />);

    expect(screen.getByText(/Спрашивайте косметику/i)).toBeInTheDocument();
    expect(screen.getByText(/во всех барбершопах/i)).toBeInTheDocument();
    expect(screen.getByText(/сети OldBoy/i)).toBeInTheDocument();
    expect(screen.getByText(/OLDBOY BARBERSHOP x barber wild/i)).toBeInTheDocument();
  });
});
