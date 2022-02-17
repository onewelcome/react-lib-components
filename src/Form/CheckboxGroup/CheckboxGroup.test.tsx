import React from "react";
import { CheckboxGroup, Props } from "./CheckboxGroup";
import { Checkbox, CheckboxProps } from "../Checkbox/Checkbox";
import { render } from "@testing-library/react";

const createCheckboxGroup = (params?: Props, parentParams?: CheckboxProps) => {
  const queries = render(
    <CheckboxGroup data-testid="checkboxgroup" {...params}>
      <Checkbox
        indeterminate={parentParams?.indeterminate || false}
        name={parentParams?.name || "parentcheckbox"}
        label={parentParams?.label || "parentcheckbox"}
        data-testid="parentcheckbox"
        {...parentParams}
      >
        <Checkbox checked={true} name="checkbox2">
          Checkbox 2
        </Checkbox>
        <Checkbox name="checkbox3">Checkbox 3</Checkbox>
      </Checkbox>
    </CheckboxGroup>
  );
  const checkboxgroup = queries.getByTestId("checkboxgroup");
  const parentcheckbox = queries.getByTestId("parentcheckbox");

  return {
    ...queries,
    checkboxgroup,
    parentcheckbox,
  };
};

describe("CheckboxGroup should render", () => {
  it("renders without crashing", () => {
    const { checkboxgroup } = createCheckboxGroup();
    expect(checkboxgroup).toBeTruthy();
  });
});

describe("Checkboxgroup should have an error", () => {
  it("should have an error and the children checkboxes should have aria-describedby of the error message of the group.", () => {
    const { checkboxgroup } = createCheckboxGroup({
      error: true,
      errorMessage: "This is an error",
      children: <Checkbox name="test">Test</Checkbox>,
    });

    const checkboxes = checkboxgroup.querySelectorAll(".checkbox-container input");
    const errorMessage = checkboxgroup.querySelector(".helper-text .error-message .message");

    /** All of the children checkboxes should be described by the error message in the parent checkbox group. */
    checkboxes.forEach((box) => {
      expect(box.getAttribute("aria-describedby")).toBe(errorMessage?.getAttribute("id"));
    });

    expect(checkboxes.length).toBe(3);
    expect(errorMessage).toHaveTextContent("This is an error");
  });
});

describe("Parent checkbox attributes", () => {
  it("is indeterminate, label is set", () => {
    const { parentcheckbox, container } = createCheckboxGroup(undefined, {
      indeterminate: true,
      name: "parentcheckbox",
      label: "testlabel",
      children: "",
    });

    expect(parentcheckbox.getAttribute("aria-checked")).toBe("mixed");
    expect(container.querySelector(`label[for="${parentcheckbox.getAttribute("id")}"]`)).toHaveTextContent("testlabel");
  });
});
