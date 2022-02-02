import React from 'react';
import { BaseButton, Props } from './BaseButton';
import { render, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const createButton = (params?: Props, children = 'This is a button') => {
  const queries = render(<BaseButton {...params}>{children}</BaseButton>);
  const button = getByRole(queries.container, 'button');

  return {
    ...queries,
    button,
  };
};

describe('BaseButton should render', () => {
  it('renders without crashing', async () => {
    const { findByText } = createButton();
    findByText('This is a button');
  });
});

describe('On click handler', () => {
  it('executes the onclick handler', async () => {
    const onClickHandler = jest.fn();
    const { button } = createButton({ onClick: onClickHandler });

    userEvent.click(button);

    expect(onClickHandler).toBeCalled();
  });
});

describe('Properties of the button', () => {
  it('should be disabled, function should not have been called', () => {
    const onClickHandler = jest.fn();
    const { button } = createButton({
      disabled: true,
      onClick: onClickHandler,
    });

    userEvent.click(button);
    expect(onClickHandler).toHaveBeenCalledTimes(0);
  });

  it('should have the class "TESTING"', () => {
    const { button } = createButton({
      className: 'TESTING',
    });

    expect(button.classList.contains('TESTING')).toBe(true);
  });

  it('should have a "name" property with the value "button"', () => {
    const { button } = createButton({ name: 'button' });

    expect(button.getAttribute('name')).toBe('button');
  });
});
