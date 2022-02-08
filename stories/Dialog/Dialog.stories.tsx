import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Dialog, Props } from '../../src/Dialog/Dialog';
import { Button } from '../../src/Button/Button';

const meta: Meta = {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    id: {
      defaultValue: 'dialog',
    },
    title: {
      defaultValue: 'Discard changes?',
    },
    alignActions: {
      defaultValue: 'left',
    },
    children: {
      defaultValue: (
        <p style={{ margin: 0 }}>This cannot be undone and you will lose your changes.</p>
      ),
    },
    primaryAction: {
      defaultValue: {
        label: 'Discard',
        onClick: () => window.setDialogOpen(false),
      },
    },
    secondaryAction: {
      defaultValue: {
        label: 'Keep editing',
        onClick: () => window.setDialogOpen(false),
      },
    },
  },
};

export default meta;

declare global {
  var setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Template: Story<Props> = (args) => {
  const [open, setOpen] = useState(false);
  window.setDialogOpen = setOpen;
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        id={args.id}
        open={open}
        onClose={() => setOpen(false)}
        alignActions={args.alignActions}
        title={args.title}
        primaryAction={args.primaryAction}
        secondaryAction={args.secondaryAction}
      >
        {args.children}
      </Dialog>
    </>
  );
};

export const DestructiveActionDialog = Template.bind({});

export const NonDestructiveActionDialog = Template.bind({});

NonDestructiveActionDialog.args = {
  title: 'Verify email address',
  alignActions: 'right',
  children: (
    <p style={{ margin: 0 }}>
      You want to verify the email address <b>dana.george@mydomain.com</b>.
      <br />
      <br />
      <b>Dana George</b> will receive an email with a verification link and must click the link to
      complete the verification.
    </p>
  ),
  primaryAction: {
    label: 'Send email',
    onClick: () => window.setDialogOpen(false),
  },
  secondaryAction: {
    label: 'Cancel',
    onClick: () => window.setDialogOpen(false),
  },
};

export const SingleActionDialog = Template.bind({});

SingleActionDialog.args = {
  title: 'Info',
  alignActions: 'right',
  children: <p style={{ margin: 0 }}>You can't remove your account.</p>,
  primaryAction: {
    label: 'Ok',
    onClick: () => window.setDialogOpen(false),
  },
  secondaryAction: undefined,
};

export const NestedDialogs = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        id="dialog11"
        open={open}
        alignActions="right"
        title="Dialog 1"
        onClose={() => setOpen(false)}
        primaryAction={{
          label: 'Open another dialog',
          onClick: () => setOpen2(true),
        }}
        secondaryAction={{
          label: 'Close',
          onClick: () => setOpen(false),
        }}
      >
        Long dialog content. Long dialog content. Long dialog content. Long dialog content. Long
        dialog content.
      </Dialog>
      <Dialog
        id="dialog12"
        open={open2}
        onClose={() => setOpen2(false)}
        alignActions="left"
        title="Dialog 2"
        primaryAction={{
          label: 'Close',
          onClick: () => setOpen2(false),
        }}
      >
        Short dialog content.
      </Dialog>
    </>
  );
};
