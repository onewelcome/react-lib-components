import React from 'react';
import { render, getByText } from '@testing-library/react';
import { SnackbarContainer, Props } from './SnackbarContainer';

const initParams: Props = {
  position: { vertical: 'top', horizontal: 'center' },
  children: <span>children</span>,
};

const getSnackbarContainer = (container: HTMLElement) => container.children[0];

describe('SnackbarContainer', () => {
  it('renders without crashing', () => {
    const { container } = render(<SnackbarContainer {...initParams} />);
    const snackbarContainer = getSnackbarContainer(container);

    expect(snackbarContainer).toHaveClass('top');
    expect(snackbarContainer).toHaveClass('center');
    expect(snackbarContainer).toHaveStyle({ zIndex: '' });
    expect(getByText(container, 'children')).toBeDefined();
  });

  it('renders with zIndex', () => {
    const { container } = render(<SnackbarContainer {...initParams} zIndex={1} />);
    const snackbarContainer = getSnackbarContainer(container);

    expect(snackbarContainer).toHaveStyle({ zIndex: '1' });
  });
});
