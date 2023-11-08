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

import React, { Fragment } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Stepper, Props } from "../../src/components/Stepper/Stepper";
import { conditionalPlay } from "../../.storybook/conditionalPlay";
import { within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import StepperDocumentation from "./Stepper.mdx";

const meta: Meta = {
  title: "components/Layout/Stepper",
  component: Stepper,
  parameters: {
    docs: {
      page: StepperDocumentation
    }
  },
  args: {
    direction: "vertical",
    steps: [
      {
        label: "Step 1",
        status: "waiting",
        caption: "Caption"
      },
      {
        label: "Step 2",
        status: "current",
        caption: "Caption"
      },
      {
        label: "Step 3",
        status: "done",
        caption: "Caption"
      },
      {
        label: "Step 4",
        status: "error",
        caption: "Caption"
      },
      {
        label: "Step 5",
        status: "waiting",
        caption: "Caption"
      }
    ]
  }
};

export default meta;

const Template: StoryFn<Props> = props => (
  <div style={{ height: "50vh" }}>
    <Stepper {...props} />
  </div>
);

export const BaseStepper = Template.bind({});

export const StepperStates = Template.bind({});

const waitingStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "hover",
      label: "Step waiting 1",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step waiting 2",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step waiting 3",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "disabled",
      label: "Step waiting 4",
      status: "waiting",
      caption: "Caption"
    }
  ]
};

const currentStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "hover",
      label: "Step current 1",
      status: "current",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step current 2",
      status: "current",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step current 3",
      status: "current",
      caption: "Caption"
    },
    {
      id: "disabled",
      label: "Step current 4",
      status: "current",
      caption: "Caption"
    }
  ]
};

const doneStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "hover",
      label: "Step done 1",
      status: "done",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step done 2",
      status: "done",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step done 3",
      status: "done",
      caption: "Caption"
    },
    {
      id: "disabled",
      label: "Step done 4",
      status: "done",
      caption: "Caption"
    }
  ]
};

const errorStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "hover",
      label: "Step error 1",
      status: "error",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step error 2",
      status: "error",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step error 3",
      status: "error",
      caption: "Caption"
    },
    {
      id: "disabled",
      label: "Step error 4",
      status: "error",
      caption: "Caption"
    }
  ]
};

StepperStates.decorators = [
  () => {
    return (
      <div>
        <div style={{ height: "40vh", display: "flex", gap: "1.5rem", marginBottom: "1rem" }}>
          <Stepper {...waitingStateProps} />
          <Stepper {...currentStateProps} />
          <Stepper {...doneStateProps} />
          <Stepper {...errorStateProps} />
        </div>
        <div style={{ height: "40vh", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Stepper {...waitingStateProps} direction="horizontal" />
          <Stepper {...currentStateProps} direction="horizontal" />
          <Stepper {...doneStateProps} direction="horizontal" />
          <Stepper {...errorStateProps} direction="horizontal" />
        </div>
      </div>
    );
  }
];

StepperStates.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByText("Step current 1")).toBeDefined());
});

StepperStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    disabled: "#disabled",
    focusVisible: "#focus"
  }
};
