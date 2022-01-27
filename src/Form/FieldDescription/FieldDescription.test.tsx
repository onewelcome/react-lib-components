import React from 'react';
import { FieldDescription } from './FieldDescription';
import { render } from '@testing-library/react';

describe('FieldDescription should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <FieldDescription data-testid="component">
        This is a field description
      </FieldDescription>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
