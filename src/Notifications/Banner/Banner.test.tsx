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

const initialValue: Props = {
  type: "info",
  children: "The service will not be available between 02:00 and 03:00.",
  title: "Maintenance is scheduled for next weekend"
};

describe("Banner", () => {
  it("renders ariaProps", () => {
    const { container } = render(<Banner {...initialValue}>{initialValue.children}</Banner>);
    const banner = container.querySelector(".banner");
    const title = container.querySelector(".headline");
    const content = container.querySelector(".content");
    const icon = container.querySelector(".icon");
    expect(banner).toBeDefined();
    expect(banner).toHaveClass("info");
    expect(title).toBeDefined();
    expect(title).toHaveTextContent(initialValue.title);
    expect(content).toBeDefined();
    expect(content).toHaveTextContent(initialValue.children);
    expect(icon).toBeDefined();
  });

  it("renders ariaLabel correctly", () => {
    const ariaLabel = "Information regarding your information";
    const { container } = render(<Banner {...{ ...initialValue, ariaLabel }}>Test</Banner>);
    const banner = container.querySelector(".banner");
    expect(banner).toBeDefined();
    expect(banner).toHaveAttribute("aria-label", ariaLabel);
  });

  it("renders ariaLive correctly", () => {
    const ariaLive = "polite";
    const { container } = render(<Banner {...{ ...initialValue, ariaLive }}>Test</Banner>);
    const banner = container.querySelector(".banner");
    expect(banner).toBeDefined();
    expect(banner).toHaveAttribute("aria-live", ariaLive);
  });

  it("renders ariaRole correctly", () => {
    const ariaRole = "polite";
    const { container } = render(<Banner {...{ ...initialValue, ariaRole }}>Test</Banner>);
    const banner = container.querySelector(".banner");
    expect(banner).toBeDefined();
    expect(banner).toHaveAttribute("role", ariaRole);
  });
});
