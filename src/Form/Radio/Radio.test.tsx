import React from 'react';
import { Radio } from './Radio';
import { render } from '@testing-library/react';

describe('Radio should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Radio data-testid="component">Radio</Radio>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
