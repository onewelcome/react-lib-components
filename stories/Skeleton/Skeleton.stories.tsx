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
import { Meta, Story } from "@storybook/react";
import { Skeleton as SkeletonComponent, Props } from "../../src/components/Skeleton/Skeleton";
import { Typography } from "../../src/components/Typography/Typography";
import SkeletonDocumentation from "./Skeleton.mdx";

const meta: Meta = {
  title: "components/Feedback/Skeleton",
  component: SkeletonComponent,
  parameters: {
    docs: {
      page: SkeletonDocumentation
    }
  },
  argTypes: {
    height: {
      control: {
        type: "number"
      }
    },
    width: {
      control: {
        type: "number"
      }
    }
  }
};

export default meta;

const Template: Story<Props> = args => <SkeletonComponent {...args} />;

export const Skeleton = Template.bind({});
Skeleton.args = {
  variant: "text"
};

export const RectangleSkeleton = Template.bind({});
RectangleSkeleton.args = {
  variant: "rectangle",
  height: 50,
  width: 100
};

const TypographySkeletonTemplate: Story<Props> = args => (
  <Typography variant="h1">
    <SkeletonComponent {...args} />
  </Typography>
);
export const TypographySkeleton = TypographySkeletonTemplate.bind({});
TypographySkeleton.storyName = "Skeleton inside Typography";
TypographySkeleton.args = {};
