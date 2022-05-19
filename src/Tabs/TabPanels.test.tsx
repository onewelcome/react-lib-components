import React from 'react';
import { TabPanels, Props } from './TabPanels';
import { render } from '@testing-library/react';
import { TabPanel } from './TabPanel';

const defaultParams: Props = {
  'aria-label': 'TabPanels',
  children: [<TabPanel>Test1</TabPanel>, <TabPanel>Test2</TabPanel>, <TabPanel>Test3</TabPanel>],
};

const createTabPanels = (params?: (defaultParams: Props) => Props) => {
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

describe('Tabpanels should render', () => {
  it('renders without crashing', () => {
    const { tabpanels } = createTabPanels();

    expect(tabpanels).toBeDefined();
  });

  it('should pass tabIds and tabpanelIds', () => {
    const { tabpanels } = createTabPanels((defaultParams) => ({
      ...defaultParams,
      tabIds: ['tabid1', 'tabid2', 'tabid3'],
      tabPanelIds: ['tabpanelid1', 'tabpanelid2', 'tabpanelid3'],
    }));

    let firstTabpanel = tabpanels.firstChild as HTMLDivElement;
    let lastTabpanel = tabpanels.lastChild as HTMLDivElement;

    expect(firstTabpanel).toHaveAttribute('id', 'tabpanelid1');
    expect(lastTabpanel).toHaveAttribute('id', 'tabpanelid3');
    expect(firstTabpanel).toHaveAttribute('aria-labelledby', 'tabid1');
    expect(lastTabpanel).toHaveAttribute('aria-labelledby', 'tabid3');
  });
});

describe('Tabpanels should be traversable', () => {
  it('switches to tab when selected property is changed', () => {
    const { tabpanels } = createTabPanels((defaultParams) => ({
      ...defaultParams,
      selected: 2,
    }));
    let firstTabpanel = tabpanels.firstChild as HTMLDivElement;
    let lastTabpanel = tabpanels.lastChild as HTMLDivElement;

    expect(firstTabpanel).not.toHaveClass('selected');
    expect(firstTabpanel).toHaveAttribute('aria-hidden', 'true');
    expect(firstTabpanel).toHaveAttribute('hidden');

    expect(lastTabpanel).toHaveClass('selected');
    expect(lastTabpanel).toHaveAttribute('aria-hidden', 'false');
    expect(lastTabpanel).not.toHaveAttribute('hidden');
  });
});
