import React from 'react';
import { TabPanels, Props } from './TabPanels';
import { render } from '@testing-library/react';
import { TabPanel } from './TabPanel';

const defaultParams: Props = {
  'aria-label': 'TabPanels',
  children: [<TabPanel>Test1</TabPanel>, <TabPanel>Test2</TabPanel>],
};

const createTabs = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<TabPanels {...parameters} data-testid="tabpanels"></TabPanels>);
  const tabpanels = queries.getByTestId('tabpanels');

  return {
    ...queries,
    tabpanels,
  };
};

describe('Tabs should render', () => {
  it('renders without crashing', () => {
    const { tabpanels } = createTabs();

    expect(tabpanels).toBeDefined();
  });
});
