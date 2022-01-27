import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, Props } from '../../src/Typography/Typography';
import { PhotoCamera } from '@material-ui/icons';

const meta: Meta = {
  title: 'Typography',
  component: Typography,
};

export default meta;

const Template: Story<Props> = (args) => (
  <Typography {...args}>content</Typography>
);

export const Typo = Template.bind({});

Typo.args = {
  variant: 'h1',
};
