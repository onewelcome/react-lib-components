import React from 'react';
import { StatusIndicator, Props } from './StatusIndicator';
import { render } from '@testing-library/react';

const defaultParams: Props = {};

const createStatusIndicator = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <StatusIndicator {...parameters} data-testid="StatusIndicator">
      StatusIndicator content{' '}
    </StatusIndicator>
  );
  const statusIndicator = queries.getByTestId('StatusIndicator');

  return {
    ...queries,
    statusIndicator,
  };
};

describe('StatusIndicator should render', () => {
  it('renders without crashing', () => {
    const { statusIndicator } = createStatusIndicator();

    expect(statusIndicator).toBeDefined();
  });
});
