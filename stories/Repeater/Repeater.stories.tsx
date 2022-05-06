import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Repeater as RepeaterComponent,
  Props,
  RepeatedComponentProps,
} from '../../src/Repeater/Repeater';
import RepeaterDocumentation from './Repeater.mdx';
import { InputWrapper } from '../../src/Form/Wrapper/InputWrapper/InputWrapper';
import { FormControl } from '../../src/Form/FormControl/FormControl';

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
  const ComponentToRepeat = ({ onChange }: RepeatedComponentProps) => {
    const [inputState, setInputState] = useState({
      errorMessage: 'random error',
      error: false,
      value: 'test',
    });

    return (
      <FormControl>
        <InputWrapper
          helperText="Helper text for this field. Description should be short and not repeat the label"
          name="input1"
          errorMessage={inputState.errorMessage}
          type="text"
          error={inputState.error}
          value={inputState.value}
          label="Label for this inputfield"
          onChange={(event) => {
            setInputState((prevState) => ({ ...prevState, value: event.target.value }));
            onChange(event, inputState);
          }}
        />
      </FormControl>
    );
  };

  const showChildChange = (allClonedChildren) => {
    console.log(allClonedChildren);
  };

  const showChange = (parameter) => {
    console.log(parameter);
  };

  return (
    <RepeaterComponent
      onChange={showChange}
      onChildChange={showChildChange}
      addButtonLabel={'Add tag'}
      spacing={{ marginTop: 4 }}
    >
      <ComponentToRepeat />
    </RepeaterComponent>
  );
};

export const Repeater = Template.bind({});

Repeater.args = {};
