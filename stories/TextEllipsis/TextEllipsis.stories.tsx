import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextEllipsis as TextEllipsisComponent, Props } from '../../src/TextEllipsis/TextEllipsis';
import { Typography } from '../../src/Typography/Typography';

import TextEllipsisDocumentation from './TextEllipsis.mdx';

const meta: Meta = {
  title: 'Stories/UI/TextEllipsis',
  component: TextEllipsisComponent,
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: TextEllipsisDocumentation,
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <Typography variant="body" tag="div">
    <TextEllipsisComponent {...args} />
  </Typography>
);

export const TextEllipsis = Template.bind({});
