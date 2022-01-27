import React from 'react';
import { Checkbox } from './Checkbox';
import { render } from '@testing-library/react';

describe('Checkbox should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Checkbox data-testid="testcomponent">Content</Checkbox>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
