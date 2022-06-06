import React from 'react';
import { TextEllipsis, Props } from './TextEllipsis';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  variant: 'body',
};

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

describe('TextEllipsis should render', () => {
  it('renders without crashing', () => {
    const { textEllipsis } = createTextEllipsis();

    expect(textEllipsis).toBeDefined();
  });
});
