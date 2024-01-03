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
import {
  MultiSelect as MultiSelectComponent,
  Props
} from "../../../src/components/Form/MultiSelect/MultiSelect";
import { Option } from "../../../src/components/Form/Select/Option";
import SelectDocumentation from "./Select.mdx";

const meta: Meta = {
  title: "components/Inputs/Raw/MultiSelect",
  component: MultiSelectComponent,
  parameters: {
    docs: {
      page: SelectDocumentation
    }
  },
  argTypes: {
    labeledBy: {
      table: { disable: true },
      control: false
    },
    describedBy: {
      table: { disable: true },
      control: false
    },
    className: {
      table: { disable: true },
      control: false
    },
    disabled: {
      control: "boolean"
    },
    success: {
      control: "boolean"
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  const [pickedOptions, setPickedOptions] = useState<string[]>(["option1", "option2"]);

  return (
    <MultiSelectComponent
      {...args}
      value={pickedOptions}
      onChange={e => {
        setPickedOptions(
          [...e.target.options].filter(option => option.selected).map(option => option.value)
        );
      }}
    >
      <Option value="option1">Test</Option>
      <Option value="option2">Test2</Option>
      <Option value="option3">Test3</Option>
      <Option value="option4">Test4</Option>
      <Option value="option5">Test5</Option>
      <Option value="option6">Test6</Option>
      <Option value="option7">Test7</Option>
      <Option value="option8">Test8</Option>
    </MultiSelectComponent>
  );
};

export const MultiSelect = Template.bind({});

MultiSelect.args = {
  name: "Example select"
};
