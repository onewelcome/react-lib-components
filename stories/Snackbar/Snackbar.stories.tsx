import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SnackbarProvider, Props } from '../../src/Snackbar/SnackbarProvider/SnackbarProvider';
import { Button } from '../../src/Button/Button';
import { useSnackbar } from '../../src/Snackbar/useSnackbar';

const meta: Meta = {
  title: 'Snackbar',
  component: SnackbarProvider,
  args: {},
};

export default meta;

const AppContent = () => {
  const { enqueueSuccessSnackbar, enqueueErrorSnackbar, enqueueSnackbar } = useSnackbar();

  return (
    <>
      <Button onClick={() => enqueueSuccessSnackbar('Main message of the snackbar')}>
        Show sucess snackbar
      </Button>
      <Button onClick={() => enqueueErrorSnackbar('Social account unlink failed')}>
        Show error snackbar
      </Button>
      <Button onClick={() => enqueueSnackbar('Copy of your data is requested')}>
        Show info snackbar
      </Button>
      <Button
        onClick={() =>
          enqueueSnackbar(
            'Copy of your data is requested',
            'Body text of the snackbar. Keep it short. Users only have a few seconds to read it. Try to keep the text within the limit of 1 text message: 160 ch.',
            { actions: [{ value: 'test', onClick: () => alert('Clicked') }] }
          )
        }
      >
        Show long snackbar
      </Button>
    </>
  );
};

const Template: Story<Props> = (args) => {
  return (
    <SnackbarProvider {...args}>
      <AppContent />
    </SnackbarProvider>
  );
};

export const Snackbar = Template.bind({});
