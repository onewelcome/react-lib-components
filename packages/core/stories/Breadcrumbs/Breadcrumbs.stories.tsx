/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Breadcrumbs as BreadcrumbsComponent,
  Props
} from "../../src/components/Breadcrumbs/Breadcrumbs";
import { Link } from "../../src";
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

const Template: StoryFn<Props> = args => <BreadcrumbsComponent {...args} />;

export const Breadcrumbs = Template.bind({});

Breadcrumbs.args = {
  ariaLabel: "breadcrumbs",
  children: [
    <Link to="#" key="1">
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

const TemplateWithReactRouter: StoryFn<Props> = args => (
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
