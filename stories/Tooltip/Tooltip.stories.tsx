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
import { Props, Tooltip as TooltipComponent } from "../../src/components/Tooltip/Tooltip";
import TooltipDocumentation from "./Tooltip.mdx";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { useStoryCentring } from "../utils/useStoryCentring";
import { conditionalPlay } from "../../.storybook/conditionalPlay";

const meta: Meta = {
  title: "components/Data Display/Tooltip",
  component: TooltipComponent,
  parameters: {
    docs: {
      page: TooltipDocumentation
    },
    chromatic: {
      delay: 300,
      diffThreshold: 0.7 //To not look at font change, checked with https://6262c53f521620003ac2ff49-ukmsdlppcb.chromatic.com/?path=/story/stories-diff-threshold-check--test-yours-out
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  useStoryCentring();

  return <TooltipComponent {...args} />;
};

export const Tooltip = Template.bind({});

Tooltip.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.queryByText("Example label")).not.toBeNull());

  const infoIcon = (await canvas.findByText("Example label"))
    .closest("div")
    ?.querySelector("[data-icon]");

  await expect(infoIcon).not.toBeNull();

  await userEvent.hover(infoIcon!);
});

Tooltip.args = {
  title: "Tooltip title.",
  children: "Write the tooltip content here.",
  label: "Example label",
  location: "right",
  position: "center"
};
