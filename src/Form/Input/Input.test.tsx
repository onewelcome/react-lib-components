import React from 'react';
import { Input } from './Input';
import { render } from '@testing-library/react';

describe('Input should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Input data-testid="testcomponent">Input</Input>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
