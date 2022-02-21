import React from "react";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { render } from "@testing-library/react";
import { Radio } from "./Radio";

describe("RadioGroup should render", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <RadioGroup data-testid="component" value="option1" name="my-group">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioGroup>
    );
    const component = getByTestId("component");
    expect(component).toBeDefined();
  });
});

/** The rest of the tests will be done in Radiogroup */
