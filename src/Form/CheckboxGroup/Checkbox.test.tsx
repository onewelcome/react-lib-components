import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { render } from '@testing-library/react';

describe('CheckboxGroup should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <CheckboxGroup data-testid="testcomponent">Checkbox group</CheckboxGroup>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
