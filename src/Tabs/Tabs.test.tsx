import React from 'react';
import { Tabs, Props } from './Tabs';
import { render } from '@testing-library/react';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanels } from './TabPanels';
import { TabPanel } from './TabPanel';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  'aria-label': 'Tabs',
  children: [
    <TabList aria-label="test">
      <Tab>Tab1</Tab>
      <Tab>Tab2</Tab>
      <Tab>Tab3</Tab>
    </TabList>,
    <TabPanels>
      <TabPanel>Tabpanel1 content</TabPanel>
      <TabPanel>Tabpanel2 content</TabPanel>
      <TabPanel>Tabpanel3 content</TabPanel>
    </TabPanels>,
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

  it('switches to tab and tabpanel when selected property is changed', () => {
    const { tabs } = createTabs((defaultParams) => ({
      ...defaultParams,
      selected: 2,
    }));
    const tablist = tabs.firstChild as HTMLDivElement;
    const tabpanels = tabs.lastChild as HTMLDivElement;

    const tab1 = tablist.firstChild as HTMLButtonElement;
    const tab3 = tablist.lastChild as HTMLButtonElement;

    const tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    const tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab1).not.toHaveClass('selected');
    expect(tab3).toHaveClass('selected');

    expect(tabpanel1).not.toHaveClass('selected');
    expect(tabpanel3).toHaveClass('selected');
  });

  it('switches to tab and tabpanel when selected property is changed', () => {
    const { tabs } = createTabs((defaultParams) => ({
      ...defaultParams,
    }));

    const tablist = tabs.firstChild as HTMLDivElement;
    const tabpanels = tabs.lastChild as HTMLDivElement;

    let tab1 = tablist.firstChild as HTMLButtonElement;
    let tab3 = tablist.lastChild as HTMLButtonElement;

    let tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    let tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab1).toHaveClass('selected');
    expect(tab3).not.toHaveClass('selected');

    expect(tabpanel1).toHaveClass('selected');
    expect(tabpanel3).not.toHaveClass('selected');

    userEvent.click(tab3);

    tab1 = tablist.firstChild as HTMLButtonElement;
    tab3 = tablist.lastChild as HTMLButtonElement;

    tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab1).not.toHaveClass('selected');
    expect(tab3).toHaveClass('selected');

    expect(tabpanel1).not.toHaveClass('selected');
    expect(tabpanel3).toHaveClass('selected');
  });
});
