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
import { Meta, Story, StoryFn } from "@storybook/react";
import { Toggle as ToggleComponent } from "../../../src/components/Form/Toggle/Toggle";
import { Props } from "../../../src/components/Form/Checkbox/Checkbox";
import ToggleDocumentation from "./Toggle.mdx";

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
    <div style={{ width: "200px" }}>
      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />
    </div>
  );
};

export const Toggle = Template.bind({});

Toggle.args = {
  name: "Example toggle",
  label: "Toggle label",
  helperProps: { children: <a href="https://www.google.com">Test</a> }
};

export const ToggleLabelLeft = Template.bind({});

ToggleLabelLeft.args = {
  ...Toggle.args,
  labelPosition: "left"
};

export const ToggleLabelHidden = Template.bind({});
ToggleLabelHidden.args = {
  ...Toggle.args,
  hideLabel: true
};

export const ToggleLabelOverflow = Template.bind({});
ToggleLabelOverflow.args = {
  ...Toggle.args,
  label: "This is a very long label that will overflow the toggle.",
  labelOverflow: "wrap"
};

export const ToggleVersionNeutral = Template.bind({});
ToggleVersionNeutral.args = {
  ...Toggle.args,
  version: "neutral",
  checked: true
};

export const ToggleSpacingBetween = Template.bind({});
ToggleSpacingBetween.args = {
  ...Toggle.args,
  spacing: "between"
};

export const ToggleDisabled = Template.bind({});
ToggleDisabled.args = {
  ...Toggle.args,
  disabled: true
};
