import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioWrapper, Props } from '../../..//src/Form/Wrapper/RadioWrapper/RadioWrapper';
import { Radio } from '../../../src/Form/Radio/Radio';
import { Button } from '../../../src/Button/Button';

const meta: Meta = {
  title: 'Form/Wrapper/RadioWrapper',
  component: RadioWrapper,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [radioValue, setRadioValue] = useState('option1');
  const [error, setError] = useState(false);

  return (
    <div>
      <RadioWrapper
        label="Radiowrapper"
        error={error}
        errorMessage="Errormessage"
        helperText="Helpertext"
        value={radioValue}
        name="my-group"
        onChange={(e) => setRadioValue(e.target.value)}
      >
        <Radio helperText="Individual helper" value="option1">
          Option 1
        </Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioWrapper>
      <Button style={{ marginTop: '20px' }} onClick={() => setError(!error)}>
        Click here to toggle error state
      </Button>
    </div>
  );
};

export const RadioWrapperEl = Template.bind({});

RadioWrapperEl.args = {};
