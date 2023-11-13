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
import { Button, Props } from "../../src/components/Button/Button";
import { ButtonProps, Icon, Icons } from "../../src";
import ButtonsDocumentation from "./Button.mdx";
import { StepperStates } from "../Stepper/Stepper.stories";

const meta: Meta = {
  title: "components/Inputs/Button",
  component: Button,
  parameters: {
    docs: {
      page: ButtonsDocumentation
    }
  },
  argTypes: {
    startIcon: {
      options: Icons,
      control: {
        type: "select"
      }
    },
    endIcon: {
      options: Icons,
      control: {
        type: "select"
      }
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  return (
    <Button
      {...args}
      title="This is a button"
      startIcon={args?.startIcon && <Icon icon={args?.startIcon as Icons} />}
      endIcon={args?.endIcon && <Icon icon={args?.endIcon as Icons} />}
    >
      This is a button
    </Button>
  );
};

export const ButtonStates = Template.bind({});

const buttonStates: Array<
  Pick<ButtonProps, "color" | "variant" | "disabled" | "loading"> & {
    endIcon?: boolean;
    startIcon?: boolean;
    event?: "hover" | "active" | "focus";
    type?: "button";
  }
> = [
  {
    color: "primary",
    variant: "fill"
  },
  {
    color: "primary",
    variant: "fill",
    event: "hover"
  },
  {
    color: "primary",
    variant: "fill",
    event: "active"
  },
  {
    color: "primary",
    variant: "fill",
    event: "focus"
  },
  {
    color: "primary",
    variant: "outline",
    event: "hover"
  },
  {
    color: "primary",
    variant: "outline",
    event: "active"
  },
  {
    color: "primary",
    variant: "outline",
    event: "focus"
  },
  {
    color: "primary",
    variant: "outline"
  },
  {
    color: "primary",
    variant: "text"
  },
  {
    color: "primary",
    variant: "text",
    event: "hover"
  },
  {
    color: "primary",
    variant: "text",
    event: "active"
  },
  {
    color: "primary",
    variant: "text",
    event: "focus"
  },
  {
    color: "primary",
    variant: "text",
    disabled: true
  },
  {
    color: "primary",
    variant: "fill",
    disabled: true
  },
  {
    color: "primary",
    variant: "outline",
    disabled: true,
    loading: true
  },
  {
    color: "primary",
    variant: "fill",
    loading: true,
    disabled: false
  },
  {
    color: "primary",
    variant: "fill",
    disabled: true,
    loading: true
  },
  {
    color: "primary",
    variant: "outline",
    loading: true,
    disabled: false
  },
  {
    color: "primary",
    variant: "fill",
    startIcon: true
  },
  {
    color: "primary",
    variant: "fill",
    endIcon: true
  }
];

ButtonStates.decorators = [
  () => {
    return (
      <>
        {buttonStates.map((states, index) => (
          <>
            <Button
              id={states.event}
              key={index}
              disabled={states.disabled}
              color={states.color}
              variant={states.variant}
              type={states.type}
              endIcon={states.endIcon ? <Icon icon={Icons.Calendar} /> : false}
              startIcon={states.startIcon ? <Icon icon={Icons.Calendar} /> : false}
              loading={states.loading}
            >
              {`${states.color} ${states.variant} ${states.disabled ? "disabled" : ""} ${
                states.event !== undefined ? states.event : ""
              }`}
            </Button>
            <p></p>
          </>
        ))}
      </>
    );
  }
];

ButtonStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    focusVisible: "#focus"
  }
};
