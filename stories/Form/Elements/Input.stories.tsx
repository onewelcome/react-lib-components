import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../../../src/Form/Input/Input';
import { Form } from '../../../src/Form/Form';

const meta: Meta = {
  title: 'Form/Elements/Input',
  component: Input,
  argTypes: {
    className: {
      table: { disable: true },
      control: false,
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
  name: 'text_input',
};

export const inputEmail = Template.bind({});

inputEmail.args = {
  type: 'email',
  name: 'email_input',
};

export const inputFile = Template.bind({});

inputFile.args = {
  type: 'file',
  name: 'file_input',
};

export const inputNumber = Template.bind({});

inputNumber.args = {
  type: 'number',
  name: 'number_input',
};

export const inputPassword = Template.bind({});

inputPassword.args = {
  type: 'password',
  name: 'password_input',
};

export const inputSearch = Template.bind({});

inputSearch.args = {
  type: 'search',
  name: 'search_input',
};

export const inputTel = Template.bind({});

inputTel.args = {
  type: 'tel',
  name: 'tel_input',
};

export const inputTime = Template.bind({});

inputTime.args = {
  type: 'time',
  name: 'time_input',
};

export const inputUrl = Template.bind({});

inputUrl.args = {
  type: 'url',
  name: 'url_input',
};

export const inputDateTime = Template.bind({});

inputDateTime.args = {
  type: 'datetime-local',
  name: 'datetime-local_input',
};

export const inputDate = Template.bind({});

inputDate.args = {
  type: 'date',
  name: 'date_input',
};

export const inputDisabled = Template.bind({});

inputDisabled.args = {
  type: 'text',
  name: 'disabled_input',
  disabled: true,
};
