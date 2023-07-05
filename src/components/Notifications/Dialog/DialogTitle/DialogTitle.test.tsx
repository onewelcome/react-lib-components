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
import { DialogTitle, Props } from "./DialogTitle";
import { render, getByText } from "@testing-library/react";

const initParams: Props = {
  id: "dialog-label",
  title: "Example title"
};

describe("DialogTitle", () => {
  it("renders without crashing", () => {
    const { container } = render(<DialogTitle {...initParams} />);

    const dialogTitleContainer = container.children[0];
    expect(dialogTitleContainer).toHaveClass("header");
    expect(getByText(container, initParams.title));
  });

  it("should render a title icon", () => {
    const { container } = render(<DialogTitle {...initParams} titleIcon={true} />);

    const dialogTitleContainer = container.children[0];
    expect(dialogTitleContainer).toHaveClass("header");
    expect(getByText(container, initParams.title));
  });

  it("should render a custom title icon", () => {
    const { container } = render(
      <DialogTitle {...initParams} titleIcon={<div>Custom Icon</div>} />
    );

    const dialogTitleContainer = container.children[0];
    expect(dialogTitleContainer).toHaveClass("header");
    expect(getByText(container, initParams.title));
  });

  it("should render a caption", () => {
    const { container } = render(<DialogTitle {...initParams} caption="Example caption" />);

    const dialogTitleContainer = container.children[0];
    expect(dialogTitleContainer).toHaveClass("header");
    expect(getByText(container, initParams.title));
    expect(getByText(container, "Example caption"));
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

      return <DialogTitle title="test" id="test" data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
