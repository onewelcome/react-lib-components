import React, { ReactElement, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Repeater as RepeaterComponent,
  Props,
  RepeatedComponentProps,
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
          onChange(inputState);
        }}
      />
    </FormControl>
  );
};

const Template: Story<Props> = () => {
  const [tags, setTags] = useState<ComponentToRepeatState[]>([]);

  const showChildChange = (allClonedChildren) => {
    console.log(allClonedChildren);
  };

  const showChange = (identifier, parameter) => {
    console.log(identifier);
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
