import React from 'react';
import { Select } from './Select';
import { render } from '@testing-library/react';

describe('Select should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Select data-testid="component">Select</Select>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
