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
import { userEvent, waitFor, within, expect } from "@storybook/test";
import { useMultiSelect } from "../../../src";

const playExpand = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());
  const select = await canvas.getByRole("button", { expanded: false });
  await userEvent.click(select);
});

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

const Template = args => {
  const [allOptions, setAllOptions] = useState<string[]>([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ]);
  const [pickedOptions, setPickedOptions] = useState<string[]>(["Option 1"]);

  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions
  });

  return (
    <div style={args.stickToBottom ? { position: "absolute", bottom: 8, left: 8, right: 8 } : {}}>
      <MultiSelectComponent
        value={pickedOptions}
        onChange={handleOptionChange}
        search={args.search}
      >
        {optionElements}
      </MultiSelectComponent>
      {!args.stickToBottom ? <div style={{ height: "7rem" }}></div> : undefined}
    </div>
  );
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  search: { enabled: false }
};
MultiSelect.play = playExpand;

export const MultiSelectWithSearchOptions = Template.bind({});
MultiSelectWithSearchOptions.args = {
  search: { enabled: true }
};
MultiSelectWithSearchOptions.play = playExpand;

export const MultiSelectUseBasicExpandUpwards = Template.bind({});
MultiSelectUseBasicExpandUpwards.args = {
  stickToBottom: true
};
MultiSelectUseBasicExpandUpwards.play = playExpand;

export const MultiSelectWithAddNewTemplate = args => {
  const initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [pickedOptions, setPickedOptions] = useState<string[]>([]);
  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);

  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({
    initialOptions,
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions
  });

  return (
    <div>
      <MultiSelectComponent
        value={pickedOptions}
        onChange={handleOptionChange}
        addNew={{ label: "Create new", onAddNew, btnProps: { title: "Add new select option" } }}
        search={{
          enabled: args.searchEnabled
        }}
      >
        {allOptions.map(option => (
          <MultiOption key={option} value={option}>
            {option}
          </MultiOption>
        ))}
      </MultiSelectComponent>
      <div style={{ height: "7rem" }}></div>
    </div>
  );
};
export const MultiSelectWithAddNew = MultiSelectWithAddNewTemplate.bind({});
MultiSelectWithAddNew.args = {
  searchEnabled: false
};
MultiSelectWithAddNew.play = playExpand;

export const MultiSelectWithAddNewAndSearch = MultiSelectWithAddNewTemplate.bind({});
MultiSelectWithAddNewAndSearch.args = {
  searchEnabled: false
};
MultiSelectWithAddNewAndSearch.play = playExpand;

export const MultiSelectAsEditableList = (args => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [pickedOptions, setPickedOptions] = useState<string[]>(items);

  const { handleOptionChange, onAddNew } = useMultiSelect({
    pickedOptions,
    setPickedOptions
  });

  return (
    <MultiSelectComponent
      value={pickedOptions}
      onChange={handleOptionChange}
      addNew={{
        label: "Create new",
        onAddNew,
        btnProps: { title: "Add new list item" }
      }}
      search={{
        enabled: true,
        searchPlaceholder: "Add new list item (Enter)"
      }}
    >
      {pickedOptions.map(option => (
        <MultiOption key={option} value={option}>
          {option}
        </MultiOption>
      ))}
    </MultiSelectComponent>
  );
}).bind({});
MultiSelectAsEditableList.play = playExpand;
