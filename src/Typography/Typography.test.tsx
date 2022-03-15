import React from 'react';
import { Typography, Props } from './Typography';
import { render } from '@testing-library/react';
import { Spacing } from '../hooks/useSpacing';

const renderTypography = (
  typoVariant: Props['variant'],
  wrapper?: Props['tag'],
  spacing?: Spacing
) => {
  const queries = render(
    <Typography variant={typoVariant} tag={wrapper} spacing={spacing} data-testid="component">
      Test
    </Typography>
  );

  const typography = queries.getByTestId('component');

  return {
    ...queries,
    typography,
  };
};

const className = (variant: Props['variant']) => `typography_style_${variant}`;

describe('Typography should render', () => {
  it('renders without crashing', async () => {
    const { typography } = renderTypography('h1');
    expect(typography).toBeDefined();
  });
});

describe('Should give the correct default tags and corresponding classnames', () => {
  it('renders an h1', async () => {
    const variant = 'h1';
    const { typography } = renderTypography(variant);

    expect(typography.nodeName).toBe('H1');
    expect(typography).toHaveClass(className(variant));
  });

  it('renders an h2', async () => {
    const variant = 'h2';
    const { typography } = renderTypography(variant);

    expect(typography.nodeName).toBe('H2');
    expect(typography).toHaveClass(className(variant));
  });

  it('renders an h3', async () => {
    const variant = 'h3';
    const { typography } = renderTypography(variant);

    expect(typography.nodeName).toBe('H3');
    expect(typography).toHaveClass(className(variant));
  });

  it('renders an h4', async () => {
    const variant = 'h4';
    const { typography } = renderTypography(variant);

    expect(typography.nodeName).toBe('H4');
    expect(typography).toHaveClass(className(variant));
  });

  it('renders a p', async () => {
    const variant = 'body';
    const { typography } = renderTypography(variant);

    expect(typography.nodeName).toBe('P');
    expect(typography).toHaveClass(className(variant));
  });

  it('renders a p', async () => {
    const variant = 'body-bold';
    const { typography } = renderTypography(variant);

    expect(typography.nodeName).toBe('P');
    expect(typography).toHaveClass(className(variant));
  });

  it('renders a span', async () => {
    const variant = 'sub-text';
    const { typography } = renderTypography(variant);

    expect(typography.nodeName).toBe('SPAN');
    expect(typography).toHaveClass(className(variant));
  });

  it('renders a code', async () => {
    const variant = 'code';
    const { typography } = renderTypography(variant);

    expect(typography.nodeName).toBe('CODE');
    expect(typography).toHaveClass(className(variant));
  });
});

describe('Should override tagname', () => {
  it('has to be a DIV element', () => {
    const { typography } = renderTypography('h1', 'div');

    expect(typography.nodeName).toBe('DIV');
  });
});

describe('Should override styling', () => {
  it('renders h1 with overwritten margin properties', () => {
    const { typography } = renderTypography('h1', undefined, { margin: 4, marginBottom: 8 });

    expect(typography.style).toHaveProperty('margin', '1rem 1rem 2rem 1rem');
  });
});
