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
  MultiSelectWrapper as MultiSelectWrapperComponent,
  Props
} from "../../../src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper";
import { MultiOption } from "../../../src/components/Form/Select/MultiSelect/MultiOption";
import MultiSelectWrapperDocumentation from "./MultiSelectWrapper.mdx";
import { within, userEvent, waitFor, expect } from "@storybook/test";
import { conditionalPlay } from "../../../.storybook/conditionalPlay";
import { BoundFunctions } from "@testing-library/dom/types/get-queries-for-element";
import { queries } from "@testing-library/dom";
import { useMultiSelect } from "../../../src";

const meta: Meta = {
  title: "components/Inputs/MultiSelect (Wrapper)",
  component: MultiSelectWrapperComponent,
  parameters: {
    docs: {
      page: MultiSelectWrapperDocumentation
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
  },
  args: {
    label: "Example multi select wrapper",
    name: "Example multi select",
    helperText: "Example helper text",
    error: false,
    errorMessage: "This is an error message",
    success: false,
    value: ["option1"]
  }
};
export default meta;

const Template: StoryFn<Props> = args => {
  const [pickedOptions, setPickedOptions] = useState<string[]>(["option1"]);
  const [newOptions, setNewOptions] = useState<string[]>();

  return (
    <div>
      <div style={{ height: "16rem" }}></div>
      <MultiSelectWrapperComponent
        {...args}
        value={pickedOptions}
        onChange={e => {
          setPickedOptions(
            Array.from(e.target.options)
              .filter(option => option.selected)
              .map(option => option.value)
          );
        }}
      >
        <MultiOption value="option1" fixed>
          Option 1
        </MultiOption>
        <MultiOption value="option2">Option 2</MultiOption>
        <MultiOption value="option3">Option 3</MultiOption>
        <MultiOption value="option4">Option 4</MultiOption>
        <MultiOption value="option5">Option 5</MultiOption>
        <MultiOption value="option6">Option 6</MultiOption>
        <MultiOption value="option7">Option 7</MultiOption>
        <MultiOption value="option8">Option 8</MultiOption>
        <MultiOption value="option9">Option 9</MultiOption>
      </MultiSelectWrapperComponent>
    </div>
  );
};

export const MultiSelectWrapper = Template.bind({});

const expectRemovableTag = (label: string, canvas: BoundFunctions<typeof queries>) => {
  const tag1 = canvas.getByText(label).parentElement!;
  expect(tag1).toBeInTheDocument();
  expect(within(tag1).queryByText(`Remove ${label}`)).toBeInTheDocument();
};

const expectNonRemovableTag = (label: string, canvas: BoundFunctions<typeof queries>) => {
  const tag1 = canvas.getByText(label).parentElement!;
  expect(tag1).toBeInTheDocument();
  expect(within(tag1).queryByText(`Remove ${label}`)).not.toBeInTheDocument();
};

MultiSelectWrapper.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument());

  const select = await canvas.getByRole("button", { expanded: false });

  await userEvent.click(select);

  const option2 = canvas.getByRole("option", { name: "Option 2" });

  await userEvent.click(option2);

  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);

  await userEvent.click(select);

  const option3 = canvas.getByRole("option", { name: "Option 3" });

  await userEvent.click(option3);

  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);

  await userEvent.click(select);

  const option4 = await canvas.getByRole("option", { name: "Option 4" });

  await userEvent.click(option4);

  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);
  expectRemovableTag("Option 4", canvas);

  const option4RemoveBtn = await canvas.getByText("Remove Option 4");

  await userEvent.click(option4RemoveBtn);

  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);
  expect(canvas.queryByText("Remove Option 4")).not.toBeInTheDocument();

  await userEvent.click(select);
});

export const MultiSelectWrapperError = Template.bind({});

MultiSelectWrapperError.args = {
  error: true
};

export const MultiSelectWrapperSuccess = Template.bind({});

MultiSelectWrapperSuccess.args = {
  success: true
};

export const MultiSelectWrapperDisabled = Template.bind({});

MultiSelectWrapperDisabled.args = {
  disabled: true
};

export const MultiSelectWrapperRequired = Template.bind({});

MultiSelectWrapperRequired.args = {
  required: true
};

export const MultiSelectWrapperUseBasic = (args => {
  const [pickedOptions, setPickedOptions] = useState<string[]>([]);
  const [allOptions, setAllOptions] = useState<string[]>([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ]);

  const { handleOptionChange } = useMultiSelect({
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions
  });

  return (
    <MultiSelectWrapperComponent
      {...args}
      value={pickedOptions}
      onChange={handleOptionChange}
      selectProps={{
        search: {
          enabled: true
        }
      }}
    >
      {allOptions.map(option => (
        <MultiOption key={option} value={option}>
          {option}
        </MultiOption>
      ))}
    </MultiSelectWrapperComponent>
  );
}).bind({});

export const MultiSelectWrapperUseWithAddNew = (args => {
  const initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [pickedOptions, setPickedOptions] = useState<string[]>([]);
  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);

  const { handleOptionChange, onAddNew } = useMultiSelect({
    initialOptions,
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions
  });

  return (
    <MultiSelectWrapperComponent
      {...args}
      value={pickedOptions}
      onChange={handleOptionChange}
      selectProps={{
        addNew: {
          label: "Create new",
          onAddNew,
          btnProps: { title: "Add new select option" }
        },
        search: {
          enabled: true,
          searchPlaceholder: "Search or add new option (Enter)"
        }
      }}
    >
      {allOptions.map(option => (
        <MultiOption key={option} value={option}>
          {option}
        </MultiOption>
      ))}
    </MultiSelectWrapperComponent>
  );
}).bind({});

export const MultiSelectWrapperUseAsEditableList = (args => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [pickedOptions, setPickedOptions] = useState<string[]>(items);

  const { handleOptionChange, onAddNew } = useMultiSelect({
    pickedOptions,
    setPickedOptions
  });

  return (
    <MultiSelectWrapperComponent
      {...args}
      value={pickedOptions}
      onChange={handleOptionChange}
      selectProps={{
        addNew: {
          label: "Create new",
          onAddNew,
          btnProps: { title: "Add new list item" }
        },
        search: {
          enabled: true,
          searchPlaceholder: "Add new list item (Enter)"
        }
      }}
    >
      {pickedOptions.map(option => (
        <MultiOption key={option} value={option}>
          {option}
        </MultiOption>
      ))}
    </MultiSelectWrapperComponent>
  );
}).bind({});
