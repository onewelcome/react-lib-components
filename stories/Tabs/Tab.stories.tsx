import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tab as TabComponent, Props } from '../../src/Tabs/Tab';

const meta: Meta = {
  title: 'Stories/UI/Tabs/Tab',
  component: TabComponent,
};

export default meta;

const Template: Story<Props> = (args) => <TabComponent {...args}>Tab</TabComponent>;

export const Tab = Template.bind({});

Tab.args = {};
