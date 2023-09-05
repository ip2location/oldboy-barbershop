import { render, screen } from '@testing-library/react';

import { LinkButton } from './LinkButton';

describe('LinkButton', () => {
  test('Should render Google Play LinkButton correctly', () => {
    render(
      <LinkButton variant="linkButton" link="">
        Google Play
      </LinkButton>,
    );

    expect(screen.getByText(/Google Play/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
