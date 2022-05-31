import React from 'react';
import { FormGroup, Props } from './FormGroup';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  children: 'Formcontent here',
  helperId: 'helper_id',
  helperText: 'example helper text',
  errorMessage: 'example error message',
  errorId: 'error_id',
};

const createFormGroup = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<FormGroup {...parameters} data-testid="formgroup"></FormGroup>);
  const formgroup = queries.getByTestId('formgroup');

  return {
    ...queries,
    formgroup,
  };
};

describe('FormSelectorGroup should render', () => {
  it('renders without crashing', () => {
    const { formgroup } = createFormGroup();

    expect(formgroup).toBeDefined();
  });

  it('has the correct values and attributes', () => {
    const { getByTestId } = createFormGroup((defaultParams) => ({
      ...defaultParams,
      helperProps: { 'data-testid': 'helper_text' },
    }));

    const helperText = getByTestId('helper_text');

    expect(helperText).toHaveAttribute('id', 'helper_id');
    expect(helperText).toHaveTextContent('example helper text');
  });
});

describe('Correct error state', () => {
  it('has the correct state', () => {
    const { formgroup } = createFormGroup((defaultParams) => ({
      ...defaultParams,
      error: true,
      errorMessage: 'example error message',
      errorId: 'error_id',
    }));
    const errorMessage = formgroup.querySelector('.error-message');

    expect(errorMessage).toBeTruthy();
    expect(errorMessage?.querySelector('#error_id')).toBeTruthy();
    expect(errorMessage?.querySelector('#error_id')).toHaveTextContent('example error message');
  });
});
