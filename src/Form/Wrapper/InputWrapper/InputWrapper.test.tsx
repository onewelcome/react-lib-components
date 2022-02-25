import React from 'react';
import { InputWrapper } from './InputWrapper';
import { render } from '@testing-library/react';

describe('InputWrapper should render', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <InputWrapper
        name="example"
        type="text"
        label="Example Inputwrapper"
        helperText="Example helpertext"
        value="Test"
        error={false}
        errorMessage="This is an error"
      />
    );
    const inputwrapper = container.querySelector('.wrapper');

    expect(inputwrapper).toBeTruthy();
  });
});
