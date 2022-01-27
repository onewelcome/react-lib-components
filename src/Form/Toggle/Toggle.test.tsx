import React from 'react';
import { Toggle } from './Toggle';
import { render } from '@testing-library/react';

describe('Toggle should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Toggle data-testid="testcomponent">Toggle</Toggle>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
