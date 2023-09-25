import React from 'react';
import { render, screen } from '@testing-library/react';

import { StageContent } from './StageContent';

describe('StageContent', () => {
  test('Should render correctly', () => {
    render(
      <StageContent
        contentPosition="contentLeft"
        headlinePosition="headlineLeft"
        stageHeadline="Шестой этап: нанесение средства после бритья"
      >
        <p className="text-lg font-button_font leading-[1.75] text-header-bg">
          После снятия охлаждающего компресса, барбер легкими, массирующими движениями наносит на
          обритые участки специальный бальзам от &ldquo;Truefitt &amp; Hill&rdquo; на основе
          лечебного экстракта алоэ и аллантоина, повышающего регенерацию клеток кожи.
        </p>
      </StageContent>,
    );

    expect(screen.getByText(/Шестой этап: нанесение средства после бритья/i)).toBeInTheDocument();
    expect(screen.getByText(/После снятия охлаждающего компресса,/i)).toBeInTheDocument();
  });
});
