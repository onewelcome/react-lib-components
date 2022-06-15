import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps as CheckboxProps } from '../../../src/Form/Checkbox/Checkbox';
import CheckboxDocumentation from './Checkbox.mdx';
import { Link } from '../../../src/Link/Link';

const meta: Meta = {
  title: 'Stories/Form/Elements/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: CheckboxDocumentation,
    },
  },
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
  return <Checkbox {...args} />;
};

export const SingleCheckbox = Template.bind({});

SingleCheckbox.args = {
  children: 'Example',
  helperProps: {
    children: (
      <Link style={{ fontSize: 'inherit' }} to="#">
        Go to our privacy policy
      </Link>
    ),
  },
  name: 'Checkbox',
};

export const NestedCheckbox = Template.bind({});

NestedCheckbox.args = {
  indeterminate: false,
  label: 'Electronics',
  name: 'electronics',
  children: [
    <Checkbox name="laptop" key="1">
      Option 1
    </Checkbox>,
    <Checkbox name="tv" key="2">
      Option 2
    </Checkbox>,
    <Checkbox name="microphones" key="3">
      Option 3
    </Checkbox>,
  ],
};
