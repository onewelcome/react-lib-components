import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Dialog, Props } from '../../src/Dialog/Dialog';
import { DialogActions } from '../../src/Dialog/DialogActions/DialogActions';
import { argTypesEnhancers } from '@storybook/store/dist/ts3.9/inferControls';
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
    type: {
      defaultValue: 'destructive',
    },
    children: {
      defaultValue: (
        <p style={{ margin: 0 }}>
          This cannot be undone and you will lose your changes.
        </p>
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
        type={args.type}
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
  type: 'non-destructive',
  children: (
    <p style={{ margin: 0 }}>
      You want to verify the email address <b>dana.george@mydomain.com</b>.
      <br />
      <br />
      <b>Dana George</b> will receive an email with a verification link and must
      click the link to complete the verification.
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
  type: 'non-destructive',
  children: <p style={{ margin: 0 }}>You can't remove your account.</p>,
  primaryAction: {
    label: 'Ok',
    onClick: () => window.setDialogOpen(false),
  },
  secondaryAction: undefined,
};
