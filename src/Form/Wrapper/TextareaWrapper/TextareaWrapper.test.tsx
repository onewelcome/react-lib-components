import React from 'react';
import { TextareaWrapper, Props } from './TextareaWrapper';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const onChangeHandler = jest.fn();

const defaultParams: Props = {
  name: 'textarea',
  label: 'textarea_label',
  value: 'value',
  error: false,
  helperText: 'helpertext',
  helperProps: { 'data-testid': 'helpertext' },
  errorMessage: 'errormessage',
  textareaProps: { 'data-testid': 'textarea' },
  onChange: onChangeHandler,
};

const createTextareaWrapper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<TextareaWrapper {...parameters} data-testid="textareawrapper" />);
  const textareawrapper = queries.getByTestId('textareawrapper');
  const textarea = queries.getByTestId('textarea');

  return {
    ...queries,
    textareawrapper,
    textarea,
  };
};

describe('TextareaWrapper should render', () => {
  it('renders without crashing', () => {
    const { textareawrapper } = createTextareaWrapper();

    expect(textareawrapper).toBeDefined();
  });
});

describe('TextareaWrapper & Textarea have the right attributes', () => {
  it('textarea has aria values', async () => {
    const { textarea, getByTestId, findByText } = createTextareaWrapper();

    const helpertext = getByTestId('helpertext');
    const label = await findByText('textarea_label');

    expect(textarea).toHaveAttribute('aria-describedby', helpertext.id);
    expect(textarea).toHaveAttribute('aria-labelledby', label.id);
  });

  it('TextareaWrapper has the right helpertext', () => {
    const { getByTestId } = createTextareaWrapper();

    const helpertext = getByTestId('helpertext');

    expect(helpertext).toBeTruthy();
    expect(helpertext).toHaveTextContent('helpertext');
  });

  it('TextareaWrapper has the right errormessage', async () => {
    const { findByText, textarea } = createTextareaWrapper((defaultParams) => ({
      ...defaultParams,
      error: true,
    }));

    const errorMessage = await findByText('errormessage');

    expect(errorMessage).toBeTruthy();
    expect(textarea).toHaveAttribute('aria-describedby', errorMessage.id);
  });

  it('Fires the onChange event', () => {
    const { textarea } = createTextareaWrapper();

    textarea.focus();
    userEvent.keyboard('input');

    expect(onChangeHandler).toHaveBeenCalledTimes(5);
  });
});
