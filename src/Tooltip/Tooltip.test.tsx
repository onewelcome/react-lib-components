import React, { useEffect, useRef } from 'react';
import { Tooltip, Props } from './Tooltip';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    const { tooltip, getByText } = createTooltip((defaultParams) => ({
      ...defaultParams,
      className: 'testing',
    }));

    const tooltipText = getByText('This is a test message');
    const label = getByText('Label');

    expect(tooltip).toHaveClass('testing');
    expect(tooltipText).toHaveStyle({ top: '0px', left: '16px' });
    expect(label).toBeTruthy();
    expect(tooltipText).toBeTruthy();
    expect(tooltip).toBeTruthy();
  });

  it('should override the default placement and offset values', () => {
    const { tooltip, getByText } = createTooltip((defaultParams) => ({
      ...defaultParams,
      placement: { horizontal: 'center', vertical: 'center' },
      offset: { top: 0, right: 16, left: 0, bottom: 16 },
      transformOrigin: { horizontal: 'right', vertical: 'bottom' },
    }));

    const tooltipText = getByText('This is a test message');
    expect(tooltipText).toHaveStyle({ right: '1024px', bottom: '768px' });
    expect(tooltip).toBeTruthy();
  });
});

describe('It opens the tooltip', () => {
  it('opens', () => {
    const { tooltip, getByText } = createTooltip();

    const icon = tooltip.querySelector('.icon')!;
    const tooltipHover = getByText('This is a test message');
    userEvent.hover(icon);

    expect(tooltipHover).toHaveClass('visible');
    expect(tooltipHover).toHaveAttribute('aria-hidden', 'false');

    userEvent.keyboard('{escape}');

    expect(tooltipHover).not.toHaveClass('visible');
    expect(tooltipHover).toHaveAttribute('aria-hidden', 'true');
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

      return <Tooltip {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
