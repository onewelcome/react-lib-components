import React, { useEffect, useRef } from 'react';
import { Checkbox, Props } from './Checkbox';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const onChangeHandeler = jest.fn();

const defaultParams: Props = {
  name: 'Testing',
  children: 'checkbox content',
  helperText: 'example helper',
  onChange: onChangeHandeler,
};

const createCheckbox = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Checkbox {...parameters} data-testid="checkbox" />);
  const checkbox = queries.getByTestId('checkbox');

  return {
    ...queries,
    checkbox,
  };
};

describe('Checkbox should render', () => {
  it('renders without crashing', () => {
    const { checkbox } = createCheckbox();
    expect(checkbox).toBeTruthy();
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

      return <Checkbox {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe('Checkbox should have proper attributes', () => {
  it('should be unchecked', () => {
    const { checkbox } = createCheckbox();

    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('should be checked', () => {
    const { checkbox } = createCheckbox((defaultParams) => ({ ...defaultParams, checked: true }));

    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('should call the onChange function', () => {
    const onChangeHandler = jest.fn();
    const { checkbox } = createCheckbox((defaultParams) => ({
      ...defaultParams,
      onChange: onChangeHandler,
    }));
    userEvent.click(checkbox);
    expect(onChangeHandler).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const { checkbox } = createCheckbox((defaultParams) => ({ ...defaultParams, disabled: true }));

    expect(checkbox).toHaveAttribute('disabled');
  });

  it('should have helpertext rendered', () => {
    const { getByText } = createCheckbox();

    const helperText = getByText('example helper');

    expect(helperText).toBeTruthy();
  });

  it('should have the error state enabled', () => {
    const { checkbox, container, getByTestId } = createCheckbox((defaultParams) => ({
      ...defaultParams,
      error: true,
      errorMessage: 'This is an error',
      formSelectorWrapperProps: { 'data-testid': 'checkbox-wrapper' },
    }));

    expect(checkbox).toHaveAttribute(
      'aria-describedby',
      container.querySelector('.error-message span:last-of-type')!.id
    );

    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    expect(getByTestId('checkbox-wrapper')).toHaveClass('error');
  });

  it('should have a correctly linked label element', () => {
    const { checkbox, container } = createCheckbox((defaultParams) => ({
      ...defaultParams,
      children: 'Label',
    }));

    const id = checkbox.getAttribute('id');
    const label = container.querySelector(`label[for=${id}]`);

    expect(label).toBeTruthy();
    expect(label).toHaveTextContent('Label');
  });
});

describe('Checkbox should be interactive', () => {
  it('should call onChange when clicked', () => {
    const { checkbox } = createCheckbox();

    expect(onChangeHandeler).not.toBeCalled();
    userEvent.click(checkbox);
    expect(onChangeHandeler).toBeCalledTimes(1);
  });

  it('should not call onChange when disabled', () => {
    const { checkbox } = createCheckbox((defaultParams) => ({ ...defaultParams, disabled: true }));

    userEvent.click(checkbox);
    expect(onChangeHandeler).not.toBeCalled();
  });
});
