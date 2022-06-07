import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Props, TextEllipsis } from './TextEllipsis';

describe('TextEllipsis should render', () => {
  const defaultParams: Props = {};

  const createTextEllipsis = (params?: (defaultParams: Props) => Props) => {
    let parameters: Props = defaultParams;
    if (params) {
      parameters = params(defaultParams);
    }
    const queries = render(
      <TextEllipsis {...parameters} data-testid="TextEllipsis">
        content
      </TextEllipsis>
    );
    const textEllipsis = queries.getByTestId('TextEllipsis');

    return {
      ...queries,
      textEllipsis,
    };
  };

  it('renders without crashing', () => {
    const { textEllipsis, getAllByText } = createTextEllipsis();

    expect(textEllipsis).toBeDefined();
    expect(getAllByText('content')).toHaveLength(2);
  });

  it('does not show popover when full text is visible', () => {
    const { textEllipsis, getByRole } = createTextEllipsis();

    expect(getByRole('tooltip', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
    user.hover(textEllipsis);
    expect(getByRole('tooltip', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
  });

  it('shows popover with full text when base text has ellipsis', () => {
    const { textEllipsis, getByRole } = createTextEllipsis();

    Object.defineProperty(textEllipsis, 'offsetWidth', { configurable: true, value: 1 });
    Object.defineProperty(textEllipsis, 'scrollWidth', { configurable: true, value: 2 });

    expect(getByRole('tooltip', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
    user.hover(textEllipsis);
    expect(getByRole('tooltip', { hidden: true })).toHaveAttribute('aria-hidden', 'false');
    user.unhover(textEllipsis);
    expect(getByRole('tooltip', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
  });
});
