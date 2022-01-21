import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton, Props } from '../../src/Button/IconButton';
import { PhotoCamera } from '@material-ui/icons';

const meta: Meta = {
  title: 'IconButton',
  component: IconButton,
};

export default meta;

const Template: Story<Props> = () => (
  <IconButton>
    <PhotoCamera />
  </IconButton>
);

export const Default = Template.bind({});

Default.args = {};
