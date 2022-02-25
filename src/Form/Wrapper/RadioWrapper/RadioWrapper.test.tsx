import React from 'react';
import { RadioWrapper, Props } from './RadioWrapper';
import { Radio } from '../../Radio/Radio';
import { render } from '@testing-library/react';

const createRadioWrapper = (params?: Props, checkedOptionValue = 'option1') => {
  const onChangeHandler = jest.fn();

  const queries = render(
    <RadioWrapper
      label="Label"
      errorMessage="Error message"
      helperText="Helper text"
      error={false}
      onChange={onChangeHandler}
      value={checkedOptionValue}
      name="my-group"
      {...params}
    >
      <Radio helperText="This is helpertext" value="option1">
        Option 1
      </Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioWrapper>
  );
  const radiowrapper = queries.container.querySelector('.wrapper');

  return {
    ...queries,
    radiowrapper,
  };
};

describe('RadioWrapper should render', () => {
  it('renders without crashing', () => {
    const { radiowrapper } = createRadioWrapper();

    expect(radiowrapper).toBeTruthy();
  });

  it('has option 1 properly linked with aria-describedby to its helpertext', () => {
    const { radiowrapper } = createRadioWrapper();

    const option1RadioWrapper = radiowrapper
      ?.querySelector('input[value="option1"]')
      ?.closest('.radio-wrapper');
    const option1 = radiowrapper?.querySelector('input[value="option1"]');
    const option1helper = option1RadioWrapper?.querySelector('.helper-text');

    if (option1helper && option1) {
      expect(option1helper.getAttribute('id')).toBe(`${option1.getAttribute('id')}-description`);
      expect(option1).toHaveAccessibleDescription();
      expect(option1).toHaveAttribute('aria-describedby', option1helper.getAttribute('id'));
    }
  });

  it("has all option's aria-describedby linked with the error message ID", () => {
    const { radiowrapper } = createRadioWrapper({
      error: true,
      children: <Radio value="test">Test</Radio>,
      value: 'option1',
      name: 'my-group',
      errorMessage: 'This is an error message',
      label: 'Label',
      helperText: 'HelperText',
      onChange: () => jest.fn(),
    });

    const errorMessage = radiowrapper?.querySelector('.error-message .message');
    const option1 = radiowrapper?.querySelector('input[value="option1"]');

    expect(errorMessage).toBeTruthy();
    if (errorMessage) {
      expect(option1).toHaveAttribute('aria-describedby', errorMessage.id);
    }
  });
});

describe('RadioWrapper selection', () => {
  it('has option 2 selected, the rest is unselected', () => {
    const { radiowrapper } = createRadioWrapper(undefined, 'option2');

    expect(radiowrapper?.querySelector('input[value="option1"]')).toHaveAttribute(
      'aria-checked',
      'false'
    );
    expect(radiowrapper?.querySelector('input[value="option2"]')).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(radiowrapper?.querySelector('input[value="option3"]')).toHaveAttribute(
      'aria-checked',
      'false'
    );
  });
});
