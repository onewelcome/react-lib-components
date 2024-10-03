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
import { DatePicker as DatePickerComponent } from "../../src/components/DatePicker/DatePicker";
import React, { Fragment, useState } from "react";
import DatePickerDocumentation from "./DatePicker.mdx";
import { conditionalPlay } from "../../.storybook/conditionalPlay";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { DateRange } from "react-day-picker";

const meta: Meta = {
  title: "components/Inputs/DatePicker",
  component: DatePickerComponent,
  parameters: {
    docs: {
      page: DatePickerDocumentation,
      source: {
        type: "code"
      }
    }
  }
};

export default meta;

const Template: StoryFn<{}> = args => {
  const [inputValue, setInputValue] = useState<Date>();

  return (
    <Fragment>
      <DatePickerComponent
        data-testid="date-picker"
        value={inputValue}
        mode="single"
        onSelect={date => {
          setInputValue(date as Date);
        }}
        locale="enGB"
        {...args}
      />
      <p>{inputValue?.toDateString()}</p>
    </Fragment>
  );
};

export const DatePicker = Template.bind({});

DatePicker.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => {
    const datePicker = canvas.getByTestId("date-picker");
    expect(datePicker).toBeDefined();
  });

  const dayOfTheMonth = canvas.getByText("19");

  await waitFor(() => expect(dayOfTheMonth).toBeDefined());
  await userEvent.click(dayOfTheMonth);

  await expect(dayOfTheMonth.parentElement).toHaveAttribute("data-selected", "true");
});

const TemplateRange: StoryFn<{}> = args => {
  const [inputValue, setInputValue] = useState<DateRange>();

  return (
    <Fragment>
      <DatePickerComponent
        data-testid="date-picker"
        value={inputValue}
        mode="range"
        onSelect={date => {
          setInputValue(date as DateRange);
        }}
        {...args}
      />
      <p>{inputValue?.from?.toDateString()}</p>
      <p>{inputValue?.to?.toDateString()}</p>
    </Fragment>
  );
};

export const DatePickerRange = TemplateRange.bind({});
