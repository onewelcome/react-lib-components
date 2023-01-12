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

import { Meta, Story } from "@storybook/react";
import { Banner, Props } from "../../../src/Notifications/Banner/Banner";
import React from "react";
import BannerDocumentation from "./Banner.mdx";

const meta: Meta = {
  title: "components/Feedback/Banner",
  component: Banner,
  parameters: {
    docs: {
      page: BannerDocumentation
    }
  },
  args: {
    type: "info",
    title: "Maintenance is scheduled for next weekend.",
    ariaAtomic: true,
    children: "The service will not be available between 02:00 and 03:00."
  },
  argTypes: {
    ariaRole: {
      control: {
        type: "text"
      }
    },
    ariaLive: {
      options: ["off", "assertive", "polite"],
      control: {
        type: "radio"
      }
    },
    ariaLabel: {
      control: {
        type: "text"
      }
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  const type = args.type;
  const title = args.title;
  const children = args.children;
  return (
    <Banner type={type} title={title}>
      {children}
    </Banner>
  );
};

export const WarningBanner = Template.bind({});
WarningBanner.args = {
  type: "warning"
};

export const ErrorBanner = Template.bind({});
ErrorBanner.args = {
  type: "error"
};

export const InfoBanner = Template.bind({});
InfoBanner.args = {
  type: "info"
};
