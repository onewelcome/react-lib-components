import React from 'react';
import { Radio, Props } from './Radio';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  value: 'test',
  children: 'Label',
  checked: false,
};

const createRadio = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Radio {...parameters} data-testid="radio" />);
  const radio = queries.getByTestId('radio');

  return {
    ...queries,
    radio,
  };
};

describe('Radio should render', () => {
  it('renders without crashing and has proper attributes/values', () => {
    const { radio } = createRadio();

    expect((radio as HTMLInputElement).value).toBe('test');
    expect((radio as HTMLInputElement).checked).toBe(false);
    expect(radio).toBeTruthy();
  });

  it('it is checked', () => {
    const { radio } = createRadio((defaultParams) => ({ ...defaultParams, checked: true }));

    expect((radio as HTMLInputElement).checked).toBe(true);
  });
});
