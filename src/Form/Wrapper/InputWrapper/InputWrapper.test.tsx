import React from 'react';
import { InputWrapper, Props } from './InputWrapper';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  label: 'Example label',
  type: 'text',
  name: 'Example input',
  helperText: 'this is helpertext',
  errorMessage: 'This is an error',
  error: false,
  value: 'value',
  onChange: jest.fn(),
};

const createInputWrapper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<InputWrapper {...parameters} data-testid="inputwrapper" />);
  const inputwrapper = queries.getByTestId('inputwrapper');

  return {
    ...queries,
    inputwrapper,
  };
};

describe('InputWrapper should render', () => {
  it('renders without crashing', () => {
    const { inputwrapper } = createInputWrapper();

    expect(inputwrapper).toBeTruthy();
  });

  it('has helpertext', () => {
    const { getByTestId } = createInputWrapper((defaultParams) => ({
      ...defaultParams,
      helperProps: { 'data-testid': 'helper_text' },
    }));

    const helperText = getByTestId('helper_text');

    expect(helperText).toBeTruthy();
  });

  it('is described by the helpertext', () => {
    const { getByTestId } = createInputWrapper((defaultParams) => ({
      ...defaultParams,
      inputProps: { 'data-testid': 'input' },
      helperProps: { 'data-testid': 'helper_text' },
    }));

    const input = getByTestId('input');
    const helperId = getByTestId('helper_text').getAttribute('id');

    expect(input).toHaveAttribute('aria-describedby', helperId);
  });
});

describe('InputWrapper should be interactive', () => {
  it('executes the eventlisteners', () => {
    const onFocusHandler = jest.fn();
    const onChangeHandler = jest.fn();
    const onBlurHandler = jest.fn();

    const { getByTestId } = createInputWrapper((defaultParams) => ({
      ...defaultParams,
      inputProps: {
        'data-testid': 'input',
      },
      onChange: onChangeHandler,
      onFocus: onFocusHandler,
      onBlur: onBlurHandler,
      value: '',
    }));

    const input = getByTestId('input');

    userEvent.tab();
    userEvent.keyboard('test');

    expect(input).toHaveFocus();
    expect(onChangeHandler).toHaveBeenCalled();
    expect(onFocusHandler).toHaveBeenCalled();

    userEvent.tab();

    expect(onBlurHandler).toHaveBeenCalled();
  });
});

describe('InputWrapper should support prefix and suffix', () => {
  const prefix = 'prefix';
  const suffix = 'suffix';

  const hasPrefixAndSuffixDefined = (container: HTMLElement) => {
    expect(container.querySelector('[data-prefix]')).toHaveTextContent(prefix);
    expect(container.querySelector('[data-suffix]')).toHaveTextContent(suffix);
  };

  it('renders prefix and sufix when input has focus', () => {
    const { container, getByTestId } = createInputWrapper((defaultParams) => ({
      ...defaultParams,
      value: '',
      inputProps: { 'data-testid': 'input', prefix, suffix },
    }));

    const input = getByTestId('input');

    expect(container.querySelector('[data-prefix]')).toBeNull();
    expect(container.querySelector('[data-suffix]')).toBeNull();

    userEvent.tab();
    expect(input).toHaveFocus();
    hasPrefixAndSuffixDefined(container);
  });

  it('renders prefix and sufix when input has value', () => {
    const { container, getByTestId } = createInputWrapper((defaultParams) => ({
      ...defaultParams,
      inputProps: { 'data-testid': 'input', prefix, suffix },
    }));

    const input = getByTestId('input');

    hasPrefixAndSuffixDefined(container);

    userEvent.tab();
    expect(input).toHaveFocus();
    hasPrefixAndSuffixDefined(container);

    userEvent.tab();
    expect(input).not.toHaveFocus();
    hasPrefixAndSuffixDefined(container);
  });
});
