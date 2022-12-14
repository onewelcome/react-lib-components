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

import React, { Fragment, useRef } from "react";
import { Popover, Props } from "./Popover";
import { render } from "@testing-library/react";
import { usePosition } from "../hooks/usePosition";

const createPopover = (params?: (defaultParams: Props) => Props) => {
  const Component = () => {
    const relativeElement = useRef<HTMLButtonElement>(null);
    const elementToBePositioned = useRef<HTMLDivElement>(null);

    const defaultParams: Props = {
      children: (
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      ),
      show: false,
      placement: { vertical: "top", horizontal: "left" }
    };
    let parameters: Props = defaultParams;

    if (params) {
      parameters = params(defaultParams);
    }

    const { top, left, bottom, right, calculatePosition } = usePosition({
      elementToBePositioned: elementToBePositioned,
      relativeElement: relativeElement,
      ...parameters
    });

    return (
      <Fragment>
        <button data-testid="button" onClick={calculatePosition} ref={relativeElement}>
          Test
        </button>
        <Popover
          {...defaultParams}
          data-testid="popover"
          style={{ top: top, left: left, bottom: bottom, right: right }}
          ref={elementToBePositioned}
        >
          Test
        </Popover>
      </Fragment>
    );
  };

  const queries = render(<Component />);
  const button = queries.getByTestId("button");
  const popover = queries.getByTestId("popover");

  /** Let the hacking begin */
  Object.defineProperty(button, "offsetHeight", { configurable: true, value: 500 });
  Object.defineProperty(button, "offsetWidth", { configurable: true, value: 500 });

  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: 1000
  });
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 1000
  });

  Object.defineProperty(popover, "offsetHeight", { configurable: true, value: 100 });
  Object.defineProperty(popover, "offsetWidth", { configurable: true, value: 100 });

  return {
    ...queries,
    popover,
    button
  };
};

describe("Popover should render", () => {
  it("renders without crashing and has default left and top attributes", () => {
    const { popover } = createPopover(defaultParams => ({ ...defaultParams, show: true }));

    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new Event("scroll"));

    expect(popover).toBeTruthy();
  });
});
