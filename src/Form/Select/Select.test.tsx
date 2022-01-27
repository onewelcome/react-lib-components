import React from 'react';
import { Select } from './Select';
import { render } from '@testing-library/react';

describe('Select should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Select data-testid="testcomponent">Select</Select>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
