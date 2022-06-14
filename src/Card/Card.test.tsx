import React, { useEffect, useRef } from 'react';
import { Card, Props } from './Card';
import { render } from '@testing-library/react';

const defaultParams: Props = {};

const createCard = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Card {...parameters} data-testid="card">
      card content
    </Card>
  );
  const card = queries.getByTestId('card');

  return {
    ...queries,
    card,
  };
};

describe('Card should render', () => {
  it('renders without crashing', () => {
    const { card } = createCard();

    expect(card).toBeDefined();
  });

  it('renders with additional class', () => {
    const { card } = createCard((params) => ({ ...params, className: 'test' }));

    expect(card).toHaveClass('card test', { exact: true });
  });
});

describe('ref should work', () => {
  it('should give back the proper data prop, this also checks if the component propagates ...rest properly', () => {
    const ExampleComponent = ({
      propagateRef,
    }: {
      propagateRef: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        propagateRef(ref);
      }, [ref]);

      return <Card {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
