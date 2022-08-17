import React from "react";
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
  it("should fire the onSubmitHandler function", () => {
    const onSubmitHandler = jest.fn();

    onSubmitHandler.mockImplementation(event => {
      event.preventDefault();
    });

    const { getByTestId } = render(
      <Form onSubmit={onSubmitHandler}>
        <Button data-testid="submit-button" type="submit"></Button>
      </Form>
    );

    const button = getByTestId("submit-button");
    userEvent.click(button);
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
