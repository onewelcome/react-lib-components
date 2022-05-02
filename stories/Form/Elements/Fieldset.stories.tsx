import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Fieldset as FieldsetComponent, Props } from '../../../src/Form/Fieldset/Fieldset';
import { FormControl } from '../../../src/Form/FormControl/FormControl';
import { Select } from '../../../src/Form/Select/Select';
import { Option } from '../../../src/Form/Select/Option';
import { Input } from '../../../src/Form/Input/Input';
import { Form } from '../../../src/Form/Form';
import { SelectWrapper } from '../../../src/Form/Wrapper/SelectWrapper/SelectWrapper';
import FieldsetDocumentation from './Fieldset.mdx';

const meta: Meta = {
  title: 'Stories/Form/Elements/Fieldset',
  component: FieldsetComponent,
  parameters: {
    docs: {
      page: FieldsetDocumentation,
    },
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    background: {
      control: {
        type: 'color',
      },
    },
  },
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
      <FieldsetComponent title="Name" {...args}>
        <FormControl grid={3}>
          <SelectWrapper
            name="prefix"
            label="Prefix"
            value={prefix}
            onChange={prefixChangeHandler}
            onClear={prefixClearHandler}
          >
            <Option disabled value={undefined}>
              Prefix
            </Option>
            <Option value="mr">Mr.</Option>
            <Option value="mrs">Mrs.</Option>
          </SelectWrapper>
          <Input name="first_name" type="text" />
          <Input name="last_name" type="text" />
        </FormControl>
      </FieldsetComponent>
    </Form>
  );
};

export const Fieldset = Template.bind({});

Fieldset.args = {};
