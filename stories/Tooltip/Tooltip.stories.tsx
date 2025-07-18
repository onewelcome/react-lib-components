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
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useStoryCentring } from "../utils/useStoryCentring";
import { conditionalPlay } from "../../.storybook/conditionalPlay";
import { Button } from "../../src/components/Button/Button";

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

export const SimpleTooltip = Template.bind({});

SimpleTooltip.args = {
  title: "Hello there !",
  children: "I am the tooltip component.",
  label: "Example label text",
  location: "right",
  position: "center"
};

SimpleTooltip.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.queryByText("Example label text")).not.toBeNull());

  const infoIcon = (await canvas.findByText("Example label text"))
    .closest("div")
    ?.querySelector("[data-icon]");

  await expect(infoIcon).not.toBeNull();
  await userEvent.hover(infoIcon!);
});

export const WithFormattedContent = Template.bind({});

WithFormattedContent.args = {
  title: "Formatted Content",
  children: (
    <div>
      This tooltip uses <strong>custom </strong>
      <em>HTML </em>
      <u>formatted </u> text.
    </div>
  ),
  label: (
    <span className="formatted-label" data-testid="formatted-tooltip-label">
      <em>Hover</em> for <strong>formatted</strong> text
    </span>
  ),
  location: "bottom",
  position: "center"
};

WithFormattedContent.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const labelElement = await canvas.findByTestId("formatted-tooltip-label");

  await userEvent.hover(labelElement);
});

export const WithReactComponentLabel = Template.bind({});

WithReactComponentLabel.args = {
  title: "Component as Label",
  children: "This tooltip uses a real React component as its label !",
  label: <Button>React button component</Button>,
  location: "right",
  position: "center"
};

WithReactComponentLabel.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.queryByText("React button component")).not.toBeNull());

  const buttonComponent = await canvas.findByText("React button component");
  await userEvent.hover(buttonComponent);
});
