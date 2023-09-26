import React from 'react';
import { render, screen } from '@testing-library/react';

import { ServiceAboutSection } from './ServiceAboutSection';

describe('ServiceAboutSection', () => {
  test('Should render correctly', () => {
    render(
      <ServiceAboutSection
        aboutSectionSrc="/images/royal/tnh.png"
        aboutSectionAlt="Королевское бритьё в Oldboy Barbershop"
        headline="Бритьё, достойное королей"
        decorationVariant="razor"
      >
        <p className="service__text">
          Королевское бритьё — это настоящий ритуал, состоящий из нескольких этапов:
        </p>
      </ServiceAboutSection>,
    );

    expect(screen.getByText(/Бритьё, достойное королей/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Королевское бритьё — это настоящий ритуал, состоящий из нескольких этапов:/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
