import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DiscardChangesModal as Component,
  Props,
} from '../../src/DiscardChangesModal/DiscardChangesModal';
import { ModalActions } from '../../src/Modal/ModalActions/ModalActions';
import { ModalContent } from '../../src/Modal/ModalContent/ModalContent';
import { Button } from '../../src/Button/Button';
import { Typography } from '../../src/Typography/Typography';
import { InputWrapper } from '../../src/Form/Wrapper/InputWrapper/InputWrapper';
import { FormControl } from '../../src/Form/FormControl/FormControl';
import { Form } from '../../src/Form/Form';

const meta: Meta = {
  title: 'Stories/UI/DiscardChangesModal',
  component: Component,
  args: {
    id: 'modal',
    ['headerProps.title']: 'Modal title',
    ['discardChangedDialogProps.discardChangesButtonLabel']: 'Discard',
    ['discardChangedDialogProps.keepEditingButtonLabel']: 'Keep editing',
    ['discardChangedDialogProps.contentLabel']:
      'You have unsaved changes that will be lost. Do you want to discard them?',
    ['discardChangedDialogProps.titleLabel']: 'Unsaved changes',
  },
  argTypes: {
    open: {
      control: false,
    },
    hasUnsavedChanges: {
      control: false,
    },
    ['header.title']: {
      control: 'text',
    },
    ['discardChangedDialogProps.discardChangesButtonLabel']: {
      control: 'boolean',
    },
    ['discardChangedDialogProps.keepEditingButtonLabel']: {
      control: 'text',
    },
    ['discardChangedDialogProps.contentLabel']: {
      control: 'text',
    },
    ['discardChangedDialogProps.titleLabel']: {
      control: 'text',
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
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Component
        id={id}
        open={open}
        onClose={onClose}
        hasUnsavedChanges={hasUnsavedChanges}
        headerProps={{ title: args['headerProps.title'] }}
        discardChangedDialogProps={{
          discardChangesButtonLabel: args['discardChangedDialogProps.discardChangesButtonLabel'],
          keepEditingButtonLabel: args['discardChangedDialogProps.keepEditingButtonLabel'],
          contentLabel: args['discardChangedDialogProps.contentLabel'],
          titleLabel: args['discardChangedDialogProps.titleLabel'],
        }}
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
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
      </Component>
    </>
  );
};

export const DiscardChangesModal = Template.bind({});
