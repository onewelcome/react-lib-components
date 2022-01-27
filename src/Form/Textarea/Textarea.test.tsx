import React from 'react';
import { Textarea } from './Textarea';
import { render } from '@testing-library/react';

describe('Textarea should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <Textarea data-testid="testcomponent">Text area</Textarea>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
