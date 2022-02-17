import React from 'react';
import { BaseModalActions } from './BaseModalActions';
import { render } from '@testing-library/react';

describe('BaseModalActions', () => {
  it('renders without crashing', () => {
    const children = 'Content';
    const classNames = ['class1', 'class2'];
    const { container } = render(
      <BaseModalActions className={classNames.join(' ')}>{children}</BaseModalActions>
    );

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass('actions', classNames[0], classNames[1]);
    expect(dialogActionsContainer).toHaveTextContent(children);
  });
});
