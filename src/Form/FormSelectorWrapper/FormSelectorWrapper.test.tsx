import React, { useRef, useEffect } from "react";
import { FormSelectorWrapper, Props } from "./FormSelectorWrapper";
import { render } from "@testing-library/react";

const defaultParams: Props = {};

const createFormSelectorWrapper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <FormSelectorWrapper {...parameters} data-testid="formSelectorWrapper">
      formSelectorWrapper content
    </FormSelectorWrapper>
  );
  const formSelectorWrapper = queries.getByTestId("formSelectorWrapper");

  return {
    ...queries,
    formSelectorWrapper
  };
};

describe("FormSelectorWrapper should render", () => {
  it("renders without crashing", () => {
    const { formSelectorWrapper } = createFormSelectorWrapper();

    expect(formSelectorWrapper).toBeDefined();
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (
        ref: React.RefObject<HTMLElement>,
        ref2: React.RefObject<HTMLElement>,
        ref3: React.RefObject<HTMLElement>
      ) => void;
    }) => {
      const ref = useRef(null);
      const helperRef = useRef(null);
      const containerRef = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref, helperRef, containerRef);
        }
      }, [ref]);

      return (
        <FormSelectorWrapper
          {...defaultParams}
          containerProps={{ "data-ref": "testing", ref: containerRef }}
          helperText="helpertext"
          helperProps={{ "data-ref": "testing", ref: helperRef }}
          data-ref="testing"
          ref={ref}
        />
      );
    };

    const refCheck = (
      ref: React.RefObject<HTMLElement>,
      ref2: React.RefObject<HTMLElement>,
      ref3: React.RefObject<HTMLElement>
    ) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
      expect(ref2.current).toHaveAttribute("data-ref", "testing");
      expect(ref3.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
