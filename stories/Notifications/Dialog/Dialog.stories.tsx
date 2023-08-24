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

import React, { Fragment, useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Dialog, Props } from "../../../src/components/Notifications/Dialog/Dialog";
import { Button } from "../../../src/components/Button/Button";
import { Typography } from "../../../src/components/Typography/Typography";
import DialogDocumentation from "./Dialog.mdx";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Icon, Icons } from "../../../src/components/Icon/Icon";

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
    title: "Discard changes?",
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
    },
    titleIcon: <Icon icon={Icons.Bell} />,
    caption: "This is a caption",
    cancelAction: { label: "Cancel" }
  }
};

export default meta;

declare global {
  var setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Template: Story<Props> = args => {
  const [open, setOpen] = useState(false);

  /** When we're on the story page, we want the diaglog to start in the "open" state. However, when we're on the "docs" page, we don't. */
  useEffect(() => {
    if (window.location.search.includes("story")) {
      setOpen(true);
    }
  }, []);

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
        titleIcon={args.titleIcon}
        caption={args.caption}
        cancelAction={args.cancelAction}
      >
        {args.children}
      </Dialog>
    </Fragment>
  );
};

export const ActionDialog = Template.bind({});

ActionDialog.args = {
  title: "Verify email address",
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
  title: "Info",
  children: (
    <Typography variant="body" spacing={{ margin: 0 }}>
      You can&apos;t remove your account.
    </Typography>
  ),
  primaryAction: {
    label: "Ok",
    onClick: () => window.setDialogOpen(false)
  },
  secondaryAction: undefined,
  cancelAction: undefined
};

const NestedDialogsTemplate: Story<Props> = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  /** When we're on the story page, we want the dialog to start in the "open" state. However, when we're on the "docs" page, we don't. */
  useEffect(() => {
    if (window.location.search.includes("story")) {
      setOpen(true);
    }
  }, []);

  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        id="dialog11"
        open={open}
        title="Dialog 1"
        titleIcon={<Icon icon={Icons.Bell} />}
        caption="This is a caption"
        onClose={() => setOpen(false)}
        primaryAction={{
          label: "Open another dialog",
          onClick: () => setOpen2(true)
        }}
        cancelAction={{ label: "Cancel" }}
      >
        <Typography variant="body" spacing={{ margin: 0 }}>
          Addressing the inquiry concerning the length of text within a dialogue is indeed a
          multifaceted endeavor. It is an intricate subject that demands careful consideration and
          comprehensive analysis to provide a thorough and meaningful response.
        </Typography>
      </Dialog>
      <Dialog
        id="dialog12"
        open={open2}
        onClose={() => setOpen2(false)}
        title="Dialog 2"
        titleIcon={<Icon icon={Icons.Bell} />}
        caption="This is a caption"
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

export const NestedDialogs = NestedDialogsTemplate.bind({});

NestedDialogs.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.queryByText("Dialog 1")).not.toBeNull());

  const openAnotherDialogButton = await canvas.findByText("Open another dialog");

  await userEvent.click(openAnotherDialogButton);

  await waitFor(() => expect(canvas.queryByText("Dialog 2")).not.toBeNull());
};

export const DialogWithoutIcon = Template.bind({});

DialogWithoutIcon.args = {
  title: "Info",
  children: (
    <Typography variant="body" spacing={{ margin: 0 }}>
      You can&apos;t remove your account.
    </Typography>
  ),
  primaryAction: {
    label: "Ok",
    onClick: () => window.setDialogOpen(false)
  },
  secondaryAction: undefined,
  titleIcon: undefined,
  caption: undefined,
  cancelAction: { label: "Cancel" }
};
