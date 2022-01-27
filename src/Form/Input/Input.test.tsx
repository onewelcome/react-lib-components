import React from 'react';
import { Input } from './Input';
import { render } from '@testing-library/react';

describe('Input should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Input data-testid="component">Input</Input>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
