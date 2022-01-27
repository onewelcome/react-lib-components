import React from 'react';
import { Fieldset } from './Fieldset';
import { render } from '@testing-library/react';

describe('Fieldset should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Fieldset data-testid="testcomponent">Form fields here</Fieldset>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
