import React from 'react';
import * as ReactDOM from 'react-dom';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Dialog
        id="dialog"
        open={true}
        type="destructive"
        title="Discard changes?"
        primaryAction={{ label: 'Discard', onClick: () => {} }}
        secondaryAction={{
          label: 'Keep editing',
          onClick: () => {},
        }}
      >
        Text
      </Dialog>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
