import React, { useEffect, useRef } from "react";
import { FormGroup, Props } from "./FormGroup";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  children: "Formcontent here",
  helperId: "helper_id",
  helperText: "example helper text",
  errorMessage: "example error message",
  errorId: "error_id"
};

const createFormGroup = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<FormGroup {...parameters} data-testid="formgroup"></FormGroup>);
  const formgroup = queries.getByTestId("formgroup");

  return {
    ...queries,
    formgroup
  };
};

describe("FormSelectorGroup should render", () => {
  it("renders without crashing", () => {
    const { formgroup } = createFormGroup();

    expect(formgroup).toBeDefined();
  });

  it("has the correct values and attributes", () => {
    const { getByTestId } = createFormGroup(defaultParams => ({
      ...defaultParams,
      helperProps: { "data-testid": "helper_text" }
    }));

    const helperText = getByTestId("helper_text");

    expect(helperText).toHaveAttribute("id", "helper_id");
    expect(helperText).toHaveTextContent("example helper text");
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

      return <FormGroup {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Correct error state", () => {
  it("has the correct state", () => {
    const { formgroup } = createFormGroup(defaultParams => ({
      ...defaultParams,
      error: true,
      errorMessage: "example error message",
      errorId: "error_id"
    }));
    const errorMessage = formgroup.querySelector(".error-message");

    expect(errorMessage).toBeTruthy();
    expect(errorMessage?.querySelector("#error_id")).toBeTruthy();
    expect(errorMessage?.querySelector("#error_id")).toHaveTextContent("example error message");
  });
});

describe("no helpertext, but errorMessage is defined", () => {
  it("doesn't show the div with 'default-helper' class when there's no error and no helpertext defined", () => {
    const { formgroup } = createFormGroup(defaultParams => ({
      ...defaultParams,
      error: false,
      helperText: undefined,
      errorMessage: "example error message"
    }));

    expect(formgroup.querySelector(".default-helper")).toBeFalsy();
  });

  it("does show the div with 'default-helper' class when there's an error and no helpertext defined", () => {
    const { formgroup } = createFormGroup(defaultParams => ({
      ...defaultParams,
      error: true,
      helperText: undefined,
      errorMessage: "example error message"
    }));

    expect(formgroup.querySelector(".default-helper")).toBeTruthy();
  });
});
