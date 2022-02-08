import React from 'react';
import { BaseModalContent, Props } from './BaseModalContent';
import { render } from '@testing-library/react';
import { descriptionId } from '../BaseModal';

const classNames = ['class1', 'class2'];
const initParams: Props = {
  id: descriptionId('modal'),
  className: classNames.join(' '),
  children: 'This is example dialog content.',
};

describe('BaseModalContent', () => {
  it('renders without crashing', () => {
    const { container } = render(<BaseModalContent {...initParams} />);

    const dialogContentContainer = container.children[0];
    expect(dialogContentContainer).toHaveClass('content', classNames[0], classNames[1]);
    expect(dialogContentContainer).toHaveTextContent(initParams.children as string);
    expect(dialogContentContainer).toEqual(document.activeElement);
  });

  it('should renders not focused div', () => {
    const { container } = render(<BaseModalContent {...initParams} disableAutoFocus />);

    const dialogContentContainer = container.children[0];
    expect(dialogContentContainer).not.toEqual(document.activeElement);
  });
});
