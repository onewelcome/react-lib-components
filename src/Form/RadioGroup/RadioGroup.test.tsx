import React from "react";
import { RadioGroup, Props } from "./RadioGroup";
import { render } from "@testing-library/react";
import { Radio } from "../Radio/Radio";

const createRadioGroup = (params?: Props, checkedOptionValue = "option1") => {
  const queries = render(
    <RadioGroup {...params} data-testid="radiogroup" value={checkedOptionValue} name="my-group">
      <Radio helperText="This is helpertext" value="option1">
        Option 1
      </Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
  const radiogroup = queries.getByTestId("radiogroup");

  return {
    ...queries,
    radiogroup,
  };
};

describe("RadioGroup should render", () => {
  it("renders without crashing", () => {
    const { radiogroup } = createRadioGroup();

    expect(radiogroup).toBeTruthy();
  });

  it("has option 1 properly linked with aria-describedby to its helpertext", () => {
    const { radiogroup } = createRadioGroup();

    const option1RadioWrapper = radiogroup.querySelector('input[value="option1"]')?.closest(".radio-wrapper");
    const option1 = radiogroup.querySelector('input[value="option1"]');
    const option1helper = option1RadioWrapper?.querySelector(".helper-text");

    if (option1helper && option1) {
      expect(option1helper.getAttribute("id")).toBe(`${option1.getAttribute("id")}-description`);
      expect(option1).toHaveAccessibleDescription();
      expect(option1).toHaveAttribute("aria-describedby", option1helper.getAttribute("id"));
    }
  });

  it("has all option's aria-describedby linked with the error message ID", () => {
    const { radiogroup } = createRadioGroup({
      error: true,
      children: <Radio value="test">Test</Radio>,
      value: "option1",
      name: "my-group",
      errorMessage: "This is an error message",
    });

    const errorMessage = radiogroup.querySelector(".error-message .message");
    const option1 = radiogroup.querySelector('input[value="option1"]');

    expect(errorMessage).toBeTruthy();
    if (errorMessage) {
      expect(option1).toHaveAttribute("aria-describedby", errorMessage.id);
    }
  });
});

describe("RadioGroup selection", () => {
  it("has option 2 selected, the rest is unselected", () => {
    const { radiogroup } = createRadioGroup(undefined, "option2");

    expect(radiogroup.querySelector('input[value="option1"]')).toHaveAttribute("aria-checked", "false");
    expect(radiogroup.querySelector('input[value="option2"]')).toHaveAttribute("aria-checked", "true");
    expect(radiogroup.querySelector('input[value="option3"]')).toHaveAttribute("aria-checked", "false");
  });
});
