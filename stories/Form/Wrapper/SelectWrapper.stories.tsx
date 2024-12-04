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
  Props,
  SelectWrapper as SelectWrapperComponent
} from "../../../src/components/Form/Wrapper/SelectWrapper/SelectWrapper";
import { Option } from "../../../src";
import SelectWrapperDocumentation from "./SelectWrapper.mdx";
import { userEvent, waitFor, within, expect } from "@storybook/test";
import { conditionalPlay } from "../../../.storybook/conditionalPlay";

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
      control: {
        type: "select"
      }
    },
    disabled: {
      control: "boolean"
    }
  }
};

const defaultArgs: Omit<Props, "children"> = {
  label: "Example select wrapper",
  name: "Example select",
  helperText: "Example helper text",
  error: false,
  errorMessage: "This is an error message",
  success: false,
  value: "option1"
};

export default meta;

const Template: StoryFn<Props> = args => {
  const [pickedOption, setPickedOption] = useState<string>("option1");

  return (
    <SelectWrapperComponent
      {...args}
      onChange={e => setPickedOption(e.target.value)}
      value={pickedOption}
      selectProps={{
        addNew: {
          label: "Create new",
          onAddNew: value => {
            window.alert(`This callback is yours to control. Value passed: ${value}`);
          },
          btnProps: { title: "Add new select option" }
        }
      }}
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
      <Option value="option10">Option 10</Option>
      <Option value="option11">Option 11</Option>
      <Option value="option12">Option 12</Option>
    </SelectWrapperComponent>
  );
};

export const SelectWrapper = Template.bind({});

SelectWrapper.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());

  const select = await canvas.getByRole("button", { expanded: false });

  await userEvent.click(select);

  const option2 = await canvas.getByRole("option", { name: "Option 2" });

  await userEvent.click(option2);

  await waitFor(() => expect(select).toHaveTextContent("Option 2"));

  await userEvent.click(select);

  const option3 = await canvas.getByRole("option", { name: "Option 3" });

  await userEvent.click(option3);

  await waitFor(() => expect(select).toHaveTextContent("Option 3"));

  await userEvent.click(select);

  const option4 = await canvas.getByRole("option", { name: "Option 4" });

  await userEvent.click(option4);

  await waitFor(() => expect(select).toHaveTextContent("Option 4"));

  await userEvent.click(select);
});

SelectWrapper.args = {
  ...defaultArgs
};

export const SelectWrapperError = Template.bind({});

SelectWrapperError.args = {
  ...defaultArgs,
  error: true
};

export const SelectWrapperSuccess = Template.bind({});

SelectWrapperSuccess.args = {
  ...defaultArgs,
  success: true
};

export const SelectWrapperDisabled = Template.bind({});

SelectWrapperDisabled.args = {
  ...defaultArgs,
  disabled: true
};

export const SelectWrapperRequired = Template.bind({});

SelectWrapperRequired.args = {
  ...defaultArgs,
  required: true
};
