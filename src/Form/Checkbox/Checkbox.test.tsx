import React from 'react';
import { Checkbox } from './Checkbox';
import { render } from '@testing-library/react';

describe('Checkbox should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Checkbox data-testid="component">Content</Checkbox>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
