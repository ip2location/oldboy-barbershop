import { render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header/Header';
import React, { ClassAttributes, ImgHTMLAttributes } from 'react';

describe('Header', () => {
  it('should pass all the tests', () => {
    render(<Header />);
    expect(screen.getByText('Главная')).toBeInTheDocument();
  });
});
