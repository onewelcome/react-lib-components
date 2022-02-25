import React from 'react';
import { RadioWrapper } from '../Wrapper/RadioWrapper/RadioWrapper';
import { render } from '@testing-library/react';
import { Radio } from './Radio';

describe('RadioWrapper should render', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <RadioWrapper
        label="Radiowrapper"
        error={false}
        errorMessage="Errormessage"
        helperText="Helpertext"
        value={'option1'}
        name="my-group"
        onChange={jest.fn()}
      >
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioWrapper>
    );
    const component = container.querySelector('.wrapper');
    expect(component).toBeTruthy();
  });
});

/** The rest of the tests will be done in RadioWrapper */
