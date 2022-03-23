import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, Props } from '../../src/Tooltip/Tooltip';
import { Button } from '../../src/Button/Button';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;

const Template: Story<Props> = (args) => <Tooltip {...args} />;

export const TooltipEl = Template.bind({});

TooltipEl.args = {
  children: 'This is a test message',
  label: <Button variant="text">Example</Button>,
};
