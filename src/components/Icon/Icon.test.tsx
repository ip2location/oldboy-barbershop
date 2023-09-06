import { render, screen } from '@testing-library/react';

import { Icon } from './Icon';

describe('Icon', () => {
  test('Should render correctly', () => {
    render(<Icon value={{ className: 'text-base' }} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
