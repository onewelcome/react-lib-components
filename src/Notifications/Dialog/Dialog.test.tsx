import React from 'react';
import { Dialog, Props } from './Dialog';
import { render, getAllByRole } from '@testing-library/react';
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
    const { getByText } = render(<Dialog {...initParams} />);
    const [primaryButton, secondaryButton] = getButtons(document.body);

    expect(getByText(initParams.title)).toBeDefined();
    expect(getByText(initParams.children as string)).toBeDefined();
    const actionsDiv = primaryButton.closest('footer');
    expect(actionsDiv).toHaveClass('left');
    expect(actionsDiv?.children[0]).toEqual(primaryButton);
    expect(actionsDiv?.children[1]).toEqual(secondaryButton);
    expect(primaryButton).toHaveClass('fill');
    expect(secondaryButton).toHaveClass('text');
  });

  it('renders action aligned to right', () => {
    render(<Dialog {...initParams} alignActions="right" />);
    const [secondaryButton, primaryButton] = getButtons(document.body);

    const actionsDiv = primaryButton.closest('footer');
    expect(actionsDiv).not.toHaveClass('left');
    expect(actionsDiv?.children[0]).toEqual(secondaryButton);
    expect(actionsDiv?.children[1]).toEqual(primaryButton);
    expect(primaryButton).toHaveClass('fill');
    expect(secondaryButton).toHaveClass('text');
  });

  it('renders only one button', () => {
    render(<Dialog {...initParams} secondaryAction={undefined} />);
    const buttons = getButtons(document.body);

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveClass('fill');
  });

  it('should handle clicking on buttons and ENTER press', () => {
    render(<Dialog {...initParams} />);
    const [primaryButton, secondaryButton] = getButtons(document.body);
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(0);
    expect(initParams.secondaryAction?.onClick).toHaveBeenCalledTimes(0);
    expect(initParams.onClose).toHaveBeenCalledTimes(0);

    const autoSummissionInput = document.body.querySelector('input') as HTMLElement;
    userEvent.type(autoSummissionInput, '{enter}');
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(1);

    userEvent.click(primaryButton);
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(2);
    userEvent.click(secondaryButton);
    expect(initParams.secondaryAction?.onClick).toHaveBeenCalledTimes(1);
  });
});
