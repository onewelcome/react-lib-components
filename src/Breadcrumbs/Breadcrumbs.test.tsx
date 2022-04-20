import React from 'react';
import { Breadcrumbs, Props } from './Breadcrumbs';
import { render } from '@testing-library/react';
import { Link } from '../Link/Link';

const defaultParams: Props = {
  'aria-label': 'Breadcrumbs',
  children: [
    <Link key="0" to="#1" data-testid="link">
      Test1
    </Link>,
    <Link key="1" to="#2" data-testid="link">
      Test2
    </Link>,
  ],
};

const createBreadcrumbs = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Breadcrumbs {...parameters} data-testid="breadcrumbs"></Breadcrumbs>);
  const breadcrumbs = queries.getByTestId('breadcrumbs');

  return {
    ...queries,
    breadcrumbs,
  };
};

describe('Breadcrumbs should render', () => {
  it('renders without crashing', () => {
    const { breadcrumbs } = createBreadcrumbs();

    expect(breadcrumbs).toBeDefined();
    expect(breadcrumbs.firstChild).not.toHaveAttribute('aria-current');
    expect((breadcrumbs.firstChild as HTMLElement).tagName).toEqual('A');
    expect(breadcrumbs.lastChild).toHaveAttribute('aria-current', 'page');
    expect((breadcrumbs.lastChild as HTMLElement).tagName).toEqual('SPAN');
  });
});
