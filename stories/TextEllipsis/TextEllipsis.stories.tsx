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
import { TextEllipsis as TextEllipsisComponent, Props } from "../../src/TextEllipsis/TextEllipsis";
import { Typography } from "../../src/Typography/Typography";

import TextEllipsisDocumentation from "./TextEllipsis.mdx";

const meta: Meta = {
  title: "components/Utils/TextEllipsis",
  component: TextEllipsisComponent,
  decorators: [
    Story => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      page: TextEllipsisDocumentation
    }
  },
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
};

export default meta;

const Template: Story<Props> = args => (
  <Typography variant="body" tag="div">
    <TextEllipsisComponent {...args} />
  </Typography>
);

export const TextEllipsis = Template.bind({});
