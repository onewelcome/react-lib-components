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
import {
  Props,
  Typography as TypographyComponent,
  validVariants
} from "../../src/components/Typography/Typography";
import TypographyDocumentation from "./Typography.mdx";

const meta: Meta = {
  title: "components/Data Display/Typography",
  component: TypographyComponent,
  parameters: {
    docs: {
      page: TypographyDocumentation
    }
  },
  argTypes: {
    variant: {
      options: validVariants,
      control: "select"
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => (
  <TypographyComponent {...args}>content</TypographyComponent>
);

export const Typography = Template.bind({});

Typography.args = {
  variant: "h1"
};

export const TypographyH2 = Template.bind({});

TypographyH2.args = {
  variant: "h2"
};

TypographyH2.storyName = "Typography H2";

export const TypographyH3 = Template.bind({});
TypographyH3.args = {
  variant: "h3"
};

TypographyH3.storyName = "Typography H3";

export const TypographyH4 = Template.bind({});
TypographyH4.args = {
  variant: "h4"
};

TypographyH4.storyName = "Typography H4";

export const TypographyBody = Template.bind({});

TypographyBody.args = {
  variant: "body"
};

export const TypographyBodyBold = Template.bind({});

TypographyBodyBold.args = {
  variant: "body-bold"
};

export const TypographySubText = Template.bind({});

TypographySubText.args = {
  variant: "sub-text"
};

export const TypographyCode = Template.bind({});

TypographyCode.args = {
  variant: "code"
};
