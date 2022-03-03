import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioWrapper, Props } from '../../..//src/Form/Wrapper/RadioWrapper/RadioWrapper';
import { Radio } from '../../../src/Form/Radio/Radio';
import { Button } from '../../../src/Button/Button';

const meta: Meta = {
  title: 'Form/Wrapper/RadioWrapper',
  component: RadioWrapper,
  argTypes: {
    value: {
      options: ['option1', 'option2', 'option3'],
      control: {
        type: 'radio',
      },
    },
    required: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  return (
    <div>
      <RadioWrapper {...args}>
        <Radio helperText="Individual helper" value="option1">
          Option 1
        </Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioWrapper>
    </div>
  );
};

export const RadioWrapperEl = Template.bind({});

RadioWrapperEl.args = {
  label: 'Radiowrapper',
  error: false,
  errorMessage: 'Errormessage',
  fieldsetProps: { noPadding: true, noBackground: true },
  helperText: 'Helpertext',
  value: 'option1',
  name: 'my-group',
  onChange: () => {},
};
