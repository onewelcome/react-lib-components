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
import { Meta, Story } from "@storybook/react";
import {
  SelectWrapper as SelectWrapperComponent,
  Props
} from "../../../src/components/Form/Wrapper/SelectWrapper/SelectWrapper";
import { Option } from "../../../src/components/Form/Select/Option";

import SelectWrapperDocumentation from "./SelectWrapper.mdx";

const meta: Meta = {
  title: "components/Inputs/Select (Wrapper)",
  component: SelectWrapperComponent,
  parameters: {
    docs: {
      page: SelectWrapperDocumentation
    }
  },
  argTypes: {
    value: {
      options: ["option1", "option2", "option3", "option4"],
      control: {
        type: "select"
      }
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  const [pickedOption, setPickedOption] = useState<string>("option1");
  return (
    <SelectWrapperComponent
      {...args}
      onChange={e => setPickedOption(e.target.value)}
      value={pickedOption}
    >
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
      <Option value="option4">Option 4</Option>
      <Option value="option5">Option 5</Option>
      <Option value="option6">Option 6</Option>
      <Option value="option7">Option 7</Option>
      <Option value="option8">Option 8</Option>
      <Option value="option9">Option 9</Option>
    </SelectWrapperComponent>
  );
};

export const SelectWrapper = Template.bind({});

SelectWrapper.args = {
  label: "Example select wrapper",
  name: "Example select",
  helperText: "Example helper text",
  error: false,
  errorMessage: "This is an error message",
  required: true
};
