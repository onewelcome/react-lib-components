import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, Props } from '../../src/Link/Link';
import { Link as LinkRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { Button } from '../../src/Button/Button';

const meta: Meta = {
  title: 'UI/Link',
  component: Link,
  args: {
    children: <span>Click me!</span>,
    to: 'https://onewelcome.com',
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <MemoryRouter>
    <Link {...args}></Link>
  </MemoryRouter>
);

export const AnchorLink = Template.bind({});

export const DisabledAnchorLink = Template.bind({});

DisabledAnchorLink.args = {
  disabled: true,
  children: 'You shall not click me',
};

export const ReactRouterLink = Template.bind({});

ReactRouterLink.args = {
  component: (
    <LinkRouter to={'?path=/docs/wizardsteps--basic-wizard-steps'}>Wizards are cool</LinkRouter>
  ),
};

export const MailToAnchorLink = Template.bind({});

MailToAnchorLink.args = {
  action: 'mailto',
  to: 'pawel.napieracz@onewelcome.com',
  children: 'Contact support by email',
};

export const TelAnchorLink = Template.bind({});

TelAnchorLink.args = {
  action: 'tel',
  to: '+48123321123',
  children: 'Contact support by phone',
};
