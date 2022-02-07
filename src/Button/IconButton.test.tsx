import React from 'react';
import { IconButton, Props } from './IconButton';
import { render, getByRole } from '@testing-library/react';
import { Icon, Icons } from '../Icon/Icon';

const createButton = (
  params?: Props,
  children = <Icon icon={Icons.Calendar} />
) => {
  const queries = render(<IconButton {...params}>{children}</IconButton>);
  const button = getByRole(queries.container, 'button');

  return {
    ...queries,
    button,
  };
};

describe('IconButton', () => {
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
});
