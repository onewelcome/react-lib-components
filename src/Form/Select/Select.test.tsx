import React from 'react';
import { Select as SelectComponent, Props } from './Select';
import { render } from '@testing-library/react';
import { Option } from './Option';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  name: 'Example select',
  children: [
    <Option value="option1">Test</Option>,
    <Option value="option2">Test2</Option>,
    <Option value="option3">Test3</Option>,
    <Option value="option4">Test4</Option>,
    <Option value="option5">Test5</Option>,
    <Option value="option6">Test6</Option>,
    <Option value="option7">Test7</Option>,
    <Option value="option8">Test8</Option>,
    <Option value="option9">Test9</Option>,
    <Option value="option10">Test10</Option>,
    <Option value="option11">Test11</Option>,
    <Option value="option12">Test12</Option>,
    <Option value="option13">Test13</Option>,
    <Option value="option14">Test14</Option>,
    <Option value="option15">Test15</Option>,
    <Option value="option16">Test16</Option>,
    <Option value="option17">Test17</Option>,
  ],
  value: '',
};

const createSelect = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<SelectComponent {...parameters} data-testid="select" />);
  const select = queries.getByTestId('select');
  const button = select.querySelector('button');
  const list = select.querySelector('ul[role="listbox"]');
  const dropdownWrapper = select.querySelector('.list-wrapper');

  return {
    ...queries,
    select,
    button,
    list,
    dropdownWrapper,
  };
};

describe('Select should render', () => {
  it('renders with 5 options and proper attributes', () => {
    const { select, button, list } = createSelect((defaultParams) => ({
      ...defaultParams,
      children: [
        <Option value="option1">Test</Option>,
        <Option value="option2">Test2</Option>,
        <Option value="option3">Test3</Option>,
        <Option value="option4">Test4</Option>,
        <Option value="option5">Test5</Option>,
      ],
      placeholder: 'Placeholder',
    }));

    if (button) {
      userEvent.click(button);
    }

    expect(select).toBeDefined();
    expect(select.querySelector('.placeholder')).toBeInTheDocument();
    expect(button?.getAttribute('aria-expanded')).toBe('true');
    expect(button?.getAttribute('aria-disabled')).toBe('false');
    expect(list).toBeDefined();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(5);
  });

  it('should be disabled', () => {
    const { select, button } = createSelect((defaultParams) => ({
      ...defaultParams,
      disabled: true,
    }));

    expect(select).toHaveClass('disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).toHaveAttribute('disabled');
  });

  it('should have an error', () => {
    const { select, button } = createSelect((defaultParams) => ({
      ...defaultParams,
      error: true,
      value: 'option4',
    }));

    expect(select).toHaveClass('error');
    expect(button).toHaveAttribute('aria-invalid', 'true');
    expect(select.querySelector('[data-clear]')).not.toBeInTheDocument();
    expect(select.querySelector('.icon-warning')).toBeInTheDocument();
  });
});

describe('Select should render with search', () => {
  it('shows the search and filtering works', () => {
    const { select, list, button, dropdownWrapper } = createSelect();

    if (button) {
      userEvent.click(button);
    }

    const search = dropdownWrapper?.querySelector('input');

    expect(select).toBeTruthy();
    expect(search).toBeTruthy();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(17);

    if (search) {
      userEvent.type(search, '17');
    }

    expect(list?.querySelectorAll("li[role='option']").length).toBe(1);
    expect(list?.querySelector("li[role='option']")?.innerHTML).toBe('Test17');
  });
});

describe('Selecting options using keyboard', () => {
  it('should focus through list items and select on enterpress', () => {
    const { select, button, list } = createSelect();

    if (button) {
      userEvent.click(button);
    }

    userEvent.tab();
    userEvent.tab();
    expect(list?.querySelectorAll('li')[0]).toHaveFocus();
    userEvent.tab();
    expect(list?.querySelectorAll('li')[1]).toHaveFocus();
    userEvent.tab();
    expect(list?.querySelectorAll('li')[2]).toHaveFocus();
    userEvent.tab();
    expect(list?.querySelectorAll('li')[3]).toHaveFocus();
    userEvent.tab();
    expect(list?.querySelectorAll('li')[4]).toHaveFocus();
    userEvent.tab();
    expect(list?.querySelectorAll('li')[5]).toHaveFocus();

    userEvent.keyboard('{enter}');

    setTimeout(() => {
      expect(select.querySelector('button > span > span')?.innerHTML).toBe('Test5');
    }, 50);
  });
});

describe('Expanded should be false whenever we click the body', () => {
  it('closes select on body click', () => {
    const { button } = createSelect();

    if (button) {
      userEvent.click(button);
    }

    expect(button).toHaveAttribute('aria-expanded', 'true');
    userEvent.click(document.body);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('List expansion', () => {
  it('should expand upwards', () => {
    const { select, button } = createSelect();

    Object.defineProperty(window, 'innerHeight', { value: 500, writable: true });

    select.getBoundingClientRect = () => ({
      x: 50,
      y: 50,
      width: 500,
      height: 50,
      top: 250,
      left: 250,
      right: 750,
      bottom: 750,
      toJSON: () => jest.fn(),
    });

    if (button) {
      userEvent.click(button);
    }

    const listWrapper = select.querySelector('.list-wrapper');

    expect(listWrapper).toHaveStyle({ bottom: '0px' });
  });

  it('should expand downwards with a max height set', () => {
    const { select, getByRole } = createSelect();
    const listWrapper = select.querySelector('.list-wrapper');

    listWrapper!.getBoundingClientRect = () => ({
      x: 50,
      y: 50,
      width: 500,
      height: 600,
      top: 10,
      left: 250,
      right: 750,
      bottom: 50,
      toJSON: () => jest.fn(),
    });

    Object.defineProperty(window, 'innerHeight', { value: 500, writable: true });

    select.getBoundingClientRect = () => ({
      x: 50,
      y: 50,
      width: 500,
      height: 40,
      top: 10,
      left: 250,
      right: 750,
      bottom: 50,
      toJSON: () => jest.fn(),
    });

    userEvent.click(document.body);
    const button = getByRole('button');
    userEvent.click(button);

    expect(listWrapper).toHaveStyle({ maxHeight: '474px' });
    expect(listWrapper).toHaveStyle({ top: '0px' });
  });
});

describe('onClear method', () => {
  it('should show a cross and fire the passed onClear function', async () => {
    const onClearHandler = jest.fn();

    let count = 0;

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (count === 0) {
        expect(event.target.value).toBe('option4');
        count++;
      } else {
        expect(event.target.value).toBe('option5');
      }
    };

    const { button, container } = createSelect((defaultParams) => ({
      ...defaultParams,
      onClear: onClearHandler,
      onChange: onChangeHandler,
      value: 'option4',
    }));

    if (button) {
      userEvent.click(button);
    }

    const optionToClick = container.querySelector('li[data-value="option5"]')!;
    const onClearButton = container.querySelector('[data-clear]')!;

    userEvent.click(optionToClick);
    userEvent.click(onClearButton);

    expect(onClearHandler).toHaveBeenCalled();
    expect(onClearButton).toBeInTheDocument();
    expect(container.querySelector('li[aria-selected="true"]')).toHaveTextContent('Test4');
    expect(container.querySelector('.selected-option')).toHaveTextContent('Test4');
  });
});
