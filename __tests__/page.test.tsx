import Home from '../src/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('should pass all the tests', () => {
    render(<Home />);
    expect(
      screen.getByText('Instantly deploy your Next.js site to a shareable URL with Vercel.'),
    ).toBeInTheDocument();
  });
});
