/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { Fragment, useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Dialog, Props } from "../../../src/components/Notifications/Dialog/Dialog";
import { Button } from "../../../src/components/Button/Button";
import { Typography } from "../../../src/components/Typography/Typography";
import DialogDocumentation from "./Dialog.mdx";

const meta: Meta = {
  title: "components/Feedback/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      page: DialogDocumentation
    }
  },
  args: {
    id: "dialog",
    title: "components/Discard changes?",
    children: (
      <Typography variant="body" spacing={{ margin: 0 }}>
        This cannot be undone and you will lose your changes.
      </Typography>
    ),
    primaryAction: {
      label: "Discard",
      onClick: () => window.setDialogOpen(false)
    },
    secondaryAction: {
      label: "Keep editing",
      onClick: () => window.setDialogOpen(false)
    }
  }
};

export default meta;

declare global {
  var setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Template: Story<Props> = args => {
  const [open, setOpen] = useState(true);
  window.setDialogOpen = setOpen;
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        id={args.id}
        open={open}
        onClose={() => setOpen(false)}
        title={args.title}
        primaryAction={args.primaryAction}
        secondaryAction={args.secondaryAction}
      >
        {args.children}
      </Dialog>
    </Fragment>
  );
};

export const ActionDialog = Template.bind({});

ActionDialog.args = {
  title: "components/Verify email address",
  children: (
    <Fragment>
      <Typography variant="body">
        You want to verify the email address <b>dana.george@mydomain.com</b>.
      </Typography>
      <Typography variant="body" spacing={{ margin: 0 }}>
        <b>Dana George</b> will receive an email with a verification link and must click the link to
        complete the verification.
      </Typography>
    </Fragment>
  ),
  primaryAction: {
    label: "Send email",
    onClick: () => window.setDialogOpen(false)
  },
  secondaryAction: undefined
};

export const SingleActionDialog = Template.bind({});

SingleActionDialog.args = {
  title: "components/Info",
  children: (
    <Typography variant="body" spacing={{ margin: 0 }}>
      You can&apos;t remove your account.
    </Typography>
  ),
  primaryAction: {
    label: "Ok",
    onClick: () => window.setDialogOpen(false)
  },
  secondaryAction: undefined
};

export const NestedDialogs = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        id="dialog11"
        open={open}
        title="Dialog 1"
        onClose={() => setOpen(false)}
        primaryAction={{
          label: "Open another dialog",
          onClick: () => setOpen2(true)
        }}
        secondaryAction={{
          label: "Close",
          onClick: () => setOpen(false)
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
        title="Dialog 2"
        primaryAction={{
          label: "Close",
          onClick: () => setOpen2(false)
        }}
      >
        <Typography variant="body" spacing={{ margin: 0 }}>
          Short dialog content.
        </Typography>
      </Dialog>
    </Fragment>
  );
};
