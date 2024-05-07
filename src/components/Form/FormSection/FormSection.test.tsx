import React from "react";
import { FormSection, Props } from "./FormSection";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  header: "header",
  subtext: "subtext"
};

const createFormSection = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <FormSection {...parameters} data-testid="FormSection">
      <div>child</div>
    </FormSection>
  );
  const FormSectionComponent = queries.getByTestId("FormSection");

  return {
    ...queries,
    FormSectionComponent
  };
};

describe("FormSection should render", () => {
  it("should render without crashing", () => {
    const { FormSectionComponent } = createFormSection();

    expect(FormSectionComponent).toBeDefined();
  });

  it("should render header and children", () => {
    const { getByText } = createFormSection();

    expect(getByText("header")).toBeDefined();
    expect(getByText("subtext")).toBeDefined();
    expect(getByText("child")).toBeDefined();
  });
});
