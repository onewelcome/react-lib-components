import React from 'react';
import { Typography } from './Typography';
import { render } from '@testing-library/react';

const renderTypography = (
  typoVariant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'body-bold'
    | 'sub-text'
    | 'code',
  wrapper?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'div'
    | 'code'
    | 'span'
    | 'sup'
    | 'sub'
    | 'strong'
    | 'em'
    | 'small'
    | 'mark'
    | 'del'
    | 'ins'
    | 'blockquote'
) => {
  const queries = render(
    <Typography variant={typoVariant} tag={wrapper} data-testid="component">
      Test
    </Typography>
  );

  const typography = queries.getByTestId('component');

  return {
    ...queries,
    typography,
  };
};

describe('Typography should render', () => {
  it('renders without crashing', async () => {
    const { typography } = renderTypography('h1');
    expect(typography).toBeDefined();
  });
});

describe('Should give the correct default tags', () => {
  it('renders an h1', async () => {
    const { typography } = renderTypography('h1');

    expect(typography.nodeName).toBe('H1');
  });

  it('renders an h2', async () => {
    const { typography } = renderTypography('h2');

    expect(typography.nodeName).toBe('H2');
  });

  it('renders an h3', async () => {
    const { typography } = renderTypography('h3');

    expect(typography.nodeName).toBe('H3');
  });

  it('renders an h4', async () => {
    const { typography } = renderTypography('h4');

    expect(typography.nodeName).toBe('H4');
  });

  it('renders a p', async () => {
    const { typography } = renderTypography('body');

    expect(typography.nodeName).toBe('P');
  });

  it('renders a p', async () => {
    const { typography } = renderTypography('body-bold');

    expect(typography.nodeName).toBe('P');
  });

  it('renders a code', async () => {
    const { typography } = renderTypography('code');

    expect(typography.nodeName).toBe('CODE');
  });
});

describe('Should override tagname', () => {
  it('has to be a DIV element', () => {
    const { typography } = renderTypography('h1', 'div');

    expect(typography.nodeName).toBe('DIV');
  });
});
