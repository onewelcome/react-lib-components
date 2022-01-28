import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../../src/Form/Input/Input';
import { Form } from '../../src/Form/Form';
import { Button } from '../../src/Button/Button';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [formData, setFormData] = useState<FormData>();
  const [hasError, setHasError] = useState<boolean>(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!hasError) {
      setFormData(new FormData(e.currentTarget));
    }
  };

  const validationHandler = (value) => {
    setHasError(/iwelcome|onegini/i.test(value));
  };

  const renderFormData = () => {
    const formDataOutput = [];

    for (let [key, value] of formData.entries()) {
      formDataOutput.push(
        <tr key={Math.random()}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Input name</th>
            <th>Input value</th>
          </tr>
        </thead>
        <tbody>{formDataOutput}</tbody>
      </table>
    );
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Input
        style={{ width: '50vw' }}
        validation={validationHandler}
        placeholder="Validation error will occur when you type iwelcome or onegini"
        {...args}
      />
      <br />
      {hasError && <span>That's not my name</span>}
      <br />
      <br />
      <Button type="submit">Submit</Button>
      <br />
      <br />
      {formData && renderFormData()}
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
