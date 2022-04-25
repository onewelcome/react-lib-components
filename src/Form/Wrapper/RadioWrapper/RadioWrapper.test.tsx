import React from 'react';
import { RadioWrapper, Props } from './RadioWrapper';
import { Radio } from '../../Radio/Radio';
import { render } from '@testing-library/react';

const onChangeHandler = jest.fn();
const checkedOptionValue = 'option1';

const defaultParams: Props = {
  label: 'Label',
  errorMessage: 'Error message',
  helperText: 'Helper text',
  error: false,
  onChange: onChangeHandler,
  fieldsetProps: { legend: 'Example title' },
  value: checkedOptionValue,
  name: 'my-group',
  children: [
    <Radio helperText="This is helpertext" value="option1">
      Option 1
    </Radio>,
    <Radio value="option2">Option 2</Radio>,
    <Radio value="option3">Option 3</Radio>,
  ],
};

const createRadioWrapper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<RadioWrapper {...parameters} data-testid="radiowrapper" />);
  const radiowrapper = queries.getByTestId('radiowrapper');

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
      expect(`${option1helper.getAttribute('id')}-radio`).toBe(`${option1.getAttribute('id')}`);
      expect(option1).toHaveAccessibleDescription();
      expect(option1).toHaveAttribute('aria-describedby', option1helper.getAttribute('id'));
    }
  });

  it("has all option's aria-describedby linked with the error message ID", () => {
    const { radiowrapper } = createRadioWrapper((defaultParams) => ({
      ...defaultParams,
      error: true,
      errorMessage: 'This is an error message',
    }));

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
    const { radiowrapper } = createRadioWrapper((defaultParams) => ({
      ...defaultParams,
      value: 'option2',
    }));

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
