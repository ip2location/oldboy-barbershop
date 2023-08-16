import { render, screen } from '@testing-library/react';

import { FullLogoImage } from './FullLogoImage';

describe('Test FullLogoImage component', () => {
  test('Should render correctly', () => {
    render(<FullLogoImage isWhite={false} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
