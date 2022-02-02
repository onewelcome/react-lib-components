import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Dialog, Props } from '../../src/Dialog/Dialog';

const meta: Meta = {
  title: 'Dialog',
  component: Dialog,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>click</button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export const Dialog1 = Template.bind({});
