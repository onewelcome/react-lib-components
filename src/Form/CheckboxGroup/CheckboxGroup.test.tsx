import React from "react";
import { CheckboxGroup, Props } from "./CheckboxGroup";
import { Checkbox } from "../Checkbox/Checkbox";
import { render } from "@testing-library/react";

const createCheckboxGroup = (params?: Props) => {
  const queries = render(
    <CheckboxGroup data-testid="checkboxgroup" {...params}>
      <Checkbox name="checkbox1">Checkbox 1</Checkbox>
      <Checkbox name="checkbox2">Checkbox 2</Checkbox>
      <Checkbox name="checkbox3">Checkbox 3</Checkbox>
    </CheckboxGroup>
  );
  const checkboxgroup = queries.getByTestId("checkboxgroup");

  return {
    ...queries,
    checkboxgroup,
  };
};

describe("CheckboxGroup should render", () => {
  it("renders without crashing", () => {
    const { checkboxgroup } = createCheckboxGroup();
    expect(checkboxgroup).toBeTruthy();
  });
});
