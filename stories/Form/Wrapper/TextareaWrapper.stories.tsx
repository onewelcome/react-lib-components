import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  TextareaWrapper as TextareaWrapperComponent,
  Props
} from "../../../src/Form/Wrapper/TextareaWrapper/TextareaWrapper";
import TextareaWrapperDocumentation from "./TextareaWrapper.mdx";

const meta: Meta = {
  title: "components/Wrappers/TextareaWrapper",
  component: TextareaWrapperComponent,
  parameters: {
    docs: {
      page: TextareaWrapperDocumentation
    }
  },
  argTypes: {
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  const [error] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div>
      <TextareaWrapperComponent
        {...args}
        label="Example textarea"
        name="Textarea"
        helperText="Example textarea helpertext"
        errorMessage="Textarea error message"
        onChange={e => setTextareaValue(e.target.value)}
        error={error}
        value={textareaValue}
      />
    </div>
  );
};

export const TextareaWrapper = Template.bind({});

TextareaWrapper.args = {};
