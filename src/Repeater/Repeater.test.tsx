import React from 'react';
import { Repeater, Props } from './Repeater';
import { render } from '@testing-library/react';
import { InputWrapper } from '../Form/Wrapper/InputWrapper/InputWrapper';

const defaultParams: Props = {
  children: (
    <InputWrapper
      helperText="Add a tag"
      name="tag"
      errorMessage={'Error message'}
      type="text"
      error={false}
      value={''}
      label="Tag"
      onChange={() => jest.fn()}
    />
  ),
  addButtonLabel: 'Add tag',
  onChange: jest.fn(),
};

const createRepeater = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Repeater {...parameters} data-testid="repeater" />);
  const repeater = queries.getByTestId('repeater');

  return {
    ...queries,
    repeater,
  };
};

describe('Repeater should render', () => {
  it('renders without crashing', () => {
    const { repeater } = createRepeater();

    expect(repeater).toBeDefined();
  });
});
