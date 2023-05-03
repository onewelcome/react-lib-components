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
import { Banner, Props } from "./Banner";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  children: "The service will not be available between 02:00 and 03:00.",
  title: "Maintenance is scheduled for next weekend",
  type: "info"
};

const createBanner = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Banner {...parameters} data-testid="BannerTest">
      {defaultParams.children}
    </Banner>
  );
  const BannerComponent = queries.getByTestId("BannerTest");

  return {
    ...queries,
    BannerComponent
  };
};

describe("Banner should render", () => {
  it("renders without crashing", () => {
    const { BannerComponent } = createBanner();
    expect(BannerComponent).toBeDefined();
    const title = BannerComponent.querySelector(".headline");
    const content = BannerComponent.querySelector(".content");
    const icon = BannerComponent.querySelector(".icon");
    expect(BannerComponent).toHaveClass("info");
    expect(title).toBeDefined();
    expect(title).toHaveTextContent(defaultParams.title);
    expect(content).toBeDefined();
    expect(content).toHaveTextContent(defaultParams.children);
    expect(icon).toBeDefined();
  });

  it("renders ariaLabel correctly", () => {
    const ariaLabel = "Information regarding your information";
    const { BannerComponent } = createBanner(defaultParams => ({ ...defaultParams, ariaLabel }));
    expect(BannerComponent).toBeDefined();
    expect(BannerComponent).toHaveAttribute("aria-label", ariaLabel);
  });

  it("renders ariaLive correctly", () => {
    const ariaLive = "polite";
    const { BannerComponent } = createBanner(defaultParams => ({ ...defaultParams, ariaLive }));
    expect(BannerComponent).toBeDefined();
    expect(BannerComponent).toHaveAttribute("aria-live", ariaLive);
  });

  it("renders ariaRole correctly", () => {
    const ariaRole = "alert";
    const { BannerComponent } = createBanner(defaultParams => ({
      ...defaultParams,
      type: "error",
      ariaRole
    }));
    expect(BannerComponent).toBeDefined();
    expect(BannerComponent).toHaveAttribute("role", ariaRole);
  });
});
