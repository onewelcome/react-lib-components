import React from 'react';
import { Toggle } from './Toggle';
import { render } from '@testing-library/react';

describe('Toggle should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Toggle data-testid="component">Toggle</Toggle>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
