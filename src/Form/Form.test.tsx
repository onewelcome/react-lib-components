import React from 'react';
import { Form } from './Form';
import { render } from '@testing-library/react';

describe('Form should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Form data-testid="component">Content</Form>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
