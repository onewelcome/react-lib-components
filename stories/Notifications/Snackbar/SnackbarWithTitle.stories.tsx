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

import React, { useEffect } from "react";
import { Meta, Story } from "@storybook/react";
import {
  SnackbarProvider,
  Props
} from "../../../src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider";
import { useSnackbar } from "../../../src/components/Notifications/Snackbar/useSnackbar";
import SnackbarWithTitleDocumentation from "./SnackbarWithTitle.mdx";
import classes from "./Stories.module.scss";

/**
 * We want to disable autogenerated docs for a single story, but we can't currently... https://github.com/storybookjs/storybook/issues/21085
 */
const meta: Meta = {
  title: "components/Feedback/Snackbar/SnackbarWithTitle",
  component: SnackbarProvider,
  parameters: {
    docs: {
      page: SnackbarWithTitleDocumentation
    }
  }
};

export default meta;

const AppContent = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar(
      "This is a title",
      "Phasellus eleifend cursus vehicula. Pellentesque ut sem in elit pulvinar luctus. Praesent ac urna risus. Maecenas porttitor in metus eu tincidunt. Nulla facilisi. Ut faucibus posuere convallis. Etiam eget dui massa. Aliquam eget luctus dolor.",
      {
        actions: [{ label: "Contact support", onClick: () => alert("Clicked support") }],
        onClose: () => console.warn("onClose handler"),
        duration: 200000,
        className: classes["remove-animation"]
      }
    );
  }, []);

  return null;
};

const Template: Story<Props> = args => {
  return (
    <SnackbarProvider closeButtonTitle="Close">
      <AppContent />
    </SnackbarProvider>
  );
};

export const SnackbarWithTitle = Template.bind({});
