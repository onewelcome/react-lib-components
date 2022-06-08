import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextEllipsis as TextEllipsisComponent, Props } from '../../src/TextEllipsis/TextEllipsis';
import { Typography } from '../../src/Typography/Typography';

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

const Template: Story<Props> = (args) => (
  <div style={{ width: '200px' }}>
    <Typography variant="body" tag="div">
      <TextEllipsisComponent {...args} />
    </Typography>
  </div>
);

export const TextEllipsis = Template.bind({});

TextEllipsis.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
