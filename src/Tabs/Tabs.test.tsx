import React from 'react';
import { Tabs, Props } from './Tabs';
import { render } from '@testing-library/react';
import { TabButton as Tab } from './TabButton';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  'aria-label': 'Entertainment',
  children: [
    <Tab title="Tab1">Tabpanel1 content</Tab>,
    <Tab title="Tab2">Tabpanel2 content</Tab>,
    <Tab title="Tab3">Tabpanel3 content</Tab>,
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

  it('renders with properties passed', () => {
    const { tabs } = createTabs((defaultParams) => ({
      ...defaultParams,
      className: 'testclass',
    }));

    expect(tabs).toHaveClass('testclass');
  });

  it('switches to tab and tabpanel when selected property is changed', () => {
    const { tabs } = createTabs((defaultParams) => ({
      ...defaultParams,
      selected: 2,
    }));

    const tablist = tabs.firstChild as HTMLDivElement;
    const tabpanels = tabs.lastChild as HTMLDivElement;
    const tabButtons = tablist.querySelectorAll('.tabbutton');

    const tab1 = tabButtons[0] as HTMLButtonElement;
    const tab3 = tabButtons[2] as HTMLButtonElement;

    const tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    const tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab1).not.toHaveClass('selected');
    expect(tab3).toHaveClass('selected');

    expect(tabpanel1).not.toHaveClass('selected');
    expect(tabpanel3).toHaveClass('selected');
  });

  it('switches to tab and tabpanel when tab is clicked', () => {
    const { tabs } = createTabs((defaultParams) => ({
      ...defaultParams,
    }));

    const tablist = tabs.firstChild as HTMLDivElement;
    const tabpanels = tabs.lastChild as HTMLDivElement;
    let tabButtons = tablist.querySelectorAll('.tabbutton');

    let tab1 = tabButtons[0] as HTMLButtonElement;
    let tab3 = tabButtons[2] as HTMLButtonElement;

    let tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    let tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab1).toHaveClass('selected');
    expect(tab3).not.toHaveClass('selected');

    expect(tabpanel1).toHaveClass('selected');
    expect(tabpanel3).not.toHaveClass('selected');

    userEvent.click(tab3);

    tabButtons = tablist.querySelectorAll('.tabbutton');

    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;

    tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab1).not.toHaveClass('selected');
    expect(tab3).toHaveClass('selected');

    expect(tabpanel1).not.toHaveClass('selected');
    expect(tabpanel3).toHaveClass('selected');
  });

  it('triggers the onTabChange when switching tabs', () => {
    const onTabChangeHandler = jest.fn();

    const { tabs } = createTabs((defaultParams) => ({
      ...defaultParams,
      onTabChange: onTabChangeHandler,
    }));

    const tablist = tabs.firstChild as HTMLDivElement;
    const tabButtons = tablist.querySelectorAll('.tabbutton');

    let tab3 = tabButtons[2] as HTMLButtonElement;

    userEvent.click(tab3);

    expect(onTabChangeHandler).toHaveBeenCalled();
  });
});

describe('Tabs should not render other children then tab components', () => {
  it('renders no tabs', () => {
    const queries = render(
      <Tabs data-testid="tabs">
        <div>wrong component 1</div>
        <div>wrong component 2</div>
      </Tabs>
    );

    const tabs = queries.getByTestId('tabs');

    expect(tabs).toBeDefined();
    expect(tabs).toBeEmptyDOMElement;
  });
});

describe('Tabs should comply with accessibility rules', () => {
  it('traverse through tabs with keyboard', async () => {
    const { tabs } = createTabs();

    const tablist = tabs.firstChild as HTMLDivElement;
    const tabpanels = tabs.lastChild as HTMLDivElement;
    let tabButtons = tablist.querySelectorAll('.tabbutton');

    let tab1 = tabButtons[0] as HTMLButtonElement;
    let tab3 = tabButtons[2] as HTMLButtonElement;

    let tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    let tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    tab1.focus();

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;
    tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab1).toHaveFocus();
    expect(tab1).toHaveClass('selected');
    expect(tab1).not.toHaveClass('focussed');
    expect(tab3).not.toHaveClass('selected');
    expect(tab3).not.toHaveClass('focussed');
    expect(tabpanel1).toHaveClass('selected');
    expect(tabpanel3).not.toHaveClass('selected');

    userEvent.keyboard('[ArrowLeft]');
    userEvent.keyboard('[Space]');

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;
    tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab3).toHaveFocus();
    expect(tab3).toHaveClass('selected');
    expect(tab1).not.toHaveClass('selected');
    expect(tab1).not.toHaveClass('focussed');
    expect(tabpanel3).toHaveClass('selected');
    expect(tabpanel1).not.toHaveClass('selected');

    userEvent.keyboard('[ArrowRight]');
    userEvent.keyboard('[Enter]');

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;
    tabpanel1 = tabpanels.firstChild as HTMLDivElement;
    tabpanel3 = tabpanels.lastChild as HTMLDivElement;

    expect(tab1).toHaveFocus();
    expect(tab1).toHaveClass('selected');
    expect(tab3).not.toHaveClass('selected');
    expect(tab3).not.toHaveClass('focussed');
    expect(tabpanel1).toHaveClass('selected');
    expect(tabpanel3).not.toHaveClass('selected');

    userEvent.keyboard('[End]');

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;

    expect(tab3).toHaveFocus();
    expect(tab3).toHaveClass('focussed');
    expect(tab1).not.toHaveClass('focussed');

    userEvent.keyboard('[Home]');

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;

    expect(tab1).toHaveFocus();
    expect(tab1).toHaveClass('selected');
    expect(tab3).not.toHaveClass('focussed');

    // should have no effect
    userEvent.keyboard('a');

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;

    expect(tab1).toHaveFocus();
    expect(tab1).toHaveClass('selected');
    expect(tab3).not.toHaveClass('focussed');

    userEvent.keyboard('[ArrowRight]');

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;

    expect(tab1).not.toHaveFocus();
    expect(tab3).not.toHaveFocus();
    expect(tab1).not.toHaveClass('focussed');
    expect(tab3).not.toHaveClass('focussed');

    userEvent.keyboard('[ArrowLeft]');

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;

    expect(tab1).toHaveFocus();
    expect(tab1).toHaveClass('selected');
    expect(tab3).not.toHaveClass('focussed');

    userEvent.keyboard('[ArrowLeft]');

    tabButtons = tablist.querySelectorAll('.tabbutton');
    tab1 = tabButtons[0] as HTMLButtonElement;
    tab3 = tabButtons[2] as HTMLButtonElement;

    tab3.blur();

    expect(tab1).not.toHaveFocus();
    expect(tab3).not.toHaveFocus();
    expect(tab1).toHaveClass('selected');
  });
});
