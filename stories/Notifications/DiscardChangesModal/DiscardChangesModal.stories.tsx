import React, { Fragment, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DiscardChangesModal as DiscardChangesModalComponent,
  Props,
} from '../../../src/Notifications/DiscardChangesModal/DiscardChangesModal';
import { ModalActions } from '../../../src/Notifications/Modal/ModalActions/ModalActions';
import { ModalContent } from '../../../src/Notifications/Modal/ModalContent/ModalContent';
import { Button } from '../../../src/Button/Button';
import { Typography } from '../../../src/Typography/Typography';
import { InputWrapper } from '../../../src/Form/Wrapper/InputWrapper/InputWrapper';
import { FormControl } from '../../../src/Form/FormControl/FormControl';
import { Form } from '../../../src/Form/Form';
import DiscardChangesModalDocumentation from './DiscardChangesModal.mdx';

const meta: Meta = {
  title: 'Stories/Notifications/Discard Changes Modal',
  component: DiscardChangesModalComponent,
  subcomponents: {
    ModalContent,
    ModalActions,
  },
  parameters: {
    docs: {
      page: DiscardChangesModalDocumentation,
    },
  },
  args: {
    id: 'modal',
    headerProps: {
      title: 'Modal title',
    },
    discardChangedDialogProps: {
      discardChangesButtonLabel: 'Discard',
      keepEditingButtonLabel: 'Keep editing',
      contentLabel: 'You have unsaved changes that will be lost. Do you want to discard them?',
      titleLabel: 'Unsaved changes',
    },
  },
  argTypes: {
    open: {
      control: false,
    },
    hasUnsavedChanges: {
      control: false,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const [open, setOpen] = useState(false);
  const initialFormState = { name: 'Name' };
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
              Changing the input value and closing modal should show 'DiscardChangesDialog'.
              Clicking on 'Cancel' button should close modal without showing 'DiscardChangesDialog'.
            </Typography>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input1"
                type="text"
                value={formState.name}
                error={false}
                label="Name"
                onChange={(event) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    name: event.target.value,
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
