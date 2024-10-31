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

  const rows: React.JSX.Element[] = [];
  for (let i = 1; i < 12; i++) {
    rows.push(<li>{i}</li>);
  }

  return (
    <div>
      <ul style={{ backgroundColor: "#888" }}>{rows}</ul>
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
        <MultiOption value="option9">Option 9 xx</MultiOption>
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

const AddNewTemplate: StoryFn<Props> = args => {
  const initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [pickedOptions, setPickedOptions] = useState<string[]>([]);
  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);

  const handleOptionChange = (options: HTMLOptionsCollection) => {
    let newPickedOptions = [...pickedOptions];
    let newAllOptions = [...allOptions];
    Array.from(options).forEach(option => {
      const selected = option.selected;
      const exists = newPickedOptions.includes(option.value);

      const shouldAdd = !exists && selected;
      const shouldRemove = exists && !selected;

      if (shouldAdd) {
        newPickedOptions.push(option.value);
      } else if (shouldRemove) {
        newPickedOptions = newPickedOptions.filter(value => value !== option.value);
        const isInInitialOptions = initialOptions.includes(option.value);
        if (!isInInitialOptions) {
          newAllOptions = newAllOptions.filter(value => value !== option.value);
        }
      }
    });
    return { newPickedOptions, newAllOptions };
  };

  return (
    <MultiSelectWrapperComponent
      {...args}
      value={pickedOptions}
      onChange={e => {
        const { newPickedOptions, newAllOptions } = handleOptionChange(e.target.options);
        setPickedOptions(newPickedOptions);
        setAllOptions(newAllOptions);
      }}
      selectProps={{
        addNew: {
          label: "Create new",
          onAddNew: value => {
            const trimmedValue = value.trim();
            const getValuesWithValueIfUnique = (value: string) => (values: string[]) =>
              values.includes(value) ? values : [...values, value];
            trimmedValue && setAllOptions(getValuesWithValueIfUnique(trimmedValue));
            trimmedValue && setPickedOptions(getValuesWithValueIfUnique(trimmedValue));
          },
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
};

export const MultiSelectAddNewWrapper = AddNewTemplate.bind({});
