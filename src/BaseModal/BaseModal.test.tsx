import React from 'react';
import { BaseModal, Props } from './BaseModal';
import {
  render,
  getByRole,
  getByText,
  queryByText,
  queryByRole,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const classNames = ['class11', 'class12'];
const containerClassNames = ['class21', 'class22'];

const initParams: Props = {
  id: 'modal',
  open: true,
  onClose: jest.fn(),
  className: classNames.join(' '),
  containerClassName: containerClassNames.join(' '),
  children: 'This is example dialog content.',
};

describe('BaseModal', () => {
  it('renders without crashing', () => {
    const { container } = render(<BaseModal {...initParams} />);
    const dialog = getByRole(container, 'dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-label');
    expect(dialog).toHaveAttribute('aria-describedby', 'modal-description');
    expect(dialog).toHaveAttribute('data-hidden', 'false');
    expect(dialog).toHaveAttribute('aria-hidden', 'false');
    expect(getByText(dialog, initParams.children as string)).toBeDefined();
    expect(document.body).toHaveStyle('overflow: hidden');
  });

  it('should render close modal without content', () => {
    const { container } = render(<BaseModal {...initParams} open={false} />);
    const dialogByRole = queryByRole(container, 'dialog');
    const dialog = container.children[0] as HTMLElement;
    expect(dialogByRole).toBeNull();
    expect(dialog).toHaveAttribute('aria-hidden', 'true');
    expect(queryByText(dialog, initParams.children as string)).toBeNull();
  });

  it('should handle clicking on backdrop & ESC key', () => {
    const { container } = render(<BaseModal {...initParams} />);
    const modal = getByRole(container, 'dialog');
    const backdrop = modal.querySelector('.backdrop') as HTMLElement;
    expect(initParams.onClose).toHaveBeenCalledTimes(0);

    userEvent.click(backdrop);
    expect(initParams.onClose).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(modal, { key: 'Escape' });
    expect(initParams.onClose).toHaveBeenCalledTimes(2);
  });
});
