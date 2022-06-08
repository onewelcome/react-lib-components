import React, { useEffect, useRef } from 'react';
import { Option } from './Option';
import { render } from '@testing-library/react';

describe('Option should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Option value="option" data-testid="component">
        Option
      </Option>
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

      return <Option value="test" children="Test" data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
