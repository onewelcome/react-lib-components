import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps as CheckboxProps } from '../../src/Form/Checkbox/Checkbox';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
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
