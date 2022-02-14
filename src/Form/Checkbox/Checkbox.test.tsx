import React from "react";
import { Checkbox } from "./Checkbox";
import { render } from "@testing-library/react";

describe("Checkbox should render", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Checkbox name="checkbox1" data-testid="component">
        Content
      </Checkbox>
    );
    const component = getByTestId("component");
    expect(component).toBeDefined();
  });
});
