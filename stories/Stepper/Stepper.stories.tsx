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

import React from "react";
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
    textPosition: "right",
    steps: [
      {
        label: "Step 1",
        status: "waiting",
        caption: "Very very long caption"
      },
      {
        label: "Step 2",
        status: "current"
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
        disabled: true
      }
    ]
  }
};

export default meta;

const Template: StoryFn<Props> = props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Stepper {...props} />
  </div>
);

export const BaseStepper = Template.bind({});

export const StepperStates = Template.bind({});

const removeCaptionFromProps = (props: Props) => {
  return { ...props, steps: props.steps.map(step => ({ ...step, caption: undefined })) };
};

const waitingStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "general",
      label: "Step waiting 1",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "hover",
      label: "Step waiting 2",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step waiting 3",
      status: "waiting",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step waiting 4",
      status: "waiting",
      caption: "Caption"
    },
    {
      label: "Step waiting 5",
      status: "waiting",
      caption: "Caption",
      disabled: true
    }
  ]
};

const currentStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "general",
      label: "Step current 1",
      status: "current",
      caption: "Caption"
    },
    {
      id: "hover",
      label: "Step current 2",
      status: "current",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step current 3",
      status: "current",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step current 4",
      status: "current",
      caption: "Caption"
    },
    {
      label: "Step current 5",
      status: "current",
      caption: "Caption",
      disabled: true
    }
  ]
};

const doneStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "general",
      label: "Step done 1",
      status: "done",
      caption: "Caption"
    },
    {
      id: "hover",
      label: "Step done 2",
      status: "done",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step done 3",
      status: "done",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step done 4",
      status: "done",
      caption: "Caption"
    },
    {
      label: "Step done 5",
      status: "done",
      caption: "Caption",
      disabled: true
    }
  ]
};

const errorStateProps: Props = {
  direction: "vertical",
  steps: [
    {
      id: "general",
      label: "Step error 1",
      status: "error",
      caption: "Caption"
    },
    {
      id: "hover",
      label: "Step error 2",
      status: "error",
      caption: "Caption"
    },
    {
      id: "active",
      label: "Step error 3",
      status: "error",
      caption: "Caption"
    },
    {
      id: "focus",
      label: "Step error 4",
      status: "error",
      caption: "Caption"
    },
    {
      label: "Step error 5",
      status: "error",
      caption: "Caption",
      disabled: true
    }
  ]
};

StepperStates.decorators = [
  () => {
    return (
      <div>
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem" }}>
          <Stepper {...waitingStateProps} />
          <Stepper {...currentStateProps} />
          <Stepper {...doneStateProps} />
          <Stepper {...errorStateProps} />
        </div>
        <br />
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem" }}>
          <Stepper {...removeCaptionFromProps(waitingStateProps)} />
          <Stepper {...removeCaptionFromProps(currentStateProps)} />
          <Stepper {...removeCaptionFromProps(doneStateProps)} />
          <Stepper {...removeCaptionFromProps(errorStateProps)} />
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Stepper {...waitingStateProps} direction="horizontal" />
          <Stepper {...currentStateProps} direction="horizontal" />
          <Stepper {...doneStateProps} direction="horizontal" />
          <Stepper {...errorStateProps} direction="horizontal" />
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Stepper {...waitingStateProps} direction="horizontal" textPosition="bottom" />
          <Stepper {...currentStateProps} direction="horizontal" textPosition="bottom" />
          <Stepper {...doneStateProps} direction="horizontal" textPosition="bottom" />
          <Stepper {...errorStateProps} direction="horizontal" textPosition="bottom" />
        </div>
      </div>
    );
  }
];

StepperStates.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getAllByText("Step current 1")).toHaveLength(4));
});

StepperStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    disabled: "#disabled",
    focusVisible: "#focus button"
  }
};
