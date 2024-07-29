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
import { DataGridCell, Props } from "./DataGridCell";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  children: "cell"
};

const createDataGridCell = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement("tr");
  const queries = render(<DataGridCell {...parameters} data-testid="dataGridCell" />, {
    container
  });
  const dataGridCell = queries.getByTestId("dataGridCell");

  return {
    ...queries,
    dataGridCell
  };
};

describe("DataGridCell should render", () => {
  it("renders without crashing", () => {
    const { dataGridCell } = createDataGridCell();

    expect(dataGridCell).toBeDefined();
    expect(dataGridCell).toHaveClass("cell");
    expect(dataGridCell).toHaveTextContent(defaultParams.children as string);
  });

  it("renders with additional class", () => {
    const { dataGridCell } = createDataGridCell(params => ({ ...params, className: "test" }));

    expect(dataGridCell).toHaveClass("cell", "test");
  });

  it("renders loading state", () => {
    const { dataGridCell } = createDataGridCell(params => ({ ...params, isLoading: true }));

    const skeletonLoadingEl = dataGridCell.querySelector("div");
    expect(skeletonLoadingEl).toHaveClass("loading");
    expect(skeletonLoadingEl).toHaveAttribute("aria-busy", "true");
    expect(skeletonLoadingEl).toHaveAttribute("aria-live", "polite");
  });

  it("should render highlighted text once match is found", () => {
    const { dataGridCell } = createDataGridCell(params => ({
      ...params,
      searchValue: "ce"
    }));
    const highlightEl = dataGridCell.querySelector("span")?.querySelector("mark");
    expect(highlightEl).toBeDefined();
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

      return <DataGridCell {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("tr");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
