import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  test('Should render correctly', () => {
    const footerInfoList = [
      { title: 'Политика конфиденциальности', href: '#' },
      { title: 'Условия использования', href: '#' },
    ];

    render(
      <Footer
        branchesTotal={294}
        countriesTotal={11}
        capitalsTotal={7}
        footerMainTitle="Меню"
        footerServicesTitle="Услуги"
        footerInfoTitle="Информация"
        footerMainList={{ title: '', href: '' }}
        footerServicesList={{ title: '', href: '' }}
        footerInfoList={footerInfoList}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/294/i)).toBeInTheDocument();
    expect(screen.getByText(/11/i)).toBeInTheDocument();
    expect(screen.getByText(/7/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Крупнейшая международная сеть мужских парикмахерских/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/OldBoy Barbershop/i)).toBeInTheDocument();
    expect(screen.getByText(/Меню/i)).toBeInTheDocument();
    expect(screen.getByText(/Услуги/i)).toBeInTheDocument();
    expect(screen.getByText(/Информация/i)).toBeInTheDocument();
    expect(screen.getByText(/Политика конфиденциальности/i)).toBeInTheDocument();
    expect(screen.getByText(/Условия использования/i)).toBeInTheDocument();
  });
});
