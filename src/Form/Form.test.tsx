import React from 'react';
import { Form } from './Form';
import { render } from '@testing-library/react';

describe('Form should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Form data-testid="testcomponent">Content</Form>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
