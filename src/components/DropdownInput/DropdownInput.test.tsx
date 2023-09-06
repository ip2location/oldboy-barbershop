import React from 'react';
import { render, screen } from '@testing-library/react';
import { DropdownInput } from './DropdownInput';

describe('DropdownInput', () => {
  test('should render correctly with default values', () => {
    render(
      <DropdownInput variant="fullWidth" placeholder="город, улица или метро" searchItem="" />,
    );
    const inputElement = screen.getByPlaceholderText('город, улица или метро');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
  });
});
