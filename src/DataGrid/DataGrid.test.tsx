import React, { useEffect, useRef } from 'react';
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
        enableAddBtn: true,
        enableColumnsBtn: true,
        enableSearchBtn: true,
      },
    }));
    const [addBtn, desktopColumnsBtn, mobileColumnsBtn, desktopSearchBtn, mobileSearchBtn] =
      getAllByRole(dataGrid.querySelector('.actions')!, 'button');
    expect(addBtn).toHaveTextContent('Add item');
    expect(desktopColumnsBtn).toHaveTextContent('Columns');
    expect(mobileColumnsBtn).toHaveTextContent('Show/hide columns');
    expect(desktopSearchBtn).toHaveTextContent('Search');
    expect(mobileSearchBtn).toHaveTextContent('Search');
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
      disableContextMenuColumn: true,
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

  it('renders empty state', () => {
    const emptyLabel = 'emptyLabel';
    const { ...queries } = createDataGrid((params) => ({ ...params, emptyLabel, data: [] }));

    const [_thead, tbody] = queries.getAllByRole('rowgroup');
    const rows = getAllByRole(tbody, 'row');
    const firstRowCells = getAllByRole(rows[0], 'cell');
    expect(firstRowCells).toHaveLength(1);
    expect(firstRowCells[0]).toHaveAttribute('colspan', `${defaultParams.headers.length + 1}`);
    expect(firstRowCells[0]).toHaveTextContent(emptyLabel);
  });

  it('renders pagination', () => {
    const { getByRole } = createDataGrid((params) => ({
      ...params,
      paginationProps: {
        totalElements: 105,
        pageSize: 10,
        currentPage: 2,
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn(),
      },
    }));

    expect(getByRole('button', { name: 'previous' })).toBeDefined();
    expect(getByRole('button', { name: 'next' })).toBeDefined();
    expect(getByRole('button', { name: 'last' })).toBeDefined();
  });
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

  it('clicking on show/hide columns popover should show/hide columns', async () => {
    const { getByRole, findByLabelText, ...queries } = createDataGrid((params) => ({
      ...params,
      actions: { enableColumnsBtn: true },
    }));
    expect(queries.getAllByRole('columnheader')).toHaveLength(3);

    userEvent.click(getByRole('button', { name: 'Columns' }));

    const nameToggle = await findByLabelText(defaultParams.headers[1].headline);
    expect(nameToggle).toBeChecked();
    userEvent.click(nameToggle);
    expect(nameToggle).not.toBeChecked();
    expect(getByRole('button', { name: 'Close show columns dialog' })).toBeDefined();

    const columns = queries.getAllByRole('columnheader');
    expect(columns).toHaveLength(2);
    expect(columns[0]).toHaveTextContent(defaultParams.headers[0].headline);
    expect(columns[1]).toHaveTextContent(defaultParams.headers[2].headline);

    const rowsCount = defaultParams.data?.length!;
    const colsCount = defaultParams.headers.length;
    const hiddenColsCount = defaultParams.headers.length;
    const contextMenuColsCount = defaultParams.headers.length;
    const [_thead, tbody] = queries.getAllByRole('rowgroup');
    expect(getAllByRole(tbody, 'cell')).toHaveLength(
      rowsCount * (colsCount - hiddenColsCount + contextMenuColsCount)
    );
  });
});

describe('ref should work', () => {
  it('should give back the proper data prop, this also checks if the component propagates ...rest properly', () => {
    const ExampleComponent = ({
      propagateRef,
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
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
