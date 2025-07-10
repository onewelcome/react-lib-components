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

const TooltipExamplesTemplate: StoryFn<Props> = args => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Standard string label */}
      <TooltipComponent
        {...args}
        title="Basic tooltip"
        children="This tooltip uses a simple string label."
        label="String label example"
        location="right"
      />

      {/* Formatted text using React node */}
      <TooltipComponent
        {...args}
        title="Tooltip with formatting"
        children="This tooltip uses a React node to add formatting to the label."
        label={
          <>
            Formatted <strong>text</strong> label
          </>
        }
        location="top"
      />

      {/* Example with icon */}
      <TooltipComponent
        {...args}
        title="Icon integration"
        children="This tooltip integrates an icon within the label."
        label={
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
              <path d="M7 7h2v5H7zm0-3h2v2H7z" />
            </svg>
            Label with icon
          </div>
        }
        location="bottom"
      />
    </div>
  );
};

export const TooltipExamples = TooltipExamplesTemplate.bind({});
TooltipExamples.storyName = "Tooltip Examples";
