import React from 'react';
import { TabButton as Tab, Props } from './TabButton';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  title: 'Title of tab',
};

const createTab = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Tab {...parameters} data-testid="tab">
      tab content
    </Tab>
  );
  const tab = queries.getByTestId('tab');

  return {
    ...queries,
    tab,
  };
};

describe('Tab should render', () => {
  it('renders without crashing', () => {
    const { tab } = createTab();

    expect(tab).toBeTruthy();
  });
});
