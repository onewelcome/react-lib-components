import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton as IconButtonComponent, Props } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import IconButtonDocumentation from './IconButton.mdx';

const meta: Meta = {
  title: 'Stories/UI/IconButton',
  component: IconButtonComponent,
  parameters: {
    docs: {
      page: IconButtonDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <IconButtonComponent {...args}>
    <Icon icon={Icons.Calendar} />
  </IconButtonComponent>
);

export const IconButton = Template.bind({});

IconButton.args = {
  color: 'primary',
  iconSize: 'm',
  type: 'button',
  title: 'Calendar',
};
IconButton.storyName = 'IconButton';
