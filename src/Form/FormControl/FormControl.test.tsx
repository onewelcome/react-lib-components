import React from 'react';
import { FormControl } from './FormControl';
import { render } from '@testing-library/react';

describe('FormControl should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <FormControl data-testid="testcomponent">Form content here</FormControl>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
