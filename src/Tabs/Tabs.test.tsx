import React from 'react';
import { Tabs, Props } from './Tabs';
import { render } from '@testing-library/react';
import { TabList } from './TabList';
import { Tab } from './Tab';

const defaultParams: Props = {
  'aria-label': 'Tabs',
  children: [
    <TabList aria-label="test">
      <Tab>Test1</Tab>
      <Tab>Test2</Tab>
    </TabList>,
  ],
};

const createTabs = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Tabs {...parameters} data-testid="tabs"></Tabs>);
  const tabs = queries.getByTestId('tabs');

  return {
    ...queries,
    tabs,
  };
};

describe('Tabs should render', () => {
  it('renders without crashing', () => {
    const { tabs } = createTabs();

    expect(tabs).toBeDefined();
  });
});
