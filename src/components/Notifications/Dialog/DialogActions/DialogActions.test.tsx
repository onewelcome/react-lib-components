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
import { DialogActions, Props } from "./DialogActions";
import { render } from "@testing-library/react";

const initParams: Props = {
  align: "right",
  children: "Content"
};

describe("DialogActions", () => {
  it("renders without crashing", () => {
    const { container } = render(<DialogActions {...initParams} />);

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass("actions");
    expect(dialogActionsContainer).toHaveTextContent(initParams.children as string);
  });

  it("should align items to left", () => {
    const { container } = render(<DialogActions {...initParams} align="left" />);

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass("actions", "left");
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

      return <DialogActions id="test" children="test" open={true} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
