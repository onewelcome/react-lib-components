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

export const StepperWaitingStates = Template.bind({});

const waitingStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "hover",
      label: "Step 1",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step 2",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step 3",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "disabled",
      label: "Step 4",
      status: "waiting",
      caption: "Caption"
    }
  ]
};

StepperWaitingStates.decorators = [
  () => {
    return (
      <div style={{ height: "50vh" }}>
        <Stepper {...waitingStateProps} />
      </div>
    );
  }
];

StepperWaitingStates.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByText("Step 1")).toBeDefined());
});

StepperWaitingStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    disabled: "#disabled",
    focusVisible: "#focus"
  }
};

export const StepperCurrentStates = Template.bind({});

const currentStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "hover",
      label: "Step 1",
      status: "current",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step 2",
      status: "current",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step 2",
      status: "current",
      caption: "Caption"
    },
    {
      id: "disabled",
      label: "Step 3",
      status: "current",
      caption: "Caption"
    }
  ]
};

StepperCurrentStates.decorators = [
  () => {
    return (
      <div style={{ height: "50vh" }}>
        <Stepper {...currentStateProps} />
      </div>
    );
  }
];

StepperCurrentStates.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByText("Step 1")).toBeDefined());
});

StepperCurrentStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    disabled: "#disabled",
    focusVisible: "#focus"
  }
};

export const StepperDoneStates = Template.bind({});

const doneStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "hover",
      label: "Step 1",
      status: "done",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step 2",
      status: "done",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step 3",
      status: "done",
      caption: "Caption"
    },
    {
      id: "disabled",
      label: "Step 4",
      status: "done",
      caption: "Caption"
    }
  ]
};

StepperDoneStates.decorators = [
  () => {
    return (
      <div style={{ height: "50vh" }}>
        <Stepper {...doneStateProps} />
      </div>
    );
  }
];

StepperDoneStates.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByText("Step 1")).toBeDefined());
});

StepperDoneStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    disabled: "#disabled",
    focusVisible: "#focus"
  }
};

export const StepperErrorStates = Template.bind({});

const errorStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "hover",
      label: "Step 1",
      status: "error",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step 2",
      status: "error",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step 3",
      status: "error",
      caption: "Caption"
    },
    {
      id: "disabled",
      label: "Step 4",
      status: "error",
      caption: "Caption"
    }
  ]
};

StepperErrorStates.decorators = [
  () => {
    return (
      <div style={{ height: "50vh" }}>
        <Stepper {...errorStateProps} />
      </div>
    );
  }
];

StepperErrorStates.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByText("Step 1")).toBeDefined());
});

StepperErrorStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    disabled: "#disabled",
    focusVisible: "#focus"
  }
};
