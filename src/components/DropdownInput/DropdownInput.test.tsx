import React from 'react';
import { render, screen } from '@testing-library/react';

import { DropdownInput } from './DropdownInput';

describe('Test dropdown input component', () => {
  test('Should render correctly', () => {
    render(
      <DropdownInput variant="fullWidth" placeholder="город, улица или метро" searchItem="" />,
    );
    const inputElement = screen.getByPlaceholderText('город, улица или метро');
    expect(inputElement).toHaveValue('');
  });
});
