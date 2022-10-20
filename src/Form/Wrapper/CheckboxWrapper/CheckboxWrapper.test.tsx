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
import { CheckboxWrapper, Props } from "./CheckboxWrapper";
import { Checkbox, Props as CheckboxProps } from "../../Checkbox/Checkbox";
import { render } from "@testing-library/react";

const defaultParentParams: CheckboxProps = {
  indeterminate: false,
  name: "parentcheckbox",
  label: "testlabel",
  children: [
    <Checkbox checked={true} name="checkbox2">
      Checkbox 2
    </Checkbox>,
    <Checkbox name="checkbox3">Checkbox 3</Checkbox>
  ]
};

const defaultParams: Props = {
  onChange: jest.fn(),
  errorMessage: "This is an error",
  error: false,
  helperText: "Helpertext",
  name: "Checkboxwrapper",
  fieldsetProps: { legend: "Example title" },
  label: "Label",
  children: []
};

const createCheckboxWrapper = (
  params?: (defaultParams: Props) => Props,
  parentCheckboxParams?: (defaultParentParams: CheckboxProps) => CheckboxProps
) => {
  let parameters: Props = defaultParams;
  let parentCheckboxParameters: CheckboxProps = defaultParentParams;

  if (params) {
    parameters = params(defaultParams);
  }

  if (parentCheckboxParams) {
    parentCheckboxParameters = parentCheckboxParams(defaultParentParams);
  }

  const queries = render(
    <CheckboxWrapper {...parameters} data-testid="checkboxwrapper">
      <Checkbox data-testid="parentcheckbox" {...parentCheckboxParameters} />
    </CheckboxWrapper>
  );
  const checkboxwrapper = queries.getByTestId("checkboxwrapper");
  const parentcheckbox = queries.getByTestId("parentcheckbox");

  return {
    ...queries,
    checkboxwrapper,
    parentcheckbox
  };
};

describe("checkboxwrapper should render", () => {
  it("renders without crashing", () => {
    const { checkboxwrapper } = createCheckboxWrapper();
    expect(checkboxwrapper).toBeTruthy();
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

      return <CheckboxWrapper {...defaultParams} name="test" data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("CheckboxWrapper should have an error", () => {
  it("should have an error and the children checkboxes should have aria-describedby of the error message of the group.", () => {
    const { checkboxwrapper } = createCheckboxWrapper(defaultParams => ({
      ...defaultParams,
      error: true,
      errorMessage: "This is an error"
    }));

    const checkboxes = checkboxwrapper?.querySelectorAll(".checkbox-container input");
    const errorMessage = checkboxwrapper?.querySelector(".default-helper .error-message .message");

    /** All of the children checkboxes should be described by the error message in the parent checkbox group. */
    checkboxes?.forEach(box => {
      expect(box.getAttribute("aria-describedby")).toBe(errorMessage?.getAttribute("id"));
    });

    expect(checkboxes?.length).toBe(3);
    expect(errorMessage).toHaveTextContent("This is an error");
  });
});

describe("Parent checkbox attributes", () => {
  it("is indeterminate, label is set", () => {
    const { parentcheckbox, container } = createCheckboxWrapper(undefined, defaultParams => ({
      ...defaultParams,
      indeterminate: true
    }));

    expect(parentcheckbox.getAttribute("aria-checked")).toBe("mixed");
    expect(
      container.querySelector(`label[for="${parentcheckbox.getAttribute("id")}"]`)
    ).toHaveTextContent("testlabel");
  });
});
