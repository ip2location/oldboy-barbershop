import React from 'react';
import { render, screen } from '@testing-library/react';

import Image from 'next/image';
import { StageHeader } from './StageHeader';

describe('StageHeader', () => {
  test('Should render correctly', () => {
    render(
      <StageHeader
        headerTitleTop="1. Нанесение"
        headerTitleBottom="масла"
        headerPosition="headerLeft"
        titlePosition="titleLeft"
        imagePosition="imageLeft"
      >
        <Image
          src="/images/royal/royal1.jpg"
          alt="Королевское Бритьё в Oldboy Barbershop: Нанесение масла"
          sizes="(width:100%)"
          width="1240"
          height="666"
          className="w-full object-cover"
          role="img"
        />
      </StageHeader>,
    );

    expect(screen.getByText(/1. Нанесение/i)).toBeInTheDocument();
    expect(screen.getByText(/масла/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
