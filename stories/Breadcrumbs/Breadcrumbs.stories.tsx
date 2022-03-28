import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Breadcrumbs as Component, Props } from '../../src/Breadcrumbs/Breadcrumbs';
import { Link } from '../../src/Breadcrumbs/Link';

const meta: Meta = {
  title: 'UI/Breadcrumbs',
  component: Component,
  args: {
    'aria-label': 'breadcrumbs',
    children: [
      <Link key="1" href="#">
        Home
      </Link>,
      <Link key="2" href="#invoice">
        Invoices
      </Link>,
      <Link key="3" href="#invoice/123-456-789">
        Invoice #01/02/1990
      </Link>,
      <Link key="4" href="#invoice/123-456-789/tax">
        Tax liabilities
      </Link>,
    ],
  },
};

export default meta;

const Template: Story<Props> = (args) => <Component {...args} />;

export const Breadcrumbs = Template.bind({});
