import React from 'react';
import { render, screen } from '@testing-library/react';

import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
  test('Should render correctly', () => {
    render(<ThemeSwitcher />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
