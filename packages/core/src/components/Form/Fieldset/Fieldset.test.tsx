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
import { Fieldset, Props } from "./Fieldset";
import { render } from "@testing-library/react";
import { FormControl } from "../FormControl/FormControl";
import { Input } from "../Input/Input";
import { Select } from "../Select/SingleSelect/Select";
import { Option } from "../Select/SingleSelect/Option";

const defaultParams: Props = {
  legend: "Example",
  legendStyle: "h2",
  children: [
    <FormControl data-testid="form-control">
      <Input placeholder="This is a placeholder" name="example" type="text" />
    </FormControl>,
    <FormControl data-testid="form-control">
      <Select name="Example select" value="placeholder" onChange={jest.fn}>
        <Option value="option1">Option1</Option>
        <Option value="option2">Option2</Option>
        <Option value="option3">Option3</Option>
      </Select>
    </FormControl>
  ]
};

const createFieldset = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Fieldset {...parameters} data-testid="fieldset" />);
  const fieldset = queries.getByTestId("fieldset");

  return {
    ...queries,
    fieldset
  };
};

describe("Fieldset should render", () => {
  it("renders without crashing", () => {
    const { fieldset } = createFieldset();

    expect(fieldset).toBeTruthy();
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

      return <Fieldset {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Fieldset should get proper attributes and classes", () => {
  it("has no padding class", () => {
    const { fieldset } = createFieldset(defaultParams => ({ ...defaultParams, noPadding: true }));

    expect(fieldset).toHaveClass("no-padding");
  });

  it("has no background styling", () => {
    const { fieldset } = createFieldset(defaultParams => ({
      ...defaultParams,
      noBackground: true
    }));

    expect(fieldset.style.backgroundColor).toBe("");
  });

  it("has a correct legend and title <span> element", () => {
    const { getByText } = createFieldset();

    const legend = getByText(/example/i, { selector: "legend" });
    const title = getByText(/example/i, { selector: "span" });

    expect(legend).toHaveTextContent("Example");
    expect(legend).toBeTruthy();
    expect(title).toHaveClass("typography_style_h2");
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent("Example");
  });

  it("renders its children correctly", () => {
    const { getAllByTestId } = createFieldset();

    const formcontrols = getAllByTestId("form-control");

    expect(formcontrols).toBeTruthy();
    expect(formcontrols).toHaveLength(2);
  });
});
