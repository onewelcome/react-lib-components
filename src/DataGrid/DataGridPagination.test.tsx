import React from 'react';
import { DataGridPagination, Props } from './DataGridPagination';
import { render } from '@testing-library/react';

const defaultParams: Props = {};

const createDataGridPagination = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DataGridPagination {...parameters} data-testid="dataGridPagination" />);
  const dataGridPagination = queries.getByTestId('dataGridPagination');

  return {
    ...queries,
    dataGridPagination,
  };
};

describe('DataGridPagination should render', () => {
  it('renders without crashing', () => {
    const { dataGridPagination } = createDataGridPagination();

    expect(dataGridPagination).toBeDefined();
  });
});
