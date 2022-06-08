import React, { useEffect, useRef } from 'react';
import { Wrapper } from './Wrapper';
import { render } from '@testing-library/react';
import { Input } from '../../Input/Input';

describe('Wrapper should render', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Wrapper floatingLabelActive={true} label="label" name="name" helperId="helperID">
        <Input onChange={jest.fn()} name="test" type="text" value="test" />
      </Wrapper>
    );
    const wrapper = container.querySelector('.wrapper');

    expect(wrapper).toBeDefined();
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

      return <Wrapper name="wrapper" children={<div></div>} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
