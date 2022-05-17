import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { TabPanels as TabPanelsComponent, Props } from '../../src/Tabs/TabPanels';
import { TabPanel } from '../../src/Tabs/TabPanel';

const meta: Meta = {
  title: 'Stories/UI/Tabs/TabPanels',
  component: TabPanelsComponent,
};

export default meta;

const Template: Story<Props> = (args) => (
  <TabPanelsComponent {...args}>
    {[...Array(10)].map((x, i) => (
      <TabPanel>{`Tabpanel content ${i}`.toString()}</TabPanel>
    ))}
  </TabPanelsComponent>
);

export const TabPanels = Template.bind({});

TabPanels.args = {};
TabPanels.storyName = 'TabPanels';
