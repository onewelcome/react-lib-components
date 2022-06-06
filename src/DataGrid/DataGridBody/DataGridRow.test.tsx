import React from 'react';
import { DataGridRow, Props } from './DataGridRow';
import { render } from '@testing-library/react';
import { DataGridCell } from './DataGridCell';

const defaultParams: Props = {
  children: [<DataGridCell>1</DataGridCell>, <DataGridCell>2</DataGridCell>],
  headers: [
    { name: 'firstName', headline: 'first name' },
    { name: 'lastName', headline: 'last name' },
  ],
};

const createDataGridRow = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement('table');
  const queries = render(<DataGridRow {...parameters} data-testid="dataGridRow" />, { container });
  const dataGridRow = queries.getByTestId('dataGridRow');

  return {
    ...queries,
    dataGridRow,
  };
};

describe('DataGridRow should render', () => {
  it('renders without crashing', () => {
    const { dataGridRow, getAllByRole } = createDataGridRow();

    expect(dataGridRow).toBeDefined();
    expect(dataGridRow).toHaveClass('row', { exact: true });
    const cells = getAllByRole('cell');
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent('1');
    expect(cells[1]).toHaveTextContent('2');
  });

  it('renders with additional class', () => {
    const { dataGridRow } = createDataGridRow((params) => ({ ...params, className: 'test' }));

    expect(dataGridRow).toHaveClass('row test', { exact: true });
  });

  it('renders loading state', () => {
    const { dataGridRow } = createDataGridRow((params) => ({ ...params, isLoading: true }));

    expect(dataGridRow).toHaveClass('row loading', { exact: true });
  });

  it('renders only visible columns', () => {
    const { dataGridRow, getAllByRole } = createDataGridRow((params) => ({
      ...params,
      headers: [
        { name: 'firstName', headline: 'first name', hidden: true },
        { name: 'lastName', headline: 'last name', hidden: true },
        { name: 'date', headline: 'date' },
        { name: 'status', headline: 'status' },
      ],
      children: [
        <DataGridCell>1</DataGridCell>,
        <DataGridCell>2</DataGridCell>,
        <DataGridCell>3</DataGridCell>,
        <DataGridCell>4</DataGridCell>,
      ],
    }));

    expect(dataGridRow).toBeDefined();
    const cells = getAllByRole('cell');
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent('3');
    expect(cells[1]).toHaveTextContent('4');
  });
});
