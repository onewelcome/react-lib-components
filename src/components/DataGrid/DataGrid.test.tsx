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

import React, { useEffect, useRef, useState } from "react";
import { DataGrid, Props } from "./DataGrid";
import { getAllByRole, render, queryAllByRole, getByRole, within } from "@testing-library/react";
import { DataGridRow } from "./DataGridBody/DataGridRow/DataGridRow";
import { DataGridCell } from "./DataGridBody/DataGridCell/DataGridCell";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { IconButton } from "../Button/IconButton";
import { Icon, Icons } from "../Icon/Icon";
import { ContextMenuItem } from "../ContextMenu/ContextMenuItem";
import userEvent from "@testing-library/user-event";
import { useMockFilteringByDateLogic, useMockFilteringLogic } from "./testUtils";
import { Button } from "../Button/Button";
import { THIRTY_SECONDS, formatInputDate } from "./DataGridFilters/DateTimePicker/DateTimeService";
import { DateTimeFilter } from "./DataGridFilters/DataGridFilters.interfaces";

type DataType = { firstName: string; lastName: string; date: string };

const defaultParams: Props<DataType> = {
  children: ({ item }) => (
    <DataGridRow key={item.firstName}>
      <DataGridCell>{item.firstName}</DataGridCell>
      <DataGridCell>{item.lastName}</DataGridCell>
      <DataGridCell>{item.date}</DataGridCell>
      <DataGridCell>
        <ContextMenu
          id={`consent_menu_${item.firstName}`}
          trigger={
            <IconButton title={`Actions for ${item.firstName}`} color="default">
              <Icon icon={Icons.EllipsisAlt} />
            </IconButton>
          }
        >
          <ContextMenuItem>Item 1</ContextMenuItem>
        </ContextMenu>
      </DataGridCell>
    </DataGridRow>
  ),
  headers: [
    { name: "firstName", headline: "First name" },
    { name: "lastName", headline: "Last name" },
    { name: "date", headline: "Date" }
  ],
  enableMultiSorting: true,
  data: [
    { firstName: "Paweł", lastName: "Napieracz", date: "12.12.1990" },
    { firstName: "Michał", lastName: "Górski", date: "12.12.1994" },
    { firstName: "Daniel", lastName: "Velden", date: "12.12.199x" },
    { firstName: "Jasha", lastName: "Joachimsthal", date: "12.12.198x" }
  ]
};

const createDataGrid = (params?: (defaultParams: Props<DataType>) => Props<DataType>) => {
  let parameters = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DataGrid {...parameters} data-testid="dataGrid" />);
  const dataGrid = queries.getByTestId("dataGrid");

  return {
    ...queries,
    dataGrid
  };
};

describe("DataGrid should render", () => {
  it("renders without crashing", () => {
    const rowsCount = defaultParams.data?.length!;
    const colsCount = defaultParams.headers?.length!;
    const contextMenuCellCount = 1;
    const { dataGrid, ...queries } = createDataGrid();

    expect(dataGrid).toBeDefined();

    expect(dataGrid.querySelector(".actions")).toBeNull();

    const [thead, tbody] = queries.getAllByRole("rowgroup");

    expect(queryAllByRole(thead, "columnheader")).toHaveLength(3);
    expect(queryAllByRole(thead, "cell")).toHaveLength(contextMenuCellCount);
    expect(queryAllByRole(thead, "button")).toHaveLength(0); //sorting should be disabled by default

    expect(queryAllByRole(tbody, "cell")).toHaveLength(
      rowsCount * (colsCount + contextMenuCellCount)
    );
  });

  it("renders actions buttons", () => {
    const { dataGrid } = createDataGrid(params => ({
      ...params,
      actions: {
        enableAddBtn: true,
        enableColumnsBtn: true,
        enableSearchBtn: true
      }
    }));
    const [addBtn, desktopColumnsBtn, mobileColumnsBtn, desktopSearchBtn, mobileSearchBtn] =
      getAllByRole(dataGrid.querySelector(".actions")!, "button");
    expect(addBtn).toHaveTextContent("Add item");
    expect(desktopColumnsBtn).toHaveTextContent("Columns");
    expect(mobileColumnsBtn).toHaveTextContent("Show/hide columns");
    expect(desktopSearchBtn).toHaveTextContent("Search");
    expect(mobileSearchBtn).toHaveTextContent("Search");
  });

  it("renders table with initialized sorting indicators", () => {
    const { getAllByRole } = createDataGrid(params => ({
      ...params,
      onSort: jest.fn(),
      initialSort: [
        { name: defaultParams.headers[0].name, direction: "DESC" },
        { name: defaultParams.headers[2].name, direction: "ASC" }
      ]
    }));

    const [firstNameHeader, lastNameHeader, dateHeader] = getAllByRole("columnheader");
    expect(firstNameHeader).toHaveAttribute("aria-sort", "descending");
    expect(lastNameHeader).not.toHaveAttribute("aria-sort");
    expect(dateHeader).toHaveAttribute("aria-sort", "ascending");
  });

  it("renders table without context menu", () => {
    const rowsCount = defaultParams.data?.length!;
    const colsCount = defaultParams.headers?.length!;
    const { getAllByRole } = createDataGrid(params => ({
      ...params,
      disableContextMenuColumn: true,
      children: ({ item }) => (
        <DataGridRow key={item.firstName}>
          <DataGridCell>{item.firstName}</DataGridCell>
          <DataGridCell>{item.lastName}</DataGridCell>
          <DataGridCell>{item.date}</DataGridCell>
        </DataGridRow>
      )
    }));

    expect(getAllByRole("columnheader")).toHaveLength(3);
    expect(getAllByRole("cell")).toHaveLength(rowsCount * colsCount);
  });

  it("renders loading state with skeleton loading animation on data cells and empty row on content menu cells", () => {
    const { ...queries } = createDataGrid(params => ({ ...params, isLoading: true }));

    const [_thead, tbody] = queries.getAllByRole("rowgroup");
    expect(
      getAllByRole(tbody, "cell").find((cell, index) => {
        const contextMenuCell = index % 4 === 3;
        return (
          !contextMenuCell && (cell.firstChild as HTMLElement).getAttribute("class") !== "loading"
        );
      })
    ).toBeUndefined();
  });

  it("renders empty state", () => {
    const emptyLabel = "emptyLabel";
    const { ...queries } = createDataGrid(params => ({ ...params, emptyLabel, data: [] }));

    const [_thead, tbody] = queries.getAllByRole("rowgroup");
    const rows = getAllByRole(tbody, "row");
    const firstRowCells = getAllByRole(rows[0], "cell");
    expect(firstRowCells).toHaveLength(1);
    expect(firstRowCells[0]).toHaveAttribute("colspan", `${defaultParams.headers.length + 1}`);
    expect(firstRowCells[0]).toHaveTextContent(emptyLabel);
  });

  it("renders pagination", () => {
    const { getByRole } = createDataGrid(params => ({
      ...params,
      paginationProps: {
        totalElements: 105,
        pageSize: 10,
        currentPage: 2,
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn()
      }
    }));

    expect(getByRole("button", { name: "previous" })).toBeDefined();
    expect(getByRole("button", { name: "next" })).toBeDefined();
    expect(getByRole("button", { name: "last" })).toBeDefined();
  });
});

describe("DataGrid should have interactive table header", () => {
  it("clicking table headers should call sort callback", async () => {
    const onSort = jest.fn();
    const { getAllByRole } = createDataGrid(params => ({
      ...params,
      onSort
    }));

    const [firstNameHeader, lastNameHeader, dateHeader] = getAllByRole("columnheader");

    await userEvent.click(getByRole(firstNameHeader, "button"));
    expect(onSort).toBeCalledWith([{ name: defaultParams.headers[0].name, direction: "ASC" }]);

    await userEvent.click(getByRole(lastNameHeader, "button"));
    await userEvent.click(getByRole(dateHeader, "button"));
    expect(onSort).toBeCalledWith([
      { name: defaultParams.headers[2].name, direction: "ASC" },
      { name: defaultParams.headers[1].name, direction: "ASC" },
      { name: defaultParams.headers[0].name, direction: "ASC" }
    ]);

    await userEvent.click(getByRole(firstNameHeader, "button"));
    expect(onSort).toBeCalledWith([
      { name: defaultParams.headers[0].name, direction: "DESC" },
      { name: defaultParams.headers[2].name, direction: "ASC" },
      { name: defaultParams.headers[1].name, direction: "ASC" }
    ]);

    await userEvent.click(getByRole(dateHeader, "button"));
    expect(onSort).toBeCalledWith([
      { name: defaultParams.headers[2].name, direction: "DESC" },
      { name: defaultParams.headers[0].name, direction: "DESC" },
      { name: defaultParams.headers[1].name, direction: "ASC" }
    ]);

    await userEvent.click(getByRole(dateHeader, "button"));
    await userEvent.click(getByRole(firstNameHeader, "button"));
    await userEvent.click(getByRole(lastNameHeader, "button"));
    expect(onSort).toBeCalledWith([{ name: defaultParams.headers[1].name, direction: "DESC" }]);
    expect(onSort).toBeCalledTimes(8);
  });

  it("clicking on show/hide columns popover should show/hide columns", async () => {
    const { getByRole, findByLabelText, ...queries } = createDataGrid(params => ({
      ...params,
      actions: { enableColumnsBtn: true }
    }));
    expect(queries.getAllByRole("columnheader")).toHaveLength(3);

    await userEvent.click(getByRole("button", { name: "Columns" }));

    const nameToggle = await findByLabelText(defaultParams.headers[1].headline);
    expect(nameToggle).toBeChecked();
    await userEvent.click(nameToggle);
    expect(nameToggle).not.toBeChecked();
    expect(getByRole("button", { name: "Close show columns dialog" })).toBeDefined();

    const columns = queries.getAllByRole("columnheader");
    expect(columns).toHaveLength(2);
    expect(columns[0]).toHaveTextContent(defaultParams.headers[0].headline);
    expect(columns[1]).toHaveTextContent(defaultParams.headers[2].headline);

    const rowsCount = defaultParams.data?.length!;
    const colsCount = defaultParams.headers.length;
    const hiddenColsCount = defaultParams.headers.length;
    const contextMenuColsCount = defaultParams.headers.length;
    const [_thead, tbody] = queries.getAllByRole("rowgroup");
    expect(getAllByRole(tbody, "cell")).toHaveLength(
      rowsCount * (colsCount - hiddenColsCount + contextMenuColsCount)
    );
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

      return <DataGrid {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("spacing should work correctly", () => {
  it("gives the proper paddings to the right elements", () => {
    const { dataGrid } = createDataGrid(defaultParams => ({
      ...defaultParams,
      spacing: { padding: 4 },
      paginationProps: {
        totalElements: 105,
        pageSize: 10,
        currentPage: 2,
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn()
      }
    }));

    const firstHeaderCell = dataGrid.querySelector(".table .row .header-cell");
    const lastHeaderCell = dataGrid.querySelector(".table .row td");
    const firstBodyCell = dataGrid.querySelector(".table tbody .row .cell");
    const lastBodyCell = dataGrid.querySelector(".table tbody .row td:last-of-type");
    const pagination = dataGrid.querySelector(".pagination-wrapper");

    expect(dataGrid).toHaveStyle({ "padding-top": "1rem", "padding-bottom": "1rem" });
    expect(firstHeaderCell).toHaveStyle({ "padding-left": "1rem" });
    expect(lastHeaderCell).toHaveStyle({ "padding-right": "1rem" });
    expect(firstBodyCell).toHaveStyle({ "padding-left": "1rem" });
    expect(lastBodyCell).toHaveStyle({ "padding-right": "1rem" });
    expect(pagination).toHaveStyle({ "padding-left": "1rem", "padding-right": "1rem" });
  });

  it("gives the proper paddings to the right elements", () => {
    const { dataGrid } = createDataGrid(defaultParams => ({
      ...defaultParams,
      spacing: { padding: "4 5" },
      paginationProps: {
        totalElements: 105,
        pageSize: 10,
        currentPage: 2,
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn()
      }
    }));

    const firstHeaderCell = dataGrid.querySelector(".table .row .header-cell");
    const lastHeaderCell = dataGrid.querySelector(".table .row td");
    const firstBodyCell = dataGrid.querySelector(".table tbody .row .cell");
    const lastBodyCell = dataGrid.querySelector(".table tbody .row td:last-of-type");
    const pagination = dataGrid.querySelector(".pagination-wrapper");

    expect(dataGrid).toHaveStyle({ "padding-top": "1rem", "padding-bottom": "1rem" });
    expect(firstHeaderCell).toHaveStyle({ "padding-left": "1.25rem" });
    expect(lastHeaderCell).toHaveStyle({ "padding-right": "1.25rem" });
    expect(firstBodyCell).toHaveStyle({ "padding-left": "1.25rem" });
    expect(lastBodyCell).toHaveStyle({ "padding-right": "1.25rem" });
    expect(pagination).toHaveStyle({ "padding-left": "1.25rem", "padding-right": "1.25rem" });
  });

  it("gives the proper paddings to the right elements", () => {
    const { dataGrid } = createDataGrid(defaultParams => ({
      ...defaultParams,
      spacing: { padding: "4 5 8" },
      paginationProps: {
        totalElements: 105,
        pageSize: 10,
        currentPage: 2,
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn()
      }
    }));

    const firstHeaderCell = dataGrid.querySelector(".table .row .header-cell");
    const lastHeaderCell = dataGrid.querySelector(".table .row td");
    const firstBodyCell = dataGrid.querySelector(".table tbody .row .cell");
    const lastBodyCell = dataGrid.querySelector(".table tbody .row td:last-of-type");
    const pagination = dataGrid.querySelector(".pagination-wrapper");

    expect(dataGrid).toHaveStyle({ "padding-top": "1rem", "padding-bottom": "2rem" });
    expect(firstHeaderCell).toHaveStyle({ "padding-left": "1.25rem" });
    expect(lastHeaderCell).toHaveStyle({ "padding-right": "1.25rem" });
    expect(firstBodyCell).toHaveStyle({ "padding-left": "1.25rem" });
    expect(lastBodyCell).toHaveStyle({ "padding-right": "1.25rem" });
    expect(pagination).toHaveStyle({ "padding-left": "1.25rem", "padding-right": "1.25rem" });
  });

  it("gives the proper paddings to the right elements", () => {
    const { dataGrid } = createDataGrid(defaultParams => ({
      ...defaultParams,
      spacing: { padding: "6 4 8 8" },
      paginationProps: {
        totalElements: 105,
        pageSize: 10,
        currentPage: 2,
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn()
      }
    }));

    const firstHeaderCell = dataGrid.querySelector(".table .row .header-cell");
    const lastHeaderCell = dataGrid.querySelector(".table .row td");
    const firstBodyCell = dataGrid.querySelector(".table tbody .row .cell");
    const lastBodyCell = dataGrid.querySelector(".table tbody .row td:last-of-type");
    const pagination = dataGrid.querySelector(".pagination-wrapper");

    expect(dataGrid).toHaveStyle({ "padding-top": "1.5rem", "padding-bottom": "2rem" });
    expect(firstHeaderCell).toHaveStyle({ "padding-left": "2rem" });
    expect(lastHeaderCell).toHaveStyle({ "padding-right": "1rem" });
    expect(firstBodyCell).toHaveStyle({ "padding-left": "2rem" });
    expect(lastBodyCell).toHaveStyle({ "padding-right": "1rem" });
    expect(pagination).toHaveStyle({ "padding-left": "2rem", "padding-right": "1rem" });
  });

  it("gives the proper paddings to the right elements, also with contextmenu disabled", () => {
    const { dataGrid } = createDataGrid(defaultParams => ({
      ...defaultParams,
      spacing: { padding: "6 4 8 8" },
      disableContextMenuColumn: true,
      paginationProps: {
        totalElements: 105,
        pageSize: 10,
        currentPage: 2,
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn()
      },
      children: ({ item }) => (
        <DataGridRow key={item.firstName}>
          <DataGridCell>{item.firstName}</DataGridCell>
          <DataGridCell>{item.lastName}</DataGridCell>
          <DataGridCell>{item.date}</DataGridCell>
        </DataGridRow>
      )
    }));

    const firstHeaderCell = dataGrid.querySelector(".table .row .header-cell");
    const lastHeaderCell = dataGrid.querySelector(".table .row th:last-of-type");
    const firstBodyCell = dataGrid.querySelector(".table tbody .row .cell");
    const lastBodyCell = dataGrid.querySelector(".table tbody .row td:last-of-type");
    const pagination = dataGrid.querySelector(".pagination-wrapper");

    expect(dataGrid).toHaveStyle({ "padding-top": "1.5rem", "padding-bottom": "2rem" });
    expect(firstHeaderCell).toHaveStyle({ "padding-left": "2rem" });
    expect(lastHeaderCell).toHaveStyle({ "padding-right": "1rem" });
    expect(firstBodyCell).toHaveStyle({ "padding-left": "2rem" });
    expect(lastBodyCell).toHaveStyle({ "padding-right": "1rem" });
    expect(pagination).toHaveStyle({ "padding-left": "2rem", "padding-right": "1rem" });
  });
});

type WithFiltersDataType = { id: string; name: string; type: string };

const paramsWithFilters: Props<WithFiltersDataType> = {
  children: ({ item }) => (
    <DataGridRow key={item.id}>
      <DataGridCell>{item.name}</DataGridCell>
      <DataGridCell>{item.type}</DataGridCell>
    </DataGridRow>
  ),
  data: [
    {
      id: "1",
      name: "Company 1",
      type: "Stock"
    },

    {
      id: "2",
      name: "Company 2",
      type: "Bond"
    },
    {
      id: "3",
      name: "Company 1",
      type: "Bond"
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

const createDataGridWithFilters = (params?: (defaultParams: any) => Props<WithFiltersDataType>) => {
  let parameters = paramsWithFilters;
  if (params) {
    parameters = params(paramsWithFilters);
  }

  const DataGridWithFilters = () => {
    const { onFilterAdd, onFilterDelete, onFilterEdit, onFiltersClear, gridData, filters } =
      useMockFilteringLogic(parameters.data || [], parameters.filters?.filterValues);

    return (
      parameters.filters && (
        <DataGrid
          {...parameters}
          data={gridData}
          filters={{
            ...parameters.filters,
            filterValues: filters,
            onFilterAdd,
            onFilterEdit,
            onFilterDelete,
            onFiltersClear
          }}
          data-testid="dataGrid"
        />
      )
    );
  };

  const queries = render(<DataGridWithFilters />);
  const dataGrid = queries.getByTestId("dataGrid");

  return {
    ...queries,
    dataGrid
  };
};

describe("DataGrid with filters", () => {
  it("should filter out given values", async () => {
    const { dataGrid, getByText, getByLabelText, getAllByText, getByRole, getAllByRole } =
      createDataGridWithFilters();

    expect(dataGrid).toBeDefined();

    const addFilterButton = getByText("Add filter");
    expect(addFilterButton).toBeDefined();

    await userEvent.click(addFilterButton);

    const columnSelect = getByLabelText("Filter by");
    const operatorSelect = getByLabelText("Operator");
    const valueSelect = getByLabelText("Value");

    expect(columnSelect).toBeDefined();
    expect(operatorSelect).toBeDefined();
    expect(valueSelect).toBeDefined();

    await userEvent.click(columnSelect);
    await userEvent.click(getAllByText("Name")[0]);
    expect(columnSelect).toHaveTextContent("Name");

    await userEvent.click(operatorSelect);
    await userEvent.click(getAllByText("is")[0]);

    await userEvent.click(valueSelect);
    const multiSelectInput = getByRole("combobox");
    await userEvent.type(multiSelectInput, "Company 1");
    const multiSelectButton = getByText("create new", { exact: false });
    await userEvent.click(multiSelectButton);

    await userEvent.click(getByText("Apply"));

    expect(getAllByRole("row")).toHaveLength(3);
  });

  it("should allow to edit filters", async () => {
    const { dataGrid, getByText, getAllByLabelText, getAllByText, getAllByRole } =
      createDataGridWithFilters(prev => ({
        ...prev,
        filters: {
          ...prev.filters,
          filterValues: [{ id: "test", column: "name", operator: "is", value: ["Company 1"] }]
        }
      }));

    expect(dataGrid).toBeDefined();

    expect(getAllByRole("row")).toHaveLength(3);

    const editFilterButton = getByText(/name/);
    expect(editFilterButton).toBeDefined();
    await userEvent.click(editFilterButton);

    const columnSelect = getAllByLabelText("Filter by")[0];
    const operatorSelect = getAllByLabelText("Operator")[0];
    const valueSelect = getAllByLabelText("Value")[0];

    expect(columnSelect).toBeDefined();
    expect(operatorSelect).toBeDefined();
    expect(valueSelect).toBeDefined();

    await userEvent.click(columnSelect);
    await userEvent.click(getAllByText("Name")[0]);
    expect(columnSelect).toHaveTextContent("Name");

    await userEvent.click(operatorSelect);
    await userEvent.click(getAllByText("is not")[0]);

    await userEvent.click(getAllByText("Apply")[0]);

    expect(getAllByRole("row")).toHaveLength(2);
  });

  it("should allow to delete filters", async () => {
    const { dataGrid, getByText, getAllByRole } = createDataGridWithFilters(prev => ({
      ...prev,
      filters: {
        ...prev.filters,
        filterValues: [{ id: "test", column: "name", operator: "is", value: ["Company 1"] }]
      }
    }));

    expect(dataGrid).toBeDefined();

    expect(getAllByRole("row")).toHaveLength(3);

    const removeAllButton = getByText("Clear all filters");
    expect(removeAllButton).toBeDefined();
    await userEvent.click(removeAllButton);

    expect(getAllByRole("row")).toHaveLength(4);
  });
});

const paramsWithSearch: Props<DataType> = {
  children: ({ item }) => (
    <DataGridRow key={item.firstName}>
      <DataGridCell>{item.firstName}</DataGridCell>
      <DataGridCell>{item.lastName}</DataGridCell>
      <DataGridCell>{item.date}</DataGridCell>
    </DataGridRow>
  ),
  headers: [
    { name: "firstName", headline: "First name" },
    { name: "lastName", headline: "Last name" },
    { name: "date", headline: "Date" }
  ],
  enableMultiSorting: true,
  data: [
    { firstName: "Paweł", lastName: "Napieracz", date: "12.12.1990" },
    { firstName: "Michał", lastName: "Górski", date: "12.12.1994" },
    { firstName: "Daniel", lastName: "Velden", date: "12.12.199x" },
    { firstName: "Jasha", lastName: "Joachimsthal", date: "12.12.198x" }
  ],
  isLoading: false
};

const createDataGridWithSearch = (params?: (defaultParams: any) => Props<DataType>) => {
  let parameters = paramsWithSearch;
  if (params) {
    parameters = params(paramsWithSearch);
  }

  const DataGridWithSearch = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
      <DataGrid
        {...parameters}
        search={{
          onSearch: setSearchValue,
          debounceTime: 500,
          initialSearchValue: searchValue
        }}
        data-testid="dataGrid"
      />
    );
  };

  const queries = render(<DataGridWithSearch />);
  const dataGrid = queries.getByTestId("dataGrid");

  return {
    ...queries,
    dataGrid
  };
};

describe("DataGrid with search", () => {
  it("should highlight matching values", async () => {
    const { dataGrid, getByPlaceholderText, findByTestId } = createDataGridWithSearch();

    expect(dataGrid).toBeInTheDocument();
    expect(getByPlaceholderText("Search items")).toBeInTheDocument();

    await userEvent.type(getByPlaceholderText("Search items"), "Daniel");

    const highlight = await findByTestId("Daniel-mark");

    expect(highlight).toBeInTheDocument();
  });

  it("should render action button when provided", async () => {
    const onClick = jest.fn();
    const { dataGrid, getByText } = createDataGridWithSearch(prev => ({
      ...prev,
      toolbarButtons: [
        <Button key="1" onClick={onClick}>
          Add item
        </Button>
      ]
    }));

    expect(dataGrid).toBeInTheDocument();

    const toolbarButton = getByText("Add item");

    expect(toolbarButton).toBeInTheDocument();

    await userEvent.click(toolbarButton);

    expect(onClick).toHaveBeenCalled();
  });
});

type WithDateFilterDataType = { id: string; name: string; type: string; created: Date };

const paramsWithDateFilter: Props<WithDateFilterDataType> = {
  children: ({ item }) => (
    <DataGridRow key={item.id}>
      <DataGridCell>{item.name}</DataGridCell>
      <DataGridCell>{item.type}</DataGridCell>
      <DataGridCell>{item.created.toISOString()}</DataGridCell>
    </DataGridRow>
  ),
  data: [
    {
      name: "Company 1",
      id: "1",
      type: "Stock",
      created: new Date()
    },
    {
      name: "Company 2",
      id: "2",
      type: "Bond",
      created: new Date(Date.now() - 1000 * 50)
    },
    {
      name: "Company 3",
      id: "3",
      type: "Bond",
      created: new Date(Date.now() - 1000 * 270)
    },
    {
      name: "Company 4",
      id: "4",
      type: "Bond",
      created: new Date(Date.now() - 1000 * 3400)
    },
    {
      name: "Company 5",
      id: "5",
      type: "Bond",
      created: new Date(Date.now() - 1000 * 86000)
    },
    {
      name: "Company 6",
      id: "6",
      type: "Bond",
      created: new Date(Date.now() - 1000 * 99000)
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "created", headline: "Created", disableSorting: true }
  ],
  isLoading: false,
  enableMultiSorting: true
};

const createDataGridWithDateFilter = (
  params?: (defaultParams: any) => Props<WithDateFilterDataType>
) => {
  let parameters = paramsWithDateFilter;
  if (params) {
    parameters = params(paramsWithDateFilter);
  }

  const DataGridWithDateFilter = () => {
    const [dateFilterValue, setDateFilterValue] = useState<DateTimeFilter>({
      type: THIRTY_SECONDS,
      toDate: new Date().toISOString(),
      fromDate: new Date(Date.now() - 1000 * 30).toISOString()
    });

    const { gridData } = useMockFilteringByDateLogic(
      parameters.data ?? [],
      "created",
      dateFilterValue
    );

    return (
      <DataGrid
        {...parameters}
        data={gridData}
        filters={{
          dateFilterValue: dateFilterValue,
          onDateFilterValueChange: val => {
            setDateFilterValue(val);
          }
        }}
        data-testid="dataGrid"
      />
    );
  };

  const queries = render(<DataGridWithDateFilter />);
  const dataGrid = queries.getByTestId("dataGrid");

  return {
    ...queries,
    dataGrid
  };
};

describe("DataGrid with date filter", () => {
  it("should render data grid with default date filter", async () => {
    const { dataGrid, getAllByRole } = createDataGridWithDateFilter();

    expect(dataGrid).toBeInTheDocument();
    expect(getAllByRole("row")).toHaveLength(2);
  });

  it("should allow changing the date filters", async () => {
    const { dataGrid, getByRole, getByText, getAllByRole } = createDataGridWithDateFilter();

    expect(dataGrid).toBeInTheDocument();

    const dateFilterButton = getByRole("button");

    expect(dateFilterButton).toBeInTheDocument();

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Last 1 minute"));
    await userEvent.click(getByText("Apply"));

    expect(getAllByRole("row")).toHaveLength(3);

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Last 5 minutes"));
    await userEvent.click(getByText("Apply"));

    expect(getAllByRole("row")).toHaveLength(4);

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Last 1 hour"));
    await userEvent.click(getByText("Apply"));

    expect(getAllByRole("row")).toHaveLength(5);

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Last 24 hours"));
    await userEvent.click(getByText("Apply"));

    expect(getAllByRole("row")).toHaveLength(6);
  });

  it("should allow typing the custom dates", async () => {
    const { dataGrid, getByRole, getByText, getByLabelText, getAllByRole } =
      createDataGridWithDateFilter();

    expect(dataGrid).toBeInTheDocument();

    const dateFilterButton = getByRole("button");

    expect(dateFilterButton).toBeInTheDocument();

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Custom"));

    let fromInput = getByLabelText("From");
    let toInput = getByLabelText("To");

    await userEvent.clear(fromInput);
    await userEvent.type(fromInput, formatInputDate(new Date(Date.now() - 1000 * 99000)));

    await userEvent.clear(toInput);
    await userEvent.type(toInput, formatInputDate(new Date()));

    await userEvent.click(getByText("Apply"));

    expect(getAllByRole("row")).toHaveLength(6);
  });

  it("should display errors on invalid input values", async () => {
    const { dataGrid, getByRole, getByText, getAllByText, queryAllByText, getByLabelText } =
      createDataGridWithDateFilter();

    const errorText = "The format must be yyyy-mm-dd hh:mm:ss";

    expect(dataGrid).toBeInTheDocument();

    const dateFilterButton = getByRole("button");

    expect(dateFilterButton).toBeInTheDocument();

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Custom"));

    let fromInput = getByLabelText("From");
    let toInput = getByLabelText("To");

    await userEvent.clear(fromInput);
    await userEvent.type(fromInput, "not a date");

    await userEvent.clear(toInput);
    await userEvent.type(toInput, "not a date[Tab]");

    expect(getAllByText(errorText)).toHaveLength(2);
  });

  it("should display errors on empty input", async () => {
    const { dataGrid, getByRole, getByText, getAllByText, queryAllByText, getByLabelText } =
      createDataGridWithDateFilter();

    const errorText = "The format must be yyyy-mm-dd hh:mm:ss";

    expect(dataGrid).toBeInTheDocument();

    const dateFilterButton = getByRole("button");

    expect(dateFilterButton).toBeInTheDocument();

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Custom"));

    let fromInput = getByLabelText("From");
    let toInput = getByLabelText("To");

    //empty date input
    await userEvent.clear(fromInput);
    await userEvent.clear(toInput);
    await userEvent.type(toInput, "[Tab]");

    expect(getAllByText(errorText)).toHaveLength(2);
  });

  it("should clear errors on when valid data is provided", async () => {
    const { dataGrid, getByRole, getByText, getAllByText, queryAllByText, getByLabelText } =
      createDataGridWithDateFilter();

    const errorText = "The format must be yyyy-mm-dd hh:mm:ss";

    expect(dataGrid).toBeInTheDocument();

    const dateFilterButton = getByRole("button");

    expect(dateFilterButton).toBeInTheDocument();

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Custom"));

    let fromInput = getByLabelText("From");
    let toInput = getByLabelText("To");

    await userEvent.clear(fromInput);
    await userEvent.clear(toInput);
    await userEvent.type(toInput, "[Tab]");

    expect(getAllByText(errorText)).toHaveLength(2);

    await userEvent.clear(fromInput);
    await userEvent.type(fromInput, "2024-12-13 12:00:00");

    await userEvent.clear(toInput);
    await userEvent.type(toInput, "2024-12-13 13:00:00[Tab]");

    expect(queryAllByText(errorText)).toHaveLength(0);
  });

  it("should disallow appending random characters at the beginning and end of date", async () => {
    const { dataGrid, getByRole, getByText, queryAllByText, getByLabelText } =
      createDataGridWithDateFilter();

    const errorText = "The format must be yyyy-mm-dd hh:mm:ss";

    expect(dataGrid).toBeInTheDocument();

    const dateFilterButton = getByRole("button");

    expect(dateFilterButton).toBeInTheDocument();

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Custom"));

    let fromInput = getByLabelText("From");
    let toInput = getByLabelText("To");

    await userEvent.clear(fromInput);
    await userEvent.type(fromInput, "a2024-12-13 12:00:00");

    await userEvent.clear(toInput);
    await userEvent.type(toInput, "a2024-12-13 13:00:00[Tab]");

    expect(queryAllByText(errorText)).toHaveLength(2);

    await userEvent.clear(fromInput);
    await userEvent.type(fromInput, "2024-12-13 12:00:00a");

    await userEvent.clear(toInput);
    await userEvent.type(toInput, "2024-12-13 13:00:00a[Tab]");

    expect(queryAllByText(errorText)).toHaveLength(2);
  });

  it("should disallow shorthand date and time formats", async () => {
    const { dataGrid, getByRole, getByText, queryAllByText, getByLabelText } =
      createDataGridWithDateFilter();

    const errorText = "The format must be yyyy-mm-dd hh:mm:ss";

    expect(dataGrid).toBeInTheDocument();

    const dateFilterButton = getByRole("button");

    expect(dateFilterButton).toBeInTheDocument();

    await userEvent.click(dateFilterButton);
    await userEvent.click(getByText("Custom"));

    let fromInput = getByLabelText("From");
    let toInput = getByLabelText("To");

    await userEvent.clear(fromInput);
    await userEvent.type(fromInput, "2024-12-1 12:00:00");

    await userEvent.clear(toInput);
    await userEvent.type(toInput, "2024-12-13 1:1:1[Tab]");

    expect(queryAllByText(errorText)).toHaveLength(2);

    await userEvent.clear(fromInput);
    await userEvent.type(fromInput, "2024-12-13");

    await userEvent.clear(toInput);
    await userEvent.type(toInput, "2024-12-13[Tab]");

    expect(queryAllByText(errorText)).toHaveLength(2);

    await userEvent.clear(fromInput);
    await userEvent.type(fromInput, "12:00:00");

    await userEvent.clear(toInput);
    await userEvent.type(toInput, "13:00:00[Tab]");

    expect(queryAllByText(errorText)).toHaveLength(2);
  });
});
