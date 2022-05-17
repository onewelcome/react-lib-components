import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { TabList as TabListComponent, Props } from '../../src/Tabs/TabList';
import { Tab } from '../../src/Tabs/Tab';

const meta: Meta = {
  title: 'Stories/UI/Tabs/TabList',
  component: TabListComponent,
};

export default meta;

const Template: Story<Props> = (args) => (
  <TabListComponent {...args}>
    {[...Array(10)].map((x, i) => (
      <Tab>{`Tab ${i}`.toString()}</Tab>
    ))}
  </TabListComponent>
);

export const TabList = Template.bind({});

TabList.args = {};

TabList.storyName = 'TabList';
