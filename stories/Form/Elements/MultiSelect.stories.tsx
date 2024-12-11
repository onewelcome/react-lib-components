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
import { Meta } from "@storybook/react";
import { MultiSelect } from "../../../src/components/Form/Select/MultiSelect/MultiSelect";
import MultiSelectDocumentation from "./MultiSelect.mdx";
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
  component: MultiSelect,
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
  const [pickedOptions, setPickedOptions] = useState<string[]>(["Option 1", "Option 2"]);

  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions
  });

  return (
    <div style={args.stickToBottom ? { position: "absolute", bottom: 8, left: 8, right: 8 } : {}}>
      <MultiSelect value={pickedOptions} onChange={handleOptionChange} search={args.search}>
        {optionElements}
      </MultiSelect>
      {!args.stickToBottom ? <div style={{ height: "7rem" }}></div> : undefined}
    </div>
  );
};

export const MultiSelectDefault = Template.bind({});
MultiSelectDefault.storyName = "Multi Select";

export const MultiSelectWithoutSearch = Template.bind({});
MultiSelectWithoutSearch.args = {
  search: { enabled: false }
};
MultiSelectWithoutSearch.play = playExpand;

export const MultiSelectExpandUpwards = Template.bind({});
MultiSelectExpandUpwards.args = {
  stickToBottom: true
};
MultiSelectExpandUpwards.play = playExpand;

const TemplateWithAddNew = args => {
  const initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [pickedOptions, setPickedOptions] = useState<string[]>(["Option 1", "Option 2"]);
  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);

  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({
    initialOptions,
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions,
    onAddNew: args.onAddNew
  });

  return (
    <div>
      <MultiSelect
        value={pickedOptions}
        onChange={handleOptionChange}
        addNew={{
          label: "Create new",
          onAddNew,
          btnProps: { title: "Add new select option" }
        }}
        search={{
          enabled: args.searchEnabled,
          searchPlaceholder: args.searchPlaceholder
        }}
      >
        {optionElements}
      </MultiSelect>
      <div style={{ height: "7rem" }}></div>
    </div>
  );
};

export const MultiSelectWithAddNew = TemplateWithAddNew.bind({});
MultiSelectWithAddNew.args = {
  searchEnabled: false,
  onAddNew: newOption => alert(`Triggered onAddNew("${newOption}")`)
};
MultiSelectWithAddNew.play = playExpand;

export const MultiSelectWithAddNewAndSearch = TemplateWithAddNew.bind({});
MultiSelectWithAddNewAndSearch.args = {
  searchPlaceholder: "Search or add new option (Enter)",
  searchEnabled: true
};
MultiSelectWithAddNewAndSearch.play = playExpand;

export const MultiSelectAsEditableList = (args => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [pickedOptions, setPickedOptions] = useState<string[]>(items);

  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({
    pickedOptions,
    setPickedOptions
  });

  return (
    <MultiSelect
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
      {optionElements}
    </MultiSelect>
  );
}).bind({});
MultiSelectAsEditableList.play = playExpand;

export const MultiSelectInReadOnlyMode = (args => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [pickedOptions, setPickedOptions] = useState<string[]>(items);

  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({
    pickedOptions,
    setPickedOptions
  });

  return (
    <MultiSelect
      value={pickedOptions}
      onChange={handleOptionChange}
      readOnlyView={true}
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
      {optionElements}
    </MultiSelect>
  );
}).bind({});

MultiSelectInReadOnlyMode.storyName = "Multi Select Component In Read-only Mode";
