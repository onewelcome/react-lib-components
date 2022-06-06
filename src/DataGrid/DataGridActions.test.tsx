import React from 'react';
import { DataGridActions, Props } from './DataGridActions';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  addBtnProps: {},
  columnsBtnProps: {},
  searchBtnProps: {},
};

const createDataGridActions = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DataGridActions {...parameters} data-testid="dataGridActions" />);
  const dataGridActions = queries.getByTestId('dataGridActions');

  return {
    ...queries,
    dataGridActions,
  };
};

describe('DataGridActions should render', () => {
  it('renders without crashing', () => {
    const { dataGridActions, getAllByRole } = createDataGridActions();

    expect(dataGridActions).toBeDefined();
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent('Add item');
    expect(buttons[1]).toHaveTextContent('Columns');
    expect(buttons[2]).toHaveTextContent('Search');
  });

  it('renders only add button', () => {
    const { dataGridActions, getAllByRole } = createDataGridActions((params) => ({
      ...params,
      columnsBtnProps: undefined,
      searchBtnProps: undefined,
    }));

    expect(dataGridActions).toBeDefined();
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent('Add item');
  });

  it('renders only columns button', () => {
    const { dataGridActions, getAllByRole } = createDataGridActions((params) => ({
      ...params,
      addBtnProps: undefined,
      searchBtnProps: undefined,
    }));

    expect(dataGridActions).toBeDefined();
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent('Columns');
  });

  it('renders only search button', () => {
    const { dataGridActions, getAllByRole } = createDataGridActions((params) => ({
      ...params,
      addBtnProps: undefined,
      columnsBtnProps: undefined,
    }));

    expect(dataGridActions).toBeDefined();
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent('Search');
  });

  it('renders buttons with overwritten props', () => {
    const addBtnProps = { children: 'button1', title: 'title1' };
    const columnsBtnProps = { children: 'button2', title: 'title2' };
    const searchBtnProps = { children: 'button3', title: 'title3' };
    const { dataGridActions, getAllByRole } = createDataGridActions((params) => ({
      ...params,
      addBtnProps,
      columnsBtnProps,
      searchBtnProps,
    }));

    expect(dataGridActions).toBeDefined();
    const [addBtn, columnsBtn, searchBtn] = getAllByRole('button');
    expect(addBtn).toHaveTextContent(addBtnProps.children);
    expect(addBtn).toHaveAttribute('title', addBtnProps.title);
    expect(columnsBtn).toHaveTextContent(columnsBtnProps.children);
    expect(columnsBtn).toHaveAttribute('title', columnsBtnProps.title);
    expect(searchBtn).toHaveTextContent(searchBtnProps.children);
    expect(searchBtn).toHaveAttribute('title', searchBtnProps.title);
    ///@TODO; add to docs that you can override buttons props
  });
});

describe('DataGridActions should be interactive', () => {
  it('clicking on add button runs callback', () => {
    const onClick = jest.fn();
    const { getAllByRole } = createDataGridActions((params) => ({
      ...params,
      addBtnProps: { onClick },
    }));

    userEvent.click(getAllByRole('button')[0]);

    expect(onClick).toBeCalledTimes(1);
  });

  it('clicking on columns button runs callback', () => {
    const onClick = jest.fn();
    const { getAllByRole } = createDataGridActions((params) => ({
      ...params,
      columnsBtnProps: { onClick },
    }));

    userEvent.click(getAllByRole('button')[1]);

    expect(onClick).toBeCalledTimes(1);
  });

  it('clicking on search button runs callback', () => {
    const onClick = jest.fn();
    const { getAllByRole } = createDataGridActions((params) => ({
      ...params,
      searchBtnProps: { onClick },
    }));

    userEvent.click(getAllByRole('button')[2]);

    expect(onClick).toBeCalledTimes(1);
  });
});
