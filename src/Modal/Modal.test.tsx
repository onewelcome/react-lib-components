import React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Modal id="modal" open={true} onClose={() => {}}>
        test
      </Modal>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
