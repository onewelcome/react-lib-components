import React from "react";
import { Meta, Story } from "@storybook/react";
import { Radio as RadioComponent, Props } from "../../../src/Form/Radio/Radio";
import { Fieldset } from "../../../src/Form/Fieldset/Fieldset";
import RadioDocumentation from "./Radio.mdx";

const meta: Meta = {
  title: "components/Inputs/Raw/Radio",
  component: RadioComponent,
  parameters: {
    docs: {
      page: RadioDocumentation
    }
  },
  argTypes: {
    parentHelperId: {
      table: {
        disable: true
      },
      control: false
    },
    parentErrorId: {
      table: {
        disable: true
      },
      control: false
    },
    errorMessageId: {
      table: {
        disable: true
      },
      control: false
    },
    checked: {
      type: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;
const Template: Story<Props> = args => (
  <Fieldset legend="Radio button group" legendStyle={"body-bold"}>
    <RadioComponent
      {...args}
      helperText="Example helpertext"
      errorMessage="Example error message"
      value="example-radio"
    >
      Label
    </RadioComponent>
  </Fieldset>
);

export const Radio = Template.bind({});

Radio.args = {};
