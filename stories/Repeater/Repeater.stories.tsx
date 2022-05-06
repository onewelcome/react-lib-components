import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Repeater as RepeaterComponent, Props } from '../../src/Repeater/Repeater';
import RepeaterDocumentation from './Repeater.mdx';
import { InputWrapper } from '../../src/Form/Wrapper/InputWrapper/InputWrapper';

const meta: Meta = {
  title: 'Stories/UI/Repeater',
  component: RepeaterComponent,
  parameters: {
    docs: {
      page: RepeaterDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = () => {
  const [inputState, setInputState] = useState({
    errorMessage: 'random error',
    error: false,
    value: 'test',
  });

  const showChange = (state) => {
    console.log(state);
  };

  return (
    <RepeaterComponent onChange={showChange} state={inputState} addButtonLabel={'Add tag'}>
      <InputWrapper
        helperText="Helper text for this field. Description should be short and not repeat the label"
        name="input1"
        errorMessage={inputState.errorMessage}
        type="text"
        error={inputState.error}
        value={inputState.value}
        label="Label for this inputfield"
        onChange={(event) =>
          setInputState((prevState) => ({ ...prevState, value: event.target.value }))
        }
      />
    </RepeaterComponent>
  );
};

export const RepeaterEl = Template.bind({});

RepeaterEl.args = {};
