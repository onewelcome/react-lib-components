import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";
import {
  SnackbarProvider,
  Props
} from "../../../src/Notifications/Snackbar/SnackbarProvider/SnackbarProvider";
import { Button } from "../../../src/Button/Button";
import { useSnackbar } from "../../../src/Notifications/Snackbar/useSnackbar";
import SnackbarDocumentation from "./Snackbar.mdx";

const meta: Meta = {
  title: "Stories/Notifications/Snackbar",
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
            duration: 20000,
            onClose: () => console.log("onClose handler")
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
            duration: 20000,
            onClose: () => console.log("onClose handler")
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
            onClose: () => console.log("onClose handler")
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
