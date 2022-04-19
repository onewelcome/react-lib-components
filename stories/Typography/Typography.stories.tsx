import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography as TypographyComponent, Props } from '../../src/Typography/Typography';
import TypographyDocumentation from './Typography.mdx';

const meta: Meta = {
  title: 'Stories/UI/Typography',
  component: TypographyComponent,
  parameters: {
    docs: {
      page: TypographyDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <TypographyComponent {...args}>content</TypographyComponent>
);

export const TypographyEl = Template.bind({});

TypographyEl.args = {
  variant: 'h1',
};
