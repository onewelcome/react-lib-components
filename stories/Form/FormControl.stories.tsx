import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { FormControl, Props } from '../../src/Form/FormControl/FormControl';
import { Form } from '../../src/Form/Form';
import { Input } from '../../src/Form/Input/Input';
import { Select } from '../../src/Form/Select/Select';
import { Option } from '../../src/Form/Select/Option';
import { RadioGroup } from '../../src/Form/RadioGroup/RadioGroup';
import { Radio } from '../../src/Form/Radio/Radio';
import { Checkbox } from '../../src/Form/Checkbox/Checkbox';

const meta: Meta = {
  title: 'FormControl',
  component: FormControl,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [selectValue, setSelectValue] = useState('option1');
  const [prefix, setPrefix] = useState('');
  const [preferredMobileDevice, setPreferredMobileDevice] = useState('mobile');
  const [newsletter, setNewsletter] = useState(true);

  const onSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const prefixChangeHandler = (event) => {
    setPrefix(event.target.value);
  };

  const prefixClearHandler = () => {
    setPrefix('');
  };

  const onNewsletterChangeHandler = () => {
    console.log('EXECUTE IN FORMCONTROL');
    setNewsletter(!newsletter);
  };

  return (
    <Form style={{ padding: '20px', backgroundColor: '#F5F8F8' }}>
      <FormControl noPadding noBackground {...args}>
        <Input placeholder="This is a placeholder" name="example" type="text" />
      </FormControl>
      <FormControl noBackground noPadding>
        <Select value={selectValue} onChange={onSelectChange}>
          <Option value="option1">Option1</Option>
          <Option value="option2">Option2</Option>
          <Option value="option3">Option3</Option>
        </Select>
      </FormControl>
      <FormControl grid={3} noPadding noBackground>
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
      <FormControl grid={2} noPadding noBackground>
        <FormControl>
          <Checkbox onChange={onNewsletterChangeHandler} name="newsletter" checked={newsletter}>
            Subscribe to newsletter?
          </Checkbox>
        </FormControl>
        <Input name="last_name" type="text" />
      </FormControl>
      <FormControl>
        <RadioGroup
          value={preferredMobileDevice}
          name="electronics"
          onChange={(e) => setPreferredMobileDevice(e.target.value)}
          helperText="This is helper text"
        >
          <Radio value="mobile">Mobile</Radio>
          <Radio value="tv">TV</Radio>
          <Radio value="pc">PC</Radio>
        </RadioGroup>
      </FormControl>
    </Form>
  );
};

export const FormControlEl = Template.bind({});

FormControlEl.parameters = {
  controls: { hideNoControlsWarning: true },
};
