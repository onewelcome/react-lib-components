import React, { useRef, useEffect } from "react";
import { Toggle, Props } from "./Toggle";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  children: "label",
  name: "example toggle"
};

const createToggle = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Toggle {...parameters} data-testid="toggle">
      toggle content
    </Toggle>
  );
  const toggle = queries.getByTestId("toggle");

  return {
    ...queries,
    toggle
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

      return <Toggle {...defaultParams} data-ref="testing" ref={ref} />;
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
