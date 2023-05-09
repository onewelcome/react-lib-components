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
import { BaseButton, Props } from "./BaseButton";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {};

const createBaseButton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <BaseButton {...parameters} data-testid="baseButton">
      baseButton content
    </BaseButton>
  );
  const baseButton = queries.getByTestId("baseButton");

  return {
    ...queries,
    baseButton
  };
};

describe("BaseButton should render", () => {
  it("renders without crashing", () => {
    const { baseButton } = createBaseButton();

    expect(baseButton).toBeDefined();
    expect(baseButton).toHaveTextContent("baseButton content");
  });
});

describe("On click handler", () => {
  it("executes the onclick handler", async () => {
    const onClickHandler = jest.fn();
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      onClick: onClickHandler
    }));

    await userEvent.click(baseButton);

    expect(onClickHandler).toBeCalled();
  });
});

describe("Properties of the button", () => {
  it("should be disabled, function should not have been called", async () => {
    const onClickHandler = jest.fn();
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      disabled: true,
      onClick: onClickHandler
    }));

    await userEvent.click(baseButton);
    expect(onClickHandler).toHaveBeenCalledTimes(0);
  });

  it("when loading onClick function should not have been called", async () => {
    const onClickHandler = jest.fn();
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      loading: true,
      onClick: onClickHandler
    }));

    await userEvent.click(baseButton);
    expect(onClickHandler).toHaveBeenCalledTimes(0);
  });

  it('should have the class "TESTING"', () => {
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      className: "TESTING"
    }));

    expect(baseButton).toHaveClass("TESTING");
  });

  it('should have a "name" property with the value "button"', () => {
    const { baseButton } = createBaseButton(defaultParams => ({
      ...defaultParams,
      name: "button"
    }));

    expect(baseButton).toHaveAttribute("name", "button");
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

      return <BaseButton {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
