import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props, Type } from '../../../src/Form/Input/Input';
import { Form } from '../../../src/Form/Form';

const meta: Meta = {
  title: 'Form/Elements/Input',
  component: Input,
  argTypes: {
    className: {
      table: { disable: true },
      control: false,
    },
    value: {
      control: 'text',
    },
    type: {
      options: [
        'text',
        'email',
        'file',
        'number',
        'password',
        'search',
        'tel',
        'time',
        'url',
        'datetime-local',
        'hidden',
      ],
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

/** This is not how to properly use the validation. */
const Template: Story<Props> = (args) => {
  return (
    <Form onSubmit={() => {}}>
      <Input id="input-component" {...args} />
    </Form>
  );
};

export const inputText = Template.bind({});

inputText.args = {
  type: 'text',
  name: 'input',
};
