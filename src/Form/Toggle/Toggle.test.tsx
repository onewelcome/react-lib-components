import React from 'react';
import { Toggle } from './Toggle';
import { render } from '@testing-library/react';

describe('Toggle should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Toggle name="toggle" data-testid="component">
        Toggle
      </Toggle>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});

describe('Toggle attributes', () => {
  it('should be checked', () => {
    const { getByTestId } = render(
      <Toggle checked={true} name="toggle" data-testid="component">
        Toggle
      </Toggle>
    );

    const component = getByTestId('component');

    expect(component).toHaveAttribute('aria-checked', 'true');
  });
});
