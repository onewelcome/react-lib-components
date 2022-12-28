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
import { render, waitFor } from "@testing-library/react";
import { ConfigObject, usePosition } from "./usePosition";
import userEvent from "@testing-library/user-event";

interface ConfigObjectWithoutRefs
  extends Omit<ConfigObject, "relativeElement" | "elementToBePositioned"> {}

const createUsePositionComponent = (
  params?: (defaultParams: ConfigObjectWithoutRefs) => ConfigObjectWithoutRefs
) => {
  const Component = () => {
    const relativeElement = useRef<HTMLButtonElement>(null);
    const elementToBePositioned = useRef<HTMLDivElement>(null);

    const defaultParams: ConfigObject = {
      relativeElement: relativeElement,
      elementToBePositioned: elementToBePositioned,
      placement: { horizontal: "left", vertical: "top" },
      transformOrigin: { horizontal: "left", vertical: "top" },
      offset: { top: 0, left: 0, right: 0, bottom: 0 }
    };
    let parameters: ConfigObject = defaultParams;

    if (params) {
      // @ts-ignore for whining about not specifying relativeElement and elementToBePositioned which we do specify and will always be defined.
      parameters = params(defaultParams);
    }

    const { top, left, bottom, right, calculatePosition } = usePosition({ ...parameters });

    return (
      <Fragment>
        <button data-testid="button" onClick={calculatePosition} ref={relativeElement}>
          Test
        </button>
        <div
          data-testid="popover"
          style={{ top: top, left: left, bottom: bottom, right: right }}
          ref={elementToBePositioned}
        >
          Test
        </div>
      </Fragment>
    );
  };

  const queries = render(<Component />);
  const button = queries.getByTestId("button");
  const popover = queries.getByTestId("popover");

  /** Let the hacking begin */
  button.getBoundingClientRect = () => ({
    x: 50,
    y: 50,
    width: 500,
    height: 500,
    top: 250,
    left: 250,
    right: 750,
    bottom: 750,
    toJSON: () => jest.fn()
  });

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

  Object.defineProperty(document.body, "innerHeight", { configurable: true, value: 1000 });
  Object.defineProperty(document.body, "innerWidth", { configurable: true, value: 1000 });
  /** Make it stop pls */

  userEvent.click(button);

  return { ...queries, button, popover };
};

describe("returns proper values for default transformOrigin", () => {
  it("returns the correct values for left top placement", async () => {
    const { popover } = createUsePositionComponent();

    await waitFor(() => expect(popover).toHaveStyle({ top: "250px", left: "250px" }));
  });

  it("returns the correct values for left bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "750px", left: "250px" }));
  });

  it("returns the correct values for left center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "left", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "500px", left: "250px" }));
  });

  it("returns the correct values for center top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "250px", left: "500px" }));
  });

  it("returns the correct values for center center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "500px", left: "500px" }));
  });

  it("returns the correct values for center bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "750px", left: "500px" }));
  });

  it("returns the correct values for right top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "250px", left: "750px" }));
  });

  it("returns the correct values for right center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "500px", left: "750px" }));
  });

  it("returns the correct values for right bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "750px", left: "750px" }));
  });
});

describe("it returns proper values for centered transformOrigin", () => {
  it("returns the correct values for left top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "200px", left: "200px" }));
  });

  it("returns the correct values for left bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "left", vertical: "bottom" },
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "700px", left: "200px" }));
  });

  it("returns the correct values for left center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "left", vertical: "center" },
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "450px", left: "200px" }));
  });

  it("returns the correct values for center top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "top" },
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "200px", left: "450px" }));
  });

  it("returns the correct values for center center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "center" },
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "450px", left: "450px" }));
  });

  it("returns the correct values for center bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "bottom" },
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "700px", left: "450px" }));
  });

  it("returns the correct values for right top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "top" },
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "200px", left: "700px" }));
  });

  it("returns the correct values for right center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "center" },
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "450px", left: "700px" }));
  });

  it("returns the correct values for right bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "bottom" },
      transformOrigin: { horizontal: "center", vertical: "center" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "700px", left: "700px" }));
  });
});

describe("it returns proper values for right top transformOrigin", () => {
  it("returns the correct values for left top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "250px", right: "750px" }));
  });

  it("returns the correct values for left bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "left", vertical: "bottom" },
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "750px", right: "750px" }));
  });

  it("returns the correct values for left center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "left", vertical: "center" },
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "500px", right: "750px" }));
  });

  it("returns the correct values for center top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "top" },
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "250px", right: "500px" }));
  });

  it("returns the correct values for center center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "center" },
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "500px", right: "500px" }));
  });

  it("returns the correct values for center bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "bottom" },
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "750px", right: "500px" }));
  });

  it("returns the correct values for right top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "top" },
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "250px", right: "250px" }));
  });

  it("returns the correct values for right center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "center" },
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "500px", right: "250px" }));
  });

  it("returns the correct values for right bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "bottom" },
      transformOrigin: { horizontal: "right", vertical: "top" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ top: "750px", right: "250px" }));
  });
});

describe("it returns proper values for left bottom transformOrigin", () => {
  it("returns the correct values for left top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "750px", left: "250px" }));
  });

  it("returns the correct values for left bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "left", vertical: "bottom" },
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "250px", left: "250px" }));
  });

  it("returns the correct values for left center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "left", vertical: "center" },
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "500px", left: "250px" }));
  });

  it("returns the correct values for center top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "top" },
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "750px", left: "500px" }));
  });

  it("returns the correct values for center center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "center" },
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "500px", left: "500px" }));
  });

  it("returns the correct values for center bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "bottom" },
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "250px", left: "500px" }));
  });

  it("returns the correct values for right top placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "top" },
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "750px", left: "750px" }));
  });

  it("returns the correct values for right center placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "center" },
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "500px", left: "750px" }));
  });

  it("returns the correct values for right bottom placement", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "right", vertical: "bottom" },
      transformOrigin: { horizontal: "left", vertical: "bottom" }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ bottom: "250px", left: "750px" }));
  });
});

describe("setting offsets work in different direction", () => {
  it("has proper top offset", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      offset: { top: 50, right: 0, bottom: 0, left: 0 }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ left: "250px", top: "300px" }));
  });

  it("has proper right offset", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      offset: { top: 0, right: 50, bottom: 0, left: 0 }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ left: "200px", top: "250px" }));
  });

  it("has proper bottom offset", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      offset: { top: 0, right: 0, bottom: 50, left: 0 }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ left: "250px", top: "200px" }));
  });

  it("has proper left offset", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      offset: { top: 0, right: 0, bottom: 0, left: 50 }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ left: "300px", top: "250px" }));
  });

  it("can handle multiple values", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      offset: { top: 50, right: 25, bottom: 25, left: 50 }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ left: "275px", top: "275px" }));
  });

  it("works with transformOrigin from bottom right as well", async () => {
    const { popover } = createUsePositionComponent(defaultParams => ({
      ...defaultParams,
      transformOrigin: { horizontal: "right", vertical: "bottom" },
      offset: { top: 50, right: 25, bottom: 25, left: 50 }
    }));

    await waitFor(() => expect(popover).toHaveStyle({ right: "725px", bottom: "725px" }));
  });
});
