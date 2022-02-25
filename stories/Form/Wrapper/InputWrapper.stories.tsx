import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { InputWrapper, Props } from '../../../src/Form/Wrapper/InputWrapper/InputWrapper';

const meta: Meta = {
  title: 'Form/Wrapper/InputWrapper',
  component: InputWrapper,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [error, setError] = useState({
    state: false,
    message: 'This is not our company name anymore.',
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setError((prevState) => {
      return { ...prevState, state: /iwelcome|onegini/i.test(inputValue) };
    });
  }, [inputValue]);

  return (
    <InputWrapper
      label="Example label"
      type="text"
      name="Example name"
      helperText="You get an error when you type iWelcome or Onegini"
      errorMessage={error.message}
      error={error.state}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export const InputWrapperEl = Template.bind({});

InputWrapperEl.args = {};

InputWrapperEl.parameters = {
  controls: { hideNoControlsWarning: true },
};
