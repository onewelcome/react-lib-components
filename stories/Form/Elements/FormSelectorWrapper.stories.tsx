import React, { useEffect, useRef } from "react";
import { Meta, Story } from "@storybook/react";
import {
  FormSelectorWrapper,
  Props
} from "../../../src/Form/FormSelectorWrapper/FormSelectorWrapper";
import FormSelectorWrapperDocumentation from "./FormSelectorWrapper.mdx";

const meta: Meta = {
  title: "FormSelectorWrapper",
  component: FormSelectorWrapper,
  parameters: {
    docs: {
      page: FormSelectorWrapperDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = () => {
  const helper = useRef(null);

  useEffect(() => {
    console.log(helper);
  }, [helper]);

  return (
    <FormSelectorWrapper helperText="Testing" helperProps={{ ref: helper }}>
      content
    </FormSelectorWrapper>
  );
};

export const FormSelectorWrapperEl = Template.bind({});

FormSelectorWrapperEl.args = {};
