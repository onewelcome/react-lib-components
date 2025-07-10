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
import { Props } from "../SideSheet/SideSheet";
import { render, fireEvent, getByTitle } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

const createSideSheetWithBackground = (
  buttonCallback: () => void,
  params?: (defaultParams: Props) => Props
) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(
    <div>
      <button onClick={buttonCallback}>Background button</button>
      <SideSheet {...parameters} data-testid="SideSheet" open />
    </div>
  );
  const SideSheetComponentWithBackground = queries.getByTestId("SideSheet");

  return {
    ...queries,
    SideSheetComponentWithBackground
  };
};

describe("SideSheet", () => {
  it("should render without crashing", () => {
    const { SideSheetComponent } = createSideSheet();

    expect(SideSheetComponent).toBeDefined();
  });

  it("should make modal content's container visible after opening transition ends", () => {
    const { SideSheetComponent, rerender } = createSideSheet();

    expect(SideSheetComponent).toHaveClass("hide");

    rerender(<SideSheet {...defaultParams} open />);
    fireEvent.transitionEnd(SideSheetComponent);

    expect(SideSheetComponent).not.toHaveClass("hide");

    rerender(<SideSheet {...defaultParams} open={false} />);
    fireEvent.transitionEnd(SideSheetComponent);

    expect(SideSheetComponent).toHaveClass("hide");
  });

  it("should render side sheet handle", async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    const { SideSheetComponent, getByTitle, rerender } = createSideSheet(props => ({
      ...defaultParams,
      handleButtonProps: { onOpen, onClose, title: "handle" }
    }));

    expect(SideSheetComponent).toHaveClass("hide");
    expect(getByTitle("handle")).toBeInTheDocument();

    await userEvent.click(getByTitle("handle"));

    expect(onOpen).toHaveBeenCalled();

    rerender(
      <SideSheet {...defaultParams} open handleButtonProps={{ onOpen, onClose, title: "handle" }} />
    );
    fireEvent.transitionEnd(SideSheetComponent);

    expect(getByTitle("handle")).toBeInTheDocument();

    await userEvent.click(getByTitle("handle"));

    expect(onClose).toHaveBeenCalled();
  });

  it("should allow interacting with background elements", async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const onButtonClick = jest.fn();

    const { SideSheetComponentWithBackground, getByTitle, getByText, rerender } =
      createSideSheetWithBackground(onButtonClick, props => ({
        ...defaultParams,
        handleButtonProps: { onOpen, onClose, title: "handle" }
      }));

    expect(SideSheetComponentWithBackground).toHaveClass("visible");
    expect(getByTitle("handle")).toBeInTheDocument();

    await userEvent.click(getByText("Background button"));

    expect(onButtonClick).toHaveBeenCalled();
    expect(SideSheetComponentWithBackground).toHaveClass("visible");
  });
});

describe("ref", () => {
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
