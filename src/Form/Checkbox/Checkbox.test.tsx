import React from 'react';
import { Checkbox, CheckboxProps as Props } from './Checkbox';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const createCheckbox = (params?: Props) => {
  const queries = render(
    <Checkbox name="Testing" data-testid="checkbox" {...params}>
      Label
    </Checkbox>
  );
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

describe('Checkbox should have proper attributes', () => {
  it('should be unchecked', () => {
    const { checkbox } = createCheckbox();

    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('should be checked', () => {
    const isChecked = true;

    const { checkbox } = createCheckbox({ name: 'Testing', children: 'Label', checked: isChecked });

    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('should call the onChange function', () => {
    const onChangeHandler = jest.fn();
    const { checkbox } = createCheckbox({
      name: 'Testing',
      children: 'Label',
      onChange: onChangeHandler,
    });
    userEvent.click(checkbox);
    expect(onChangeHandler).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const { checkbox } = createCheckbox({ name: 'Testing', children: 'Label', disabled: true });

    expect(checkbox).toHaveAttribute('disabled');
  });

  it('should have helpertext rendered', () => {
    const { container, checkbox } = createCheckbox({
      name: 'Testing',
      children: 'Label',
      helperText: 'example helper',
    });

    const helperText = container.querySelector(`#${checkbox.getAttribute('id')}-description`);

    expect(helperText).toBeTruthy();
    expect(helperText).toHaveTextContent('example helper');
  });

  it('should have the error state enabled', () => {
    const { checkbox, container } = createCheckbox({
      name: 'Testing',
      children: 'Label',
      error: true,
      errorMessage: 'Something went wrong',
    });

    expect(checkbox).toHaveAttribute(
      'aria-describedby',
      container.querySelector('.error-message span:last-of-type')!.id
    );
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    expect(container.querySelector('.checkbox-wrapper')).toHaveClass('error');
  });

  it('should have a correctly linked label element', () => {
    const { checkbox, container } = createCheckbox({ name: 'Testing', children: 'Label' });

    const id = checkbox.getAttribute('id');
    const label = container.querySelector(`label[for=${id}]`);

    expect(label).toBeTruthy();
    expect(label).toHaveTextContent('Label');
  });
});
