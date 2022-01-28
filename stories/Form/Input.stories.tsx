import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../../src/Form/Input/Input';
import { Form } from '../../src/Form/Form';
import { Button } from '../Button/IconButton.stories';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

const Template: Story<Props> = (args) => (
  <Form>
    <Input {...args} />
    <Button type="submit">Submit</Button>
  </Form>
);

export const inputText = Template.bind({});

inputText.args = {
  type: 'text',
  name: 'input',
};

export const inputEmail = Template.bind({});

inputEmail.args = {
  type: 'email',
  name: 'input',
};

export const inputFile = Template.bind({});

inputFile.args = {
  type: 'file',
  name: 'input',
};

export const inputNumber = Template.bind({});

inputNumber.args = {
  type: 'number',
  name: 'input',
};

export const inputPassword = Template.bind({});

inputPassword.args = {
  type: 'password',
  name: 'input',
};

export const inputSearch = Template.bind({});

inputSearch.args = {
  type: 'search',
  name: 'input',
};

export const inputTel = Template.bind({});

inputTel.args = {
  type: 'tel',
  name: 'input',
};

export const inputTime = Template.bind({});

inputTime.args = {
  type: 'time',
  name: 'input',
};

export const inputUrl = Template.bind({});

inputUrl.args = {
  type: 'url',
  name: 'input',
};

export const inputDateTime = Template.bind({});

inputDateTime.args = {
  type: 'datetime-local',
  name: 'input',
};

export const inputDate = Template.bind({});

inputDate.args = {
  type: 'date',
  name: 'input',
};
