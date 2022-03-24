import React from 'react';
import { Label } from './Label';
import { render } from '@testing-library/react';

describe('Label should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Label htmlFor="input-name" data-testid="component">
        Label
      </Label>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });

  it('adds htmlFor attribute', () => {
    const { getByTestId } = render(
      <Label htmlFor="input-name" data-testid="component">
        Label
      </Label>
    );

    const component = getByTestId('component');
    expect(component.getAttribute('for')).toBe('input-name');
  });
});
