import React from "react";
import { Meta, Story } from "@storybook/react";
import { Breadcrumbs as BreadcrumbsComponent, Props } from "../../src/Breadcrumbs/Breadcrumbs";
import { Link } from "../../src/Link/Link";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import BreadcrumbsDocumentation from "./Breadcrumbs.mdx";

const meta: Meta = {
  title: "components/Navigation/Breadcrumbs",
  component: BreadcrumbsComponent,
  parameters: {
    docs: {
      page: BreadcrumbsDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => <BreadcrumbsComponent {...args} />;

export const Breadcrumbs = Template.bind({});

Breadcrumbs.args = {
  ariaLabel: "breadcrumbs",
  children: [
    <Link key="1" to="#">
      Home
    </Link>,
    <Link key="2" to="#invoice">
      Invoices
    </Link>,
    <Link key="3" to="#invoice/123-456-789">
      Invoice #01/02/1990
    </Link>,
    <Link key="4" to="#invoice/123-456-789/tax">
      Tax liabilities
    </Link>
  ]
};

const TemplateWithReactRouter: Story<Props> = args => (
  <BrowserRouter>
    <BreadcrumbsComponent {...args} />
  </BrowserRouter>
);

export const BreadcrumbsWithReactRouter = TemplateWithReactRouter.bind({});

BreadcrumbsWithReactRouter.args = {
  ariaLabel: "breadcrumbs",
  children: [
    <Link key="1" to="#" component={RouterLink}>
      Home
    </Link>,
    <Link key="2" to="#invoice" component={RouterLink}>
      Invoices
    </Link>,
    <Link key="3" to="#invoice/123-456-789" component={RouterLink}>
      Invoice #01/02/1990
    </Link>,
    <Link key="4" to="#invoice/123-456-789/tax" component={RouterLink}>
      Tax liabilities
    </Link>
  ]
};
