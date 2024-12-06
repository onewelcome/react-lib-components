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
import { Select as SelectComponent } from "../../../src/components/Form/Select/SingleSelect/Select";
import { Option, SingleSelectProps } from "../../../src";
import SelectDocumentation from "./Select.mdx";
import { conditionalPlay } from "../../../.storybook/conditionalPlay";
import { expect, userEvent, waitFor, within } from "@storybook/test";

const generateOptions = (count: number) => {
  return Array.from({ length: count }, (_, index) => (
    <Option key={`option${index + 1}`} value={`option${index + 1}`}>
      {`Option ${index + 1}`}
    </Option>
  ));
};

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
      options: generateOptions(11),
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

const Template: StoryFn<SingleSelectProps> = args => {
  return <SelectComponent {...args}></SelectComponent>;
};

export const Select = Template.bind({});

Select.args = {
  name: "Example select",
  children: generateOptions(6)
};

export const SelectWithSearchOptions = Template.bind({});

SelectWithSearchOptions.args = {
  children: generateOptions(11),
  search: { enabled: true, renderThreshold: 0 }
};

SelectWithSearchOptions.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());

  const select = await canvas.getByRole("button", { expanded: false });

  await userEvent.click(select);
});

export const SelectWithAddNewAndSearch = Template.bind({});

SelectWithAddNewAndSearch.args = {
  name: "Example select",
  addNew: { label: "Create new", onAddNew: () => alert("YO!") },
  children: generateOptions(11)
};

SelectWithAddNewAndSearch.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());

  const select = await canvas.getByRole("button", { expanded: false });

  await userEvent.click(select);
});

export const SelectWithAddNew = Template.bind({});

SelectWithAddNew.args = {
  name: "Example select",
  addNew: { label: "Create new", onAddNew: () => alert("YO!") },
  children: generateOptions(3)
};

SelectWithAddNew.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());

  const select = await canvas.getByRole("button", { expanded: false });

  await userEvent.click(select);
});

export const SelectInReadOnlyMode = Template.bind({});

SelectInReadOnlyMode.storyName = "Select Component In Read-only Mode";
SelectInReadOnlyMode.args = {
  name: "Example select",
  readOnlyView: true,
  children: generateOptions(6)
};
