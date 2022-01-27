import React from 'react';
import { Radio } from './Radio';
import { render } from '@testing-library/react';

describe('Radio should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Radio data-testid="testcomponent">Radio</Radio>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
