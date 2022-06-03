import React, { useEffect, useRef } from 'react';
import { Label } from './Label';
import { render } from '@testing-library/react';

describe('Label should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Label htmlFor="input-name" data-testid="component">
        Label
      </Label>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });

  it('adds htmlFor attribute', () => {
    const { getByTestId } = render(
      <Label htmlFor="input-name" data-testid="component">
        Label
      </Label>
    );

    const component = getByTestId('component');
    expect(component.getAttribute('for')).toBe('input-name');
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

      return <Label data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
