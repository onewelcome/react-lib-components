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

import { Meta, StoryFn } from "@storybook/react";
import AlertDocumentation from "./Alert.mdx";
import React from "react";
import {
  AlertProvider,
  Props
} from "../../../src/components/Notifications/Alert/AlertProvider/AlertProvider";
import { AlertQueue } from "../../../src/components/Notifications/Alert/AlertProvider/AlertContext";
import { AlertItem, Button, useAlert } from "../../../src";
import {
  EMPHASES,
  VARIANTS,
  Variant
} from "../../../src/components/Notifications/Alert/AlertItem/AlertItem";

const meta: Meta = {
  title: "components/Feedback/Alert",
  component: AlertItem,
  parameters: {
    docs: {
      page: AlertDocumentation
    }
  },
  argTypes: {
    emphasis: {
      options: EMPHASES,
      control: {
        type: "radio"
      }
    },
    variant: {
      options: VARIANTS,
      control: {
        type: "radio"
      }
    }
  }
};

const Content = (args: AlertQueue) => {
  const { enqueueAlert } = useAlert();

  const handleTriggerAlert = () => {
    enqueueAlert({ ...args });
  };

  return <Button onClick={handleTriggerAlert}>Trigger alert</Button>;
};

const Template: StoryFn<Props> = args => {
  return (
    <AlertProvider closeButtonTitle={"close"}>
      <Content title={"Alert!"} {...args} />
    </AlertProvider>
  );
};

export const Alert = Template.bind({});

const renderAlerts = (title: string, variant: Variant) => (
  <div style={{ margin: "1rem" }}>
    <AlertItem
      title={title}
      content="Low emphasis"
      variant={variant}
      emphasis="low"
      id={`${variant}-low`}
    />
    <AlertItem
      title={title}
      content="Medium emphasis (default)"
      variant={variant}
      id={`${variant}-medium`}
    />
    <AlertItem
      title={title}
      content="High emphasis"
      variant={variant}
      emphasis="high"
      id={`${variant}-high`}
    />
  </div>
);

const renderNeutrals = () => renderAlerts("Neutral", "neutral");
const renderInformative = () => renderAlerts("Informative", "informative");
const renderSuccesses = () => renderAlerts("Success", "success");
const renderWarnings = () => renderAlerts("Warning", "warning");
const renderErrors = () => renderAlerts("Error", "error");

const MultipleStatesTemplate: StoryFn = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "2rem" }}>
      {renderNeutrals()}
      {renderInformative()}
      {renderErrors()}
      {renderSuccesses()}
      {renderWarnings()}
    </div>
  );
};

export const AlertVariantsTemplate = MultipleStatesTemplate.bind({});

AlertVariantsTemplate.parameters = {
  controls: { disable: true }
};

export default meta;
