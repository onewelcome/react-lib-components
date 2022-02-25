import React from 'react';
import { SelectWrapper } from './SelectWrapper';
import { render } from '@testing-library/react';
import { Option } from '../../Select/Option';

describe('SelectWrapper should render', () => {
  it('renders without crashing', () => {
    const onChangeHandler = () => {
      console.log('ON CHANGE!');
    };

    const { container } = render(
      <SelectWrapper
        label="example"
        name="example"
        helperText="helpertext"
        errorMessage="errormessage"
        error={false}
        value="option1"
        onChange={onChangeHandler}
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
        <Option value="option4">Option 4</Option>
      </SelectWrapper>
    );
    const selectwrapper = container.querySelector('.wrapper');

    expect(selectwrapper).toBeTruthy();
  });
});
