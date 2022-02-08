import React from 'react';
import { Dialog, Props } from './Dialog';
import {
  render,
  getAllByRole,
  getByRole,
  getByTestId,
  fireEvent,
  getByText,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const initParams: Props = {
  id: 'modal',
  open: true,
  onClose: jest.fn(),
  alignActions: 'left',
  title: 'Example dialog',
  primaryAction: {
    label: 'Save',
    onClick: jest.fn(),
  },
  secondaryAction: {
    label: 'Cancel',
    onClick: jest.fn(),
  },
  children: 'This is example dialog content.',
};

const getButtons = (container: HTMLElement) => getAllByRole(container, 'button');

describe('Dialog', () => {
  it('renders without crashing', () => {
    const { container } = render(<Dialog {...initParams} />);
    const [primaryButton, secondaryButton] = getButtons(container);

    expect(getByText(container, initParams.title)).toBeDefined();
    expect(getByText(container, initParams.children as string)).toBeDefined();
    const actionsDiv = primaryButton.closest('div');
    expect(actionsDiv).toHaveClass('left');
    expect(actionsDiv?.children[0]).toEqual(primaryButton);
    expect(actionsDiv?.children[1]).toEqual(secondaryButton);
    expect(primaryButton).toHaveClass('fill');
    expect(secondaryButton).toHaveClass('text');
  });

  it('renders action aligned to right', () => {
    const { container } = render(<Dialog {...initParams} alignActions="right" />);
    const [secondaryButton, primaryButton] = getButtons(container);

    const actionsDiv = primaryButton.closest('div');
    expect(actionsDiv).not.toHaveClass('left');
    expect(actionsDiv?.children[0]).toEqual(secondaryButton);
    expect(actionsDiv?.children[1]).toEqual(primaryButton);
    expect(primaryButton).toHaveClass('fill');
    expect(secondaryButton).toHaveClass('text');
  });

  it('renders only one button', () => {
    const { container } = render(<Dialog {...initParams} secondaryAction={undefined} />);
    const buttons = getButtons(container);

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveClass('fill');
  });

  it('should handle clicking on buttons, ESC and ENTER keys', () => {
    const { container } = render(<Dialog {...initParams} />);
    const [primaryButton, secondaryButton] = getButtons(container);
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(0);
    expect(initParams.secondaryAction?.onClick).toHaveBeenCalledTimes(0);
    expect(initParams.onClose).toHaveBeenCalledTimes(0);

    const autoSummissionInput = getByTestId(container, 'auto-submission');
    userEvent.type(autoSummissionInput, '{enter}');
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(getByRole(container, 'dialog'), { key: 'Escape' });
    expect(initParams.onClose).toHaveBeenCalledTimes(1);

    userEvent.click(primaryButton);
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(2);
    userEvent.click(secondaryButton);
    expect(initParams.secondaryAction?.onClick).toHaveBeenCalledTimes(1);
  });
});
