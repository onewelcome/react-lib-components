import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, Props } from '../../src/Typography/Typography';

const meta: Meta = {
  title: 'Stories/UI/Typography',
  component: Typography,
};

export default meta;

const Template: Story<Props> = (args) => <Typography {...args}>content</Typography>;

export const TypographyEl = Template.bind({});

TypographyEl.args = {};
