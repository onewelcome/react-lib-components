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
import { Checkbox, Props as CheckboxProps } from "../../../src/Form/Checkbox/Checkbox";
import CheckboxDocumentation from "./Checkbox.mdx";
import { Link } from "../../../src/Link/Link";

const meta: Meta = {
  title: "components/Inputs/Raw/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      page: CheckboxDocumentation
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
    }
  }
};

export default meta;

const Template: Story<CheckboxProps> = args => {
  return <Checkbox {...args} />;
};

export const SingleCheckbox = Template.bind({});

SingleCheckbox.args = {
  children: "Example",
  helperProps: {
    children: (
      <Link style={{ fontSize: "inherit" }} to="#">
        Go to our privacy policy
      </Link>
    )
  },
  name: "Checkbox"
};

export const NestedCheckbox = Template.bind({});

NestedCheckbox.args = {
  indeterminate: false,
  label: "Electronics",
  name: "electronics",
  children: [
    <Checkbox name="laptop" key="1">
      Option 1
    </Checkbox>,
    <Checkbox name="tv" key="2">
      Option 2
    </Checkbox>,
    <Checkbox name="microphones" key="3">
      Option 3
    </Checkbox>
  ]
};
