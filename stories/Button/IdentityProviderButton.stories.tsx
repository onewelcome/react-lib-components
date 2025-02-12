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
import { Props } from "../../src/components/Button/Button";
import ButtonsDocumentation from "./IdentityProviderButton.mdx";
import { IdentityProviderButton as IdPButtonComponent } from "../../src/components/Button/IdentityProviderButton";

const meta: Meta = {
  title: "components/Inputs/IdentityProviderButton",
  component: IdPButtonComponent,
  parameters: {
    docs: {
      page: ButtonsDocumentation
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  return (
    <IdPButtonComponent
      iconUrl={"https://img.icons8.com/?size=100&id=60984&format=png&color=000000"}
      backgroundColor={"magenta"}
      {...args}
    >
      This is a button
    </IdPButtonComponent>
  );
};

export const IdentityProviderButton = Template.bind({});

IdentityProviderButton.args = {
  color: "primary",
  variant: "fill"
};
