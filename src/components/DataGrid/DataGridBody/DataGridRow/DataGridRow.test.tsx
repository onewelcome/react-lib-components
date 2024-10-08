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
import { DataGridRow, Props } from "./DataGridRow";
import { render, waitFor } from "@testing-library/react";
import { DataGridCell } from "../DataGridCell/DataGridCell";
import { DataGridDrawerItem } from "../DataGridDrawer/DataGridDrawerItem";
import userEvent from "@testing-library/user-event";

const defaultParams: Props<any> = {
  children: [<DataGridCell>1</DataGridCell>, <DataGridCell>2</DataGridCell>],
  headers: [
    { name: "firstName", headline: "first name" },
    { name: "lastName", headline: "last name" }
  ]
};

const createDataGridRow = (params?: (defaultParams: Props<any>) => Props<any>) => {
  let parameters: Props<any> = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement("tbody");
  const queries = render(<DataGridRow {...parameters} data-testid="dataGridRow" />, { container });
  const dataGridRow = queries.getByTestId("dataGridRow");

  return {
    ...queries,
    dataGridRow
  };
};

describe("DataGridRow should render", () => {
  it("renders without crashing", () => {
    const { dataGridRow, getAllByRole } = createDataGridRow();

    expect(dataGridRow).toBeDefined();
    expect(dataGridRow).toHaveClass("row border", { exact: true });
    const cells = getAllByRole("cell");
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent("1");
    expect(cells[1]).toHaveTextContent("2");
  });

  it("renders with additional class", () => {
    const { dataGridRow } = createDataGridRow(params => ({ ...params, className: "test" }));

    expect(dataGridRow).toHaveClass("row test border", { exact: true });
  });

  it("renders loading state", () => {
    const { dataGridRow } = createDataGridRow(params => ({ ...params, isLoading: true }));

    expect(dataGridRow).toHaveClass("row border loading", { exact: true });
  });

  it("renders only visible columns", () => {
    const { dataGridRow, getAllByRole } = createDataGridRow(params => ({
      ...params,
      headers: [
        { name: "firstName", headline: "first name", hidden: true },
        { name: "lastName", headline: "last name", hidden: true },
        { name: "date", headline: "date" },
        { name: "status", headline: "status" }
      ],
      children: [
        <DataGridCell>1</DataGridCell>,
        <DataGridCell>2</DataGridCell>,
        <DataGridCell>3</DataGridCell>,
        <DataGridCell>4</DataGridCell>
      ]
    }));

    expect(dataGridRow).toBeDefined();
    const cells = getAllByRole("cell");
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent("3");
    expect(cells[1]).toHaveTextContent("4");
  });

  it("renders expandable row, expands it on click", async () => {
    const { dataGridRow, getAllByRole, getByRole, getByText, findByText } = createDataGridRow(
      params => ({
        ...params,
        expandableRowProps: {
          enableExpandableRow: true,
          expandableRowContent: (
            <DataGridDrawerItem title={"Description"} description={"this is description"} />
          )
        },
        headers: [
          { name: "firstName", headline: "first name" },
          { name: "lastName", headline: "last name" }
        ],
        children: [<DataGridCell>1</DataGridCell>, <DataGridCell>2</DataGridCell>]
      })
    );

    expect(dataGridRow).toBeDefined();
    const cells = getAllByRole("cell");
    expect(cells).toHaveLength(4);

    const expandButton = getByRole("button");
    expect(expandButton).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(expandButton);
    await waitFor(() => findByText("this is description"));

    expect(getByText("this is description")).toBeDefined();
    expect(expandButton).toHaveAttribute("aria-expanded", "true");
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

      return <DataGridRow {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("tbody");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
