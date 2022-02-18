import React from 'react';
import { Button, Props } from './Button';
import { render, getByRole } from '@testing-library/react';
import { Icon, Icons } from '../Icon/Icon';

const createButton = (params?: Props, children = 'This is a button') => {
  const queries = render(<Button {...params}>{children}</Button>);
  const button = getByRole(queries.container, 'button');

  return {
    ...queries,
    button,
  };
};

describe('Button should render', () => {
  it('renders without crashing', () => {
    const { button } = createButton();

    expect(button).toBeDefined();
  });
});

describe('Different variants of the button', () => {
  it('should have a class of "primary"', () => {
    const { button } = createButton({ color: 'primary' });
    expect(button.classList.contains('primary')).toBe(true);
  });

  it('should have a class of "secondary"', () => {
    const { button } = createButton({ color: 'secondary' });
    expect(button.classList.contains('secondary')).toBe(true);
  });

  it('should have a class of "tertiary"', () => {
    const { button } = createButton({ color: 'tertiary' });
    expect(button.classList.contains('tertiary')).toBe(true);
  });

  it('should have a class of "fill"', () => {
    const { button } = createButton({ variant: 'fill' });
    expect(button.classList.contains('fill')).toBe(true);
  });

  it('should have a class of "outline"', () => {
    const { button } = createButton({ variant: 'outline' });
    expect(button.classList.contains('outline')).toBe(true);
  });

  it('should have a class of "text"', () => {
    const { button } = createButton({ variant: 'text' });
    expect(button.classList.contains('text')).toBe(true);
  });
});

describe('Button contains an icon', () => {
  it('Contains an icon at the start', () => {
    const { button } = createButton({
      startIcon: <Icon icon={Icons.Calendar} />,
    });

    expect(button.classList.contains('has-icon')).toBe(true);
    expect(button.firstElementChild?.nodeName).toBe('I');
    expect(button.querySelector('i + span')!.innerHTML).toBe('This is a button');
  });

  it('Contains an icon at the end', () => {
    const { button } = createButton({
      endIcon: <Icon icon={Icons.Calendar} />,
    });

    expect(button.classList.contains('has-icon')).toBe(true);
    expect(button.lastElementChild?.nodeName).toBe('I');
    expect(button.querySelector('span')!.innerHTML).toBe('This is a button');
  });
});
