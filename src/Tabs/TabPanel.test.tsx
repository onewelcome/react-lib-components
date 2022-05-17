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
  });
});
