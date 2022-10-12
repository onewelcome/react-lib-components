import React, { useEffect, useRef } from "react";
import { Skeleton, Props } from "./Skeleton";
import { render } from "@testing-library/react";

const defaultParams: Props = {};

const createSkeleton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Skeleton {...parameters} data-testid="skeleton" />);
  const skeleton = queries.getByTestId("skeleton");

  return {
    ...queries,
    skeleton
  };
};

describe("Skeleton should render", () => {
  it("renders without crashing", () => {
    const { skeleton } = createSkeleton();

    expect(skeleton).toHaveClass("skeleton text no-height", { exact: true });

    expect(skeleton).toBeDefined();
  });

  it("renders with properties passed", () => {
    const testClass = "testclass";
    const { skeleton } = createSkeleton(defaultParams => ({
      ...defaultParams,
      className: testClass
    }));

    expect(skeleton).toHaveClass(`skeleton text no-height ${testClass}`, { exact: true });
  });

  it("renders text variant with width and height", () => {
    const width = "10rem";
    const height = 10;
    const { skeleton } = createSkeleton(defaultParams => ({
      ...defaultParams,
      variant: "text",
      width,
      height
    }));

    expect(skeleton).toHaveClass(`skeleton text`, { exact: true });
    expect(skeleton).toHaveStyle({ width, height: "10px" });
  });

  it("renders rectangle variant", () => {
    const { skeleton } = createSkeleton(defaultParams => ({
      ...defaultParams,
      variant: "rectangle"
    }));

    expect(skeleton).toHaveClass(`skeleton no-height`, { exact: true });
  });

  it("renders circular variant", () => {
    const { skeleton } = createSkeleton(defaultParams => ({
      ...defaultParams,
      variant: "circular"
    }));

    expect(skeleton).toHaveClass(`skeleton no-height circular`, { exact: true });
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        propagateRef(ref);
      }, [ref]);

      return <Skeleton {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("div");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
