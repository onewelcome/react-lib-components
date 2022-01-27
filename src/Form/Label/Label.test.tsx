import React from 'react';
import { Label } from './Label';
import { render } from '@testing-library/react';

describe('Label should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Label data-testid="component">Label</Label>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
