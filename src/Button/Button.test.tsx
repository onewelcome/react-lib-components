import React, { useRef, useEffect } from 'react';
import { Button, Props } from './Button';
import { render } from '@testing-library/react';
import { Icon, Icons } from '../Icon/Icon';

const defaultParams: Props = {};

const createButton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Button {...parameters} data-testid="button">
      button content
    </Button>
  );
  const button = queries.getByTestId('button');

  return {
    ...queries,
    button,
  };
};

describe('Button should render', () => {
  it('renders without crashing', () => {
    const { button } = createButton();

    expect(button).toBeDefined();
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

      return <Button {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe('Button should render', () => {
  it('renders without crashing', () => {
    const { button } = createButton();

    expect(button).toBeDefined();
  });
});

describe('Different variants of the button', () => {
  it('should have a class of "primary"', () => {
    const { button } = createButton();
    expect(button.classList.contains('primary')).toBe(true);
  });

  it('should have a class of "secondary"', () => {
    const { button } = createButton((defaultParams) => ({ ...defaultParams, color: 'secondary' }));
    expect(button.classList.contains('secondary')).toBe(true);
  });

  it('should have a class of "tertiary"', () => {
    const { button } = createButton((defaultParams) => ({ ...defaultParams, color: 'tertiary' }));
    expect(button.classList.contains('tertiary')).toBe(true);
  });

  it('should have a class of "fill"', () => {
    const { button } = createButton((defaultParams) => ({ ...defaultParams, variant: 'fill' }));
    expect(button.classList.contains('fill')).toBe(true);
  });

  it('should have a class of "outline"', () => {
    const { button } = createButton((defaultParams) => ({ ...defaultParams, variant: 'outline' }));
    expect(button.classList.contains('outline')).toBe(true);
  });

  it('should have a class of "text"', () => {
    const { button } = createButton((defaultParams) => ({ ...defaultParams, variant: 'text' }));
    expect(button.classList.contains('text')).toBe(true);
  });
});

describe('Button contains an icon', () => {
  it('Contains an icon at the start', () => {
    const { button } = createButton((defaultParams) => ({
      ...defaultParams,
      startIcon: <Icon icon={Icons.Calendar} />,
    }));

    expect(button.classList.contains('has-icon')).toBe(true);
    expect(button.firstElementChild?.nodeName).toBe('I');
    expect(button.querySelector('i + span')!.innerHTML).toBe('button content');
  });

  it('Contains an icon at the end', () => {
    const { button } = createButton((defaultParams) => ({
      ...defaultParams,
      endIcon: <Icon icon={Icons.Calendar} />,
    }));

    expect(button.classList.contains('has-icon')).toBe(true);
    expect(button.lastElementChild?.nodeName).toBe('I');
    expect(button.querySelector('span')!.innerHTML).toBe('button content');
  });
});
