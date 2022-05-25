import React from 'react';
import { DataGridCell, Props } from './DataGridCell';
import { render } from '@testing-library/react';

const defaultParams: Props = {};

const createDataGridCell = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DataGridCell {...parameters} data-testid="dataGridCell">
      dataGridCell content
    </DataGridCell>
  );
  const dataGridCell = queries.getByTestId('dataGridCell');

  return {
    ...queries,
    dataGridCell,
  };
};

describe('DataGridCell should render', () => {
  it('renders without crashing', () => {
    const { dataGridCell } = createDataGridCell();

    expect(dataGridCell).toBeDefined();
  });
});
