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
import { BaseModalActions } from "./BaseModalActions";
import { render } from "@testing-library/react";

describe("BaseModalActions", () => {
  it("renders without crashing", () => {
    const children = "Content";
    const classNames = ["class1", "class2"];
    const { container } = render(
      <BaseModalActions className={classNames.join(" ")}>{children}</BaseModalActions>
    );

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass("actions", classNames[0], classNames[1]);
    expect(dialogActionsContainer).toHaveTextContent(children);
  });

  it("Shouldn't render cancel button if we don't pass label", () => {
    const { container } = render(<BaseModalActions />);
    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass("actions");
    expect(dialogActionsContainer).not.toHaveTextContent("Cancel");
  });

  it("Should render a cancel button with a `Close` label if onClose property is passed", () => {
    const cancelAction = { label: "Close" };
    const { container } = render(
      <BaseModalActions onClose={() => {}} cancelAction={cancelAction} />
    );

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass("actions");
    expect(dialogActionsContainer).toHaveTextContent(cancelAction.label);
  });

  it("Shouldn't render a cancel button with a `Close` label if onClose property was not passed", () => {
    const cancelAction = { label: "Close" };
    const { container } = render(<BaseModalActions cancelAction={cancelAction} />);

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass("actions");
    expect(dialogActionsContainer).not.toHaveTextContent(cancelAction.label);
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

      return <BaseModalActions onClose={jest.fn()} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
