import { render, screen } from '@testing-library/react';
import { PromoBanner } from '../src/app/components/promo-banner/promo-banner';

describe('Home', () => {
  describe('promo-banner', () => {
    render(<PromoBanner />);
    const myBanner = screen.getByText('открытых филиала');
    expect(myBanner).toBeInTheDocument();
  });
});
