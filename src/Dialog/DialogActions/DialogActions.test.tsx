import React from 'react';
import { DialogActions, Props } from './DialogActions';
import { render } from '@testing-library/react';

const initParams: Props = {
  align: 'right',
  children: 'Content',
};

describe('DialogActions', () => {
  it('renders without crashing', () => {
    const { container } = render(<DialogActions {...initParams} />);

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass('actions');
    expect(dialogActionsContainer).toHaveTextContent(initParams.children as string);
  });

  it('should align items to left', () => {
    const { container } = render(<DialogActions {...initParams} align="left" />);

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass('actions', 'left');
  });
});
