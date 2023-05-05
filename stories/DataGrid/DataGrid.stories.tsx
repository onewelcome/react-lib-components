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
import { Meta } from "@storybook/react";
import { DataGrid as DataGridComponent, Props } from "../../src/components/DataGrid/DataGrid";
import { DataGridRow } from "../../src/components/DataGrid/DataGridBody/DataGridRow";
import { DataGridCell } from "../../src/components/DataGrid/DataGridBody/DataGridCell";
import { ContextMenu } from "../../src/components/ContextMenu/ContextMenu";
import { IconButton } from "../../src/components/Button/IconButton";
import { Icon, Icons } from "../../src/components/Icon/Icon";
import { ContextMenuItem } from "../../src/components/ContextMenu/ContextMenuItem";
import DataGridDocumentation from "./DataGrid.mdx";

export default {
  title: "DataGrid",
  component: DataGridComponent,
  parameters: {
    docs: {
      page: DataGridDocumentation
    }
  }
} as Meta;

const Template = args => {
  const row = ({ item }) => {
    if (!item) return;
    return (
      <DataGridRow key={item.id}>
        <DataGridCell>{item.name}</DataGridCell>
        <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>
        <DataGridCell>{item.id}</DataGridCell>
        <DataGridCell>{item.type}</DataGridCell>
        <DataGridCell>{item.enabled ? "Active" : "Delisted"}</DataGridCell>
      </DataGridRow>
    );
  };

  return (
    <DataGridComponent {...args}>
      {({
        item
      }: {
        item: { name: string; id: string; created: Date; type: string; enabled: boolean };
      }) => (
        <DataGridRow key={item.id}>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>
          <DataGridCell>{item.id}</DataGridCell>
          <DataGridCell>{item.type}</DataGridCell>
          <DataGridCell>{item.enabled ? "Active" : "Delisted"}</DataGridCell>
          {!args.disableContextMenuColumn && (
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
                <ContextMenuItem>Item 1</ContextMenuItem>
                <ContextMenuItem>Item 2</ContextMenuItem>
                <ContextMenuItem>Item 3</ContextMenuItem>
              </ContextMenu>
            </DataGridCell>
          )}
        </DataGridRow>
      )}
    </DataGridComponent>
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
  onSort: sort => console.warn(`Sort callback: ${sort}`),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: { onClick: () => console.warn("add btn clicked") },
    searchBtnProps: { onClick: () => console.warn("search btn clicked") }
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
  onSort: sort => console.warn(`Sort callback: ${sort}`),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: { onClick: () => console.warn("add btn clicked") },
    searchBtnProps: { onClick: () => console.warn("search btn clicked") }
  },
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
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
  onSort: sort => console.warn(`Sort callback: ${sort}`),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: { onClick: () => console.warn("add btn clicked") },
    searchBtnProps: { onClick: () => console.warn("search btn clicked") }
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
