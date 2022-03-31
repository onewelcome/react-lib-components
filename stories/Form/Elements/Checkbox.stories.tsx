import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps as CheckboxProps } from '../../../src/Form/Checkbox/Checkbox';

const meta: Meta = {
  title: 'Form/Elements/Checkbox',
  component: Checkbox,
  argTypes: {
    parentHelperId: {
      table: {
        disable: true,
      },
      control: false,
    },
    parentErrorId: {
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
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template: Story<CheckboxProps> = (args) => {
  return (
    <Checkbox helperText="Example helpertext" name="name" {...args}>
      Example
    </Checkbox>
  );
};

export const SingleCheckbox = Template.bind({});

SingleCheckbox.args = {};
