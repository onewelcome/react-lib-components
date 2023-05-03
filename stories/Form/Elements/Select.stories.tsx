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
import { Select as SelectComponent, Props } from "../../../src/components/Form/Select/Select";
import { Option } from "../../../src/components/Form/Select/Option";
import SelectDocumentation from "./Select.mdx";

const meta: Meta = {
  title: "components/Inputs/Raw/Select",
  component: SelectComponent,
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
    value: {
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
        "option5",
        "option6",
        "option7",
        "option8",
        "option9",
        "option10",
        "option11",
        "option12",
        "option13",
        "option14",
        "option15",
        "option16",
        "option17"
      ],
      control: "select"
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

const Template: Story<Props> = args => {
  return (
    <SelectComponent {...args}>
      <Option value="option1">Test</Option>
      <Option value="option2">Test2</Option>
      <Option value="option3">Test3</Option>
      <Option value="option4">Test4</Option>
      <Option value="option5">Test5</Option>
      <Option value="option6">Test6</Option>
      <Option value="option7">Test7</Option>
      <Option value="option8">Test8</Option>
      <Option value="option9">Test9</Option>
      <Option value="option10">Test10</Option>
      <Option value="option11">Test11</Option>
      <Option value="option12">Test12</Option>
      <Option value="option13">Test13</Option>
      <Option value="option14">Test14</Option>
      <Option value="option15">Test15</Option>
      <Option value="option16">Test16</Option>
      <Option value="option17">Test17</Option>
    </SelectComponent>
  );
};

export const Select = Template.bind({});

Select.args = {
  name: "Example select"
};
