import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, Props } from '../../src/Link/Link';

const meta: Meta = {
  title: 'Stories/UI/Link',
  component: Link,
};

export default meta;

const Template: Story<Props> = (args) => <Link {...args}>content</Link>;

export const LinkEl = Template.bind({});

LinkEl.args = {
  to: 'https://www.google.com',
  type: 'external',
};
