import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props, Tooltip as TooltipComponent } from '../../src/Tooltip/Tooltip';
import TooltipDocumentation from './Tooltip.mdx';

const meta: Meta = {
  title: 'Stories/UI/Tooltip',
  component: TooltipComponent,
  parameters: {
    docs: {
      page: TooltipDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <TooltipComponent {...args} />;

export const Tooltip = Template.bind({});

Tooltip.args = {
  children: 'This is an example tooltip message.',
  label: 'Example label',
  placement: { horizontal: 'right', vertical: 'center' },
  offset: { left: 16, right: 0, bottom: 0, top: 0 },
  transformOrigin: { horizontal: 'left', vertical: 'center' },
};
