import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton, Props } from '../../src/Button/IconButton';
import { PhotoCamera } from '@material-ui/icons';

const meta: Meta = {
  title: 'IconButton',
  component: IconButton,
};

export default meta;

const Template: Story<Props> = (args) => (
  <IconButton {...args}>
    <PhotoCamera />
  </IconButton>
);

export const Button = Template.bind({});

Button.args = {
  color: 'primary',
  iconSize: 'm',
  type: 'button',
};
