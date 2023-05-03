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
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Props, TextEllipsis } from "./TextEllipsis";

const defaultParams: Props = {};

const createTextEllipsis = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <TextEllipsis {...parameters} data-testid="TextEllipsis">
      content
    </TextEllipsis>
  );
  const textEllipsis = queries.getByTestId("TextEllipsis");

  return {
    ...queries,
    textEllipsis
  };
};

describe("TextEllipsis should render", () => {
  it("renders without crashing", () => {
    const { textEllipsis, getAllByText } = createTextEllipsis();

    expect(textEllipsis).toBeDefined();
    expect(getAllByText("content")).toHaveLength(2);
  });

  it("does not show popover when full text is visible", () => {
    const { textEllipsis, getByRole } = createTextEllipsis();

    expect(getByRole("tooltip", { hidden: true })).toHaveAttribute("data-hidden", "true");
    user.hover(textEllipsis);
    expect(getByRole("tooltip", { hidden: true })).toHaveAttribute("data-hidden", "true");
  });

  it("shows popover with full text when base text has ellipsis", () => {
    const { textEllipsis, getByRole } = createTextEllipsis();

    Object.defineProperty(textEllipsis, "offsetWidth", { configurable: true, value: 1 });
    Object.defineProperty(textEllipsis, "scrollWidth", { configurable: true, value: 2 });

    expect(getByRole("tooltip", { hidden: true })).toHaveAttribute("data-hidden", "true");
    user.hover(textEllipsis);
    expect(getByRole("tooltip", { hidden: true })).toHaveAttribute("data-hidden", "false");
    user.unhover(textEllipsis);
    expect(getByRole("tooltip", { hidden: true })).toHaveAttribute("data-hidden", "true");
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

      return <TextEllipsis data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
