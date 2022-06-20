import React, { useEffect, useRef } from 'react';
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

  it('should pass "active" class to status badge', () => {
    const { statusIndicator } = createStatusIndicator();

    expect(statusIndicator.firstChild).toHaveClass('active');
  });

  it('should pass "error" class to status badge', () => {
    const { statusIndicator } = createStatusIndicator((params) => ({ ...params, status: 'error' }));

    expect(statusIndicator.firstChild).toHaveClass('error');
  });

  it('should pass "neutral" class to status badge', () => {
    const { statusIndicator } = createStatusIndicator((params) => ({
      ...params,
      status: 'neutral',
    }));

    expect(statusIndicator.firstChild).toHaveClass('neutral');
  });

  it('should pass "warning" class to status badge', () => {
    const { statusIndicator } = createStatusIndicator((params) => ({
      ...params,
      status: 'warning',
    }));

    expect(statusIndicator.firstChild).toHaveClass('warning');
  });

  it('should pass custom class to status badge', () => {
    const { statusIndicator } = createStatusIndicator((params) => ({
      ...params,
      badgeClassName: 'custom',
    }));

    expect(statusIndicator.firstChild).toHaveClass('custom');
  });
});

describe('ref should work', () => {
  it('should give back the proper data prop, this also checks if the component propagates ...rest properly', () => {
    const ExampleComponent = ({
      propagateRef,
    }: {
      propagateRef?: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref);
        }
      }, [ref]);

      return (
        <StatusIndicator id="test" children="test" data-ref="testing" ref={ref} status="active" />
      );
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
