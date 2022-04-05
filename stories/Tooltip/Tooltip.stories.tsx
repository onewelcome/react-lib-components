import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, Props } from '../../src/Tooltip/Tooltip';

const meta: Meta = {
  title: 'Stories/UI/Tooltip',
  component: Tooltip,
};

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
