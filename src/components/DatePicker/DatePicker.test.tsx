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

import { render } from "@testing-library/react";
import { DatePicker } from "./DatePicker";
import React from "react";
import { userEvent } from "@storybook/test";

const mockSubmitHandler = jest.fn();

const renderDatePicker = () => {
  return render(<DatePicker data-testid={"datepicker"} onSelect={mockSubmitHandler} />);
};

describe("<DatePicker>", () => {
  test("should render", () => {
    const { findByTestId } = renderDatePicker();

    const renderedDatePicker = findByTestId("datepicker");

    expect(renderedDatePicker).toBeDefined();
  });

  test("should call onSubmitHandler when clicking on a specific date", async () => {
    const { findByText } = renderDatePicker();

    const dayElement = await findByText("19");

    expect(dayElement).toBeDefined();

    await userEvent.click(dayElement);
    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
  });
});
