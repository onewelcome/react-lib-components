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
import { Button, Props } from "../../src/Button/Button";
import { Icon, Icons } from "../../src/Icon/Icon";
import ButtonsDocumentation from "./Button.mdx";

const meta: Meta = {
  title: "components/Inputs/Button",
  component: Button,
  parameters: {
    docs: {
      page: ButtonsDocumentation
    }
  },
  argTypes: {
    startIcon: {
      options: Icons,
      control: {
        type: "select"
      }
    },
    endIcon: {
      options: Icons,
      control: {
        type: "select"
      }
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  return (
    <Button
      {...args}
      title="This is a button"
      startIcon={args?.startIcon && <Icon icon={args?.startIcon as Icons} />}
      endIcon={args?.endIcon && <Icon icon={args?.endIcon as Icons} />}
    >
      This is a button
    </Button>
  );
};

export const FilledButton = Template.bind({});

FilledButton.args = {
  color: "primary",
  variant: "fill",
  type: "button"
};

export const OutlineButton = Template.bind({});

OutlineButton.args = {
  color: "primary",
  variant: "outline",
  type: "button"
};

export const TextButton = Template.bind({});

TextButton.args = {
  color: "primary",
  variant: "text",
  type: "button"
};

export const StartIconButton = Template.bind({});
export const EndIconButton = Template.bind({});

StartIconButton.args = {
  startIcon: Icons.Calendar,
  color: "primary",
  variant: "fill",
  type: "button"
};

EndIconButton.args = {
  endIcon: Icons.Calendar,
  color: "primary",
  variant: "fill",
  type: "button"
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  disabled: true
};
