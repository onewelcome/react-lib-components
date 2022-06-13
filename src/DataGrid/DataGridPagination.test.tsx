import React from 'react';
import { DataGridPagination, Props } from './DataGridPagination';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  onPageChange: jest.fn(),
  onPageSizeChange: jest.fn(),
};

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

  it('renders pagination with all buttons', () => {
    const { getByRole } = createDataGridPagination((params) => ({
      ...params,
      currentPage: 2,
      totalElements: 1000,
    }));

    expect(getByRole('button', { name: 'previous' })).toBeDefined();
    expect(getByRole('button', { name: 'next' })).toBeDefined();
    expect(getByRole('button', { name: 'last' })).toBeDefined();
  });
});

describe('DataGridPagination should be interactive', () => {
  it('clicking on next/prev/last page works', () => {
    const { getByRole } = createDataGridPagination((params) => ({
      ...params,
      currentPage: 2,
      totalElements: 1000,
    }));

    const prev = getByRole('button', { name: 'previous' });
    const next = getByRole('button', { name: 'next' });
    const last = getByRole('button', { name: 'last' });

    userEvent.click(prev);
    expect(defaultParams.onPageChange).toBeCalledWith(1);
    userEvent.click(next);
    expect(defaultParams.onPageChange).toBeCalledWith(3);
    userEvent.click(last);
    expect(defaultParams.onPageChange).toBeCalledWith(100);
  });
});
