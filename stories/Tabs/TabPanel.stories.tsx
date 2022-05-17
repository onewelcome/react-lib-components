import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TabPanel as TabPanelComponent, Props } from '../../src/Tabs/TabPanel';

const meta: Meta = {
  title: 'Stories/UI/Tabs/TabPanel',
  component: TabPanelComponent,
};

export default meta;

const Template: Story<Props> = (args) => (
  <TabPanelComponent {...args}>Tab panel content</TabPanelComponent>
);

export const TabPanel = Template.bind({});

TabPanel.args = {};

TabPanel.storyName = 'TabPanel';
