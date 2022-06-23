import React, { useEffect, useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, Props } from '../../src/Form/Form';
import { InputWrapper } from '../../src/Form/Wrapper/InputWrapper/InputWrapper';
import { Fieldset } from '../../src/Form/Fieldset/Fieldset';
import { CheckboxWrapper } from '../../src/Form/Wrapper/CheckboxWrapper/CheckboxWrapper';
import { Checkbox } from '../../src/Form/Checkbox/Checkbox';
import { FormControl } from '../../src/Form/FormControl/FormControl';
import { Button } from '../../src/Button/Button';
import { action } from '@storybook/addon-actions';
import { RadioWrapper } from '../../src/Form/Wrapper/RadioWrapper/RadioWrapper';
import { Radio } from '../../src/Form/Radio/Radio';
import { SelectWrapper } from '../../src/Form/Wrapper/SelectWrapper/SelectWrapper';
import { Option } from '../../src/Form/Select/Option';
import { Toggle } from '../../src/Form/Toggle/Toggle';

import FormDocumentation from './Form.mdx';

const meta: Meta = {
  title: 'Stories/Form/Form',
  component: Form,
  parameters: {
    docs: {
      page: FormDocumentation,
    },
  },
  argTypes: {
    method: {
      options: ['POST', 'GET'],
      control: {
        type: 'radio',
      },
    },
    onSubmit: {
      action: 'onSubmit event fired!',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const [input1, setInput1] = useState({ error: false, value: '', errorMessage: '' });
  const [subscribe, setSubscribe] = useState({
    error: false,
    checked: false,
    errorMessage: '',
  });
  const [address, setAddress] = useState({
    street: { error: false, value: '', errorMessage: '' },
    housenumber: { error: false, value: '', errorMessage: '' },
    postcode: { error: false, value: '', errorMessage: '' },
  });
  const [checkbox, setCheckbox] = useState({
    error: false,
    errorMessage: '',
    checkbox1: { checked: false },
    checkbox2: { checked: false },
  });

  const [callBack, setCallBack] = useState({ value: 'no', error: false });
  const [callBackTime, setCallBackTime] = useState({
    time: '',
    error: false,
    errorMessage: '',
    helperText: 'This should be a date after Date.now()',
  });

  const [selectValue, setSelectValue] = useState('');

  const callBackTimeOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.valueAsNumber) < Date.now()) {
      setCallBackTime((prevState) => ({
        ...prevState,
        time: event.target.value,
        error: true,
        errorMessage: "You can't select a time before right now!",
      }));

      return;
    }
    setCallBackTime((prevState) => ({
      ...prevState,
      time: event.target.value,
      error: false,
      errorMessage: '',
    }));
  };

  const selectRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    if (/onegini|iwelcome/i.test(input1.value)) {
      setInput1((prevState) => ({
        ...prevState,
        error: true,
        errorMessage: "You're not allowed to use OneGini or iWelcome!",
      }));
    } else {
      setInput1((prevState) => ({ ...prevState, error: false, errorMessage: '' }));
    }
  }, [input1.value]);

  const actionWithPreventDefault = (name) => (e) => {
    e.preventDefault();
    action(name)(e);
  };

  return (
    <Form
      onSubmit={actionWithPreventDefault('onSubmit event fired!')}
      style={{ backgroundColor: 'rgb(246, 248, 248)', padding: '20px' }}
    >
      <FormControl>
        <InputWrapper
          helperText="Helper text for this field. Description should be short and not repeat the label"
          name="input1"
          errorMessage={input1.errorMessage}
          type="text"
          inputProps={{ prefix: 'PREFIX', suffix: 'SUFFIX' }}
          error={input1.error}
          value={input1.value}
          label="Label for this inputfield"
          onChange={(event) => {
            setInput1((prevState) => ({
              ...prevState,
              value: event.target.value,
            }));
          }}
        />
      </FormControl>
      <FormControl>
        <Fieldset legend="Subscribe to newsletter">
          <Toggle
            onChange={() =>
              setSubscribe((prevState) => ({ ...prevState, checked: !prevState.checked }))
            }
            name="Newsletter"
            checked={subscribe.checked}
          >
            Subscribe to our newsletter!
          </Toggle>
        </Fieldset>
      </FormControl>
      <FormControl>
        <Fieldset legend="Address" noBackground noPadding>
          <FormControl grid={3}>
            <InputWrapper
              helperText="Input your streetname"
              name="streetname"
              errorMessage={address.street.errorMessage}
              type="text"
              error={address.street.error}
              value={address.street.value}
              label="Streetname"
              onChange={(event) => {
                setAddress((prevState) => ({
                  ...prevState,
                  street: {
                    error: false,
                    errorMessage: '',
                    value: event.target.value,
                  },
                }));
              }}
            />
            <InputWrapper
              helperText="Input your housenumber"
              name="housenumber"
              errorMessage={address.housenumber.errorMessage}
              type="text"
              error={address.housenumber.error}
              value={address.housenumber.value}
              label="House number"
              onChange={(event) => {
                setAddress((prevState) => ({
                  ...prevState,
                  housenumber: {
                    error: false,
                    errorMessage: '',
                    value: event.target.value,
                  },
                }));
              }}
            />
            <InputWrapper
              helperText="Format should be 1234AB"
              name="postalcode"
              errorMessage={address.postcode.errorMessage}
              type="text"
              inputProps={{ placeholder: '1234AB' }}
              error={address.postcode.error}
              value={address.postcode.value}
              label="Postal code"
              onBlur={(event) => {
                if (!/[0-9]{4}[a-zA-Z]{2}$/.test(event.target.value) && event.target.value.length) {
                  setAddress((prevState) => ({
                    ...prevState,
                    postcode: {
                      error: true,
                      errorMessage: 'You have to use the correct format: e.g. 1234AB',
                      value: event.target.value,
                    },
                  }));
                }
              }}
              onChange={(event) => {
                setAddress((prevState) => ({
                  ...prevState,
                  postcode: {
                    error: false,
                    errorMessage: '',
                    value: event.target.value,
                  },
                }));
              }}
            />
          </FormControl>
        </Fieldset>
      </FormControl>
      <FormControl>
        <CheckboxWrapper
          name="checkbox-group"
          error={checkbox.error}
          errorMessage=""
          fieldsetProps={{ legend: 'Would you like to make an appointment?' }}
        >
          <Checkbox
            onChange={(e) => {
              setCheckbox((prevState) => ({
                ...prevState,
                checkbox1: { checked: !prevState.checkbox1.checked },
              }));
            }}
            name="checkbox1"
            checked={checkbox.checkbox1.checked}
          >
            Checkbox 1
          </Checkbox>
          <Checkbox
            onChange={(e) =>
              setCheckbox((prevState) => ({
                ...prevState,
                checkbox2: { checked: !prevState.checkbox2.checked },
              }))
            }
            name="checkbox2"
            checked={checkbox.checkbox2.checked}
          >
            Checkbox 2
          </Checkbox>
        </CheckboxWrapper>
      </FormControl>
      <FormControl grid={2}>
        <RadioWrapper
          name="callback"
          onChange={(e) => setCallBack((prevState) => ({ ...prevState, value: e.target.value }))}
          fieldsetProps={{ legend: 'Would you like us to call you back?' }}
          value={callBack.value}
          error={callBack.error}
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </RadioWrapper>
        {callBack.value === 'yes' && (
          <Fieldset legend="Callback time" hideLegend>
            <InputWrapper
              onChange={callBackTimeOnChangeHandler}
              label="Callback time"
              errorMessage={callBackTime.errorMessage}
              error={callBackTime.error}
              value={callBackTime.time}
              helperText={callBackTime.helperText}
              name="callback-time"
              type="datetime-local"
            />
          </Fieldset>
        )}
      </FormControl>
      <FormControl>
        <SelectWrapper
          selectProps={{ ref: selectRef }}
          label="Example select wrapper"
          name="Example select"
          helperText="Example helper text"
          error={false}
          errorMessage="This is an error message"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          onClear={() => {
            setSelectValue('');
          }}
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
          <Option value="option4">Option 4</Option>
        </SelectWrapper>
      </FormControl>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export const FormEl = Template.bind({});

FormEl.args = {};
