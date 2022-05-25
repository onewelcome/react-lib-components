import React from 'react';
import { DataGridBody, Props } from './DataGridBody';
import { render } from '@testing-library/react';

const defaultParams: Props = {};

const createDataGridBody = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DataGridBody {...parameters} data-testid="dataGridBody">
      dataGridBody content
    </DataGridBody>
  );
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
  });
});
