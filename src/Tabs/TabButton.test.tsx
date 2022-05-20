import React from 'react';
import { TabButton as Tab, Props } from './TabButton';
import { render } from '@testing-library/react';

const defaultParams: Props = {};

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

  it('should be selected when prop selected is passed', () => {
    const { tab } = createTab((defaultParams) => ({
      ...defaultParams,
      selected: true,
    }));

    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(tab).toHaveAttribute('tabIndex', '0');
  });

  it('should be focussed when prop focussed is passed', () => {
    const { tab } = createTab((defaultParams) => ({
      ...defaultParams,
      focussed: true,
    }));

    expect(tab).toHaveClass('focussed');
  });

  it('should set accessibility attributes when prop tabPanelId is passed', () => {
    const { tab } = createTab((defaultParams) => ({
      ...defaultParams,
      tabPanelId: 'fakeId',
    }));

    expect(tab).toHaveAttribute('aria-controls', 'fakeId');
  });

  it('should set id attribute when prop tabId is passed', () => {
    const { tab } = createTab((defaultParams) => ({
      ...defaultParams,
      tabId: 'fakeId',
    }));

    expect(tab).toHaveAttribute('id', 'fakeId');
  });

  it('should set class when prop className is passed', () => {
    const { tab } = createTab((defaultParams) => ({
      ...defaultParams,
      className: 'customclass',
    }));

    expect(tab).toHaveClass('customclass');
  });
});
