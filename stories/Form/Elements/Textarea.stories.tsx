import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Textarea, Props } from '../../../src/Form/Textarea/Textarea';

const meta: Meta = {
  title: 'Form/Elements/TextArea',
  component: Textarea,
  argTypes: {
    value: {
      control: 'text',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const TextareaEl = Template.bind({});

TextareaEl.args = {};
