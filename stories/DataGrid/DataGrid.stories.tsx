import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DataGrid as DataGridComponent, Props } from '../../src/DataGrid/DataGrid';
import { DataGridHeader } from '../../src/DataGrid/DataGridHeader/DataGridHeader';
import { DataGridHeaderCell } from '../../src/DataGrid/DataGridHeader/DataGridHeaderCell';
import { DataGridPrototype } from '../../src/DataGrid/DataGridPrototype';
import { DataGridBody } from '../../src/DataGrid/DataGridBody/DataGridBody';
import { DataGridRow } from '../../src/DataGrid/DataGridBody/DataGridRow';
import { DataGridCell } from '../../src/DataGrid/DataGridBody/DataGridCell';

type DataType = { name: string; created: Date; id: string; type: string; enabled: boolean };

const meta: Meta = {
  title: 'Stories/UI/DataGrid',
  component: DataGridPrototype,
  args: {},
};

export default meta;

const Template: Story<Props> = (args) => {
  return (
    <>
      <DataGridComponent {...args}>
        <DataGridHeader
          headers={[
            { name: 'name', headline: 'Name' },
            { name: 'created', headline: 'Created' },
            { name: 'id', headline: 'Identifier' },
            { name: 'type', headline: 'Type' },
            { name: 'enabled', headline: 'Enabled' },
          ]}
          initialSort={[
            { name: 'name', direction: 'ASC' },
            { name: 'created', direction: 'DESC' },
          ]}
          onSort={(sort) => console.log(JSON.stringify(sort))}
        />
        <DataGridBody
          data={
            [
              {
                name: 'Adyen',
                created: new Date(),
                id: '1343454435435435',
                type: 'Stock',
                enabled: true,
              },
              {
                name: 'Adyen2',
                created: new Date(),
                id: '2343454435435435',
                type: 'Stock',
                enabled: false,
              },
            ] as DataType[]
          }
          loading={false}
        >
          {(item) => (
            <DataGridRow key={item.id}>
              <DataGridCell>{item.name}</DataGridCell>
              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>
              <DataGridCell>{item.id}</DataGridCell>
              <DataGridCell>{item.type}</DataGridCell>
              <DataGridCell>{item.enabled ? 'Yes' : 'No'}</DataGridCell>
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGridComponent>
      <div style={{ marginBottom: 100 }}></div>
      <DataGridPrototype {...args} />
    </>
  );
};

export const DataGrid = Template.bind({});

DataGrid.args = {};
DataGrid.storyName = 'DataGrid';
