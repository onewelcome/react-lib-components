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

import React, { Fragment, useEffect, useState } from "react";
import { useRepeater } from "./useRepeater";
import { render } from "@testing-library/react";
import { InputWrapper } from "../components/Form/Wrapper/InputWrapper/InputWrapper";
import { generateID } from "../util/helper";
import userEvent from "@testing-library/user-event";

export interface RepeatedComponentProps {
  onChange?: (state: { [key: string]: unknown }) => void;
  identifier?: string;
}

const ComponentToRepeat = ({ onChange, identifier }: RepeatedComponentProps) => {
  const [inputState, setInputState] = useState({
    errorMessage: "random error",
    error: false,
    value: "",
    identifier: identifier
  });

  useEffect(() => {
    onChange?.(inputState);
  }, [inputState]);

  return (
    <InputWrapper
      helperText="Helper text for this field. Description should be short and not repeat the label"
      name={`input_${identifier}`}
      errorMessage={inputState.errorMessage}
      type="text"
      error={inputState.error}
      value={inputState.value}
      label="Label for this inputfield"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setInputState(prevState => ({ ...prevState, value: event.target?.value }));
      }}
    />
  );
};

describe("useRepeater should render", () => {
  it("renders without crashing and repeats 1 item", () => {
    const onChangeHandler = jest.fn();

    const App = () => {
      const { repeatedComponents } = useRepeater({
        componentToRepeat: <ComponentToRepeat onChange={onChangeHandler} />
      });

      return (
        <div>
          {repeatedComponents.map((component, index) =>
            React.cloneElement(component, {
              identifier: `component_${index}`
            })
          )}
        </div>
      );
    };

    const renderedItems = render(<App />);

    const inputWrappers = renderedItems.container.querySelectorAll(".wrapper.input-wrapper");

    expect(inputWrappers.length).toBe(1);
  });

  it("should repeat 2 items", () => {
    const onChangeHandler = jest.fn();

    const App = () => {
      const { repeatedComponents, repeat } = useRepeater({
        componentToRepeat: <ComponentToRepeat onChange={onChangeHandler} />
      });

      useEffect(() => {
        repeat();
      }, []);

      return (
        <div>
          {repeatedComponents.map((component, index) =>
            React.cloneElement(component, {
              identifier: `component_${index}`
            })
          )}
        </div>
      );
    };

    const renderedItems = render(<App />);

    const inputWrappers = renderedItems.container.querySelectorAll(".wrapper.input-wrapper");

    expect(inputWrappers.length).toBe(2);
  });

  it("should repeat 3 items and remove the first index", async () => {
    const onChangeHandler = jest.fn();

    const App = () => {
      const { repeatedComponents, repeat, remove } = useRepeater({
        componentToRepeat: <ComponentToRepeat onChange={onChangeHandler} />
      });

      useEffect(() => {
        repeat();
        repeat();
      }, []);

      return (
        <div>
          {repeatedComponents.map((component, index) => (
            <Fragment key={index}>
              {React.cloneElement(component, {
                identifier: generateID()
              })}
              <button id={`remove_input_${index}`} onClick={() => remove(component)}>
                Remove
              </button>
            </Fragment>
          ))}
        </div>
      );
    };

    const renderedItems = render(<App />);

    const secondInputID = renderedItems.container.querySelectorAll(".input-wrapper input")[1].id;

    const removeButton = renderedItems.container.querySelector("#remove_input_1");

    await userEvent.click(removeButton!);

    expect(renderedItems.container.querySelector(`#${secondInputID}`)).toBeFalsy();
    const inputWrappers = renderedItems.container.querySelectorAll(".wrapper.input-wrapper");
    expect(inputWrappers.length).toBe(2);
  });
});
