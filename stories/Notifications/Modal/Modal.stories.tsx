import React, { Fragment, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal as ModalComponent, Props } from '../../../src/Notifications/Modal/Modal';
import { ModalActions } from '../../../src/Notifications/Modal/ModalActions/ModalActions';
import { ModalContent } from '../../../src/Notifications/Modal/ModalContent/ModalContent';
import { ModalHeader } from '../../../src/Notifications/Modal/ModalHeader/ModalHeader';
import { Button } from '../../../src/Button/Button';
import { Typography } from '../../../src/Typography/Typography';
import ModalDocumentation from './Modal.mdx';
import { FormControl } from '../../../src/Form/FormControl/FormControl';
import { InputWrapper } from '../../../src/Form/Wrapper/InputWrapper/InputWrapper';

const meta: Meta = {
  title: 'Stories/Notifications/Modal',
  component: ModalComponent,
  subcomponents: {
    ModalHeader,
    ModalContent,
    ModalActions,
  },
  parameters: {
    docs: {
      page: ModalDocumentation,
    },
  },
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
  const [value, setValue] = useState('initial value');

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
            <Typography variant="body" spacing={{ margin: 0, padding: '0 5 5' }}>
              This modal shows various options of form controls. It is not meant to be a realistic
              example of any of our forms.
              <br /> Clicking Save, Cancel or Close may bring you to a different screen than you
              came from.
            </Typography>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input1"
                type="text"
                value={value}
                error={false}
                label="Name"
                onChange={(e) => setValue(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input2"
                type="text"
                value={value}
                error={false}
                label="Name"
                onChange={(e) => setValue(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input3"
                type="text"
                value={value}
                error={false}
                label="Name"
                onChange={(e) => setValue(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input4"
                type="text"
                value={value}
                error={false}
                label="Name"
                onChange={(e) => setValue(e.target.value)}
              />
            </FormControl>
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
