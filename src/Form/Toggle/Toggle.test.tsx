import React, { useEffect, useRef } from 'react';
import { Toggle } from './Toggle';
import { render } from '@testing-library/react';

describe('Toggle should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Toggle name="toggle" data-testid="component">
        Toggle
      </Toggle>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
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

      return <Toggle name="test" children="test" data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe('Toggle attributes', () => {
  it('should be checked', () => {
    const { getByTestId } = render(
      <Toggle checked={true} name="toggle" data-testid="component">
        Toggle
      </Toggle>
    );

    const component = getByTestId('component');

    expect(component).toHaveAttribute('aria-checked', 'true');
  });
});
