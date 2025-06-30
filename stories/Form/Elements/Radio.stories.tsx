/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { useMemo, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Props, Radio as RadioComponent } from "../../../src/components/Form/Radio/Radio";
import { Fieldset, Typography } from "../../../src";
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
const Template: StoryFn<Props> = args => (
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

export const RadioLabelOverflow = Template.bind({});

RadioLabelOverflow.decorators = [
  () => {
    return (
      <div style={{ width: "200px" }}>
        <RadioComponent
          helperText="Example helper text"
          value="example-radio"
          errorMessage={"Oh crap!"}
        >
          It seems to be a good idea to test the label and how it wraps if there is not enough space
          for it. What do you think?
        </RadioComponent>
      </div>
    );
  }
];

export const RadioStates = Template.bind({});

const radioStates = [
  { checked: false, error: false, disabled: false },
  { checked: false, error: true, disabled: false },
  { checked: true, error: false, disabled: false },
  { checked: true, error: true, disabled: false },
  { checked: true, error: false, disabled: true },
  { checked: false, error: false, disabled: true }
];

RadioStates.decorators = [
  () => {
    return (
      <>
        {radioStates.map((states, index) => (
          <RadioComponent
            key={index}
            helperText="Example helper text"
            value="example-radio"
            checked={states.checked}
            disabled={states.disabled}
            error={states.error}
            errorMessage={"Oh crap!"}
          >
            Label
          </RadioComponent>
        ))}
      </>
    );
  }
];

export const RadioInReadOnlyMode = Template.bind({});

RadioInReadOnlyMode.storyName = "Radio Component In Read-only Mode";
const readOnlyRadioStates = [
  { checked: false, error: false, disabled: false },
  { checked: true, error: false, disabled: false }
];

RadioInReadOnlyMode.decorators = [
  () => {
    return (
      <>
        {readOnlyRadioStates.map((states, index) => (
          <RadioComponent
            key={index}
            helperText="Example helper text"
            value="example-radio"
            checked={states.checked}
            disabled={states.disabled}
            error={states.error}
            errorMessage={"Oh crap!"}
            readOnlyView={true}
          >
            Label
          </RadioComponent>
        ))}
      </>
    );
  }
];

//these two props had to be extracted from the template below - having them inside of the story caused re-rerendering loop
const errorProps = {
  children: (
    <div style={{ color: "var(--error" }}>
      Error text with <a href="/">link</a>
    </div>
  )
};

const helperTextProps = {
  children: (
    <div>
      Helper text with <a href="/">link</a>
    </div>
  )
};

const ComposableTemplate: StoryFn<Props> = args => {
  const [radioValue, setRadioValue] = useState("bold");
  return (
    <Fieldset legend="Composable radio button" legendStyle={"body-bold"}>
      <RadioComponent
        {...args}
        helperText="Example helpertext"
        errorMessage="Example error message"
        onChange={event => setRadioValue(event.target.value)}
        value="bold"
        checked={radioValue === "bold"}
      >
        <>
          Label with a <b>bold part</b>{" "}
        </>
      </RadioComponent>

      <RadioComponent
        {...args}
        helperText="Example helpertext"
        onChange={event => setRadioValue(event.target.value)}
        errorMessage="Example error message"
        value="typography"
        checked={radioValue === "typography"}
      >
        <Typography variant="h3" spacing={{ margin: 0 }}>
          Typography
        </Typography>
      </RadioComponent>
      <RadioComponent
        {...args}
        helperText="Example helpertext"
        onChange={event => setRadioValue(event.target.value)}
        errorMessage="Example error message"
        value="saml"
        checked={radioValue === "saml"}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.25rem"
          }}
        >
          <img height={24} width={24} src={`SAML.svg`} alt={"Identity Provider icon"} /> SAML
        </div>
      </RadioComponent>

      <RadioComponent
        helperProps={helperTextProps}
        onChange={event => setRadioValue(event.target.value)}
        value="helper"
        checked={radioValue === "helper"}
      >
        Label
      </RadioComponent>
      <RadioComponent
        error={true}
        errorMessageProps={errorProps}
        onChange={event => setRadioValue(event.target.value)}
        value="error"
        checked={radioValue === "error"}
      >
        Label
      </RadioComponent>
    </Fieldset>
  );
};

export const ComposableRadio = ComposableTemplate.bind({});
