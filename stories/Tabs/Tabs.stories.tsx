import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs as TabsComponent, Props } from '../../src/Tabs/Tabs';
import { Tab } from '../../src/Tabs/Tab';

const meta: Meta = {
  title: 'Stories/UI/Tabs/Tabs',
  component: TabsComponent,
};

export default meta;

const Template: Story<Props> = (args) => (
  <TabsComponent {...args}>
    {[...Array(10)].map((x, i) => (
      <Tab>{`Tab ${i}`.toString()}</Tab>
    ))}
  </TabsComponent>
);

export const Tabs = Template.bind({});

Tabs.args = {};
