import React from 'react';
import { Input, Props } from './Input';
import { cleanup, render } from '@testing-library/react';

beforeAll(cleanup);

const createInput = (params: Props) => {
  const queries = render(<Input data-testid="input" {...params} />);
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
  it('is disabled, has a type of text and has a name', () => {
    const { input } = createInput({
      disabled: true,
      type: 'text',
      name: 'input',
    });

    expect(input).toHaveAttribute('disabled');
    expect(input.getAttribute('name')).toBe('input');
    expect(input.getAttribute('type')).toBe('text');
  });
});
