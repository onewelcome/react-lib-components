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
import { FormControl, Props } from "./FormControl";
import { render } from "@testing-library/react";
import { Input } from "../Input/Input";

const defaultParams: Props = {
  grid: 3,
  align: "center",
  children: [
    <Input placeholder="This is a placeholder" name="example" data-testid="input" type="text" />,
    <Input placeholder="This is a placeholder" name="example" data-testid="input" type="text" />,
    <Input placeholder="This is a placeholder" name="example" data-testid="input" type="text" />
  ]
};

const createFormControl = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<FormControl {...parameters} data-testid="formcontrol" />);
  const formcontrol = queries.getByTestId("formcontrol");

  return {
    ...queries,
    formcontrol
  };
};

describe("FormControl should render", () => {
  it("renders without crashing", () => {
    const { formcontrol } = createFormControl();

    expect(formcontrol).toBeTruthy();
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

      return <FormControl {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("FormControl attributes should be working correctly", () => {
  it("has the right classes and attributes", () => {
    const { formcontrol } = createFormControl();

    expect(formcontrol).toHaveClass("grid");
    expect(formcontrol.firstChild).toHaveClass("col-3");
  });
});

describe("FormControl children should render properly", () => {
  it("renders children", () => {
    const { getAllByTestId } = createFormControl();

    const inputs = getAllByTestId("input");

    expect(inputs).toBeTruthy();
    expect(inputs).toHaveLength(3);
  });
});
