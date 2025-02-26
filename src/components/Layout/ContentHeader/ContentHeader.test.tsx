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

import React from "react";
import { ContentHeader, Props } from "./ContentHeader";
import { render } from "@testing-library/react";
import { Button } from "../../Button/Button";

const defaultParams: Props = {
  children: <p data-testid="contentHeaderChildren">Content Header sample description</p>,
  title: "Content Header sample Title",
  buttons: [
    <Button id="cancelButton" key="1" data-testid="button1">
      Cancel Button
    </Button>,
    <Button id="saveButton" key="2" data-testid="button2">
      Save Button
    </Button>
  ]
};

const createContentHeader = (params?: Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params;
  }

  const queries = render(
    <ContentHeader {...parameters} data-testid="contentHeaderTestId"></ContentHeader>
  );
  const contentHeader = queries.getByTestId("contentHeaderTestId");

  return {
    ...queries,
    contentHeader
  };
};

describe("<ContentHeader />", () => {
  it("should render without crashing", () => {
    const { contentHeader } = createContentHeader();
    expect(contentHeader).toBeDefined();
  });

  it("should have the correct values and attributes", () => {
    const { getByTestId } = createContentHeader();

    expect(getByTestId("contentHeaderChildren")).toHaveTextContent(
      "Content Header sample description"
    );

    const title = getByTestId("content-header-title");
    expect(title).toBeDefined();
    expect(title.querySelector(":not([aria-hidden])")).toHaveTextContent(
      "Content Header sample Title"
    );

    const button1 = getByTestId("button1");

    expect(button1).toHaveAttribute("id", "cancelButton");
    expect(button1).toHaveTextContent("Cancel Button");

    const button2 = getByTestId("button2");

    expect(button2).toHaveAttribute("id", "saveButton");
    expect(button2).toHaveTextContent("Save Button");
  });

  it("should have the correct classes", () => {
    const { contentHeader } = createContentHeader({
      ...defaultParams,
      className: "content-header-custom-class"
    });

    expect(contentHeader).toHaveClass("content-header-custom-class");
  });

  it("should render collapsed header when collapsed property is true", () => {
    const paramForCollapsed = { ...defaultParams };
    paramForCollapsed.collapsed = true;
    const { contentHeader } = createContentHeader(paramForCollapsed);

    expect(contentHeader.querySelector(".hide-text p")).toHaveTextContent(
      "Content Header sample description"
    );
  });
});
