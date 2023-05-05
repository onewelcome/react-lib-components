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
import { BaseModalHeader, Props } from "./BaseModalHeader";
import { render, getByRole, getByTestId, getByText } from "@testing-library/react";
import { labelId } from "../BaseModalContext";
import userEvent from "@testing-library/user-event";

const additionalContent = "Additional content";
const initParams: Props = {
  id: labelId("modal"),
  title: "Example title",
  onClose: jest.fn(),
  children: <div data-testid="additional-content">{additionalContent}</div>
};

describe("BaseModalHeader", () => {
  it("renders without crashing", async () => {
    const { container } = render(<BaseModalHeader {...initParams} />);
    const closeBtn = getByRole(container, "button");
    expect(initParams.onClose).toBeCalledTimes(0);

    await await userEvent.click(closeBtn);

    const dialogContentContainer = container.children[0];
    const titleContainer = getByText(container, initParams.title);
    expect(dialogContentContainer).toHaveClass("header");
    expect(titleContainer).toHaveAttribute("id", "modal-label");
    expect(getByTestId(container, "additional-content")).toHaveTextContent(additionalContent);
    expect(initParams.onClose).toBeCalledTimes(1);
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

      return (
        <BaseModalHeader id="test" title="test" onClose={jest.fn()} data-ref="testing" ref={ref} />
      );
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
