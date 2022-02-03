import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, Props } from '../../src/Icon/Icon';

const meta: Meta = {
  title: 'Icon',
  component: Icon,
};

export default meta;

const Template: Story<Props> = (args) => <Icon icon="bell" {...args} />;

export const IconEl = Template.bind({});
