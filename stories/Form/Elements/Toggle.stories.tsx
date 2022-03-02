import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle } from '../../..//src/Form/Toggle/Toggle';
import { CheckboxProps as Props } from '../../../src/Form/Checkbox/Checkbox';

const meta: Meta = {
  title: 'Form/Elements/Toggle',
  component: Toggle,
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Toggle {...args}>Example toggle</Toggle>;

export const ToggleEl = Template.bind({});

ToggleEl.args = {
  name: 'Example toggle',
};
