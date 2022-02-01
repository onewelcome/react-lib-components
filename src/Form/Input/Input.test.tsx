import React from 'react';
import { Input, Props } from './Input';
import { cleanup, render } from '@testing-library/react';

beforeAll(cleanup);

const createInput = (params: Props) => {
  const queries = render(<Input data-testid="input" {...params} />);
  const input = queries.getByTestId('input');

  return {
    ...queries,
    input,
  };
};

describe('Input should render', () => {
  it('renders without crashing', () => {
    const { input } = createInput({
      disabled: true,
      type: 'text',
      name: 'input',
    });
    expect(input).toBeDefined();
  });
});

describe('Should have the appropriate attributes', () => {
  it('is disabled, has a type of text and has a name', () => {
    const { input } = createInput({
      disabled: true,
      type: 'text',
      name: 'input',
    });

    expect(input).toHaveAttribute('disabled');
    expect(input.getAttribute('name')).toBe('input');
    expect(input.getAttribute('type')).toBe('text');
  });
});

describe('Should utilize validation function', () => {
  it('should give an error', () => {
    const validationHandler = (value: string): true | string => {
      if (/iwelcome|onegini/i.test(value)) {
        return 'Please remove the iWelcome and onegini reference.';
      }

      return true;
    };

    // Temporary "state" variable to store the return errormessage in from onValidationError so we can test it.
    let errorMsg;
    const onValidationError = (errorMessage: string) => {
      errorMsg = errorMessage;
    };

    const { input } = createInput({
      type: 'text',
      name: 'input',
      value: 'iwelcome',
      validation: [validationHandler],
      onValidationError: onValidationError,
    });

    expect(input).toHaveClass('error');
    expect(errorMsg).toBe('Please remove the iWelcome and onegini reference.');
  });

  it('should pass two tests and fail the last', () => {
    const validation1 = (value: string): true | string => {
      if (value) return true;

      return 'This should not be returned';
    };

    const validation2 = (value: string): true | string => {
      if (value) return true;

      return 'This should not be returned';
    };

    const validation3 = (value: string): true | string => {
      if (value) return 'This should fail';

      return 'This should not be returned';
    };

    // Temporary "state" variable to store the return errormessage in from onValidationError so we can test it.
    let errorMsg;
    const onValidationError = (errorMessage: string) => {
      errorMsg = errorMessage;
    };

    const { input } = createInput({
      type: 'text',
      name: 'input',
      value: 'value',
      validation: [validation1, validation2, validation3],
      onValidationError: onValidationError,
    });

    expect(input).toHaveClass('error');
    expect(errorMsg).toBe('This should fail');
  });
});
