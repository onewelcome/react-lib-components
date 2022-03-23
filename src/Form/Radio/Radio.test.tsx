import React from 'react';
import { Radio, Props } from './Radio';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  value: 'test',
  children: 'Label',
  checked: false,
  error: false,
  errorMessage: 'errormessage',
  disabled: false,
  wrapperProps: { 'data-testid': 'radiowrapper' },
  helperText: 'helpertext',
};

const createRadio = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Radio {...parameters} data-testid="radio" />);
  const radio = queries.getByTestId('radio');
  const radiowrapper = queries.getByTestId('radiowrapper');

  return {
    ...queries,
    radio,
    radiowrapper,
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

  it('it is disabled', () => {
    const { radio, radiowrapper } = createRadio((defaultParams) => ({
      ...defaultParams,
      disabled: true,
    }));

    expect((radio as HTMLInputElement).disabled).toBe(true);
    expect(radiowrapper).toHaveClass('disabled');
  });

  it('has the correct describedby value when theres no error', async () => {
    const { radio, findByText } = createRadio((defaultParams) => ({
      ...defaultParams,
      error: true,
    }));

    const error = await findByText('errormessage');

    expect(radio).toHaveAttribute('aria-describedby', error.id);
  });
});
