import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputWrapper, Props } from '../../../src/Form/Wrapper/InputWrapper/InputWrapper';

const meta: Meta = {
  title: 'Form/Wrapper/InputWrapper',
  component: InputWrapper,
  argTypes: {
    onChange: {
      action: 'onChange event fired',
      control: false,
    },
    onBlur: {
      action: 'onBlur event fired',
    },
    onFocus: {
      action: 'onFocus event fired',
    },
    type: {
      options: [
        'text',
        'email',
        'file',
        'number',
        'password',
        'search',
        'tel',
        'time',
        'url',
        'datetime-local',
      ],
      control: {
        type: 'select',
      },
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

declare global {
  var onInputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default meta;

const Template: Story<Props> = (args) => {
  return <InputWrapper {...args} />;
};

export const InputWrapperEl = Template.bind({});

InputWrapperEl.args = {
  label: 'Example label',
  type: 'text',
  name: 'Example name',
  helperText: 'This is helpertext',
  onChange: () => {},
  errorMessage: 'This is an error message',
  error: false,
  value: '',
};
