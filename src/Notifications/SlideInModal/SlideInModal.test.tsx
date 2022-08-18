import React, { useEffect, useRef } from "react";
import { SlideInModal } from "./SlideInModal";
import { Props } from "../Modal/Modal";
import { render, fireEvent } from "@testing-library/react";

const defaultParams: Props = {
  id: "",
  children: undefined,
  open: false
};

const createSlideInModal = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<SlideInModal {...parameters} data-testid="SlideInModal" />);
  const slideInModal = queries.getByTestId("SlideInModal");

  return {
    ...queries,
    slideInModal
  };
};

describe("SlideInModal should render", () => {
  it("renders without crashing", () => {
    const { slideInModal } = createSlideInModal();

    expect(slideInModal).toBeDefined();
  });

  it("makes modal content's container visible after opening transition ends", () => {
    const { slideInModal, rerender } = createSlideInModal();

    expect(slideInModal).toHaveClass("hidden");

    rerender(<SlideInModal {...defaultParams} open />);
    fireEvent.transitionEnd(slideInModal);

    expect(slideInModal).not.toHaveClass("hidden");
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

      return <SlideInModal {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
