import React from "react";
import { Props, TabButton } from "./TabButton";
import { render } from "@testing-library/react";

const defaultParams: Props = {};

const createTabButton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <TabButton {...parameters} data-testid="tabbutton">
      tab content
    </TabButton>
  );
  const tabButton = queries.getByTestId("tabbutton");

  return {
    ...queries,
    tabButton
  };
};

describe("Tab should render", () => {
  it("renders without crashing", () => {
    const { tabButton } = createTabButton();

    expect(tabButton).toBeTruthy();
  });

  it("should be selected when prop selected is passed", () => {
    const { tabButton } = createTabButton(defaultParams => ({
      ...defaultParams,
      selected: true
    }));

    expect(tabButton).toHaveAttribute("aria-selected", "true");
    expect(tabButton).toHaveAttribute("tabIndex", "0");
  });

  it("should be focussed when prop focussed is passed", () => {
    const { tabButton } = createTabButton(defaultParams => ({
      ...defaultParams,
      focussed: true
    }));

    expect(tabButton).toHaveClass("focussed");
  });

  it("should set accessibility attributes when prop tabPanelId is passed", () => {
    const { tabButton } = createTabButton(defaultParams => ({
      ...defaultParams,
      tabPanelId: "fakeId"
    }));

    expect(tabButton).toHaveAttribute("aria-controls", "fakeId");
  });

  it("should set id attribute when prop tabId is passed", () => {
    const { tabButton } = createTabButton(defaultParams => ({
      ...defaultParams,
      tabId: "fakeId"
    }));

    expect(tabButton).toHaveAttribute("id", "fakeId");
  });

  it("should set class when prop className is passed", () => {
    const { tabButton } = createTabButton(defaultParams => ({
      ...defaultParams,
      className: "customclass"
    }));

    expect(tabButton).toHaveClass("customclass");
  });
});
