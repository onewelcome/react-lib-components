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
import MicrofrontendContainerDocumentation from "./MicrofrontendContainer.mdx";
import {
  MicrofrontendContainer as MicrofrontendContainerComponent,
  Props
} from "../../../src/admin_components/Container/MicrofrontendContainer";

const meta: Meta = {
  title: "Admin components/Microfrontend Container",
  component: MicrofrontendContainerComponent,
  parameters: {
    docs: {
      page: MicrofrontendContainerDocumentation
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
        <MicrofrontendContainerComponent style={{ width: "100%" }} {...args}>
          <div style={{ height: "50vw", ...outline, ...centerText }}>CONTENT</div>
        </MicrofrontendContainerComponent>
      </div>
    </Fragment>
  );
};
export const MicrofrontendContainer = Template.bind({});

MicrofrontendContainer.args = {};

export const MicrofrontendContainerFullWidth = Template.bind({});

MicrofrontendContainerFullWidth.args = { fullWidth: true };

MicrofrontendContainerFullWidth.parameters = {
  chromatic: { viewports: [1440, 3440] }
};
