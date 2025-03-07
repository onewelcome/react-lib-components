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

import React, { useRef, useEffect } from "react";
import { Button, Props } from "./Button";
import { render } from "@testing-library/react";
import { Icon, Icons } from "../Icon/Icon";

const defaultParams: Props = {};

const createButton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Button {...parameters} data-testid="button">
      button content
    </Button>
  );
  const button = queries.getByTestId("button");

  return {
    ...queries,
    button
  };
};

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

      return <Button {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Button", () => {
  it("should render without crashing", () => {
    const { button } = createButton();

    expect(button).toBeDefined();
  });

  it("should not be rendered when hidden attribute is used", () => {
    const { queryByRole } = createButton(defaultParams => ({
      ...defaultParams,
      hidden: true
    }));

    expect(queryByRole("button")).toBeNull();
    expect(queryByRole("button", { hidden: true })).toBeDefined();
  });
});

describe("Different variants of the button", () => {
  it('should have a class of "primary"', () => {
    const { button } = createButton();

    expect(button.classList.contains("primary")).toBe(true);
  });

  it('should have a class of "success"', () => {
    const { button } = createButton(defaultParams => ({ ...defaultParams, color: "success" }));

    expect(button.classList.contains("success")).toBe(true);
  });

  it('should have a class of "danger"', () => {
    const { button } = createButton(defaultParams => ({ ...defaultParams, color: "danger" }));

    expect(button.classList.contains("danger")).toBe(true);
  });

  it('should have a class of "warning"', () => {
    const { button } = createButton(defaultParams => ({ ...defaultParams, color: "warning" }));

    expect(button.classList.contains("warning")).toBe(true);
  });

  it('should have a class of "fill"', () => {
    const { button } = createButton(defaultParams => ({ ...defaultParams, variant: "fill" }));

    expect(button.classList.contains("fill")).toBe(true);
  });

  it('should have a class of "outline"', () => {
    const { button } = createButton(defaultParams => ({ ...defaultParams, variant: "outline" }));

    expect(button.classList.contains("outline")).toBe(true);
  });

  it('should have a class of "text"', () => {
    const { button } = createButton(defaultParams => ({ ...defaultParams, variant: "text" }));

    expect(button.classList.contains("text")).toBe(true);
  });
});

describe("Button contains an icon", () => {
  it("Contains an icon at the start", () => {
    const { button } = createButton(defaultParams => ({
      ...defaultParams,
      startIcon: <Icon icon={Icons.Calendar} />
    }));

    expect(button.classList.contains("has-icon")).toBe(true);
    expect(button.firstElementChild?.nodeName).toBe("I");
    expect(button.querySelector("i + span")!.innerHTML).toBe("button content");
  });

  it("Contains an icon at the end", () => {
    const { button } = createButton(defaultParams => ({
      ...defaultParams,
      endIcon: <Icon icon={Icons.Calendar} />
    }));

    expect(button.classList.contains("has-icon")).toBe(true);
    expect(button.lastElementChild?.nodeName).toBe("I");
    expect(button.querySelector("span")!.innerHTML).toBe("button content");
  });

  it("Should not be rendered when hidden attribute is used", () => {
    const { button, queryByRole } = createButton(defaultParams => ({
      ...defaultParams,
      hidden: true,
      endIcon: <Icon icon={Icons.Calendar} />,
      startIcon: <Icon icon={Icons.Calendar} />
    }));

    expect(queryByRole("button")).toBeNull();
    expect(queryByRole("button", { hidden: true })).toBeDefined();
  });
});
