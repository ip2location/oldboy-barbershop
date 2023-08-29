import { render, screen } from '@testing-library/react';

import { ReactIcon } from './ReactIcon';

describe('Test AppButton component', () => {
  test('Should render correctly', () => {
    render(<ReactIcon value={{ className: 'text-base' }} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
