import React from 'react';
import { Option } from './Option';
import { render } from '@testing-library/react';

describe('Option should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Option value="option" data-testid="component">
        Option
      </Option>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
