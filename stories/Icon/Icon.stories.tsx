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
import { Meta, Story } from "@storybook/react";
import { Icon as IconComponent, Props, Icons } from "../../src/Icon/Icon";
import IconDocumentation from "./Icon.mdx";

const meta: Meta = {
  title: "components/Data Display/Icon",
  component: IconComponent,
  argTypes: {
    color: {
      control: "color",
      description: "Needs to be a valid `Hex`, `rgb()` or `hsl()` color."
    }
  },
  parameters: {
    docs: {
      page: IconDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => <IconComponent {...args} />;

export const Icon = Template.bind({});

Icon.args = {
  icon: Icons.Calendar,
  size: "6rem"
};
