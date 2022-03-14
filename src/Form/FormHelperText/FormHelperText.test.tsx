import React from 'react';
import { FormHelperText, Props } from './FormHelperText';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  error: false,
  children: 'This is a field description',
};

const createFormHelperText = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<FormHelperText {...parameters} data-testid="formhelpertext" />);
  const formhelpertext = queries.getByTestId('formhelpertext');

  return {
    ...queries,
    formhelpertext,
  };
};

describe('FormHelperText should render', () => {
  it('renders without crashing', () => {
    const { formhelpertext } = createFormHelperText();

    expect(formhelpertext).toBeTruthy();
  });
});

describe('Attributes', () => {
  it('contains the error class', () => {
    const { formhelpertext } = createFormHelperText((defaultParams) => ({
      ...defaultParams,
      error: true,
    }));

    expect(formhelpertext).toHaveClass('error');
    expect(formhelpertext).toHaveStyle({ color: 'rgb(226, 42, 29);' });
  });
});
