import React, { ReactElement, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Repeater as RepeaterComponent,
  Props,
  RepeatedComponentProps,
  ReturnedInformation,
} from '../../src/Repeater/Repeater';
import RepeaterDocumentation from './Repeater.mdx';
import { InputWrapper } from '../../src/Form/Wrapper/InputWrapper/InputWrapper';
import { FormControl } from '../../src/Form/FormControl/FormControl';
import { generateID } from '../../src/util/helper';

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

interface ComponentToRepeatState {
  errorMessage: string;
  error: boolean;
  value: string;
}

const ComponentToRepeat = ({ onChange }: RepeatedComponentProps) => {
  const [inputState, setInputState] = useState({
    errorMessage: 'random error',
    error: false,
    value: '',
  });

  useEffect(() => {
    onChange(inputState);
  }, []);

  useEffect(() => {
    onChange(inputState);
  }, [inputState]);

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
        }}
      />
    </FormControl>
  );
};

const Template: Story<Props> = () => {
  const [tags, setTags] = useState<ReturnedInformation[]>([]);

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <RepeaterComponent
      name="tags"
      onChange={(array) => setTags(array)}
      addButtonLabel={'Add tag'}
      spacing={{ marginTop: 4 }}
      repeat={ComponentToRepeat}
    />
  );
};

export const Repeater = Template.bind({});

Repeater.args = {};
