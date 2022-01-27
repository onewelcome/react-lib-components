import React from 'react';
import { Label } from './Label';
import { render } from '@testing-library/react';

describe('Label should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Label data-testid="testcomponent">Label</Label>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
