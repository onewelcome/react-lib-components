import React from 'react';
import { TabList, Props } from './TabList';
import { render } from '@testing-library/react';
import { Tab } from './Tab';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  'aria-label': 'TabList',
  children: [<Tab>Test1</Tab>, <Tab>Test2</Tab>, <Tab>Test3</Tab>],
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

  it('renders with properties passed', () => {
    const { tablist } = createTabs((defaultParams) => ({
      ...defaultParams,
      className: 'testclass',
    }));

    expect(tablist).toHaveClass('testclass');
  });

  it('renders Tab children with unique Ids', () => {
    const { tablist } = createTabs();
    const firstTab = tablist.firstChild as HTMLButtonElement;
    const lastTab = tablist.lastChild as HTMLButtonElement;

    expect(firstTab).toHaveAttribute('aria-selected', 'true');
    expect(lastTab).not.toHaveAttribute('aria-selected', 'true');
    expect(firstTab.id).not.toEqual(lastTab.id);
  });

  it('should pass tabIds and tabpanelIds', () => {
    const { tablist } = createTabs((defaultParams) => ({
      ...defaultParams,
      tabIds: ['tabid1', 'tabid2', 'tabid3'],
      tabPanelIds: ['tabpanelid1', 'tabpanelid2', 'tabpanelid3'],
    }));

    let firstTab = tablist.firstChild as HTMLDivElement;
    let lastTab = tablist.lastChild as HTMLDivElement;

    expect(firstTab).toHaveAttribute('id', 'tabid1');
    expect(lastTab).toHaveAttribute('id', 'tabid3');
    expect(firstTab).toHaveAttribute('aria-controls', 'tabpanelid1');
    expect(lastTab).toHaveAttribute('aria-controls', 'tabpanelid3');
  });
});

describe('Tabs should be traversable', () => {
  it('switches to tab when selected property is changed', () => {
    const { tablist } = createTabs((defaultParams) => ({
      ...defaultParams,
      selected: 2,
    }));
    let firstTab = tablist.firstChild as HTMLButtonElement;
    let lastTab = tablist.lastChild as HTMLButtonElement;

    expect(firstTab).not.toHaveAttribute('aria-selected', 'true');
    expect(lastTab).toHaveAttribute('aria-selected', 'true');
  });

  it('switches to tab when clicked', () => {
    const { tablist } = createTabs();
    let firstTab = tablist.firstChild as HTMLButtonElement;
    let lastTab = tablist.lastChild as HTMLButtonElement;

    expect(firstTab).toHaveAttribute('aria-selected', 'true');
    expect(lastTab).not.toHaveAttribute('aria-selected', 'true');

    userEvent.click(lastTab);

    firstTab = tablist.firstChild as HTMLButtonElement;
    lastTab = tablist.lastChild as HTMLButtonElement;

    expect(lastTab).toHaveAttribute('aria-selected', 'true');
    expect(firstTab).not.toHaveAttribute('aria-selected', 'true');
  });
});
