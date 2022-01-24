import React from 'react';
import * as ReactDOM from 'react-dom';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IconButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
