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

import React from "react";
import { DataGridCell } from "../DataGridCell/DataGridCell";
import { DataGridRow } from "./DataGridRow";
import { DataGrid, Props } from "../../DataGrid";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

type WithNestedRowsDataType = {
  name: string;
  id: string;
  type: string;
  description: string;
  nestedItems?: WithNestedRowsDataType[];
};

const paramsWithNestedRows: Props<WithNestedRowsDataType> = {
  children: ({ item }) => (
    <DataGridRow key={item.id}>
      <DataGridCell>{item.name}</DataGridCell>
      <DataGridCell>{item.type}</DataGridCell>
    </DataGridRow>
  ),
  data: [
    {
      name: "Company 1",
      id: "1",
      type: "Stock",
      description: "Lorem ipsum dolor sit amet",
      nestedItems: [
        {
          name: "Company 3",
          id: "3",
          type: "Stock",
          description: "Lorem ipsum dolor sit amet",
          nestedItems: [
            {
              name: "Company 5",
              id: "5",
              type: "Stock",
              description: "Lorem ipsum dolor sit amet"
            }
          ]
        },
        {
          name: "Company 4",
          id: "4",
          type: "Stock",
          description: "Lorem ipsum dolor sit amet"
        }
      ]
    },
    {
      name: "Company 2",
      id: "2",
      type: "Stock",
      description: "Lorem ipsum dolor sit amet"
    }
  ],
  filters: {
    filterValues: [],
    columnsMetadata: [
      { name: "name", headline: "Name", operators: ["is", "is not"] },
      { name: "type", headline: "Type", operators: ["is", "is not"] }
    ],
    onFilterAdd: filter => console.log(filter),
    onFilterEdit: filter => console.log(filter),
    onFilterDelete: id => console.log(id),
    onFiltersClear: () => console.log("clear")
  },
  headers: [
    { name: "name", headline: "Name" },
    { name: "type", headline: "Type", disableSorting: true }
  ],
  isLoading: false,
  enableMultiSorting: true
};

const createDataGridWithNestedRows = (
  params?: (defaultParams: any) => Props<WithNestedRowsDataType>
) => {
  let parameters = paramsWithNestedRows;
  if (params) {
    parameters = params(paramsWithNestedRows);
  }

  const DataGridWithNestedRows = () => {
    return (
      parameters.filters && (
        <DataGrid
          {...parameters}
          nestedRowConfig={{ nestedItemsKey: "nestedItems" }}
          data-testid="dataGrid"
        />
      )
    );
  };

  const queries = render(<DataGridWithNestedRows />);
  const dataGrid = queries.getByTestId("dataGrid");

  return {
    ...queries,
    dataGrid
  };
};

describe("DataGrid with nested rows", () => {
  it("should render offset nested rows with connectors", async () => {
    const { getByTitle, getByText, queryByText } = createDataGridWithNestedRows();

    expect(queryByText("Company 3")).toBeNull();
    expect(queryByText("Company 4")).toBeNull();
    expect(queryByText("Company 5")).toBeNull();

    await userEvent.click(getByTitle("Expand row"));

    expect(getByText("Company 3")).toBeInTheDocument();

    const connector = within(getByText("Company 3").parentElement as HTMLElement).getByTestId(
      "dataGridRowConnector"
    );

    expect(connector).toHaveClass("connector t-shape offset-left-0");

    const secondConnector = within(getByText("Company 4").parentElement as HTMLElement).getByTestId(
      "dataGridRowConnector"
    );

    expect(secondConnector).toHaveClass("connector line offset-left-0");

    await userEvent.click(
      within(getByText("Company 3").parentElement as HTMLElement).getByTitle("Expand row")
    );

    const nestedConnectors = within(
      getByText("Company 5").parentElement as HTMLElement
    ).getAllByTestId("dataGridRowConnector");

    expect(nestedConnectors[0]).toHaveClass("connector vertical offset-left-0");
    expect(nestedConnectors[1]).toHaveClass("connector line offset-left-1");
  });
});
