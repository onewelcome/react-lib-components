import React from 'react';
import { FormControl } from './FormControl';
import { render } from '@testing-library/react';

describe('FormControl should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <FormControl data-testid="component">Form content here</FormControl>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
