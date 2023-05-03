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
import { Breadcrumbs, Props } from "./Breadcrumbs";
import { render } from "@testing-library/react";
import { Link } from "../Link/Link";

const defaultParams: Props = {
  ariaLabel: "Breadcrumbs",
  children: [
    <Link key="0" to="#1" data-testid="link">
      Test1
    </Link>,
    <Link key="1" to="#2" data-testid="link">
      Test2
    </Link>
  ]
};

const createBreadcrumbs = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Breadcrumbs {...parameters} data-testid="breadcrumbs"></Breadcrumbs>);
  const breadcrumbs = queries.getByTestId("breadcrumbs");

  return {
    ...queries,
    breadcrumbs
  };
};

describe("Breadcrumbs should render", () => {
  it("renders without crashing", () => {
    const { breadcrumbs } = createBreadcrumbs();

    expect(breadcrumbs).toBeDefined();
    expect(breadcrumbs.firstChild).not.toHaveAttribute("aria-current");
    expect((breadcrumbs.firstChild as HTMLElement).tagName).toEqual("A");
    expect(breadcrumbs.lastChild).toHaveAttribute("aria-current", "page");
    expect((breadcrumbs.lastChild as HTMLElement).tagName).toEqual("SPAN");
  });
});
