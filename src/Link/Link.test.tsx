import React from 'react';
import { Link, Props } from './Link';
import { render } from '@testing-library/react';
import { Link as LinkRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

const defaultParams: Props = {
  type: 'external',
  to: '',
};

const createLink = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Link {...parameters} data-testid="link">
      Link content
    </Link>
  );
  const link = queries.getByTestId('link');

  return {
    ...queries,
    link,
  };
};

const createLinkWithExistingRouterLink = () => {
  let parameters: Props = defaultParams;
  parameters.component = <LinkRouter to={'https://onewelcome.com'}>OneWelcome</LinkRouter>;
  const queries = render(
    <MemoryRouter>
      <Link {...parameters} data-testid="link">
        Link content
      </Link>
    </MemoryRouter>
  );
  const link = queries.getByTestId('link');

  return {
    ...queries,
    link,
  };
};

describe('Link should render', () => {
  it('renders without crashing', () => {
    const { link } = createLink();

    expect(link).toBeDefined();
    expect(link).toHaveAttribute('rel', 'noopener noreferer');
  });

  it('renders as disabled', () => {
    const { link } = createLink();

    expect(link).toBeDefined();
    expect(link).toHaveAttribute('aria-disabled', true);
  });

  it('renders as router link without crashing', () => {
    const link = createLinkWithExistingRouterLink();

    expect(link).toBeDefined();
    expect(link).toHaveAttribute('rel', 'noopener noreferer');
  });
});
