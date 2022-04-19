import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography as TypographyComponent, Props } from '../../src/Typography/Typography';

const meta: Meta = {
  title: 'Stories/UI/Typography',
  component: TypographyComponent,
  args: {
    variant: 'h1',
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <TypographyComponent {...args}>content</TypographyComponent>
);

export const Typography = Template.bind({});
