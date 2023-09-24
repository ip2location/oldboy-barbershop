import { render, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';
import { ReduxProvider } from '../../../../store/provider';

const setIsOpen = jest.fn();

jest.mock('../Cities', () => ({
  __esModule: true,
  Cities: () => <div />,
}));

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
