import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Fieldset, Props } from '../../../src/Form/Fieldset/Fieldset';
import { FormControl } from '../../../src/Form/FormControl/FormControl';
import { Select } from '../../../src/Form/Select/Select';
import { Option } from '../../../src/Form/Select/Option';
import { Input } from '../../../src/Form/Input/Input';
import { Form } from '../../../src/Form/Form';

const meta: Meta = {
  title: 'Form/Elements/Fieldset',
  component: Fieldset,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [prefix, setPrefix] = useState('mr');
  const prefixChangeHandler = (event) => {
    setPrefix(event.target.value);
  };

  const prefixClearHandler = () => {
    setPrefix('');
  };
  return (
    <Form style={{ padding: '20px', backgroundColor: '#F5F8F8' }}>
      <Fieldset disabled title="Name" {...args}>
        <FormControl grid={3}>
          <Select value={prefix} onChange={prefixChangeHandler} onClear={prefixClearHandler}>
            <Option disabled value={undefined}>
              Prefix
            </Option>
            <Option value="mr">Mr.</Option>
            <Option value="mrs">Mrs.</Option>
          </Select>
          <Input name="first_name" type="text" />
          <Input name="last_name" type="text" />
        </FormControl>
      </Fieldset>
    </Form>
  );
};

export const FieldsetEl = Template.bind({});

FieldsetEl.args = {};
