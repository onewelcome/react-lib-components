import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectWrapper, Props } from '../../../src/Form/Wrapper/SelectWrapper/SelectWrapper';
import { Option } from '../../../src/Form/Select/Option';

const meta: Meta = {
  title: 'Form/Wrapper/SelectWrapper',
  component: SelectWrapper,
};

export default meta;

const Template: Story<Props> = () => {
  const [error, setError] = useState({ state: false, message: "Option 4 can't be selected" });
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    if (selectValue === 'option4') {
      setError((prevState) => {
        return { ...prevState, state: true };
      });
    } else {
      setError((prevState) => {
        return { ...prevState, state: false };
      });
    }
  }, [selectValue]);

  return (
    <SelectWrapper
      label="Example select wrapper"
      name="Example select"
      helperText="If you select option 4 you will get an error"
      error={error.state}
      errorMessage={error.message}
      value={selectValue}
      onChange={(e) => setSelectValue(e.target.value)}
      onClear={() => setSelectValue('')}
    >
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
      <Option value="option4">Option 4</Option>
    </SelectWrapper>
  );
};

export const SelectWrapperEl = Template.bind({});

SelectWrapperEl.args = {};
