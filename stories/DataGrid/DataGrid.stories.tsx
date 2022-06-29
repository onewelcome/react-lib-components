import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DataGrid as DataGridComponent, Props } from '../../src/DataGrid/DataGrid';
import { DataGridCell } from '../../src/DataGrid/DataGridBody/DataGridCell';
import { ContextMenu } from '../../src/ContextMenu/ContextMenu';
import { IconButton } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';
import { DataGridRow } from '../../src/DataGrid/DataGridBody/DataGridRow';
import { action } from '@storybook/addon-actions';
import DataGridDocumentation from './DataGrid.mdx';

type DataType = { name: string; created: Date; id: string; type: string; enabled: boolean };
const data: DataType[] = Array.from(Array(10)).map((_, idx) => ({
  name: 'Adyen' + idx,
  created: new Date(new Date().getTime() + 86400000 * idx),
  id: idx + '343454435435435',
  type: 'Stock',
  enabled: !!(idx % 2),
}));

const meta: Meta = {
  title: 'Stories/UI/DataGrid',
  component: DataGridComponent,
  parameters: {
    docs: {
      page: DataGridDocumentation,
    },
  },
  args: {
    data,
    headers: [
      { name: 'name', headline: 'Name' },
      { name: 'created', headline: 'Created' },
      { name: 'id', headline: 'Identifier' },
      { name: 'type', headline: 'Type', disableSorting: true },
      { name: 'enabled', headline: 'Enabled', disableSorting: true },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem', backgroundColor: '#F5F8F8' }}>
        <div
          style={{
            borderRadius: 'var(--card-border-radius)',
            backgroundColor: 'var(--card-background-color)',
            padding: '0',
            boxSizing: 'border-box',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

const Template: Story<Props<DataType>> = (args) => {
  const children =
    args.children ??
    (({ item }) => (
      <DataGridRow key={item.id}>
        <DataGridCell>{item.name}</DataGridCell>
        <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>
        <DataGridCell>{item.id}</DataGridCell>
        <DataGridCell>{item.type}</DataGridCell>
        <DataGridCell>
          {item.enabled ? (
            <span style={{ color: 'var(--success)' }}>Yes</span>
          ) : (
            <span style={{ color: 'var(--error)' }}>No</span>
          )}
        </DataGridCell>
        {!args.disableContextMenuColumn && (
          <DataGridCell>
            <ContextMenu
              id={`consent_menu_${item.id}`}
              placement={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
    ));
  return <DataGridComponent {...args}>{children}</DataGridComponent>;
};

export const DataGrid = Template.bind({});

DataGrid.args = {
  initialSort: [
    { name: 'name', direction: 'ASC' },
    { name: 'created', direction: 'DESC' },
  ],
  onSort: (sort) => action(`Sort callback: ${sort}`),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: { onClick: () => action('add btn clicked') },
    searchBtnProps: { onClick: () => action('search btn clicked') },
  },
  disableContextMenuColumn: true,
  paginationProps: {
    totalElements: 105,
    currentPage: 1,
  },
  isLoading: false,
  enableMultiSorting: true,
};
DataGrid.storyName = 'DataGrid';

export const HideColumnDataGrid = Template.bind({});
HideColumnDataGrid.storyName = 'Hide columns in DataGrid';
HideColumnDataGrid.args = {
  headers: [
    { name: 'name', headline: 'Name' },
    { name: 'created', headline: 'Created', hidden: true },
    { name: 'id', headline: 'Identifier', hidden: true },
    { name: 'type', headline: 'Type', disableSorting: true },
    { name: 'enabled', headline: 'Enabled', disableSorting: true },
  ],
  actions: undefined,
  paginationProps: undefined,
  initialSort: [{ name: 'name', direction: 'ASC' }],
  data: data.filter((_, idx) => idx < 3),
};

export const SimpleDataGrid = Template.bind({});
SimpleDataGrid.storyName = 'Simple DataGrid';
SimpleDataGrid.args = {
  data: data.filter((_, idx) => idx < 3),
};

export const IndexDataGrid = Template.bind({});
IndexDataGrid.storyName = 'Index column';
IndexDataGrid.args = {
  data: data.filter((_, idx) => idx < 3),
  headers: [
    { name: 'index', headline: '#' },
    { name: 'name', headline: 'Name' },
    { name: 'number', headline: 'Random number' },
  ],
  onSort: undefined,
  children: ({ item, index }) => (
    <DataGridRow key={item.id}>
      <DataGridCell>{index + 1}</DataGridCell>
      <DataGridCell>{item.name}</DataGridCell>
      <DataGridCell>{Math.random()}</DataGridCell>
      <DataGridCell>
        <ContextMenu
          id={`consent_menu_${item.id}`}
          placement={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
    </DataGridRow>
  ),
};

export const SkeletonLoadingAnimationDataGrid = Template.bind({});
SkeletonLoadingAnimationDataGrid.storyName = 'Loading animation';
SkeletonLoadingAnimationDataGrid.args = {
  isLoading: true,
};

export const ActionsDataGrid = Template.bind({});
ActionsDataGrid.storyName = 'Actions section in DataGrid';
ActionsDataGrid.args = {
  data: data.filter((_, idx) => idx < 1),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    searchBtnProps: {
      title: 'Zoeken',
      children: 'Zoeken',
    },
  },
};

export const EmptyDataGrid = Template.bind({});
EmptyDataGrid.storyName = 'Empty DataGrid';
EmptyDataGrid.args = {
  data: [],
  emptyLabel: 'There are no vegetables within the current selection',
};

export const PaginationDataGrid = Template.bind({});
PaginationDataGrid.storyName = 'DataGrid with Pagination';
PaginationDataGrid.args = {
  data: data.filter((_, idx) => idx < 1),
  paginationProps: {
    totalElements: 105,
    currentPage: 2,
  },
};
