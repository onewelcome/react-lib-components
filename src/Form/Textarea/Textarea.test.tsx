import React from 'react';
import { Textarea, Props } from './Textarea';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const createTextarea = (params?: Props) => {
  const queries = render(<Textarea data-testid="textarea" {...params} />);
  const textarea = queries.getByRole('textbox');

  return {
    ...queries,
    textarea,
  };
};

describe('Textarea should render', () => {
  it('renders without crashing', () => {
    const { textarea } = createTextarea();
    expect(textarea).toBeTruthy();
  });
});

describe('Textarea properties', () => {
  it('is disabled', () => {
    const { textarea } = createTextarea({ disabled: true });

    expect(textarea).toHaveAttribute('disabled');
  });

  it('has 20 columns', () => {
    const { textarea } = createTextarea({ cols: 20 });

    expect(textarea).toHaveAttribute('cols', '20');
  });

  it('has autofocus', () => {
    const { textarea } = createTextarea({ autoFocus: true });

    setTimeout(() => {
      expect(textarea).toHaveAttribute('autofocus');
    }, 0);
  });
});

describe('Textarea listeners', () => {
  it('executes the functions', () => {
    const onChangeHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onKeyDownHandler = jest.fn();

    const { textarea } = createTextarea({
      onKeyUp: onKeyUpHandler,
      onKeyDown: onKeyDownHandler,
      onChange: onChangeHandler,
    });

    textarea.focus();

    expect(textarea).toHaveFocus();

    userEvent.keyboard('test');

    expect(onKeyUpHandler).toHaveBeenCalled();
    expect(onKeyDownHandler).toHaveBeenCalled();
    expect(onChangeHandler).toHaveBeenCalled();
  });
});

describe('Error status', () => {
  it('has error class, and an icon', () => {
    const { textarea } = createTextarea({ error: true });

    expect(textarea).toHaveClass('error');
    expect(textarea.nextElementSibling).toHaveClass('icon-error-circle');
  });
});
