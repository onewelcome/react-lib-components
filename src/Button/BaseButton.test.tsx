import React, { useEffect, useRef } from "react";
import { BaseButton, Props } from "./BaseButton";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {};

const createBaseButton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <BaseButton {...parameters} data-testid="baseButton">
      baseButton content
    </BaseButton>
  );
  const baseButton = queries.getByTestId("baseButton");

  return {
    ...queries,
    baseButton
  };
};

describe("BaseButton should render", () => {
  it("renders without crashing", () => {
    const { baseButton } = createBaseButton();

    expect(baseButton).toBeDefined();
    expect(baseButton).toHaveTextContent("baseButton content");
  });
});

describe("On click handler", () => {
  it("executes the onclick handler", async () => {
    const onClickHandler = jest.fn();
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      onClick: onClickHandler
    }));

    userEvent.click(baseButton);

    expect(onClickHandler).toBeCalled();
  });
});

describe("Properties of the button", () => {
  it("should be disabled, function should not have been called", () => {
    const onClickHandler = jest.fn();
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      disabled: true,
      onClick: onClickHandler
    }));

    userEvent.click(baseButton);
    expect(onClickHandler).toHaveBeenCalledTimes(0);
  });

  it('should have the class "TESTING"', () => {
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      className: "TESTING"
    }));

    expect(baseButton).toHaveClass("TESTING");
  });

  it('should have a "name" property with the value "button"', () => {
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      name: "button"
    }));

    expect(baseButton).toHaveAttribute("name", "button");
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

      return <BaseButton {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
