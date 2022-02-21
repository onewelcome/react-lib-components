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
});
