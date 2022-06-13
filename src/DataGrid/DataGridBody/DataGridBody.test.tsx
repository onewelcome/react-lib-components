import React from 'react';
import { DataGridBody, Props } from './DataGridBody';
import { render, getAllByRole } from '@testing-library/react';
import { DataGridRow } from './DataGridRow';
import { DataGridCell } from './DataGridCell';
import { ContextMenu } from '../../ContextMenu/ContextMenu';
import { IconButton } from '../../Button/IconButton';
import { Icon, Icons } from '../../Icon/Icon';
import { ContextMenuItem } from '../../ContextMenu/ContextMenuItem';

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
    { name: 'firstName', headline: 'First name' },
    { name: 'lastName', headline: 'Last name' },
    { name: 'date', headline: 'Date' },
  ],
  data: [
    { firstName: 'Paweł', lastName: 'Napieracz', date: '12.12.1990' },
    { firstName: 'Michał', lastName: 'Górski', date: '12.12.1994' },
    { firstName: 'Daniel', lastName: 'Velden', date: '12.12.199x' },
    { firstName: 'Jasha', lastName: 'Joachimsthal', date: '12.12.198x' },
  ],
};

const createDataGridBody = (params?: (defaultParams: Props<DataType>) => Props<DataType>) => {
  let parameters = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement('table');
  const queries = render(<DataGridBody {...parameters} data-testid="dataGridBody" />, {
    container,
  });
  const dataGridBody = queries.getByTestId('dataGridBody');

  return {
    ...queries,
    dataGridBody,
  };
};

describe('DataGridBody should render', () => {
  it('renders without crashing', () => {
    const { dataGridBody } = createDataGridBody();

    expect(dataGridBody).toBeDefined();
    const rows = getAllByRole(dataGridBody, 'row');
    expect(rows).toMatchSnapshot();
  });

  it('renders loading state with only visible columns', () => {
    const headers = [...defaultParams.headers];
    headers[0] = { ...headers[0], hidden: true };
    const { dataGridBody } = createDataGridBody((params) => ({ ...params, headers }));

    expect(dataGridBody).toBeDefined();
    const rows = getAllByRole(dataGridBody, 'row');
    const firstRowCells = getAllByRole(rows[0], 'cell');
    expect(firstRowCells).toHaveLength(3);
    expect(firstRowCells[0]).toHaveTextContent(defaultParams.data?.[0].lastName!);
  });

  it('renders empty state', () => {
    const emptyLabel = 'emptyLabel';
    const { dataGridBody } = createDataGridBody((params) => ({
      ...params,
      emptyLabel,
      data: undefined,
    }));

    const rows = getAllByRole(dataGridBody, 'row');
    const firstRowCells = getAllByRole(rows[0], 'cell');
    expect(firstRowCells).toHaveLength(1);
    expect(firstRowCells[0]).toHaveAttribute('colspan', `${defaultParams.headers.length + 1}`);
    expect(firstRowCells[0]).toHaveTextContent(emptyLabel);
  });
});
