import React, { ReactElement } from 'react';
import { Select, Props } from './Select';
import { render } from '@testing-library/react';
import { Option } from './Option';
import userEvent from '@testing-library/user-event';

const createSelect = (amountOfOptions = 5, params?: Props) => {
  const renderOptions = (amount: number): ReactElement[] => {
    const returnArr: ReactElement[] = [];

    for (let i = 0; i < amount; i++) {
      returnArr.push(<Option key={i} value={`option${i}`}>{`Option${i}`}</Option>);
    }

    return returnArr;
  };

  const queries = render(
    <Select onChange={jest.fn()} {...params} data-testid="custom-select">
      {renderOptions(amountOfOptions)}
    </Select>
  );
  const select = queries.getByTestId('custom-select')!;
  const button = select.querySelector('button');

  if (button) {
    userEvent.click(button);
  }

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
    const { select, button, list } = createSelect(5);

    expect(select).toBeDefined();
    expect(button?.getAttribute('aria-expanded')).toBe('true');
    expect(button?.getAttribute('aria-disabled')).toBe('false');
    expect(list).toBeDefined();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(5);
  });
});

describe('Select should render with search', () => {
  it('shows the search and filtering works', () => {
    const { select, list, dropdownWrapper } = createSelect(20);

    const search = dropdownWrapper?.querySelector('input');

    expect(select).toBeTruthy();
    expect(search).toBeTruthy();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(20);

    if (search) {
      userEvent.type(search, '19');
    }

    expect(list?.querySelectorAll("li[role='option']").length).toBe(1);
    expect(list?.querySelector("li[role='option']")?.innerHTML).toBe('Option19');
  });
});

describe('Selecting options using keyboard', () => {
  it('should focus through list items and select on enterpress', () => {
    const { select, list } = createSelect(7);

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
      expect(select.querySelector('button > span > span')?.innerHTML).toBe('Option5');
    }, 50);
  });
});

describe('Expanded should be false whenever we click the body', () => {
  it('closes select on body click', () => {
    const { getByRole } = createSelect(14);

    const button = getByRole('button');

    expect(button).toHaveAttribute('aria-expanded', 'true');
    userEvent.click(document.body);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('List expansion', () => {
  it('should expand upwards', () => {
    const { select, getByRole } = createSelect(5);

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

    userEvent.click(document.body);
    const button = getByRole('button');
    userEvent.click(button);

    const listWrapper = select.querySelector('.list-wrapper');

    expect(listWrapper).toHaveStyle({ bottom: '0px' });
  });
});
