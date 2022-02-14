import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { render } from '@testing-library/react';

describe('CheckboxGroup should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <CheckboxGroup data-testid="component">Checkbox group</CheckboxGroup>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
