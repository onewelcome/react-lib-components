import React from 'react';
import { Pagination } from './Pagination';
import { render } from '@testing-library/react';

describe('Pagination should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={1}
        totalElements={500}
        onPageChange={jest.fn()}
        onPageSizeChange={jest.fn()}
        data-testid="pagination"
      >
        pagination content
      </Pagination>
    );
    const pagination = getByTestId('pagination');

    expect(pagination).toBeDefined();
  });
});
