import React from 'react';
import { DataGridHeader, Props } from './DataGridHeader';
import { render } from '@testing-library/react';

const defaultParams: Props = { headers: [] };

const createDataGridHeader = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DataGridHeader {...parameters} data-testid="dataGridHeader"></DataGridHeader>
  );
  const dataGridHeader = queries.getByTestId('dataGridHeader');

  return {
    ...queries,
    dataGridHeader,
  };
};

describe('DataGridHeader should render', () => {
  it('renders without crashing', () => {
    const { dataGridHeader } = createDataGridHeader();

    expect(dataGridHeader).toBeDefined();
  });
});
