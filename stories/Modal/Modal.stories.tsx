import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, Props } from '../../src/Modal/Modal';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>click</button>
      <Modal
        id="modal"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export const Modal1 = Template.bind({});
