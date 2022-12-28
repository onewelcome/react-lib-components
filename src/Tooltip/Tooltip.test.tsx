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

import React, { useEffect, useRef } from "react";
import { Tooltip, Props } from "./Tooltip";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  children: "This is a test message",
  label: "Label"
};

const createTooltip = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Tooltip {...parameters} data-testid="tooltip" />);
  const tooltip = queries.getByTestId("tooltip");

  return {
    ...queries,
    tooltip
  };
};

describe("Tooltip should render", () => {
  it("renders without crashing", async () => {
    const { tooltip, getByText } = createTooltip(defaultParams => ({
      ...defaultParams,
      className: "testing"
    }));

    const tooltipText = getByText("This is a test message");
    const label = getByText("Label");

    expect(tooltip).toHaveClass("testing");
    await waitFor(() => expect(tooltipText).toHaveStyle({ top: "0px", left: "16px" }));
    expect(label).toBeTruthy();
    expect(tooltipText).toBeTruthy();
    expect(tooltip).toBeTruthy();
  });

  it("renders with label as ReactElement", () => {
    const labelText = "llaabbeell";
    const { getByText } = createTooltip(defaultParams => ({
      ...defaultParams,
      label: <div>{labelText}</div>
    }));

    expect(getByText(labelText)).toBeDefined();
  });

  it("should override the default placement and offset values", async () => {
    const { tooltip, getByText } = createTooltip(defaultParams => ({
      ...defaultParams,
      placement: { horizontal: "center", vertical: "center" },
      offset: { top: 0, right: 16, left: 0, bottom: 16 },
      transformOrigin: { horizontal: "right", vertical: "bottom" }
    }));

    const tooltipText = getByText("This is a test message");
    await waitFor(() => expect(tooltipText).toHaveStyle({ right: "1024px", bottom: "768px" }));
    expect(tooltip).toBeTruthy();
  });
});

describe("It opens the tooltip", () => {
  it("opens", () => {
    const { tooltip, getByText } = createTooltip();

    const icon = tooltip.querySelector(".icon")!;
    const tooltipHover = getByText("This is a test message");
    userEvent.hover(icon);

    expect(tooltipHover).toHaveClass("visible");
    expect(tooltipHover).toHaveAttribute("aria-hidden", "false");

    userEvent.keyboard("{escape}");

    expect(tooltipHover).not.toHaveClass("visible");
    expect(tooltipHover).toHaveAttribute("aria-hidden", "true");
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref);
        }
      }, [ref]);

      return <Tooltip {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
