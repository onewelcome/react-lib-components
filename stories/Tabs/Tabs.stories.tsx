import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs as TabsComponent, Props } from '../../src/Tabs/Tabs';
import { TabList } from '../../src/Tabs/TabList';
import { Tab } from '../../src/Tabs/Tab';
import { TabPanels } from '../../src/Tabs/TabPanels';
import { TabPanel } from '../../src/Tabs/TabPanel';
import { Typography } from '../../src/Typography/Typography';

const meta: Meta = {
  title: 'Stories/UI/Tabs/Tabs',
  component: TabsComponent,
};

export default meta;

const Template: Story<Props> = (args) => (
  <TabsComponent {...args}>
    <TabList aria-label="story">
      <Tab>First tab</Tab>
      <Tab>Second tab</Tab>
      <Tab>Third tab</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <Typography variant="h2">Tabs</Typography>
        <ul>
          <li>Tabs are used for third level navigation.</li>
          <li>Tabs can split up large pieces of information or configuration.</li>
          <li>If there is configuration inside a tab, it should be possible to save it per tab.</li>
          <li>When the user needs guidance for a process, use a wizard, not tabs.</li>
        </ul>
      </TabPanel>
      <TabPanel>
        <Typography variant="h2">Title of the second tab</Typography>
        <p>
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum.
        </p>
        <p>
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum.
        </p>
      </TabPanel>
      <TabPanel>
        <Typography variant="h2">The third tab</Typography>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
          quaerat voluptatem.
        </p>
      </TabPanel>
    </TabPanels>
  </TabsComponent>
);

export const Tabs = Template.bind({});

Tabs.args = {};
