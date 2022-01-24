import React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseButton } from './BaseButton';

describe('BaseButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BaseButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
