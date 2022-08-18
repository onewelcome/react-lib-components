import React, { useRef, useEffect } from "react";
import { IconButton, Props } from "./IconButton";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  title: "iconbutton"
};

const createIconButton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <IconButton {...parameters} data-testid="iconButton">
      iconButton content
    </IconButton>
  );
  const iconButton = queries.getByTestId("iconButton");

  return {
    ...queries,
    iconButton
  };
};

describe("IconButton should render", () => {
  it("renders without crashing", () => {
    const { iconButton } = createIconButton();

    expect(iconButton).toBeDefined();
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

      return <IconButton {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Different variants of the button", () => {
  it('should have a class of "primary"', () => {
    const { iconButton } = createIconButton();
    expect(iconButton.classList.contains("primary")).toBe(true);
  });

  it('should have a class of "secondary"', () => {
    const { iconButton } = createIconButton(defaultParams => ({
      ...defaultParams,
      color: "secondary"
    }));
    expect(iconButton.classList.contains("secondary")).toBe(true);
  });

  it('should have a class of "tertiary"', () => {
    const { iconButton } = createIconButton(defaultParams => ({
      ...defaultParams,
      color: "tertiary"
    }));
    expect(iconButton.classList.contains("tertiary")).toBe(true);
  });

  it('should have a class of "fill"', () => {
    const { iconButton } = createIconButton(defaultParams => ({
      ...defaultParams,
      variant: "fill"
    }));
    expect(iconButton.classList.contains("fill")).toBe(true);
  });

  it('should have a class of "outline"', () => {
    const { iconButton } = createIconButton(defaultParams => ({
      ...defaultParams,
      variant: "outline"
    }));
    expect(iconButton.classList.contains("outline")).toBe(true);
  });

  it('should have a class of "text"', () => {
    const { iconButton } = createIconButton(defaultParams => ({
      ...defaultParams,
      variant: "text"
    }));
    expect(iconButton.classList.contains("text")).toBe(true);
  });
});
