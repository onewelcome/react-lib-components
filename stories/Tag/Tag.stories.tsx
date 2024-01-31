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
import { Tag, Props } from "../../src/components/Tag/Tag";
import TagDocumentation from "./Tag.mdx";
import { Icons } from "../../src/components/Icon/Icon";

const meta: Meta = {
  title: "components/Feedback/Tag",
  component: Tag,
  parameters: {
    docs: {
      page: TagDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => <Tag {...args}></Tag>;

export const EnabledTag = Template.bind({});

EnabledTag.args = {
  variant: "enabled",
  children: "Enabled"
};

export const DisabledTag = Template.bind({});

DisabledTag.args = {
  variant: "disabled",
  children: "Disabled"
};

export const CustomTag = Template.bind({});

CustomTag.args = {
  backgroundColor: "blue",
  color: "white",
  icon: Icons.Calendar,
  children: "custom"
};
