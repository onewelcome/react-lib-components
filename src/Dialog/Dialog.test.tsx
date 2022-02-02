import React from 'react';
import * as ReactDOM from 'react-dom';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dialog open={true} onClose={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
