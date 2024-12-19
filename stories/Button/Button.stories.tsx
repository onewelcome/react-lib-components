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

export const SingleButton = Template.bind({});

SingleButton.args = {
  color: "primary",
  variant: "fill"
};

export const ButtonStates = Template.bind({});

type ButtonStorybookProps = Pick<
  ButtonProps,
  "color" | "variant" | "disabled" | "loading" | "hidden"
> & {
  endIcon?: boolean;
  startIcon?: boolean;
  event?: "hover" | "active" | "focus";
  type?: "button";
};

const generateButtonStates = (types): Array<ButtonStorybookProps> => {
  return types.reduce(
    (result, type) => {
      return result.flatMap(permutation =>
        type.options.map(option => ({ ...permutation, [type.name]: option }))
      );
    },
    [{}]
  );
};

const types = [
  { name: "color", options: ["primary", "danger", "success", "warning", "default"] },
  { name: "variant", options: ["fill", "outline", "text"] },
  { name: "event", options: [undefined, "hover", "active", "focus"] }
];

const mainButtonStates = generateButtonStates(types);

const uniqueButtonStates: Array<ButtonStorybookProps> = [
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
    disabled: true
  },
  {
    color: "danger",
    variant: "outline",
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
  },
  {
    color: "primary",
    variant: "fill",
    startIcon: true,
    hidden: true
  },
  {
    color: "primary",
    variant: "fill",
    hidden: true
  }
];

mainButtonStates.push(...uniqueButtonStates);

ButtonStates.decorators = [
  () => {
    return (
      <div
        style={{
          marginLeft: "5px",
          marginTop: "5px",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto"
        }}
      >
        {mainButtonStates.map((states, index) => {
          const { event, startIcon, endIcon, ...props } = states;
          return (
            <div style={{ marginBottom: "10px" }} key={index}>
              <Button
                {...props}
                id={event}
                endIcon={endIcon ? <Icon icon={Icons.Calendar} /> : false}
                startIcon={startIcon ? <Icon icon={Icons.Calendar} /> : false}
              >
                {`${states.color} ${states.variant} ${states.disabled ? "disabled" : ""} ${
                  states.event !== undefined ? states.event : ""
                }${states.hidden ? "hidden" : ""} `}
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
];

ButtonStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    focusVisible: "#focus"
  },
  controls: { disable: true }
};
