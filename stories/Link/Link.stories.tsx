import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link as LinkComponent, Props } from '../../src/Link/Link';

const meta: Meta = {
  title: 'Stories/UI/Link',
  component: LinkComponent,
};

export default meta;

const Template: Story<Props> = (args) => <LinkComponent {...args}>content</LinkComponent>;

export const Link = Template.bind({});

Link.args = {
  to: 'https://www.google.com',
  type: 'external',
};
