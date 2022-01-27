import React from 'react';
import { FieldDescription } from './FieldDescription';
import { render } from '@testing-library/react';

describe('FieldDescription should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <FieldDescription data-testid="testcomponent">
        This is a field description
      </FieldDescription>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
