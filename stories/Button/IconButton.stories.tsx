import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton, Props } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';

const meta: Meta = {
  title: 'UI/IconButton',
  component: IconButton,
};

export default meta;

const Template: Story<Props> = (args) => (
  <IconButton {...args}>
    <Icon icon={Icons.Calendar} />
  </IconButton>
);

export const Button = Template.bind({});

Button.args = {
  color: 'primary',
  iconSize: 'm',
  type: 'button',
};
