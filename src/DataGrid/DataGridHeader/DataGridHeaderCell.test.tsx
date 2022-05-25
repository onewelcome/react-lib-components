import React from 'react';
import { DataGridHeaderCell, Props } from './DataGridHeaderCell';
import { render } from '@testing-library/react';

const defaultParams: Props = { name: 'test', headline: 'Test' };

const createDataGridHeaderCell = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DataGridHeaderCell {...parameters} data-testid="dataGridHeaderCell" />);
  const dataGridHeaderCell = queries.getByTestId('dataGridHeaderCell');

  return {
    ...queries,
    dataGridHeaderCell,
  };
};

describe('DataGridHeaderCell should render', () => {
  it('renders without crashing', () => {
    const { dataGridHeaderCell } = createDataGridHeaderCell();

    expect(dataGridHeaderCell).toBeDefined();
  });
});
