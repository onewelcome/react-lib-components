import React from 'react';
import { DataGrid, Props } from './DataGrid';
import { render } from '@testing-library/react';

type DataType = { firstName: string };

const defaultParams: Props<DataType> = { children: <></>, loading: false };

const createDataGrid = (params?: (defaultParams: Props<DataType>) => Props<DataType>) => {
  let parameters: Props<DataType> = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DataGrid {...parameters} data-testid="dataGrid">
      dataGrid content
    </DataGrid>
  );
  const dataGrid = queries.getByTestId('dataGrid');

  return {
    ...queries,
    dataGrid,
  };
};

describe('DataGrid should render', () => {
  it('renders without crashing', () => {
    const { dataGrid } = createDataGrid();

    expect(dataGrid).toBeDefined();
  });
});
