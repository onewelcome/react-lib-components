import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextEllipsis as TextEllipsisComponent, Props } from '../../src/TextEllipsis/TextEllipsis';
import TextEllipsisDocumentation from './TextEllipsis.mdx';

const meta: Meta = {
  title: 'Stories/UI/TextEllipsis',
  component: TextEllipsisComponent,
  parameters: {
    docs: {
      page: TextEllipsisDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <TextEllipsisComponent {...args} />;

export const TextEllipsis = Template.bind({});

TextEllipsis.args = {
  children:
    "Hey there! That's quite a long text you've got there pal. Would've been a shame if it overflowed.",
  variant: 'body',
};
