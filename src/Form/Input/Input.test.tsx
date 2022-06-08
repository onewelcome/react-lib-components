import React, { useEffect, useRef } from 'react';
import { Input, Props } from './Input';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  name: 'input',
  type: 'text',
};

const createInput = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Input {...parameters} data-testid="input" />);
  const input = queries.getByTestId('input');

  return {
    ...queries,
    input,
  };
};

describe('Input should render', () => {
  it('renders without crashing and has a name and type', () => {
    const { input } = createInput();
    expect(input).toBeTruthy();
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

      return <Input {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe('Should have the appropriate attributes', () => {
  it('is disabled and has a class', () => {
    const { input } = createInput((defaultParams) => ({
      ...defaultParams,
      disabled: true,
      className: 'classname',
    }));

    expect(input).toHaveAttribute('disabled');
    expect(input).toHaveClass('classname');
  });
});

describe('Should render all different types of inputs', () => {
  it('should render a text input', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'text' }));

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render a email input', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'email' }));

    expect(input).toHaveAttribute('type', 'email');
  });

  it('should render a tel input', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'tel' }));

    expect(input).toHaveAttribute('type', 'tel');
  });

  it('should render a number input', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'number' }));

    expect(input).toHaveAttribute('type', 'number');
  });

  it('should render a password input', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'password' }));

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should render a search input', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'search' }));

    expect(input).toHaveAttribute('type', 'search');
  });

  it('should render a time input', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'time' }));

    expect(input).toHaveAttribute('type', 'time');
  });

  it('should render a url input', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'url' }));

    expect(input).toHaveAttribute('type', 'url');
  });

  it('should render a datetime input', () => {
    const { input } = createInput((defaultParams) => ({
      ...defaultParams,
      type: 'datetime-local',
    }));

    expect(input).toHaveAttribute('type', 'datetime-local');
  });

  it('should be hidden', () => {
    const { input } = createInput((defaultParams) => ({ ...defaultParams, type: 'hidden' }));

    expect(input.parentElement).toHaveClass('hidden');
    expect(input).toHaveAttribute('type', 'hidden');
  });
});

describe('It should execute the listeners', () => {
  it('fires event handlers', () => {
    const onChangeHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onKeyDownHandler = jest.fn();

    const { input } = createInput((defaultParams) => ({
      ...defaultParams,
      type: 'text',
      onKeyUp: onKeyUpHandler,
      onKeyDown: onKeyDownHandler,
      onChange: onChangeHandler,
    }));

    input.focus();

    expect(input).toHaveFocus();

    userEvent.keyboard('test');

    expect(onKeyUpHandler).toHaveBeenCalled();
    expect(onKeyDownHandler).toHaveBeenCalled();
    expect(onChangeHandler).toHaveBeenCalled();
  });
});
