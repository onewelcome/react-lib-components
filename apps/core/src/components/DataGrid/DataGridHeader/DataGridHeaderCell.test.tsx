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
import { DataGridHeaderCell, Props } from "./DataGridHeaderCell";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = { name: "name-123", headline: "Test" };

const createDataGridHeaderCell = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement("tr");
  const queries = render(<DataGridHeaderCell {...parameters} data-testid="dataGridHeaderCell" />, {
    container
  });
  const dataGridHeaderCell = queries.getByTestId("dataGridHeaderCell");

  return {
    ...queries,
    dataGridHeaderCell
  };
};

describe("DataGridHeaderCell should render", () => {
  it("renders without crashing", () => {
    const { dataGridHeaderCell, queryByRole } = createDataGridHeaderCell();

    expect(dataGridHeaderCell).toBeDefined();
    expect(dataGridHeaderCell).toHaveTextContent(defaultParams.headline);
    expect(queryByRole("button")).toBeDefined();
    expect(dataGridHeaderCell.querySelectorAll("[data-icon]")).toHaveLength(1);
  });

  it("renders without sorting indicators (icons)", () => {
    const { dataGridHeaderCell } = createDataGridHeaderCell(params => ({
      ...params,
      disableSorting: true
    }));

    expect(dataGridHeaderCell.querySelector("[data-icon]")).toBeNull();
  });

  it("renders DESC and ASC sorting indicators (icons) when sorting is enabled and current sorting is not defined", () => {
    const { dataGridHeaderCell } = createDataGridHeaderCell();

    expect(dataGridHeaderCell).toBeDefined();
    const sortingIcons = dataGridHeaderCell.querySelectorAll("[data-icon]");
    expect(sortingIcons).toHaveLength(1);
    sortingIcons.forEach(icon => {
      expect(icon).toHaveClass("indicator");
      expect(icon).not.toHaveClass("active");
      expect(icon).not.toHaveClass("hidden");
    });
  });

  it("renders ASC sorting indicator (icon) when sorting is enabled and current sorting is ASC", () => {
    const { dataGridHeaderCell } = createDataGridHeaderCell(params => ({
      ...params,
      activeSortDirection: "ASC"
    }));

    expect(dataGridHeaderCell).toBeDefined();
    const sortingIcons = dataGridHeaderCell.querySelectorAll("[data-icon]");
    expect(sortingIcons).toHaveLength(1);
    sortingIcons.forEach(icon => expect(icon).toHaveClass("indicator"));
    expect(sortingIcons[0]).toHaveClass("indicator", "ascending", "icon-arrow-up");
    expect(sortingIcons[0]).not.toHaveClass("descenidng");
  });
});

it("renders DESC sorting indicator (icon) when sorting is enabled and current sorting is DESC", () => {
  const { dataGridHeaderCell } = createDataGridHeaderCell(params => ({
    ...params,
    activeSortDirection: "DESC"
  }));

  expect(dataGridHeaderCell).toBeDefined();
  const sortingIcons = dataGridHeaderCell.querySelectorAll("[data-icon]");
  expect(sortingIcons).toHaveLength(1);
  sortingIcons.forEach(icon => expect(icon).toHaveClass("indicator"));
  expect(sortingIcons[0]).toHaveClass("indicator", "descending", "icon-arrow-up");
  expect(sortingIcons[0]).not.toHaveClass("ascending");
});

describe("DataGridHeaderCell should be interactive", () => {
  it("clicking on cell calls onSort callback", async () => {
    const onSortHandler = jest.fn();
    const { getByRole } = createDataGridHeaderCell(params => ({
      ...params,
      disableSorting: false,
      onSort: onSortHandler
    }));

    await userEvent.click(getByRole("button"));

    expect(onSortHandler).toBeCalledWith(defaultParams.name);
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

      return <DataGridHeaderCell {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("tr");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
