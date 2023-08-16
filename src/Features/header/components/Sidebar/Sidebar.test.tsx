import { render, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';
import { ReduxProvider } from '../../../../store/provider';

const setIsOpen = jest.fn();

describe('Sidebar from the Button click', () => {
  test('pass the sidebar test', () => {
    render(
      <ReduxProvider>
        <Sidebar setIsOpen={setIsOpen} />
      </ReduxProvider>,
    );

    const searchBox = screen.getByPlaceholderText('Найти города', { exact: false });

    expect(searchBox).toBeInTheDocument();
  });
});
