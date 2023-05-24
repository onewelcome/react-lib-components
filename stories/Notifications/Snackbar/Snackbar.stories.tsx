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

import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";
import {
  SnackbarProvider,
  Props
} from "../../../src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider";
import { Button } from "../../../src/components/Button/Button";
import { useSnackbar } from "../../../src/components/Notifications/Snackbar/useSnackbar";
import SnackbarDocumentation from "./Snackbar.mdx";

const meta: Meta = {
  title: "components/Feedback/Snackbar",
  component: SnackbarProvider,
  parameters: {
    docs: {
      page: SnackbarDocumentation
    }
  }
};

export default meta;

const AppContent = () => {
  const { enqueueSuccessSnackbar, enqueueErrorSnackbar, enqueueSnackbar } = useSnackbar();

  return (
    <Fragment>
      <Button
        onClick={() =>
          enqueueSuccessSnackbar("Main message of the snackbar", undefined, {
            onClose: () => console.warn("onClose handler")
          })
        }
      >
        Show success snackbar
      </Button>
      <br />
      <br />
      <Button
        onClick={() =>
          enqueueErrorSnackbar("Social account unlink failed", undefined, {
            onClose: () => console.warn("onClose handler")
          })
        }
      >
        Show error snackbar
      </Button>
      <br />
      <br />
      <Button
        onClick={() =>
          enqueueSnackbar("Copy of your data is requested", undefined, {
            onClose: () => console.warn("onClose handler")
          })
        }
      >
        Show info snackbar
      </Button>
      <br />
      <br />
      <Button
        onClick={() =>
          enqueueSnackbar(
            "Copy of your data is requested",
            "Body text of the snackbar. Keep it short. Users only have a few seconds to read it. Try to keep the text within the limit of 1 text message: 160 ch.",
            {
              actions: [
                { label: "Contact support", onClick: () => alert("Clicked support") },
                { label: "Contact OneWelcome", onClick: () => alert("Clicked OneWelcome") }
              ]
            }
          )
        }
      >
        Show long snackbar
      </Button>
    </Fragment>
  );
};

const Template: Story<Props> = args => {
  return (
    <SnackbarProvider closeButtonTitle="Close">
      <AppContent />
    </SnackbarProvider>
  );
};

export const Snackbar = Template.bind({});
