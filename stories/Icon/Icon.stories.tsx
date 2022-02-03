import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon as IconComponent, Props } from '../../src/Icon/Icon';

const meta: Meta = {
  title: 'Icon',
  component: IconComponent,
};

export default meta;

const Template: Story<Props> = (args) => (
  <IconComponent icon="bell" {...args} />
);

export const Icon = Template.bind({});
