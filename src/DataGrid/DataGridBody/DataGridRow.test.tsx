import React from 'react';
import { DataGridRow, Props } from './DataGridRow';
import { render } from '@testing-library/react';

const defaultParams: Props = {};

const createDataGridRow = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DataGridRow {...parameters} data-testid="dataGridRow">
      dataGridRow content
    </DataGridRow>
  );
  const dataGridRow = queries.getByTestId('dataGridRow');

  return {
    ...queries,
    dataGridRow,
  };
};

describe('DataGridRow should render', () => {
  it('renders without crashing', () => {
    const { dataGridRow } = createDataGridRow();

    expect(dataGridRow).toBeDefined();
  });
});
