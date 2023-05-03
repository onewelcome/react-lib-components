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
import { Link as LinkComponent, Props } from "../../src/Link/Link";
import LinkDocumentation from "./Link.mdx";

const meta: Meta = {
  title: "components/Navigation/Link",
  component: LinkComponent,
  parameters: {
    docs: {
      page: LinkDocumentation
    }
  },
  argTypes: {
    buttonVariant: { control: "radio", if: { arg: "display", eq: "button" } }
  },
  args: {
    to: "https://www.google.com",
    type: "external",
    color: "primary",
    display: "link",
    buttonVariant: "fill"
  }
};

export default meta;

const Template: StoryFn<Props> = args => <LinkComponent {...args}>content</LinkComponent>;

export const Link = Template.bind({});
