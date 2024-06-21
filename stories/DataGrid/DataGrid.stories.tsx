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

import React, { Fragment, useState } from "react";
import { Meta } from "@storybook/react";
import { DataGrid as DataGridComponent } from "../../src/components/DataGrid/DataGrid";
import {
  Button,
  ContextMenu,
  ContextMenuItem,
  DataGridCell,
  DataGridDrawerItem,
  DataGridRow,
  Icon,
  IconButton,
  Icons,
  generateID
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
import { DefaultOperators } from "../../src/components/DataGrid/DataGridFilters/DataGridFilters.interfaces";

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

export const DataGridWithFilters = Template.bind({});

DataGridWithFilters.args = {
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
  filters: {
    enableFilters: true,
    filtersProps: {
      filterValues: [
        {
          id: generateID(),
          column: "name",
          operator: DefaultOperators.is,
          value: ["test", "test2"]
        }
      ],
      columnsMetadata: [
        {
          name: "name",
          headline: "Name",
          operators: ["is", "contains", "does not contain"],
          defaultValues: ["Stock", "Bond"]
        },
        { name: "created", headline: "Created", operators: ["before", "after", "between"] },
        { name: "id", headline: "Identifier" },
        { name: "type", headline: "Type", defaultValues: ["Stock", "Bond"] },
        { name: "enabled", headline: "Status" }
      ],
      onFilterAdd: filter => console.log(filter),
      onFilterEdit: filter => console.log(filter),
      onFilterDelete: id => console.log(id),
      onFiltersClear: () => console.log("clear")
    }
  },
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
