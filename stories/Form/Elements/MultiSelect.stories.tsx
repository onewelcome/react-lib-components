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
import { MultiSelect as MultiSelectComponent } from "../../../src/components/Form/Select/MultiSelect/MultiSelect";
import MultiSelectDocumentation from "./MultiSelect.mdx";
import { MultiOption } from "../../../src/components/Form/Select/MultiSelect/MultiOption";
import { MultiSelectProps } from "../../../src/components/Form/Select/Select.interfaces";
import { conditionalPlay } from "../../../.storybook/conditionalPlay";
import { expect } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";

const generateOptions = count => {
  return Array.from({ length: count }, (_, index) => (
    <MultiOption key={`option${index + 1}`} value={`option${index + 1}`} fixed={index === 0}>
      {`Option ${index + 1}`}
    </MultiOption>
  ));
};

const meta: Meta = {
  title: "components/Inputs/Raw/MultiSelect",
  component: MultiSelectComponent,
  parameters: {
    docs: {
      page: MultiSelectDocumentation
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

const Template: StoryFn<MultiSelectProps> = args => {
  const [pickedOptions, setPickedOptions] = useState<string[]>(["option1", "option2"]);

  return (
    <MultiSelectComponent
      {...args}
      value={pickedOptions}
      onChange={e => {
        setPickedOptions(
          Array.from(e.target.options)
            .filter(option => option.selected)
            .map(option => option.value)
        );
      }}
    ></MultiSelectComponent>
  );
};

export const MultiSelect = Template.bind({});

MultiSelect.args = {
  name: "Example multi select",
  children: generateOptions(6)
};

export const MultiSelectWithSearchOptions = Template.bind({});

MultiSelectWithSearchOptions.args = {
  children: generateOptions(15)
};

MultiSelectWithSearchOptions.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());

  const select = await canvas.getByRole("button", { expanded: false });

  await userEvent.click(select);
});

export const MultiSelectWithAddNewAndSearch = Template.bind({});

MultiSelectWithAddNewAndSearch.args = {
  name: "Example select",
  addNew: { label: "Create new", onAddNew: () => alert("YO!") },
  children: generateOptions(15)
};

MultiSelectWithAddNewAndSearch.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());

  const select = await canvas.getByRole("button", { expanded: false });

  await userEvent.click(select);
});

export const MultiSelectWithAddNew = Template.bind({});

MultiSelectWithAddNew.args = {
  name: "Example select",
  addNew: { label: "Create new", onAddNew: () => alert("YO!") },
  children: generateOptions(3)
};

MultiSelectWithAddNew.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());

  const select = await canvas.getByRole("button", { expanded: false });

  await userEvent.click(select);
});
