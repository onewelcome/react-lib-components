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

import { act, render } from "@testing-library/react";
import { DatePicker } from "./DatePicker";
import React from "react";
import { userEvent } from "@storybook/test";

const mockSelectFunction = jest.fn();

const renderDatePicker = (mode: "single" | "range") => {
  return render(
    <DatePicker
      mode={mode}
      data-testid={"datepicker"}
      value={undefined}
      onSelect={mockSelectFunction}
    />
  );
};

describe("<DatePicker>", () => {
  test("should render DatePicker in single mode", () => {
    const { findByTestId } = renderDatePicker("single");

    const renderedDatePicker = findByTestId("datepicker");

    expect(renderedDatePicker).toBeDefined();
  });
  test("should render DatePicker in range mode", async () => {
    const { findByTestId } = renderDatePicker("range");

    const renderedDatePicker = await findByTestId("datepicker");

    expect(renderedDatePicker).toBeDefined();
    expect(renderedDatePicker.getAttribute("data-mode")).toBe("range");
  });

  test("should call onSelect when clicking on a specific date", async () => {
    const { findByText } = renderDatePicker("single");

    const dayElement = await findByText("19");

    expect(dayElement).toBeDefined();

    await userEvent.click(dayElement);
    expect(mockSelectFunction).toHaveBeenCalledTimes(1);
  });
});
