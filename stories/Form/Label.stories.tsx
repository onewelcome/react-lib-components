import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Label, Props } from '../../src/Form/Label/Label';
import { PhotoCamera } from '@material-ui/icons';

const meta: Meta = {
  title: 'Label',
  component: Label,
};

export default meta;

const Template: Story<Props> = (args) => (
  <Label htmlFor="input-name" {...args}>
    Example label
  </Label>
);

export const LabelEl = Template.bind({});
