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

    expect(slideInModal).toHaveClass("hide");

    rerender(<SlideInModal {...defaultParams} open />);
    fireEvent.transitionEnd(slideInModal);

    expect(slideInModal).not.toHaveClass("hide");

    rerender(<SlideInModal {...defaultParams} open={false} />);
    fireEvent.transitionEnd(slideInModal);

    expect(slideInModal).toHaveClass("hide");
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
