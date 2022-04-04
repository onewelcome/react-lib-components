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
    const { link: link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'tel',
      to: 'tel:+3161234-1235',
    }));

    expect(link).toHaveAttribute('href', 'tel:+3161234-1235');
  });

  it('is yet another variation of phone', () => {
    const { link: link } = createLink((defaultParams) => ({
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
    const { link: link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'email',
      to: 'mailto:test@test.com',
    }));

    expect(link).toHaveAttribute('href', 'mailto:test@test.com');
  });

  it('is yet another variation of mail', () => {
    const { link: link } = createLink((defaultParams) => ({
      ...defaultParams,
      type: 'mailto',
      to: 'mailto:test@test.com',
    }));

    expect(link).toHaveAttribute('href', 'mailto:test@test.com');
  });

  it('should throw an error because we pass an incorrect component type', () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore
      render(<Link component="test" />);
    } catch (e: any) {
      actual = e.message;
    }

    const expected =
      'The component you have passed is not a React Router Link. Please make sure to pass it or remove the attribute entirely.';

    expect(actual).toEqual(expected);

    console.error = err;
  });
});
