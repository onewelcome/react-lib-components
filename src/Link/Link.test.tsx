import React from 'react';
import { Link, Props } from './Link';
import { render } from '@testing-library/react';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';

const defaultParams: Props = {
  type: 'external',
  to: 'https://www.google.com',
};

const createLink = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Link {...parameters} data-testid="link">
      link content
    </Link>
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

    expect(link).toBeTruthy();
  });

  it('is an external link with the right attributes', () => {
    const { link } = createLink();

    expect(link).toHaveAttribute('aria-disabled', 'false');
    expect(link).toHaveAttribute('rel', 'noopener noreferer');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('is an internal link with the right attributes', () => {
    const { link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'internal',
      to: '/home',
    }));

    expect(link).toHaveAttribute('aria-disabled', 'false');
    expect(link).not.toHaveAttribute('rel', 'noopener noreferer');
    expect(link).not.toHaveAttribute('target', '_blank');
  });

  it('is a download link with the right attributes', () => {
    const { link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'download',
      to: '/test.png',
    }));

    expect(link).toHaveAttribute('aria-disabled', 'false');
    expect(link).not.toHaveAttribute('rel', 'noopener noreferer');
    expect(link).not.toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('download');
  });

  it('should set the correct target', () => {
    const { link } = createLink((defaultParams) => ({ ...defaultParams, target: '_parent' }));

    expect(link).toHaveAttribute('target', '_parent');
  });

  it('should accept this React Router Link prop and render as such', () => {
    const queries = render(
      <BrowserRouter>
        <Link to="/contact" component={RouterLink} children="Routerlink" />
      </BrowserRouter>
    );

    const routerLink = queries.getByText('Routerlink');

    expect(routerLink).toBeTruthy();
    expect(routerLink).toHaveClass('link');
    expect(routerLink).toHaveAttribute('href', '/contact');
  });

  it('should be disabled', () => {
    const { link } = createLink((defaultParams) => ({ ...defaultParams, disabled: true }));

    expect(link).not.toHaveAttribute('href');
    expect(link).toHaveClass('disabled');
    expect(link).toHaveStyle({ color: 'var(--greyed-out)' });
  });

  it('should have a className added', () => {
    const { link } = createLink((defaultParams) => ({ ...defaultParams, className: 'classname' }));

    expect(link).toHaveClass('classname');
  });
});

describe('colors', () => {
  it('should be color primary', () => {
    const { link } = createLink((defaultParams) => ({ ...defaultParams, color: 'primary' }));

    expect(link).toHaveStyle({ color: 'var(--color-primary)' });
  });

  it('should be color secondary', () => {
    const { link } = createLink((defaultParams) => ({ ...defaultParams, color: 'secondary' }));

    expect(link).toHaveStyle({ color: 'var(--color-secondary)' });
  });

  it('should be color tertiary', () => {
    const { link } = createLink((defaultParams) => ({ ...defaultParams, color: 'tertiary' }));

    expect(link).toHaveStyle({ color: 'var(--color-tertiary)' });
  });
});
