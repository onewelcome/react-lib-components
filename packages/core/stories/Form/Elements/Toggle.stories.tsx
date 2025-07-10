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

import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Toggle as ToggleComponent } from "../../../src/components/Form/Toggle/Toggle";
import { Props } from "../../../src/components/Form/Checkbox/Checkbox";
import ToggleDocumentation from "./Toggle.mdx";
import { within, userEvent, waitFor, expect } from "@storybook/test";
import { conditionalPlay } from "../../../.storybook/conditionalPlay";

const meta: Meta = {
  title: "components/Inputs/Toggle",
  component: ToggleComponent,
  parameters: {
    docs: {
      page: ToggleDocumentation
    }
  },
  argTypes: {
    parentHelperId: {
      table: {
        disable: true
      },
      control: false
    },
    parentErrorId: {
      table: {
        disable: true
      },
      control: false
    },
    errorMessageId: {
      table: {
        disable: true
      },
      control: false
    },
    checked: {
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: "boolean"
    },
    className: {
      control: "text"
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ width: "200px", padding: "1rem" }}>
      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />
    </div>
  );
};

export const UncheckedToggle = Template.bind({});

UncheckedToggle.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("checkbox")).not.toBeChecked());

  const toggle = await canvas.getByRole("checkbox");
  const label = await canvas.getByText("Toggle label");

  expect(toggle).not.toBeChecked();
  await userEvent.click(label);
  await waitFor(() => expect(toggle).toBeChecked());
  await userEvent.click(label);
  await waitFor(() => expect(toggle).not.toBeChecked());
});

UncheckedToggle.args = {
  name: "Example toggle",
  label: "Toggle label",
  helperProps: { children: <a href="https://www.google.com">Test</a> }
};

export const ToggleDisabled = Template.bind({});

ToggleDisabled.args = {
  name: "Example toggle",
  label: "Toggle label",
  disabled: true,
  helperProps: { children: <a href="https://www.google.com">Test</a> }
};

export const CheckedToggle = Template.bind({});

CheckedToggle.args = {
  name: "Example toggle",
  label: "Toggle label",
  helperProps: { children: <a href="https://www.google.com">Test</a> }
};

CheckedToggle.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("checkbox")).not.toBeChecked());

  const toggle = await canvas.getByRole("checkbox");
  const label = await canvas.getByText("Toggle label");

  await userEvent.click(label);
  expect(toggle).toBeChecked();
});

export const ToggleLabelLeft = Template.bind({});

ToggleLabelLeft.args = {
  ...UncheckedToggle.args,
  labelPosition: "left"
};

export const ToggleLabelHidden = Template.bind({});
ToggleLabelHidden.args = {
  ...UncheckedToggle.args,
  hideLabel: true
};

export const ToggleLabelOverflow = Template.bind({});
ToggleLabelOverflow.args = {
  ...UncheckedToggle.args,
  label: "This is a very long label that will overflow the toggle.",
  labelOverflow: "wrap"
};

export const ToggleVersionNeutral = Template.bind({});
ToggleVersionNeutral.args = {
  ...UncheckedToggle.args,
  version: "neutral",
  checked: true
};

export const ToggleSpacingBetween = Template.bind({});
ToggleSpacingBetween.args = {
  ...UncheckedToggle.args,
  spacing: "between"
};
