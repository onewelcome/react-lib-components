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
import { BaseModalContent, Props } from "./BaseModalContent";
import { render } from "@testing-library/react";
import { descriptionId } from "../BaseModalContext";

const classNames = ["class1", "class2"];
const initParams: Props = {
  id: descriptionId("modal"),
  className: classNames.join(" "),
  children: "This is example dialog content."
};

describe("BaseModalContent", () => {
  it("renders without crashing", () => {
    const { container } = render(<BaseModalContent {...initParams} />);

    const dialogContentContainer = container.children[0];
    expect(dialogContentContainer).toHaveClass("content", classNames[0], classNames[1]);
    expect(dialogContentContainer).toHaveTextContent(initParams.children as string);
    expect(dialogContentContainer).toEqual(document.activeElement);
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

        return <BaseModalContent children="test" data-ref="testing" ref={ref} />;
      };

      const refCheck = (ref: React.RefObject<HTMLElement>) => {
        expect(ref.current).toHaveAttribute("data-ref", "testing");
      };

      render(<ExampleComponent propagateRef={refCheck} />);
    });
  });

  it("should renders not focused div", () => {
    const { container } = render(<BaseModalContent {...initParams} disableAutoFocus />);

    const dialogContentContainer = container.children[0];
    expect(dialogContentContainer).not.toEqual(document.activeElement);
  });
});
