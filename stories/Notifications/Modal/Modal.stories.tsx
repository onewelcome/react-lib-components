import React, { Fragment, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal as ModalComponent, Props } from '../../../src/Notifications/Modal/Modal';
import { ModalActions } from '../../../src/Notifications/Modal/ModalActions/ModalActions';
import { ModalContent } from '../../../src/Notifications/Modal/ModalContent/ModalContent';
import { ModalHeader } from '../../../src/Notifications/Modal/ModalHeader/ModalHeader';
import { Button } from '../../../src/Button/Button';
import { Typography } from '../../../src/Typography/Typography';

const meta: Meta = {
  title: 'Stories/Notifications/Modal',
  component: ModalComponent,
  args: {
    id: 'modal',
    ['header.title']: 'Modal title',
    ['content.disableAutoFocus']: false,
    ['actions.className']: undefined,
  },
  argTypes: {
    open: {
      control: false,
    },
    ['header.title']: {
      control: 'text',
    },
    ['content.disableAutoFocus']: {
      control: 'boolean',
    },
    ['actions.className']: {
      control: 'text',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const [open, setOpen] = useState(false);

  const id = args.id;
  const onClose = () => setOpen(false);
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalComponent
        id={id}
        open={open}
        onClose={onClose}
        zIndex={args.zIndex}
        disableBackdrop={args.disableBackdrop}
        disableEscapeKeyDown={args.disableEscapeKeyDown}
      >
        <ModalHeader id={`${id}-label`} title={args['header.title']} onClose={onClose} />
        <ModalContent id={`${id}-description`} disableAutoFocus={args['content.disableAutoFocus']}>
          <form
            id="modalForm"
            onSubmit={(e) => {
              e.preventDefault();
              alert('form submitted');
              onClose();
            }}
          >
            <Typography variant="body" spacing={{ margin: 0, paddingLeft: 5, paddingRight: 5 }}>
              This modal shows various options of form controls. It is not meant to be a realistic
              example of any of our forms.
              <br /> Clicking Save, Cancel or Close may bring you to a different screen than you
              came from.
            </Typography>
            <input
              style={{
                paddingBlock: 10,
                marginTop: 20,
                width: '100%',
                boxSizing: 'border-box',
              }}
            ></input>
            <p
              style={{
                margin: 0,
                paddingTop: 5,
                paddingInline: 20,
                fontSize: 11,
              }}
            >
              Helper text for this text field. Description should be short and not repeat the label.
            </p>
            <input
              style={{
                paddingBlock: 10,
                marginTop: 20,
                width: '100%',
                boxSizing: 'border-box',
              }}
            ></input>
            <p
              style={{
                margin: 0,
                paddingTop: 5,
                paddingInline: 20,
                fontSize: 11,
              }}
            >
              Helper text for this text field. Description should be short and not repeat the label.
            </p>
            <input
              style={{
                paddingBlock: 10,
                marginTop: 20,
                width: '100%',
                boxSizing: 'border-box',
              }}
            ></input>
            <p
              style={{
                margin: 0,
                paddingTop: 5,
                paddingInline: 20,
                fontSize: 11,
              }}
            >
              Helper text for this text field. Description should be short and not repeat the label.
            </p>
          </form>
        </ModalContent>
        <ModalActions className={args['actions.className']}>
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>
          <Button form="modalForm" type="submit">
            Save
          </Button>
        </ModalActions>
      </ModalComponent>
    </Fragment>
  );
};

export const Modal = Template.bind({});
