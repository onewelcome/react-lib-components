import React from 'react';
import { Tooltip, Props } from './Tooltip';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  children: 'This is a test message',
  label: 'Label',
};

const createTooltip = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Tooltip {...parameters} data-testid="tooltip" />);
  const tooltip = queries.getByTestId('tooltip');

  return {
    ...queries,
    tooltip,
  };
};

describe('Tooltip should render', () => {
  it('renders without crashing', () => {
    const { tooltip } = createTooltip();

    expect(tooltip).toBeDefined();
  });
});
