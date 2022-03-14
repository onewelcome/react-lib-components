import React from 'react';
import { FormHelperText } from './FormHelperText';
import { render } from '@testing-library/react';

describe('FormHelperText should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <FormHelperText data-testid="component">This is a field description</FormHelperText>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});

describe('Attributes', () => {
  it('contains the error class', () => {
    const { getByTestId } = render(
      <FormHelperText error={true} data-testid="component">
        This is a field description
      </FormHelperText>
    );
    const component = getByTestId('component');

    expect(component).toHaveClass('error');
    expect(component).toHaveStyle({ color: 'rgb(226, 42, 29);' });
  });
});
