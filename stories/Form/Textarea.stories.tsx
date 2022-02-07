import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Textarea, Props } from '../../src/Form/Textarea/Textarea';

const meta: Meta = {
  title: 'TextArea',
  component: Textarea,
};

export default meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const TextareaEl = Template.bind({});

TextareaEl.args = {};
