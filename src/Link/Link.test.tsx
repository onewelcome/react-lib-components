import React from 'react';
import { Link, Props } from './Link';
import { render } from '@testing-library/react';

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

  it('is a telephone link with the right attributes', () => {
    const { link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'phone',
      to: 'tel:061234-1235',
    }));

    expect(link).toHaveAttribute('aria-disabled', 'false');
    expect(link).not.toHaveAttribute('rel', 'noopener noreferer');
    expect(link).not.toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('href', 'tel:061234-1235');
  });

  it('is another variation of phone', () => {
    const { link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'tel',
      to: 'tel:+3161234-1235',
    }));

    expect(link).toHaveAttribute('href', 'tel:+3161234-1235');
  });

  it('is yet another variation of phone', () => {
    const { link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'telephone',
      to: 'tel:+31-61-234-1235-322',
    }));

    expect(link).toHaveAttribute('href', 'tel:+31-61-234-1235-322');
  });

  it('is a email link with the right attributes', () => {
    const { link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'mail',
      to: 'mailto:test@test.com',
    }));

    expect(link).toHaveAttribute('aria-disabled', 'false');
    expect(link).not.toHaveAttribute('rel', 'noopener noreferer');
    expect(link).not.toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('href', 'mailto:test@test.com');
  });

  it('is another variation of mail', () => {
    const { link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'email',
      to: 'mailto:test@test.com',
    }));

    expect(link).toHaveAttribute('href', 'mailto:test@test.com');
  });

  it('is yet another variation of mail', () => {
    const { link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'mailto',
      to: 'mailto:test@test.com',
    }));

    expect(link).toHaveAttribute('href', 'mailto:test@test.com');
  });

  it('should set the correct target', () => {
    const { link } = createLink((defaultParams) => ({ ...defaultParams, target: '_parent' }));

    expect(link).toHaveAttribute('target', '_parent');
  });

  it('should accept this component prop', () => {
    const RouterLink = ({ ...rest }) => (
      <a data-testid="routerlink" {...rest}>
        test
      </a>
    );

    const queries = render(<Link to="/contact" component={RouterLink} />);

    const routerLink = queries.getByTestId('routerlink');

    expect(routerLink).toBeTruthy();
    expect(routerLink).toHaveClass('link');
    expect(routerLink).toHaveAttribute('to', '/contact');
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
