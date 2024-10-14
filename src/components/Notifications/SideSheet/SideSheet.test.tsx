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
import { SideSheet } from "./SideSheet";
import { Props } from "../Modal/Modal";
import { render, fireEvent } from "@testing-library/react";

const defaultParams: Props = {
  id: "",
  children: undefined,
  open: false
};

const createSideSheet = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<SideSheet {...parameters} data-testid="SideSheet" />);
  const SideSheetComponent = queries.getByTestId("SideSheet");

  return {
    ...queries,
    SideSheetComponent
  };
};

describe("SideSheet should render", () => {
  it("renders without crashing", () => {
    const { SideSheetComponent } = createSideSheet();

    expect(SideSheetComponent).toBeDefined();
  });

  it("makes modal content's container visible after opening transition ends", () => {
    const { SideSheetComponent, rerender } = createSideSheet();

    expect(SideSheetComponent).toHaveClass("hide");

    rerender(<SideSheet {...defaultParams} open />);
    fireEvent.transitionEnd(SideSheetComponent);

    expect(SideSheetComponent).not.toHaveClass("hide");

    rerender(<SideSheet {...defaultParams} open={false} />);
    fireEvent.transitionEnd(SideSheetComponent);

    expect(SideSheetComponent).toHaveClass("hide");
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

      return <SideSheet {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
