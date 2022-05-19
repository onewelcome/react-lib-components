import React from 'react';
import { TabPanel, Props } from './TabPanel';
import { render } from '@testing-library/react';

const defaultParams: Props = {};

const createTabPanel = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <TabPanel {...parameters} data-testid="tabpanel">
      tabpanel content
    </TabPanel>
  );
  const tabpanel = queries.getByTestId('tabpanel');

  return {
    ...queries,
    tabpanel,
  };
};

describe('TabPanel should render', () => {
  it('renders without crashing', () => {
    const { tabpanel } = createTabPanel();

    expect(tabpanel).toBeTruthy();

    expect(tabpanel).toHaveAttribute('aria-hidden', 'true');
    expect(tabpanel).toHaveAttribute('hidden');
  });

  it('should be visible when prop selected is passed', () => {
    const { tabpanel } = createTabPanel((defaultParams) => ({
      ...defaultParams,
      selected: true,
    }));

    expect(tabpanel).toHaveClass('selected');
    expect(tabpanel).toHaveAttribute('aria-hidden', 'false');
    expect(tabpanel).not.toHaveAttribute('hidden');
  });

  it('should set id when prop tabPanelId is passed', () => {
    const { tabpanel } = createTabPanel((defaultParams) => ({
      ...defaultParams,
      tabPanelId: 'fakeId',
    }));

    expect(tabpanel).toHaveAttribute('id', 'fakeId');
  });

  it('should set accessibility attributes when prop tabId is passed', () => {
    const { tabpanel } = createTabPanel((defaultParams) => ({
      ...defaultParams,
      tabId: 'fakeId',
    }));

    expect(tabpanel).toHaveAttribute('aria-labelledby', 'fakeId');
  });

  it('should set class when prop className is passed', () => {
    const { tabpanel } = createTabPanel((defaultParams) => ({
      ...defaultParams,
      className: 'customclass',
    }));

    expect(tabpanel).toHaveClass('customclass');
  });
});
