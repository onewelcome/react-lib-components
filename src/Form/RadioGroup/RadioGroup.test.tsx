import React from 'react';
import { RadioGroup } from './RadioGroup';
import { render } from '@testing-library/react';

describe('RadioGroup should render', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(
      <RadioGroup data-testid="testcomponent">Radiogroup content</RadioGroup>
    );
    const component = await findByTestId('testcomponent');
    expect(component).toBeDefined();
  });
});
