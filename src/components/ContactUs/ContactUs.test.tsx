import { render, screen } from '@testing-library/react';

import { ContactUs } from './ContactUs';

describe('Test ContactUS button component', () => {
  test('Should render correctly', () => {
    render(<ContactUs />);
    expect(screen.getByText(/онлайн запись/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
