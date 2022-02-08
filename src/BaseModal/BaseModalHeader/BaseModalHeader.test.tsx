import React from 'react';
import { BaseModalHeader, Props } from './BaseModalHeader';
import { render, getByRole, getByTestId, getByText } from '@testing-library/react';
import { labelId } from '../BaseModal';
import userEvent from '@testing-library/user-event';

const additionalContent = 'Additional content';
const initParams: Props = {
  id: labelId('modal'),
  title: 'Example title',
  onClose: jest.fn(),
  children: <div data-testid="additional-content">{additionalContent}</div>,
};

describe('BaseModalHeader', () => {
  it('renders without crashing', () => {
    const { container } = render(<BaseModalHeader {...initParams} />);
    const closeBtn = getByRole(container, 'button');
    expect(initParams.onClose).toBeCalledTimes(0);

    userEvent.click(closeBtn);

    const dialogContentContainer = container.children[0];
    const titleContainer = getByText(container, initParams.title);
    expect(dialogContentContainer).toHaveClass('header');
    expect(titleContainer).toHaveAttribute('id', 'modal-label');
    expect(getByTestId(container, 'additional-content')).toHaveTextContent(additionalContent);
    expect(initParams.onClose).toBeCalledTimes(1);
  });
});
