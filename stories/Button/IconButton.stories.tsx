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
import { IconButton as IconButtonComponent, Props } from "../../src/components/Button/IconButton";
import { Icon, Icons } from "../../src";
import IconButtonDocumentation from "./IconButton.mdx";

const meta: Meta = {
  title: "components/Inputs/IconButton",
  component: IconButtonComponent,
  parameters: {
    docs: {
      page: IconButtonDocumentation
    }
  },
  argTypes: {
    color: {
      options: ["default", "primary", "secondary", "tertiary"],
      control: {
        type: "radio"
      }
    },
    variant: {
      options: ["text", "fill", "outline"],
      control: {
        type: "radio"
      }
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => (
  <IconButtonComponent {...args}>
    <Icon icon={Icons.Calendar} />
  </IconButtonComponent>
);

export const IconButton = Template.bind({});

IconButton.args = {
  color: "primary",
  variant: "text",
  iconSize: "m",
  type: "button",
  title: "components/Calendar"
};

IconButton.storyName = "IconButton";
