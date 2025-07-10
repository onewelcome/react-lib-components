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

import React, { useRef, useEffect } from "react";
import { Toggle, Props } from "./Toggle";
import { render } from "@testing-library/react";
import { Checkbox } from "../Checkbox/Checkbox";

const defaultParams: Props = {
  children: "Helper text",
  name: "example toggle",
  label: "Label"
};

const createToggle = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Toggle {...parameters} data-testid="toggle"></Toggle>);
  const toggle = queries.getByTestId("toggle");
  const toggleWrapper = toggle.closest(".toggle-wrapper");

  if (!toggleWrapper) {
    throw new Error("toggleWrapper is null");
  }

  return {
    ...queries,
    toggle,
    toggleWrapper
  };
};

describe("Toggle should render", () => {
  it("renders without crashing", () => {
    const { toggle } = createToggle();

    expect(toggle).toBeDefined();
  });
});

describe("Toggle attributes", () => {
  it("should be checked", () => {
    const { toggle } = createToggle(defaultParams => ({ ...defaultParams, checked: true }));

    expect(toggle).toHaveAttribute("aria-checked", "true");
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

      return (
        <Toggle {...defaultParams} data-ref="testing" ref={ref}>
          test label
        </Toggle>
      );
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("helperProps should be properly propagated down", () => {
  it("renders an anchor tag as helper", () => {
    const { getByTestId } = createToggle(defaultParams => ({
      ...defaultParams,
      helperProps: { children: <a data-testid="helpertextanchor">test</a> }
    }));

    const helperTextAnchor = getByTestId("helpertextanchor");

    expect(helperTextAnchor).toBeTruthy();
  });
});

describe("All the props", () => {
  it("should have toggle-wrapper--left class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      labelPosition: "left"
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--left");
  });

  it("should have toggle-wrapper--right class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      labelPosition: "right"
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--right");
  });

  it("should have toggle-wrapper--hide-label class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      hideLabel: true
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--hide-label");
  });

  it("should have toggle-wrapper--nowrap class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      labelOverflow: "nowrap"
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--nowrap");
  });

  it("should have toggle-wrapper--wrap class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      labelOverflow: "wrap"
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--wrap");
  });

  it("should have toggle-wrapper--emphasis class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      version: "emphasis"
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--emphasis");
  });

  it("should have toggle-wrapper--neutral class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      version: "neutral"
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--neutral");
  });

  it("should have toggle-wrapper--packed class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      spacing: "packed"
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--packed");
  });

  it("should have toggle-wrapper--between class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({
      ...defaultParams,
      spacing: "between"
    }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--between");
  });

  it("should have toggle-wrapper--disabled class", () => {
    const { toggleWrapper } = createToggle(defaultParams => ({ ...defaultParams, disabled: true }));

    expect(toggleWrapper).toHaveClass("toggle-wrapper--disabled");
  });

  it("should have a label", () => {
    const { getByText } = createToggle();

    expect(getByText("Label")).toBeTruthy();
  });
});
