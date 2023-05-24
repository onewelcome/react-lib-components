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
import {
  DiscardChangesModal as DiscardChangesModalComponent,
  Props
} from "../../../src/components/Notifications/DiscardChangesModal/DiscardChangesModal";
import { ModalActions } from "../../../src/components/Notifications/Modal/ModalActions/ModalActions";
import { ModalContent } from "../../../src/components/Notifications/Modal/ModalContent/ModalContent";
import { Button } from "../../../src/components/Button/Button";
import { Typography } from "../../../src/components/Typography/Typography";
import { InputWrapper } from "../../../src/components/Form/Wrapper/InputWrapper/InputWrapper";
import { FormControl } from "../../../src/components/Form/FormControl/FormControl";
import { Form } from "../../../src/components/Form/Form";
import DiscardChangesModalDocumentation from "./DiscardChangesModal.mdx";

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
      title: "components/Modal title"
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

const Template: Story<Props> = args => {
  const [open, setOpen] = useState(false);
  const initialFormState = { name: "Name" };
  const [formState, setFormState] = useState(initialFormState);
  const id = args.id;

  const hasUnsavedChanges = () => JSON.stringify(initialFormState) !== JSON.stringify(formState);

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
            <Typography
              variant="body"
              spacing={{ paddingLeft: 5, paddingRight: 5, marginBottom: 5 }}
            >
              Changing the input value and closing modal should show
              &apos;DiscardChangesDialog&apos;. Clicking on &apos;Cancel&apos; button should close
              modal without showing &apos;DiscardChangesDialog&apos;.
            </Typography>
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
        <ModalActions>
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>
          <Button form="modalForm" type="submit">
            Save
          </Button>
        </ModalActions>
      </DiscardChangesModalComponent>
    </Fragment>
  );
};

export const DiscardChangesModal = Template.bind({});
