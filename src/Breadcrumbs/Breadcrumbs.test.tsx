import React from 'react';
import { Breadcrumbs, Props } from './Breadcrumbs';
import { getAllByTestId, render } from '@testing-library/react';
import { Link } from '../Link/Link';

const initParams: Props = {
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

const getAllLinks = (container: HTMLElement) => getAllByTestId(container, 'link');

describe('Breadcrumbs', () => {
  it('renders without crashing', () => {
    const { container } = render(<Breadcrumbs {...initParams} />);
    const [link1, link2] = getAllLinks(container);

    expect(container).toBeDefined();
    expect(link1).not.toHaveAttribute('aria-current');
    expect(link2).toHaveAttribute('aria-current', 'page');
  });
});
