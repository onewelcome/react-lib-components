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
import { Link as LinkComponent, Props } from "../../src/components/Link/Link";
import LinkDocumentation from "./Link.mdx";

const meta: Meta = {
  title: "components/Navigation/Link",
  component: LinkComponent,
  parameters: {
    docs: {
      page: LinkDocumentation
    }
  },
  argTypes: {
    buttonVariant: { control: "radio", if: { arg: "display", eq: "button" } }
  },
  args: {
    to: "https://www.google.com",
    type: "external",
    color: "primary",
    display: "link",
    buttonVariant: "fill"
  }
};

export default meta;

const Template: StoryFn<Props> = args => <LinkComponent {...args}>content</LinkComponent>;

export const Link = Template.bind({});

export const LinkStates = Template.bind({});

const generateLinkStates = (
  types: any[]
): Array<Props & { event?: "hover" | "active" | "focus" }> => {
  return types.reduce(
    (result, type) => {
      return result.flatMap((permutation: any) =>
        type.options.map((option: any) => ({ ...permutation, [type.name]: option }))
      );
    },
    [{}]
  );
};

const types = [
  { name: "color", options: ["primary", "danger", "success", "warning"] },
  { name: "buttonVariant", options: ["fill"] },
  { name: "display", options: ["button", "link"] },
  { name: "event", options: [undefined, "hover", "active", "focus"] }
];

const mainLinkStates = generateLinkStates(types);

LinkStates.decorators = [
  () => {
    return (
      <div
        style={{
          marginLeft: "5px",
          marginTop: "5px",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          rowGap: "20px"
        }}
      >
        {mainLinkStates.map((states, index) => (
          <div key={index}>
            <LinkComponent
              id={states.event}
              display={states.display}
              color={states.color}
              buttonVariant={states.buttonVariant}
              to={"https://google.com/search?q=onewelcome-react-lib-components"}
            >
              {`${states.color} ${states.display}`}
            </LinkComponent>
          </div>
        ))}
      </div>
    );
  }
];

LinkStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    focusVisible: "#focus"
  },
  controls: { disable: true }
};
