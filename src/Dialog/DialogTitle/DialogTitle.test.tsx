import React from 'react';
import { DialogTitle, Props } from './DialogTitle';
import { render, getByText } from '@testing-library/react';

const initParams: Props = {
  id: 'dialog-label',
  title: 'Example title',
};

describe('DialogActions', () => {
  it('renders without crashing', () => {
    const { container } = render(<DialogTitle {...initParams} />);

    const dialogTitleContainer = container.children[0];
    expect(dialogTitleContainer).toHaveClass('header');
    expect(getByText(container, initParams.title));
  });
});
