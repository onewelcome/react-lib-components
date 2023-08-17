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
import { Props, Tooltip as TooltipComponent } from "../../src/components/Tooltip/Tooltip";
import TooltipDocumentation from "./Tooltip.mdx";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { useStoryCentring } from "../utils/useStoryCentring";

const meta: Meta = {
  title: "components/Data Display/Tooltip",
  component: TooltipComponent,
  parameters: {
    docs: {
      page: TooltipDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  useStoryCentring();

  return <TooltipComponent {...args} />;
};

export const Tooltip = Template.bind({});

Tooltip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.queryByText("Example label")).not.toBeNull());

  const infoIcon = (await canvas.findByText("Example label"))
    .closest("div")
    ?.querySelector("[data-icon]");

  expect(infoIcon).not.toBeNull();

  await userEvent.hover(infoIcon!);
};

Tooltip.args = {
  title: "Tooltip title.",
  children: "Write the tooltip content here.",
  label: "Example label",
  location: "right",
  position: "center"
};
