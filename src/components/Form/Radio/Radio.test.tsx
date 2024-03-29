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
import { Radio, Props } from "./Radio";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const onChangeHandeler = jest.fn();

const defaultParams: Props = {
  value: "test",
  children: "Label",
  checked: false,
  error: false,
  errorMessage: "errormessage",
  disabled: false,
  formSelectorWrapperProps: { "data-testid": "radiowrapper" },
  helperText: "helpertext",
  onChange: onChangeHandeler
};

const createRadio = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Radio {...parameters} data-testid="radio" />);
  const radio = queries.getByTestId("radio");
  const radiowrapper = queries.getByTestId("radiowrapper");

  return {
    ...queries,
    radio,
    radiowrapper
  };
};

describe("Radio should render", () => {
  it("renders without crashing and has proper attributes/values", () => {
    const { radio } = createRadio();

    expect((radio as HTMLInputElement).value).toBe("test");
    expect((radio as HTMLInputElement).checked).toBe(false);
    expect(radio).toBeTruthy();
  });

  it("it is checked", () => {
    const { radio } = createRadio(defaultParams => ({ ...defaultParams, checked: true }));

    expect((radio as HTMLInputElement).checked).toBe(true);
  });

  it("it is disabled", () => {
    const { radio, radiowrapper } = createRadio(defaultParams => ({
      ...defaultParams,
      disabled: true
    }));

    expect((radio as HTMLInputElement).disabled).toBe(true);
    expect(radiowrapper).toHaveClass("disabled");
  });

  it("has the correct describedby value when theres no error", async () => {
    const { radio, findByText } = createRadio(defaultParams => ({
      ...defaultParams,
      error: true
    }));

    const error = await findByText("errormessage");

    expect(radio).toHaveAttribute("aria-describedby", error.id);
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

      return <Radio {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Radio should be interactive", () => {
  it("should call onChange when clicked", async () => {
    const { radio } = createRadio();

    expect(onChangeHandeler).not.toBeCalled();
    await userEvent.click(radio);
    expect(onChangeHandeler).toBeCalledTimes(1);
  });

  it("should not call onChange when disabled", async () => {
    const { radio } = createRadio(defaultParams => ({ ...defaultParams, disabled: true }));

    await userEvent.click(radio);
    expect(onChangeHandeler).not.toBeCalled();
  });
});
