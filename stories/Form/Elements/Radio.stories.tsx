import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, Props } from '../../../src/Form/Radio/Radio';

const meta: Meta = {
  title: 'Stories/Form/Elements/Radio',
  component: Radio,
  argTypes: {
    parentHelperId: {
      table: {
        disable: true,
      },
      control: false,
    },
    errorMessageId: {
      table: {
        disable: true,
      },
      control: false,
    },
    checked: {
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <Radio value="example-radio" {...args}>
    Label
  </Radio>
);

export const RadioEl = Template.bind({});

RadioEl.args = {};
