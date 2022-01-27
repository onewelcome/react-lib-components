import React from 'react';
import { Fieldset } from './Fieldset';
import { render } from '@testing-library/react';

describe('Fieldset should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Fieldset data-testid="component">Form fields here</Fieldset>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
