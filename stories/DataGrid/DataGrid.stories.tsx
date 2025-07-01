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

import React, { Fragment, useEffect, useState } from "react";
import { Meta } from "@storybook/react";
import { DataGrid as DataGridComponent } from "../../src/components/DataGrid/DataGrid";
import {
  useMockFilteringByDateLogic,
  useMockFilteringLogic
} from "../../src/components/DataGrid/testUtils";
import {
  Button,
  ContextMenu,
  ContextMenuItem,
  DataGridCell,
  DataGridDrawerItem,
  DataGridRow,
  Icon,
  IconButton,
  Icons
} from "../../src";
import DataGridDocumentation from "./DataGrid.mdx";
import { action } from "@storybook/addon-actions";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { conditionalPlay } from "../../.storybook/conditionalPlay";
import { Modal } from "../../src/components/Notifications/Modal/Modal";
import { ModalHeader } from "../../src/components/Notifications/Modal/ModalHeader/ModalHeader";
import { ModalContent } from "../../src/components/Notifications/Modal/ModalContent/ModalContent";
import { ModalActions } from "../../src/components/Notifications/Modal/ModalActions/ModalActions";
import { InputWrapper } from "../Form/Wrapper/InputWrapper.stories";
import { Form } from "../Form/Form.stories";
import { THIRTY_SECONDS } from "../../src/components/DataGrid/DataGridFilters/DateTimePicker/DateTimeService";
import {
  DateTimeFilter,
  ValueSelectType
} from "../../src/components/DataGrid/DataGridFilters/DataGridFilters.interfaces";

interface DataGridItem {
  name: string;
  id: string;
  created: Date;
  type: string;
  enabled: boolean;
  description?: string;
  metadata?: string;
}

export default {
  title: "components/Data Display/DataGrid",
  component: DataGridComponent,
  parameters: {
    docs: {
      page: DataGridDocumentation
    }
  }
} as Meta;

const Template = args => {
  const [openModalId, setOpenModalId] = useState<string>("");
  const [modalData, setModalData] = useState<DataGridItem | null>(null);
  const [inputValue, setInputValue] = useState("");

  const openModal = (item: DataGridItem) => {
    setModalData(item);
    setOpenModalId(`testModal_${item.id}`);
  };

  const closeModal = () => {
    setOpenModalId("");
    setInputValue("");
    setModalData(null);
    if (modalData) {
      document.getElementById(`consent_menu_${modalData.id}`)?.focus();
    }
  };

  return (
    <Fragment>
      <div style={{ padding: "1rem", boxShadow: "0px 1px 5px 0px #01053214" }}>
        <div style={{ borderRadius: ".5rem", backgroundColor: "#FFF" }}>
          <DataGridComponent {...args}>
            {({ item }: { item: DataGridItem }) => (
              <DataGridRow
                key={item.id}
                expandableRowProps={{
                  enableExpandableRow: args.enableExpandableRow,
                  expandableRowContent: (
                    <Fragment>
                      {args.expandableRowHeaders?.map(({ name, headline }) => (
                        <DataGridDrawerItem key={name} title={headline} description={item[name]} />
                      ))}
                    </Fragment>
                  )
                }}
              >
                <DataGridCell>{item.name}</DataGridCell>
                <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>
                <DataGridCell>{item.id}</DataGridCell>
                <DataGridCell>{item.type}</DataGridCell>
                <DataGridCell>{item.enabled ? "Active" : "Delisted"}</DataGridCell>
                {!args.disableContextMenuColumn && (
                  <Fragment>
                    <DataGridCell>
                      <ContextMenu
                        id={`consent_menu_${item.id}`}
                        placement={{ vertical: "bottom", horizontal: "right" }}
                        transformOrigin={{ vertical: "top", horizontal: "right" }}
                        trigger={
                          <IconButton title={`Actions for ${item.name}`} color="default">
                            <Icon icon={Icons.EllipsisAlt} />
                          </IconButton>
                        }
                      >
                        <ContextMenuItem
                          aria-haspopup={true}
                          aria-controls={`testModal_${item.id}`}
                          onClick={() => openModal(item)}
                        >
                          Item 1
                        </ContextMenuItem>
                        <ContextMenuItem>Item 2</ContextMenuItem>
                        <ContextMenuItem>Item 3</ContextMenuItem>
                      </ContextMenu>
                    </DataGridCell>
                  </Fragment>
                )}
              </DataGridRow>
            )}
          </DataGridComponent>
        </div>
      </div>
      {modalData && (
        <Modal
          open={openModalId === `testModal_${modalData.id}`}
          id={openModalId}
          onClose={closeModal}
        >
          <ModalHeader id={`testmodal-header-${modalData.id}`} title={modalData.name} />
          <ModalContent>
            <Form
              id={`example-form-${modalData.id}`}
              onSubmit={e => {
                e.preventDefault();
                alert("Submitted form!");
              }}
            >
              <InputWrapper
                label="Example"
                name="example"
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </Form>
          </ModalContent>
          <ModalActions>
            <Button
              form={`example-form-${modalData.id}`}
              onClick={() => {
                closeModal();
              }}
            >
              Close
            </Button>
          </ModalActions>
        </Modal>
      )}
    </Fragment>
  );
};

export const DefaultDataGrid = Template.bind({});

DefaultDataGrid.args = {
  data: [
    {
      name: "Company 1",
      created: new Date(2023, 0, 1),
      id: "1",
      type: "Stock",
      enabled: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      name: "Company 2",
      created: new Date(2023, 0, 2),
      id: "2",
      type: "Stock",
      enabled: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "created", headline: "Created" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "enabled", headline: "Status", disableSorting: true }
  ],
  expandableRowHeaders: [
    { name: "description", headline: "Description" },
    { name: "metadata", headline: "Metadata" }
  ],
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),

  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: false,
  enableMultiSorting: true
};

export const HideColumnDataGrid = Template.bind({});

HideColumnDataGrid.args = {
  data: [
    {
      name: "Company 1",
      created: new Date(2023, 0, 1),
      id: "1",
      type: "Stock",
      enabled: true
    },
    {
      name: "Company 2",
      created: new Date(2023, 0, 2),
      id: "2",
      type: "Stock",
      enabled: false
    }
  ],
  headers: [
    { name: "name", headline: "Name", hidden: true },
    { name: "created", headline: "Created", hidden: true },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "enabled", headline: "Status", disableSorting: true }
  ],
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),
  disableContextMenuColumn: false,
  isLoading: false,
  enableMultiSorting: true
};

export const DataGridIsLoading = Template.bind({});

DataGridIsLoading.args = {
  data: [
    {
      name: "Company 1",
      created: new Date(2023, 0, 1),
      id: "1",
      type: "Stock",
      enabled: true
    },
    {
      name: "Company 2",
      created: new Date(2023, 0, 2),
      id: "2",
      type: "Stock",
      enabled: false
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "created", headline: "Created" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "enabled", headline: "Status", disableSorting: true }
  ],
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: true,
  enableMultiSorting: true
};

export const EmptyDataGrid = Template.bind({});

EmptyDataGrid.args = {
  headers: [
    { name: "name", headline: "Name" },
    { name: "created", headline: "Created" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "enabled", headline: "Status", disableSorting: true }
  ],
  data: [],
  emptyLabel: "There are no vegetables within the current selection"
};

export const ExpandableDataGrid = Template.bind({});

ExpandableDataGrid.args = {
  data: [
    {
      name: "Company 1",
      created: new Date(2023, 0, 1),
      id: "1",
      type: "Stock",
      enabled: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      name: "Company 2",
      created: new Date(2023, 0, 2),
      id: "2",
      type: "Stock",
      enabled: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "created", headline: "Created" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "enabled", headline: "Status", disableSorting: true }
  ],
  enableExpandableRow: true,
  expandableRowHeaders: [
    { name: "description", headline: "Description" },
    { name: "metadata", headline: "Metadata" }
  ],
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: false,
  enableMultiSorting: true
};

ExpandableDataGrid.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.queryAllByTitle("Expand row")).not.toHaveLength(0));

  const expandButtons = await canvas.queryAllByTitle("Expand row");

  await userEvent.click(expandButtons[0]);

  await waitFor(() => {
    const expandedElement = canvas.queryAllByText("Description");
    expect(expandedElement[0]).toBeVisible();
  });
});

export const HiddenContextMenuColumnDataGrid = Template.bind({});

HiddenContextMenuColumnDataGrid.args = {
  data: [
    {
      name: "Company 1",
      created: new Date(2023, 0, 1),
      id: "1",
      type: "Stock",
      enabled: true
    },
    {
      name: "Company 2",
      created: new Date(2023, 0, 2),
      id: "2",
      type: "Stock",
      enabled: false
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "created", headline: "Created" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "enabled", headline: "Status", disableSorting: true }
  ],
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),

  disableContextMenuColumn: true,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: false,
  enableMultiSorting: true
};

const DataGridWithFiltersTemplate = args => {
  const { filters, gridData, onFilterAdd, onFilterEdit, onFilterDelete, onFiltersClear } =
    useMockFilteringLogic(args.data, args.filters.filterValues);
  return (
    <div style={{ padding: "1rem", boxShadow: "0px 1px 5px 0px #01053214" }}>
      <div style={{ borderRadius: ".5rem", backgroundColor: "#FFF" }}>
        <DataGridComponent
          {...args}
          data={gridData}
          filters={{
            ...args.filters,
            filterValues: filters,
            onFilterAdd,
            onFilterEdit,
            onFilterDelete,
            onFiltersClear
          }}
        >
          {({ item }: { item: DataGridItem }) => (
            <DataGridRow key={item.id}>
              <DataGridCell>{item.name}</DataGridCell>
              <DataGridCell>{item.type}</DataGridCell>
            </DataGridRow>
          )}
        </DataGridComponent>
      </div>
    </div>
  );
};

export const DataGridWithFilters = DataGridWithFiltersTemplate.bind({});

DataGridWithFilters.args = {
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
      {
        name: "type",
        headline: "Type",
        operators: ["is", "is not"],
        defaultValues: ["Stock", "Bond"],
        disableAddNew: true
      }
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
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: { onClick: () => action("add btn clicked") },
    searchBtnProps: { onClick: () => action("search btn clicked") }
  },
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: false,
  enableMultiSorting: true
};

export const DataGridWithSingleSelectFilter = DataGridWithFiltersTemplate.bind({});

DataGridWithSingleSelectFilter.args = {
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
      {
        name: "name",
        headline: "Name",
        operators: ["is", "is not"],
        defaultValues: ["Company 1", "Company 2"],
        allowSingleFilterOnly: true
      },
      {
        name: "type",
        headline: "Type",
        operators: ["is", "is not"],
        defaultValues: ["Stock", "Bond"],
        disableAddNew: true,
        allowSingleFilterOnly: true
      }
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
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: { onClick: () => action("add btn clicked") },
    searchBtnProps: { onClick: () => action("search btn clicked") }
  },
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: false,
  enableMultiSorting: true
};

export const DataGridWithSingleValueSelectFilter = DataGridWithFiltersTemplate.bind({});

DataGridWithSingleValueSelectFilter.args = {
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
      {
        name: "name",
        headline: "Name",
        operators: ["is", "is not"],
        defaultValues: ["Company 1", "Company 2"],
        disableAddNew: true,
        valueSelectType: ValueSelectType.single
      },
      {
        name: "type",
        headline: "Type",
        operators: ["is", "is not"],
        defaultValues: ["Stock", "Bond"],
        disableAddNew: true,
        valueSelectType: ValueSelectType.single
      }
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
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: { onClick: () => action("add btn clicked") },
    searchBtnProps: { onClick: () => action("search btn clicked") }
  },
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: false,
  enableMultiSorting: true
};

export const DataGridWithFiltersInEditMode = DataGridWithFiltersTemplate.bind({});

DataGridWithFiltersInEditMode.args = {
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
    filterValues: [{ id: "test", column: "type", operator: "is", value: ["Bond"] }],
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
  initialSort: [
    { name: "name", direction: "ASC" },
    { name: "created", direction: "DESC" }
  ],
  onSort: sort => action(`Sort callback: ${sort}`),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: { onClick: () => action("add btn clicked") },
    searchBtnProps: { onClick: () => action("search btn clicked") }
  },
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: false,
  enableMultiSorting: true
};

DataGridWithFiltersInEditMode.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getAllByRole("button")).not.toHaveLength(0));

  const editFilterButton = await canvas.getAllByRole("button")[0];

  await userEvent.click(editFilterButton);

  await waitFor(() => {
    const filterSelect = canvas.queryAllByLabelText("Filter by");
    expect(filterSelect[0]).toBeVisible();
  });
});

const SearchTemplate = args => {
  const [searchValue, setSearchValue] = useState("");
  const [gridData, setGridData] = useState(args.data);

  useEffect(() => {
    if (searchValue) {
      setGridData(
        args.data.filter(row => {
          const values: string[] = Object.values(row);
          const match = values.some(val => val.toLowerCase().includes(searchValue.toLowerCase()));
          return match;
        })
      );
    } else {
      setGridData(args.data);
    }
  }, [searchValue]);

  return (
    <div style={{ padding: "1rem", boxShadow: "0px 1px 5px 0px #01053214" }}>
      <div style={{ borderRadius: ".5rem", backgroundColor: "#FFF" }}>
        <DataGridComponent
          {...args}
          data={gridData}
          search={{
            onSearch: setSearchValue,
            debounceTime: 500,
            initialSearchValue: searchValue
          }}
        >
          {({ item }: { item: DataGridItem }) => (
            <DataGridRow key={item.id}>
              <DataGridCell>{item.name}</DataGridCell>
              <DataGridCell>{item.id}</DataGridCell>
              <DataGridCell>{item.type}</DataGridCell>
              <DataGridCell>{item.description}</DataGridCell>
            </DataGridRow>
          )}
        </DataGridComponent>
      </div>
    </div>
  );
};

export const DataGridWithSearch = SearchTemplate.bind({});

DataGridWithSearch.args = {
  data: [
    {
      name: "Company 1",

      id: "1",
      type: "Stock",

      description: "Lorem ipsum dolor sit amet"
    },
    {
      name: "Company 2",
      id: "2",
      type: "Stock",
      description: "Consectetur adipiscing elit"
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "description", headline: "Description", disableSorting: true }
  ],
  search: {
    onSearch: val => console.log(val),
    debounceTime: 500
  },

  isLoading: false,
  enableMultiSorting: true
};

const NestedRowsTemplate = args => {
  return (
    <div style={{ padding: "1rem", boxShadow: "0px 1px 5px 0px #01053214" }}>
      <div style={{ borderRadius: ".5rem", backgroundColor: "#FFF" }}>
        <DataGridComponent
          {...args}
          data={args.data}
          nestedRowConfig={{ nestedItemsKey: "nestedItems" }}
        >
          {({ item }: { item: DataGridItem }) => (
            <DataGridRow key={item.id}>
              <DataGridCell>{item.name}</DataGridCell>
              <DataGridCell>{item.id}</DataGridCell>
              <DataGridCell>{item.type}</DataGridCell>
              <DataGridCell>{item.description}</DataGridCell>
            </DataGridRow>
          )}
        </DataGridComponent>
      </div>
    </div>
  );
};

export const DataGridWithNestedRows = NestedRowsTemplate.bind({});

DataGridWithNestedRows.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getAllByTitle("Expand row").length).toBeGreaterThanOrEqual(1));

  await userEvent.click(canvas.getAllByTitle("Expand row")[1]);
  await userEvent.click(canvas.getAllByTitle("Expand row")[0]);
  await userEvent.click(canvas.getAllByTitle("Expand row")[1]);
  await userEvent.click(canvas.getAllByTitle("Expand row")[2]);
  await userEvent.click(canvas.getAllByTitle("Expand row")[3]);
});

DataGridWithNestedRows.args = {
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
              name: "Company 10",
              id: "10",
              type: "Stock",
              description: "Lorem ipsum dolor sit amet",
              nestedItems: [
                {
                  name: "Company 11",
                  id: "11",
                  type: "Stock",
                  description: "Lorem ipsum dolor sit amet",
                  nestedItems: [
                    {
                      name: "Company 13",
                      id: "13",
                      type: "Stock",
                      description: "Lorem ipsum dolor sit amet"
                    }
                  ]
                }
              ]
            },
            {
              name: "Company 101",
              id: "101",
              type: "Stock",
              description: "Lorem ipsum dolor sit amet"
            }
          ]
        },

        {
          name: "Company 102",
          id: "102",
          type: "Stock",
          description: "Lorem ipsum dolor sit amet"
        }
      ]
    },
    {
      name: "Company 2",
      id: "2",
      type: "Stock",
      description: "Consectetur adipiscing elit",
      nestedItems: [
        {
          name: "Company 4",
          id: "4",
          type: "Stock",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          name: "Company 8",
          id: "8",
          type: "Stock",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          name: "Company 9",
          id: "9",
          type: "Stock",
          description: "Lorem ipsum dolor sit amet"
        }
      ]
    },
    {
      name: "Company 20",
      id: "20",
      type: "Stock",
      description: "Consectetur adipiscing elit"
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "description", headline: "Description", disableSorting: true }
  ],
  disableContextMenuColumn: true,
  isLoading: false,
  enableMultiSorting: true
};

export const DataGridWithSearchAndButtons = SearchTemplate.bind({});

DataGridWithSearchAndButtons.args = {
  data: [
    {
      name: "Company 1",

      id: "1",
      type: "Stock",

      description: "Lorem ipsum dolor sit amet"
    },
    {
      name: "Company 2",
      id: "2",
      type: "Stock",
      description: "Consectetur adipiscing elit"
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "description", headline: "Description", disableSorting: true }
  ],
  toolbarButtons: [
    <Button key="1" onClick={() => alert("Add item")}>
      Add item
    </Button>
  ],
  isLoading: false,
  enableMultiSorting: true
};

const ToolbarWithAllOptionsTemplate = args => {
  const {
    filters,
    gridData,
    setGridData,
    onFilterAdd,
    onFilterEdit,
    onFilterDelete,
    onFiltersClear
  } = useMockFilteringLogic(args.data, []);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue) {
      setGridData(
        args.data.filter(row => {
          const values: string[] = Object.values(row);
          const match = values.some(val => val.toLowerCase().includes(searchValue.toLowerCase()));
          return match;
        })
      );
    } else {
      setGridData(args.data);
    }
  }, [searchValue]);

  return (
    <div style={{ padding: "1rem", boxShadow: "0px 1px 5px 0px #01053214" }}>
      <div style={{ borderRadius: ".5rem", backgroundColor: "#FFF" }}>
        <DataGridComponent
          {...args}
          data={gridData}
          filters={{
            columnsMetadata: [
              { name: "name", headline: "Name", operators: ["is", "is not"] },
              { name: "id", headline: "Id", operators: ["is", "is not"] },
              { name: "type", headline: "Type", operators: ["is", "is not"] },
              { name: "description", headline: "Description", operators: ["is", "is not"] }
            ],
            filterValues: filters,
            onFilterAdd,
            onFilterEdit,
            onFilterDelete,
            onFiltersClear
          }}
          search={{
            onSearch: setSearchValue,
            debounceTime: 500,
            initialSearchValue: searchValue
          }}
          toolbarButtons={[
            <Button
              key="1"
              onClick={() => alert("Add item")}
              startIcon={<Icon icon={Icons.Plus} />}
            >
              Add item
            </Button>
          ]}
        >
          {({ item }: { item: DataGridItem }) => (
            <DataGridRow key={item.id}>
              <DataGridCell>{item.name}</DataGridCell>
              <DataGridCell>{item.id}</DataGridCell>
              <DataGridCell>{item.type}</DataGridCell>
              <DataGridCell>{item.description}</DataGridCell>
            </DataGridRow>
          )}
        </DataGridComponent>
      </div>
    </div>
  );
};

export const ToolbarWithAllOptions = ToolbarWithAllOptionsTemplate.bind({});

ToolbarWithAllOptions.args = {
  data: [
    {
      name: "Company 1",
      id: "1",
      type: "Stock",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      name: "Company 2",
      id: "2",
      type: "Bond",
      description: "Consectetur adipiscing elit"
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "description", headline: "Description", disableSorting: true }
  ],
  search: {
    onSearch: val => console.log(val),
    debounceTime: 500
  },

  isLoading: false,
  enableMultiSorting: true
};

const DataGridDatePickerTemplate = args => {
  const [dateFilterValue, setDateFilterValue] = useState<DateTimeFilter>({
    type: THIRTY_SECONDS,
    toDate: new Date().toISOString(),
    fromDate: new Date(Date.now() - 1000 * 30).toISOString()
  });

  const { gridData } = useMockFilteringByDateLogic(args.data, "created", dateFilterValue);

  return (
    <div style={{ padding: "1rem", boxShadow: "0px 1px 5px 0px #01053214" }}>
      <div style={{ borderRadius: ".5rem", backgroundColor: "#FFF" }}>
        <DataGridComponent
          {...args}
          data={gridData}
          filters={{
            dateFilterValue: dateFilterValue,
            onDateFilterValueChange: val => {
              setDateFilterValue(val);
            }
          }}
        >
          {({ item }: { item: DataGridItem }) => (
            <DataGridRow key={item.id}>
              <DataGridCell>{item.name}</DataGridCell>
              <DataGridCell>{item.id}</DataGridCell>
              <DataGridCell>{item.type}</DataGridCell>
              <DataGridCell>{item.created.toString()}</DataGridCell>
            </DataGridRow>
          )}
        </DataGridComponent>
      </div>
    </div>
  );
};

export const DataGridDatePicker = DataGridDatePickerTemplate.bind({});

DataGridDatePicker.args = {
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
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 50)
    },
    {
      name: "Company 3",
      id: "3",
      type: "Bond",
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 270)
    },
    {
      name: "Company 4",
      id: "4",
      type: "Bond",
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 3400)
    },
    {
      name: "Company 5",
      id: "5",
      type: "Bond",
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 86000)
    },
    {
      name: "Company 6",
      id: "6",
      type: "Bond",
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 99000)
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "created", headline: "Created", disableSorting: true }
  ],
  isLoading: false,
  enableMultiSorting: true
};

export const DataGridDatePickerOpened = DataGridDatePickerTemplate.bind({});

DataGridDatePickerOpened.args = {
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
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 50)
    },
    {
      name: "Company 3",
      id: "3",
      type: "Bond",
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 270)
    },
    {
      name: "Company 4",
      id: "4",
      type: "Bond",
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 3400)
    },
    {
      name: "Company 5",
      id: "5",
      type: "Bond",
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 86000)
    },
    {
      name: "Company 6",
      id: "6",
      type: "Bond",
      created: new Date(Date.parse("Fri Mar 24 2023") - 1000 * 99000)
    }
  ],
  headers: [
    { name: "name", headline: "Name" },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", disableSorting: true },
    { name: "created", headline: "Created", disableSorting: true }
  ],
  isLoading: false,
  enableMultiSorting: true
};

DataGridDatePickerOpened.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByRole("button")).toBeInTheDocument());

  const openDatePickerButton = await canvas.getByRole("button");

  await userEvent.click(openDatePickerButton);

  await waitFor(() => {
    const sideBarItem = canvas.queryByText("Custom");
    expect(sideBarItem).toBeVisible();
  });
});
