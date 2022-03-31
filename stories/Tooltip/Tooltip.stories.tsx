import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, Props } from '../../src/Tooltip/Tooltip';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
};

document.documentElement.style.display = 'flex';
document.documentElement.style.alignItems = 'center';
document.documentElement.style.justifyContent = 'center';
document.documentElement.style.height = '100%';

export default meta;

const Template: Story<Props> = (args) => <Tooltip {...args} />;

export const TooltipEl = Template.bind({});

TooltipEl.args = {
  children: 'This is an example tooltip message.',
  label: 'Example label',
  placement: { horizontal: 'right', vertical: 'center' },
  offset: { left: 16, right: 0, bottom: 0, top: 0 },
  transformOrigin: { horizontal: 'left', vertical: 'center' },
};
