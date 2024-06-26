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
import { Meta, StoryFn } from "@storybook/react";
import {
  DiscardChangesModal as DiscardChangesModalComponent,
  Props
} from "../../../src/components/Notifications/DiscardChangesModal/DiscardChangesModal";
import { ModalActions } from "../../../src/components/Notifications/Modal/ModalActions/ModalActions";
import { ModalContent } from "../../../src/components/Notifications/Modal/ModalContent/ModalContent";
import { Button, Form, FormControl, InputWrapper } from "../../../src";
import DiscardChangesModalDocumentation from "./DiscardChangesModal.mdx";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { conditionalPlay } from "../../../.storybook/conditionalPlay";

const meta: Meta = {
  title: "components/Feedback/Discard Changes Modal",
  component: DiscardChangesModalComponent,
  subcomponents: {
    ModalContent
  },
  parameters: {
    docs: {
      page: DiscardChangesModalDocumentation
    }
  },
  args: {
    id: "modal",
    headerProps: {
      title: "Modal title"
    },
    discardChangedDialogProps: {
      discardChangesButtonLabel: "Discard",
      keepEditingButtonLabel: "Keep editing",
      contentLabel: "You have unsaved changes that will be lost. Do you want to discard them?",
      titleLabel: "Unsaved changes"
    }
  },
  argTypes: {
    open: {
      control: false
    },
    hasUnsavedChanges: {
      control: false
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  const [open, setOpen] = useState(false);
  const initialFormState = { name: "Name" };
  const [formState, setFormState] = useState(initialFormState);
  const id = args.id;

  const hasUnsavedChanges = () => JSON.stringify(initialFormState) !== JSON.stringify(formState);

  /** When we're on the story page, we want the dialog to start in the "open" state. However, when we're on the "docs" page, we don't. */
  useEffect(() => {
    if (window.location.search.includes("story")) {
      setOpen(true);
    }
  }, []);

  const onClose = () => {
    setOpen(false);
    setFormState(initialFormState);
  };

  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <DiscardChangesModalComponent
        {...args}
        id={id}
        open={open}
        onClose={onClose}
        hasUnsavedChanges={hasUnsavedChanges}
      >
        <ModalContent id={`${id}-description`}>
          <Form
            id="modalForm"
            onSubmit={() => {
              alert(JSON.stringify(formState));
              onClose();
            }}
          >
            <span style={{ display: "block", marginBottom: "1.25rem" }}>
              Changing the input value and closing modal should show
              &apos;DiscardChangesDialog&apos;. Clicking on &apos;Cancel&apos; button should close
              modal without showing &apos;DiscardChangesDialog&apos;.
            </span>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input1"
                type="text"
                value={formState.name}
                error={false}
                label="Name"
                onChange={event =>
                  setFormState(prevState => ({
                    ...prevState,
                    name: event.target.value
                  }))
                }
              />
            </FormControl>
          </Form>
        </ModalContent>
        <ModalActions onClose={onClose}>
          <Button form="modalForm" type="submit">
            Save
          </Button>
        </ModalActions>
      </DiscardChangesModalComponent>
    </Fragment>
  );
};

export const DiscardChangesModal = Template.bind({});

DiscardChangesModal.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => {
    expect(canvas.getByLabelText("Name")).toHaveValue("Name");
  });

  const input = canvas.getByLabelText("Name");

  await userEvent.type(input, "New name");

  const closeButton = canvas.getByText("close modal").closest("button");

  await userEvent.click(closeButton!);
});
