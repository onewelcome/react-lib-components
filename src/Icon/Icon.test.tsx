import React, { useEffect, useRef } from 'react';
import { Icon, Props, Icons } from './Icon';
import { render } from '@testing-library/react';

interface PartialProps extends Omit<Props, 'ref'> {}

const initParams: PartialProps = {
  icon: Icons.Calendar,
  color: 'rgb(26, 153, 60)',
};

const createIcon = (params = initParams) => {
  const queries = render(
    <Icon {...params} data-testid="icon-component" color={params.color} icon={params.icon} />
  );
  const icon = queries.getByTestId('icon-component');

  return {
    ...queries,
    icon,
  };
};

describe('Icon', () => {
  it('renders without crashing', () => {
    const { icon } = createIcon();

    expect(icon).toBeDefined();
    expect(icon).toHaveClass('icon-calendar');
    expect(icon.tagName.toLowerCase()).toBe('span');
    expect(icon.getAttribute('style')).toBe('color: rgb(26, 153, 60);');
  });

  it('should render icon with within div tag', () => {
    const tag = 'div';
    const { icon } = createIcon({ ...initParams, tag });

    expect(icon).toBeDefined();
    expect(icon.tagName.toLowerCase()).toBe(tag);
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

      return <Icon {...initParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
