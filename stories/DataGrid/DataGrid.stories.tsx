import React, { Fragment, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DataGrid as DataGridComponent, Props } from '../../src/DataGrid/DataGrid';
import { DataGridHeader } from '../../src/DataGrid/DataGridHeader/DataGridHeader';
import { DataGridPrototype } from '../../src/DataGrid/DataGridPrototype';
import { DataGridBody } from '../../src/DataGrid/DataGridBody/DataGridBody';
import { DataGridCell } from '../../src/DataGrid/DataGridBody/DataGridCell';
import { ContextMenu } from '../../src/ContextMenu/ContextMenu';
import { IconButton } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';
import { DataGridActions } from '../../src/DataGrid/DataGridActions';
import { Button } from '../../src/Button/Button';
import { DataGridRow } from '../../src/DataGrid/DataGridBody/DataGridRow';

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
  component: DataGridPrototype,
  args: {
    data,
    headers: [
      { name: 'name', headline: 'Name' },
      { name: 'created', headline: 'Created' },
      { name: 'id', headline: 'Identifier' },
      { name: 'type', headline: 'Type', disableSorting: true },
      { name: 'enabled', headline: 'Enabled', disableSorting: true },
    ],
    initialSort: [
      { name: 'name', direction: 'ASC' },
      { name: 'created', direction: 'DESC' },
    ],
    onSort: (sort) => console.log(JSON.stringify(sort)),
    actions: {
      addBtnProps: { onClick: () => console.log('add btn clicked') },
      columnsBtnProps: { onClick: () => console.log('columns btn clicked') },
      searchBtnProps: { onClick: () => console.log('search btn clicked') },
    },
    disableContexMenuColumn: false,
    paginationProps: {
      totalElements: 105,
      pageSize: 10,
      currentPage: 1,
    },
    isLoading: false,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#F5F8F8', padding: 30 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<Props<DataType>> = (args) => {
  return (
    <Fragment>
      <DataGridComponent {...args}>
        {({ item }) => (
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
            {!args.disableContexMenuColumn && (
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
        )}
      </DataGridComponent>
    </Fragment>
  );
};

export const DataGrid = Template.bind({});

DataGrid.args = {};
DataGrid.storyName = 'DataGrid';
