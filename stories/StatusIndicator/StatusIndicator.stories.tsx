import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  StatusIndicator as StatusIndicatorComponent,
  Props
} from "../../src/StatusIndicator/StatusIndicator";
import { Typography } from "../../src/Typography/Typography";
import StatusIndicatorDocumentation from "./StatusIndicator.mdx";

const meta: Meta = {
  title: "Stories/UI/StatusIndicator",
  component: StatusIndicatorComponent,
  parameters: {
    docs: {
      page: StatusIndicatorDocumentation
    }
  },
  args: {
    status: "active"
  }
};

export default meta;

const Template: Story<Props> = args => (
  <div>
    <StatusIndicatorComponent {...args}>
      {`${args.status[0].toUpperCase()}${args.status.slice(1)}`}
    </StatusIndicatorComponent>
  </div>
);

export const StatusIndicator = Template.bind({});
