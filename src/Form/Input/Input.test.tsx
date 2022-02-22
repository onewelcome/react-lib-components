import React from 'react';
import { Input, Props } from './Input';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeAll(cleanup);

const createInput = (params: Props) => {
  const queries = render(
    <Input name={params.name ? params.name : 'input'} data-testid="input" {...params} />
  );
  const input = queries.getByTestId('input');

  return {
    ...queries,
    input,
  };
};

describe('Input should render', () => {
  it('renders without crashing', () => {
    const { input } = createInput({
      disabled: true,
      type: 'text',
      name: 'input',
    });
    expect(input).toBeDefined();
  });
});

describe('Should have the appropriate attributes', () => {
  it('is disabled, has a type of text and has a name and class', () => {
    const { input } = createInput({
      disabled: true,
      type: 'text',
      name: 'input',
      className: 'classname',
    });

    expect(input).toHaveAttribute('disabled');
    expect(input.getAttribute('name')).toBe('input');
    expect(input.getAttribute('type')).toBe('text');
    expect(input).toHaveClass('classname');
  });
});

describe('Should render all different types of inputs', () => {
  it('should render a text input', () => {
    const { input } = createInput({ type: 'text' });

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render a email input', () => {
    const { input } = createInput({ type: 'email' });

    expect(input).toHaveAttribute('type', 'email');
  });

  it('should render a tel input', () => {
    const { input } = createInput({ type: 'tel' });

    expect(input).toHaveAttribute('type', 'tel');
  });

  it('should render a number input', () => {
    const { input } = createInput({ type: 'number' });

    expect(input).toHaveAttribute('type', 'number');
  });

  it('should render a password input', () => {
    const { input } = createInput({ type: 'password' });

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should render a search input', () => {
    const { input } = createInput({ type: 'search' });

    expect(input).toHaveAttribute('type', 'search');
  });

  it('should render a time input', () => {
    const { input } = createInput({ type: 'time' });

    expect(input).toHaveAttribute('type', 'time');
  });

  it('should render a url input', () => {
    const { input } = createInput({ type: 'url' });

    expect(input).toHaveAttribute('type', 'url');
  });

  it('should render a datetime input', () => {
    const { input } = createInput({ type: 'datetime' });

    expect(input).toHaveAttribute('type', 'datetime');
  });
});

describe('It should execute the listeners', () => {
  const onChangeHandler = jest.fn();
  const onKeyUpHandler = jest.fn();
  const onKeyDownHandler = jest.fn();

  const { input } = createInput({
    type: 'text',
    onKeyUp: onKeyUpHandler,
    onKeyDown: onKeyDownHandler,
    onChange: onChangeHandler,
  });

  input.focus();

  expect(input).toHaveFocus();

  userEvent.keyboard('test');

  expect(onKeyUpHandler).toHaveBeenCalled();
  expect(onKeyDownHandler).toHaveBeenCalled();
  expect(onChangeHandler).toHaveBeenCalled();
});
