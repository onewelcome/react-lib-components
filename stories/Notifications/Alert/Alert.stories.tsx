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
import { conditionalPlay } from "../../../.storybook/conditionalPlay";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { color } from "storybook/internal/theming";

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

  return (
    <Button data-testid={"trigger-alert"} onClick={handleTriggerAlert}>
      Trigger alert
    </Button>
  );
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
      emphasis={"medium"}
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

export const AlertVariants = MultipleStatesTemplate.bind({});

AlertVariants.parameters = {
  controls: { disable: true }
};

Alert.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByTestId("trigger-alert")).toBeInTheDocument());

  await userEvent.click(canvas.getByTestId("trigger-alert"));

  await waitFor(() => expect(canvas.getByTestId("alert-container")).toBeVisible());
});

const composableWithHref = (title: string) => {
  return (
    <div style={{ backgroundColor: "#0000001a" }}>
      {title} with{" "}
      <a style={{ backgroundColor: "#FFFFFF" }} href="/">
        link
      </a>
    </div>
  );
};

const composableWithImage = (title: string) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.25rem"
      }}
    >
      <img height={24} width={24} src={`SAML.svg`} alt={"Identity Provider icon"} /> {title}
    </div>
  );
};

const composableWithText = (title: string) => {
  return (
    <div
      style={{
        textDecoration: "line-through",
        fontStyle: "italic",
        backgroundColor: "#0000001a",
        color: "#000000"
      }}
    >
      {title}
    </div>
  );
};

const renderNeutralsComposableTitles = () =>
  renderComposableAlerts(composableWithHref("Neutral"), "neutral");
const renderInformativeComposableTitle = () =>
  renderComposableAlerts(composableWithImage("Informative"), "informative");
const renderSuccessesComposableTitle = () =>
  renderComposableAlerts(composableWithHref("Success"), "success");
const renderWarningsComposableTitle = () =>
  renderComposableAlerts(
    composableWithText("Warning"),
    "warning",
    composableWithText("Warning Content with text")
  );
const renderErrorsComposableTitle = () =>
  renderComposableAlerts(
    composableWithImage("Error"),
    "error",
    composableWithHref("Error Content")
  );

const renderComposableAlerts = (
  title: React.ReactNode,
  variant: Variant,
  content?: React.ReactNode
) => (
  <div style={{ margin: "1rem" }}>
    <AlertItem
      title={title}
      content={content ?? "Low emphasis"}
      variant={variant}
      emphasis="low"
      id={`${variant}-low`}
    />
    <AlertItem
      title={title}
      content={content ?? "Medium emphasis (default)"}
      variant={variant}
      emphasis={"medium"}
      id={`${variant}-medium`}
    />
    <AlertItem
      title={title}
      content={content ?? "High emphasis"}
      variant={variant}
      emphasis="high"
      id={`${variant}-high`}
    />
  </div>
);

const ComposableTemplate: StoryFn = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "2rem" }}>
      {renderNeutralsComposableTitles()}
      {renderInformativeComposableTitle()}
      {renderSuccessesComposableTitle()}
      {renderWarningsComposableTitle()}
      {renderErrorsComposableTitle()}
    </div>
  );
};

export const AlertVariantsComposable = ComposableTemplate.bind({});

export default meta;
