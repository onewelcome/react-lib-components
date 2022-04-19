import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon as IconComponent, Props, Icons } from '../../src/Icon/Icon';
import IconDocumentation from './Icon.mdx';

const meta: Meta = {
  title: 'Stories/UI/Icon',
  component: IconComponent,
  argTypes: {
    color: {
      control: 'color',
      description: 'Needs to be a valid `Hex`, `rgb()` or `hsl()` color.',
    },
  },
  parameters: {
    docs: {
      page: IconDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <IconComponent {...args} />;

export const Icon = Template.bind({});

Icon.args = {
  icon: Icons.Calendar,
  size: '6rem',
};
