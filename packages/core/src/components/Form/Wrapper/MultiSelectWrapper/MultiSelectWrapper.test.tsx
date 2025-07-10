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
import { MultiSelectWrapper, Props } from "./MultiSelectWrapper";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultiOption } from "../../Select/MultiSelect/MultiOption";

const onChangeHandler = jest.fn();

const defaultParams: Props = {
  success: false,
  children: [
    <MultiOption key="1" value="option1">
      MultiOption 1
    </MultiOption>,
    <MultiOption key="2" value="option2">
      MultiOption 2
    </MultiOption>,
    <MultiOption key="3" value="option3">
      MultiOption 3
    </MultiOption>,
    <MultiOption key="4" value="option4">
      MultiOption 4
    </MultiOption>
  ],
  label: "select_label",
  name: "select",
  helperText: "helpertext",
  helperProps: { "data-testid": "helpertext" },
  errorMessage: "errormessage",
  error: false,
  value: ["option1", "option2"],
  onChange: onChangeHandler
};

const createMultiSelectWrapper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<MultiSelectWrapper {...parameters} data-testid="multiselectwrapper" />);
  const multiselectwrapper = queries.getByTestId("multiselectwrapper");
  const select = multiselectwrapper.querySelector("button");

  return {
    ...queries,
    multiselectwrapper,
    select
  };
};

const scrollTo = jest.fn;

const turnOnScrollToFunctionSupportInTest = () => {
  Element.prototype.scrollTo = scrollTo;
};

describe("<MultiSelectWrapper />", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("should render without crashing", () => {
    const { multiselectwrapper } = createMultiSelectWrapper();

    expect(multiselectwrapper).toBeDefined();
  });

  describe("ref should work", () => {
    it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
      const ExampleComponent = ({
        propagateRef
      }: {
        propagateRef?: (
          ref: React.RefObject<HTMLElement>,
          innerRef: React.RefObject<HTMLInputElement>
        ) => void;
      }) => {
        const ref = useRef(null);
        const innerRef = useRef(null);

        useEffect(() => {
          if (ref.current) {
            propagateRef && propagateRef(ref, innerRef);
          }
        }, [ref]);

        return (
          <MultiSelectWrapper
            {...defaultParams}
            selectProps={{ ref: innerRef, "data-ref": "inner-testing" }}
            name="test"
            data-ref="testing"
            ref={ref}
          />
        );
      };

      const refCheck = (
        ref: React.RefObject<HTMLElement>,
        innerRef: React.RefObject<HTMLElement>
      ) => {
        expect(ref.current).toHaveAttribute("data-ref", "testing");
        expect(innerRef.current!.nodeName).toBe("SELECT");
      };

      render(<ExampleComponent propagateRef={refCheck} />);
    });
  });

  describe("MultiSelectWrapper & Select have the right attributes", () => {
    it("should select has aria values", async () => {
      const { select, getByTestId, findByText } = createMultiSelectWrapper();

      const helpertext = getByTestId("helpertext");
      const label = await findByText("select_label");

      expect(select).toHaveAttribute("aria-describedby", helpertext.id);
      expect(select).toHaveAttribute("aria-labelledby", label.id);
    });

    it("should MultiSelectWrapper has the right helpertext", () => {
      const { getByTestId } = createMultiSelectWrapper();

      const helpertext = getByTestId("helpertext");

      expect(helpertext).toBeTruthy();
      expect(helpertext).toHaveTextContent("helpertext");
    });

    it("should pass the proper helperProps class", () => {
      const { getByTestId } = createMultiSelectWrapper(defaultParams => ({
        ...defaultParams,
        helperProps: { ...defaultParams.helperProps, className: "example-helper-classname" }
      }));

      const helpertext = getByTestId("helpertext");

      expect(helpertext.parentElement).toHaveClass("example-helper-classname");
    });

    it("should pass the proper selectProps class", () => {
      const { getByTestId } = createMultiSelectWrapper(defaultParams => ({
        ...defaultParams,
        selectProps: {
          ...defaultParams.selectProps,
          "data-testid": "select-element",
          className: "example-select-classname"
        }
      }));

      const select = getByTestId("select-element");

      expect(select).toHaveClass("example-select-classname");
    });

    it("should MultiSelectWrapper has the right errormessage", async () => {
      const { findByText, select } = createMultiSelectWrapper(defaultParams => ({
        ...defaultParams,
        error: true
      }));

      const errorMessage = await findByText("errormessage");

      expect(errorMessage).toBeTruthy();
      expect(select).toHaveAttribute("aria-describedby", errorMessage.id);
    });

    it("should fire the onChange event", async () => {
      const { select, findByText } = createMultiSelectWrapper();

      await userEvent.click(select as Element);

      const option3 = await findByText("MultiOption 3");

      await userEvent.click(option3 as Element);

      expect(onChangeHandler).toHaveBeenCalled();
    });
  });
});
