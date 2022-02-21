import React from 'react';
import { FormSelectorGroup } from './FormSelectorGroup';
import { render } from '@testing-library/react';

describe('FormSelectorGroup should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <FormSelectorGroup
        helperId="helper_id"
        helperText="example helper text"
        errorMessage="example error message"
        errorId="error_id"
        data-testid="formselectorgroup"
      >
        Form content here
      </FormSelectorGroup>
    );
    const component = getByTestId('formselectorgroup');
    expect(component).toBeDefined();
  });

  it('has the correct values and attributes', () => {
    const { getByTestId } = render(
      <FormSelectorGroup
        helperId="helper_id"
        helperText="example helper text"
        errorMessage="example error message"
        errorId="error_id"
        data-testid="formselectorgroup"
      >
        Form content here
      </FormSelectorGroup>
    );
    const component = getByTestId('formselectorgroup');
    const helperText = component.querySelector('.form-helper-text');

    expect(helperText).toHaveAttribute('id', 'helper_id');
    expect(helperText).toHaveTextContent('example helper text');
  });
});

describe('Correct error state', () => {
  const { getByTestId } = render(
    <FormSelectorGroup
      helperId="helper_id"
      helperText="example helper text"
      errorMessage="example error message"
      errorId="error_id"
      error={true}
      data-testid="formselectorgroup2"
    >
      Form content here
    </FormSelectorGroup>
  );
  const component = getByTestId('formselectorgroup2');
  const errorMessage = component.querySelector('.error-message');

  expect(errorMessage).toBeTruthy();
  expect(errorMessage?.querySelector('#error_id')).toBeTruthy();
  expect(errorMessage?.querySelector('#error_id')).toHaveTextContent('example error message');
});
