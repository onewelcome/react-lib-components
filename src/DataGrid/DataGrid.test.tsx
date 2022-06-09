import React from 'react';
import { DataGrid, Props } from './DataGrid';
import { getAllByRole, render, queryAllByRole, getByRole } from '@testing-library/react';
import { DataGridRow } from './DataGridBody/DataGridRow';
import { DataGridCell } from './DataGridBody/DataGridCell';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { IconButton } from '../Button/IconButton';
import { Icon, Icons } from '../Icon/Icon';
import { ContextMenuItem } from '../ContextMenu/ContextMenuItem';
import userEvent from '@testing-library/user-event';

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
  enableMultiSorting: true,
  data: [
    { firstName: 'Paweł', lastName: 'Napieracz', date: '12.12.1990' },
    { firstName: 'Michał', lastName: 'Górski', date: '12.12.1994' },
    { firstName: 'Daniel', lastName: 'Velden', date: '12.12.199x' },
    { firstName: 'Jasha', lastName: 'Joachimsthal', date: '12.12.198x' },
  ],
};

const createDataGrid = (params?: (defaultParams: Props<DataType>) => Props<DataType>) => {
  let parameters = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DataGrid {...parameters} data-testid="dataGrid" />);
  const dataGrid = queries.getByTestId('dataGrid');

  return {
    ...queries,
    dataGrid,
  };
};

describe('DataGrid should render', () => {
  it('renders without crashing', () => {
    const rowsCount = defaultParams.data?.length!;
    const colsCount = defaultParams.headers?.length!;
    const contextMenuCellCount = 1;
    const { dataGrid, ...queries } = createDataGrid();

    expect(dataGrid).toBeDefined();

    expect(dataGrid.querySelector('.actions')).toBeNull();

    const [thead, tbody] = queries.getAllByRole('rowgroup');

    expect(queryAllByRole(thead, 'columnheader')).toHaveLength(3);
    expect(queryAllByRole(thead, 'cell')).toHaveLength(contextMenuCellCount);
    expect(queryAllByRole(thead, 'button')).toHaveLength(0); //sorting should be disabled by default

    expect(queryAllByRole(tbody, 'cell')).toHaveLength(
      rowsCount * (colsCount + contextMenuCellCount)
    );
  });

  it('renders actions buttons', () => {
    const { dataGrid } = createDataGrid((params) => ({
      ...params,
      actions: {
        addBtnProps: { onClick: jest.fn() },
        columnsBtnProps: { onClick: jest.fn() },
        searchBtnProps: { onClick: jest.fn() },
      },
    }));
    const [addBtn, columnsBtn, searchBtn] = getAllByRole(
      dataGrid.querySelector('.actions')!,
      'button'
    );
    expect(addBtn).toHaveTextContent('Add item');
    expect(columnsBtn).toHaveTextContent('Columns');
    expect(searchBtn).toHaveTextContent('Search');
  });

  it('renders table with initialized sorting indicators', () => {
    const { getAllByRole } = createDataGrid((params) => ({
      ...params,
      onSort: jest.fn(),
      initialSort: [
        { name: defaultParams.headers[0].name, direction: 'DESC' },
        { name: defaultParams.headers[2].name, direction: 'ASC' },
      ],
    }));

    const [firstNameHeader, lastNameHeader, dateHeader] = getAllByRole('columnheader');
    expect(firstNameHeader).toHaveAttribute('aria-sort', 'descending');
    expect(lastNameHeader).not.toHaveAttribute('aria-sort');
    expect(dateHeader).toHaveAttribute('aria-sort', 'ascending');
  });

  it('renders table without context menu', () => {
    const rowsCount = defaultParams.data?.length!;
    const colsCount = defaultParams.headers?.length!;
    const { getAllByRole } = createDataGrid((params) => ({
      ...params,
      disableContexMenuColumn: true,
      children: ({ item }) => (
        <DataGridRow key={item.firstName}>
          <DataGridCell>{item.firstName}</DataGridCell>
          <DataGridCell>{item.lastName}</DataGridCell>
          <DataGridCell>{item.date}</DataGridCell>
        </DataGridRow>
      ),
    }));

    expect(getAllByRole('columnheader')).toHaveLength(3);
    expect(getAllByRole('cell')).toHaveLength(rowsCount * colsCount);
  });

  it('renders loading state with skeleton loading animation on data cells and empty row on content menu cells', () => {
    const { ...queries } = createDataGrid((params) => ({ ...params, isLoading: true }));

    const [_thead, tbody] = queries.getAllByRole('rowgroup');
    expect(
      getAllByRole(tbody, 'cell').find((cell, index) => {
        const contextMenuCell = index % 4 === 3;
        return (
          !contextMenuCell && (cell.firstChild as HTMLElement).getAttribute('class') !== 'loading'
        );
      })
    ).toBeUndefined();
  });

  //@TODO; add test for hiding pagination!
  //@TODO: add test for pagination interactions
});

describe('DataGrid should have interactive table header', () => {
  it('clicking table headers should call sort callback', () => {
    const onSort = jest.fn();
    const { getAllByRole } = createDataGrid((params) => ({
      ...params,
      onSort,
    }));

    const [firstNameHeader, lastNameHeader, dateHeader] = getAllByRole('columnheader');

    userEvent.click(getByRole(firstNameHeader, 'button'));
    expect(onSort).toBeCalledWith([{ name: defaultParams.headers[0].name, direction: 'ASC' }]);

    userEvent.click(getByRole(lastNameHeader, 'button'));
    userEvent.click(getByRole(dateHeader, 'button'));
    expect(onSort).toBeCalledWith([
      { name: defaultParams.headers[2].name, direction: 'ASC' },
      { name: defaultParams.headers[1].name, direction: 'ASC' },
      { name: defaultParams.headers[0].name, direction: 'ASC' },
    ]);

    userEvent.click(getByRole(firstNameHeader, 'button'));
    expect(onSort).toBeCalledWith([
      { name: defaultParams.headers[0].name, direction: 'DESC' },
      { name: defaultParams.headers[2].name, direction: 'ASC' },
      { name: defaultParams.headers[1].name, direction: 'ASC' },
    ]);

    userEvent.click(getByRole(dateHeader, 'button'));
    expect(onSort).toBeCalledWith([
      { name: defaultParams.headers[2].name, direction: 'DESC' },
      { name: defaultParams.headers[0].name, direction: 'DESC' },
      { name: defaultParams.headers[1].name, direction: 'ASC' },
    ]);

    userEvent.click(getByRole(dateHeader, 'button'));
    userEvent.click(getByRole(firstNameHeader, 'button'));
    userEvent.click(getByRole(lastNameHeader, 'button'));
    expect(onSort).toBeCalledWith([{ name: defaultParams.headers[1].name, direction: 'DESC' }]);
    expect(onSort).toBeCalledTimes(8);
  });
});
