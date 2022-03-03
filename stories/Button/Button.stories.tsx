import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../../src/Button/Button';
import { Icon, Icons } from '../../src/Icon/Icon';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'I am a button',
    },
    color: {
      defaultValue: 'primary',
    },
    variant: {
      defaultValue: 'fill',
    },
    type: {
      defaultValue: 'button',
    },
    startIcon: {
      defaultValue: false,
    },
    endIcon: {
      defaultValue: false,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button title="This is a button" {...args} />;

export const FilledButton = Template.bind({});

export const OutlineButton = Template.bind({});

OutlineButton.args = {
  color: 'primary',
  variant: 'outline',
};

export const TextButton = Template.bind({});

TextButton.args = {
  color: 'primary',
  variant: 'text',
};

export const StartIconButton = Template.bind({});
export const EndIconButton = Template.bind({});

StartIconButton.args = {
  startIcon: <Icon icon={Icons.Calendar} />,
};

EndIconButton.args = {
  endIcon: <Icon icon={Icons.Calendar} />,
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  disabled: true,
};
