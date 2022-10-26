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
import { DataGridColumnsToggle, Props } from "./DataGridColumnsToggle";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  open: true,
  headers: [
    { headline: "Name", name: "name" },
    { headline: "Date", name: "date", hidden: true }
  ],
  onClose: jest.fn(),
  onToggleClicked: jest.fn()
};

const createDataGridColumnsToggle = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DataGridColumnsToggle {...parameters} data-testid="dataGridColumnsToggle" />
  );
  const dataGridColumnsToggle = queries.getByTestId("dataGridColumnsToggle");

  return {
    ...queries,
    dataGridColumnsToggle
  };
};

describe("DataGridColumnsToggle should render", () => {
  it("renders without crashing", () => {
    const { dataGridColumnsToggle, getByLabelText, getByText } = createDataGridColumnsToggle();

    expect(dataGridColumnsToggle).toBeDefined();
    expect(getByText("Show columns")).toBeDefined();
    expect(getByLabelText(defaultParams.headers[0].headline)).toBeChecked();
    expect(getByLabelText(defaultParams.headers[1].headline)).not.toBeChecked();
  });
});

describe("DataGridColumnsToggle should be interactive", () => {
  it("clicking on close calls onClose callback", () => {
    const { getByRole } = createDataGridColumnsToggle();

    userEvent.click(getByRole("button"));

    expect(defaultParams.onClose).toBeCalledTimes(1);
  });

  it("clicking outside of container (on backdrop layer) calls onClose callback", () => {
    createDataGridColumnsToggle();

    userEvent.click(document.querySelector(".backdrop")!);

    expect(defaultParams.onClose).toBeCalledTimes(1);
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        propagateRef(ref);
      }, [ref]);

      return <DataGridColumnsToggle {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
