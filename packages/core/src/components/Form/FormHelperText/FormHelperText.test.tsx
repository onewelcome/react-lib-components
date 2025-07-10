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
import { FormHelperText, Props } from "./FormHelperText";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  error: false,
  children: "This is a field description"
};

const createFormHelperText = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<FormHelperText {...parameters} data-testid="formhelpertext" />);
  const formhelpertext = queries.getByTestId("formhelpertext");

  return {
    ...queries,
    formhelpertext
  };
};

describe("FormHelperText should render", () => {
  it("renders without crashing", () => {
    const { formhelpertext } = createFormHelperText();

    expect(formhelpertext).toBeTruthy();
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

      return <FormHelperText {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Attributes", () => {
  it("contains the error class", () => {
    const { formhelpertext } = createFormHelperText(defaultParams => ({
      ...defaultParams,
      error: true
    }));

    expect(formhelpertext).toHaveClass("error");
    expect(formhelpertext).toHaveStyle({ color: "rgb(226, 42, 29);" });
  });
});
