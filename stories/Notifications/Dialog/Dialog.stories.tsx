import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Dialog, Props } from '../../../src/Notifications/Dialog/Dialog';
import { Button } from '../../../src/Button/Button';
import { Typography } from '../../../src/Typography/Typography';

const meta: Meta = {
  title: 'Stories/Notifications/Dialog',
  component: Dialog,
  args: {
    id: 'dialog',
    title: 'Discard changes?',
    alignActions: 'left',
    children: (
      <Typography variant="body" spacing={{ margin: 0 }}>
        This cannot be undone and you will lose your changes.
      </Typography>
    ),
    primaryAction: {
      label: 'Discard',
      onClick: () => window.setDialogOpen(false),
    },
    secondaryAction: {
      label: 'Keep editing',
      onClick: () => window.setDialogOpen(false),
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

export const LeftAlignedActionDialog = Template.bind({});

export const RightAlignedActionDialog = Template.bind({});

RightAlignedActionDialog.args = {
  title: 'Verify email address',
  alignActions: 'right',
  children: (
    <>
      <Typography variant="body">
        You want to verify the email address <b>dana.george@mydomain.com</b>.
      </Typography>
      <Typography variant="body" spacing={{ margin: 0 }}>
        <b>Dana George</b> will receive an email with a verification link and must click the link to
        complete the verification.
      </Typography>
    </>
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
  children: (
    <Typography variant="body" spacing={{ margin: 0 }}>
      You can't remove your account.
    </Typography>
  ),
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
        <Typography variant="body" spacing={{ margin: 0 }}>
          Long dialog content. Long dialog content. Long dialog content. Long dialog content. Long
          dialog content.
        </Typography>
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
        <Typography variant="body" spacing={{ margin: 0 }}>
          Short dialog content.
        </Typography>
      </Dialog>
    </>
  );
};
