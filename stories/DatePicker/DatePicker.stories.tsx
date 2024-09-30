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

import { Meta, StoryFn } from "@storybook/react";
import { DatePicker } from "../../src/components/DatePicker/DatePicker";
import React, { Fragment, useState } from "react";
import DatePickerDocumentation from "./DatePicker.mdx";
import { conditionalPlay } from "../../.storybook/conditionalPlay";
import { expect, userEvent, waitFor, within } from "@storybook/test";

const meta: Meta = {
  title: "components/DatePicker/DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      page: DatePickerDocumentation
    }
  }
};

export default meta;

const Template: StoryFn<{}> = args => {
  const [inputValue, setInputValue] = useState<Date>();

  return (
    <Fragment>
      <DatePicker
        data-testid={"date-picker"}
        selected={inputValue}
        onSelectHandler={value => {
          setInputValue(value);
        }}
        {...args}
      ></DatePicker>
      <p>{inputValue && inputValue.toDateString()}</p>
    </Fragment>
  );
};

export const DatePickerTemplate = Template.bind({});

DatePickerTemplate.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const datePicker = canvas.getByTestId("date-picker");

  await waitFor(() => expect(datePicker).toBeDefined);

  const dayOfTheMonth = canvas.getByText("19");

  await waitFor(() => expect(dayOfTheMonth).toBeDefined);
  await userEvent.click(dayOfTheMonth);

  await expect(dayOfTheMonth.parentElement).toHaveAttribute("data-selected", "true");
});
