import React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal open={true} onClose={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
