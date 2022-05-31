import React from 'react';
import { Pagination, Props } from './Pagination';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  currentPage: 1,
  totalElements: 500,
  onPageChange: jest.fn(),
  onPageSizeChange: jest.fn(),
  onCurrentPageChange: jest.fn(),
};

const createPagination = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;

  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(<Pagination data-testid="pagination" {...parameters} />);

  const pagination = queries.getByTestId('pagination');

  return {
    ...queries,
    pagination,
  };
};

describe('Pagination should render', () => {
  it('renders without crashing', () => {
    const { pagination } = createPagination();

    expect(pagination).toBeTruthy();
  });
});

describe('different current pages and their effect on what renders', () => {
  it('is on the first page and does not render previous and first', () => {
    const { pagination } = createPagination();

    expect(pagination.querySelector('.next')).toBeTruthy();
    expect(pagination.querySelector('.previous')).toBeFalsy();
  });

  it('is on the second page and does not render first', () => {
    const { pagination } = createPagination((defaultParams) => ({
      ...defaultParams,
      currentPage: 2,
    }));

    expect(pagination.querySelector('[data-paginate="first"]')).toBeFalsy();
    expect((pagination.querySelector('.current-value-input input') as HTMLInputElement).value).toBe(
      '2'
    );
  });

  it('is on the second to last page and does not render last', () => {
    const { pagination } = createPagination((defaultParams) => ({
      ...defaultParams,
      currentPage: 499,
    }));

    expect(pagination.querySelector('[data-paginate="last"]')).toBeFalsy();
  });

  it('is on the last page and does not render next & last', () => {
    const { pagination } = createPagination((defaultParams) => ({
      ...defaultParams,
      currentPage: 500,
    }));

    expect(pagination.querySelector('[data-paginate="last"]')).toBeFalsy();
    expect(pagination.querySelector('[data-paginate="next"]')).toBeFalsy();
  });
});

describe('omitted attributes still renders correctly', () => {
  it("still renders next if totalItems prop isn't given and we're on the first page", () => {
    const { pagination } = createPagination((defaultParams) => ({
      ...defaultParams,
      totalElements: undefined,
    }));

    expect(pagination.querySelector('.page')).toBeFalsy();
    expect(pagination.querySelector('.next')).toBeTruthy();
    expect(pagination.querySelector('.previous')).toBeFalsy();
  });

  it("still renders next if totalItems prop isn't given and we're on the first page", () => {
    const { pagination } = createPagination((defaultParams) => ({
      ...defaultParams,
      currentPage: 4,
      totalElements: undefined,
    }));

    expect(pagination.querySelector('.page')).toBeFalsy();
    expect(pagination.querySelector('.next')).toBeTruthy();
    expect(pagination.querySelector('.previous')).toBeTruthy();
  });
});
