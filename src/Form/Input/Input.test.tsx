import React from 'react';
import { Input } from './Input';
import { render } from '@testing-library/react';

describe('Input should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Input type="text" name="input" data-testid="component" />
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
