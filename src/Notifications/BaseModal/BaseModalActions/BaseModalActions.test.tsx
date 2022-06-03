import React, { useEffect, useRef } from 'react';
import { BaseModalActions } from './BaseModalActions';
import { render } from '@testing-library/react';

describe('BaseModalActions', () => {
  it('renders without crashing', () => {
    const children = 'Content';
    const classNames = ['class1', 'class2'];
    const { container } = render(
      <BaseModalActions className={classNames.join(' ')}>{children}</BaseModalActions>
    );

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass('actions', classNames[0], classNames[1]);
    expect(dialogActionsContainer).toHaveTextContent(children);
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

      return <BaseModalActions data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
