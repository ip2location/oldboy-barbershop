import React from 'react';
import { render, screen } from '@testing-library/react';

import { ServicePromo } from './ServicePromo';

describe('ServicesPromo', () => {
  test('Should render correctly', () => {
    render(<ServicePromo titleTop="Королевское" titleBottom="бритьё" iconVariant="shavette" />);

    expect(screen.getByText(/Королевское/i)).toBeInTheDocument();
    expect(screen.getByText(/бритьё/i)).toBeInTheDocument();
    expect(screen.getByText(/Oldboy barbershop/i)).toBeInTheDocument();
    expect(screen.getByText(/только качество/i)).toBeInTheDocument();
  });
});
