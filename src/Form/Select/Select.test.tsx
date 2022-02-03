import React from 'react';
import { Select } from './Select';
import { render } from '@testing-library/react';
import { Option } from './Option';

describe('Select should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Select data-testid="component">
        <Option value="option1">Option1</Option>
        <Option value="option2">Option2</Option>
      </Select>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
