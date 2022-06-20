import React from 'react';
import { StatusIndicator, Props } from './StatusIndicator';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  status: 'active',
};

const createStatusIndicator = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <StatusIndicator {...parameters} data-testid="StatusIndicator">
      content
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
    const { statusIndicator, getByText } = createStatusIndicator();

    expect(statusIndicator).toBeDefined();
    expect(getByText('content')).toBeInTheDocument();
  });

  it('should have an "active" class', () => {
    const { statusIndicator } = createStatusIndicator();

    expect(statusIndicator.firstChild).toHaveClass('active');
  });

  it('should have an "error" class', () => {
    const { statusIndicator } = createStatusIndicator((params) => ({ ...params, status: 'error' }));

    expect(statusIndicator.firstChild).toHaveClass('error');
  });

  it('should have a "neutral" class', () => {
    const { statusIndicator } = createStatusIndicator((params) => ({
      ...params,
      status: 'neutral',
    }));

    expect(statusIndicator.firstChild).toHaveClass('neutral');
  });

  it('should have a "warning" class', () => {
    const { statusIndicator } = createStatusIndicator((params) => ({
      ...params,
      status: 'warning',
    }));

    expect(statusIndicator.firstChild).toHaveClass('warning');
  });
});
