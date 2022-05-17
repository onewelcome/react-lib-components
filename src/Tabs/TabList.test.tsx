import React from 'react';
import { TabList, Props } from './TabList';
import { render } from '@testing-library/react';
import { Tab } from './Tab';

const defaultParams: Props = {
  'aria-label': 'TabList',
  children: [<Tab>Test1</Tab>, <Tab>Test2</Tab>],
};

const createTabs = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<TabList {...parameters} data-testid="tablist"></TabList>);
  const tablist = queries.getByTestId('tablist');

  return {
    ...queries,
    tablist,
  };
};

describe('Tabs should render', () => {
  it('renders without crashing', () => {
    const { tablist } = createTabs();

    expect(tablist).toBeDefined();
  });
});
