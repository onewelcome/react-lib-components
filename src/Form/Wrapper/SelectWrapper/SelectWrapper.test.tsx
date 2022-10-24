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
import { SelectWrapper, Props } from "./SelectWrapper";
import { render } from "@testing-library/react";
import { Option } from "../../Select/Option";
import userEvent from "@testing-library/user-event";

const onChangeHandler = jest.fn();

const defaultParams: Props = {
  children: [
    <Option key="1" value="option1">
      Option 1
    </Option>,
    <Option key="2" value="option2">
      Option 2
    </Option>,
    <Option key="3" value="option3">
      Option 3
    </Option>,
    <Option key="4" value="option4">
      Option 4
    </Option>
  ],
  label: "select_label",
  name: "select",
  helperText: "helpertext",
  helperProps: { "data-testid": "helpertext" },
  errorMessage: "errormessage",
  error: false,
  value: "option1",
  onChange: onChangeHandler
};

const createSelectWrapper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<SelectWrapper {...parameters} data-testid="selectwrapper" />);
  const selectwrapper = queries.getByTestId("selectwrapper");
  const select = selectwrapper.querySelector("button");

  return {
    ...queries,
    selectwrapper,
    select
  };
};

describe("SelectWrapper should render", () => {
  it("renders without crashing", () => {
    const { selectwrapper } = createSelectWrapper();

    expect(selectwrapper).toBeDefined();
  });
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
        <SelectWrapper
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

describe("SelectWrapper & Select have the right attributes", () => {
  it("select has aria values", async () => {
    const { select, getByTestId, findByText } = createSelectWrapper();

    const helpertext = getByTestId("helpertext");
    const label = await findByText("select_label");

    expect(select).toHaveAttribute("aria-describedby", helpertext.id);
    expect(select).toHaveAttribute("aria-labelledby", label.id);
  });

  it("SelectWrapper has the right helpertext", () => {
    const { getByTestId } = createSelectWrapper();

    const helpertext = getByTestId("helpertext");

    expect(helpertext).toBeTruthy();
    expect(helpertext).toHaveTextContent("helpertext");
  });

  it("Passes the proper helperProps class", () => {
    const { getByTestId } = createSelectWrapper(defaultParams => ({
      ...defaultParams,
      helperProps: { ...defaultParams.helperProps, className: "example-helper-classname" }
    }));

    const helpertext = getByTestId("helpertext");

    expect(helpertext.parentElement).toHaveClass("example-helper-classname");
  });

  it("Passes the proper selectProps class", () => {
    const { getByTestId } = createSelectWrapper(defaultParams => ({
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

  it("SelectWrapper has the right errormessage", async () => {
    const { findByText, select } = createSelectWrapper(defaultParams => ({
      ...defaultParams,
      error: true
    }));

    const errorMessage = await findByText("errormessage");

    expect(errorMessage).toBeTruthy();
    expect(select).toHaveAttribute("aria-describedby", errorMessage.id);
  });

  it("Fires the onChange event", async () => {
    const { select, findByText } = createSelectWrapper();

    userEvent.click(select as Element);

    const option3 = await findByText("Option 3");

    userEvent.click(option3 as Element);

    expect(onChangeHandler).toHaveBeenCalled();
  });
});
