import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  InputWrapper as InputWrapperComponent,
  Props
} from "../../../src/Form/Wrapper/InputWrapper/InputWrapper";
import InputWrapperDocumentation from "./InputWrapper.mdx";

const meta: Meta = {
  title: "components/Inputs/InputWrapper (Wrapper)",
  component: InputWrapperComponent,
  parameters: {
    docs: {
      page: InputWrapperDocumentation
    }
  },
  argTypes: {
    onChange: {
      action: "onChange event fired",
      control: false
    },
    onBlur: {
      action: "onBlur event fired"
    },
    onFocus: {
      action: "onFocus event fired"
    },
    type: {
      options: [
        "text",
        "email",
        "file",
        "number",
        "password",
        "search",
        "tel",
        "time",
        "url",
        "datetime-local",
        "date"
      ],
      control: {
        type: "select"
      }
    },
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};

declare global {
  var onInputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default meta;

const Template: Story<Props> = args => {
  return <InputWrapperComponent {...args} />;
};

export const InputWrapper = Template.bind({});

InputWrapper.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: false,
  value: "",
  inputProps: {
    prefix: "https://",
    suffix: "",
    className: "input-classname",
    wrapperProps: { className: "wrapper-classname" }
  }
};
