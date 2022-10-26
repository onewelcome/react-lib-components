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

import React, { FormEvent } from "react";
import { Form } from "./Form";
import { render } from "@testing-library/react";
import { Button } from "../Button/Button";
import userEvent from "@testing-library/user-event";

describe("Form should render", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Form data-testid="component">Content</Form>);
    const component = getByTestId("component");
    expect(component).toBeDefined();
  });
});

describe("Event should fire", () => {
  it("should fire the onSubmitHandler function", async () => {
    const onSubmitHandler = jest.fn();

    onSubmitHandler.mockImplementation((event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    });

    const { getByTestId } = render(
      <Form onSubmit={onSubmitHandler}>
        <Button data-testid="submit-button" type="submit"></Button>
      </Form>
    );

    const button = getByTestId("submit-button");
    await userEvent.click(button);
    expect(onSubmitHandler).toHaveBeenCalled();
  });
});

describe("Should be able to set some default form properties", () => {
  const { getByTestId } = render(
    <Form data-testid="form" method="POST" action="./test.php">
      Test
    </Form>
  );

  const form = getByTestId("form");

  expect(form.getAttribute("method")).toBe("POST");
  expect(form.getAttribute("action")).toBe("./test.php");
  expect(form.innerHTML).toBe("Test");
});
