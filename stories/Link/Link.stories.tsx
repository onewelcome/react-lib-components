import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, Props } from '../../src/Link/Link';
import { Link as LinkRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

const meta: Meta = {
  title: 'UI/Link',
  component: Link,
};

export default meta;

const Template: Story<Props> = (args) => (
  <MemoryRouter>
    <Link to="https://onewelcome.com" {...args}>
      This is a Link
    </Link>
  </MemoryRouter>
);

export const AnchorLink = Template.bind({});

export const DisabledAnchorLink = Template.bind({});

DisabledAnchorLink.args = {
  disabled: true,
};

export const ReactRouterLink = Template.bind({});

ReactRouterLink.args = {
  component: <LinkRouter to={'wizardsteps--basic-wizard-steps'}>Wizards are cool</LinkRouter>,
};
