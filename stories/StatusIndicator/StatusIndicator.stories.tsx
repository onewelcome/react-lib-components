import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  StatusIndicator as StatusIndicatorComponent,
  Props,
} from '../../src/StatusIndicator/StatusIndicator';
import StatusIndicatorDocumentation from './StatusIndicator.mdx';

const meta: Meta = {
  title: 'Stories/UI/StatusIndicator',
  component: StatusIndicatorComponent,
  parameters: {
    docs: {
      page: StatusIndicatorDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <StatusIndicatorComponent {...args}>content</StatusIndicatorComponent>
);

export const StatusIndicator = Template.bind({});

StatusIndicator.args = {};
