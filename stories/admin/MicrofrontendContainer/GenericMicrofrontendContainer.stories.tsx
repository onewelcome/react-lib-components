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
import GenericMicrofrontendContainerDocumentation from "./GenericMicrofrontendContainer.mdx";
import {
  GenericMicrofrontendContainer as GenericMicrofrontendContainerComponent,
  Props
} from "../../../src/admin_components/Container/GenericMicrofrontendContainer";

const meta: Meta = {
  title: "Admin components/Generic Microfrontend Container",
  component: GenericMicrofrontendContainerComponent,
  parameters: {
    docs: {
      page: GenericMicrofrontendContainerDocumentation
    }
  },
  argTypes: {
    fullWidth: {
      description:
        "In some cases, such as complex data tables, there might be a need to not limit the maximum width of the container.  <br/>"
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  const outline = {
    outlineColor: "black",
    outlineWidth: "2px",
    outlineStyle: "dashed"
  };
  const centerText = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <Fragment>
      <div style={{ height: "5vw", ...outline, ...centerText }}>HEADER</div>
      <div style={{ display: "flex" }}>
        <div style={{ ...outline, ...centerText, width: "8vw" }}>NAV</div>
        <GenericMicrofrontendContainerComponent style={{ width: "100%" }} {...args}>
          <div style={{ height: "50vw", ...outline, ...centerText }}>CONTENT</div>
        </GenericMicrofrontendContainerComponent>
      </div>
    </Fragment>
  );
};
export const GenericMicrofrontendContainer = Template.bind({});

GenericMicrofrontendContainer.args = {};

export const GenericMicrofrontendContainerFullWidth = Template.bind({});

GenericMicrofrontendContainerFullWidth.args = { fullWidth: true };

GenericMicrofrontendContainerFullWidth.parameters = {
  chromatic: { viewports: [1440, 3000] }
};
