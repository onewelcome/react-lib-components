import React from 'react';
import { FormHelperText } from './FormHelperText';
import { render } from '@testing-library/react';

describe('FormHelperText should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <FormHelperText data-testid="component">
        This is a field description
      </FormHelperText>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
