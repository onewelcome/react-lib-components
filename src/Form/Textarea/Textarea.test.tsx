import React from 'react';
import { Textarea } from './Textarea';
import { render } from '@testing-library/react';

describe('Textarea should render', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Textarea data-testid="component" />);
    const component = getByTestId('component');
    expect(component).toBeDefined();
  });
});
