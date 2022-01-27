import React from 'react';
import { RadioGroup } from './RadioGroup';
import { render } from '@testing-library/react';

describe('RadioGroup should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <RadioGroup data-testid="component">Radiogroup content</RadioGroup>
    );
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
