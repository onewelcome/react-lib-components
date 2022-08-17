import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tabs as TabsComponent, Props } from "../../src/Tabs/Tabs";
import { Typography } from "../../src/Typography/Typography";
import { Tab } from "../../src/Tabs/Tab";
import TabsDocumentation from "./Tabs.mdx";

const meta: Meta = {
  title: "Stories/UI/Tabs",
  parameters: {
    docs: {
      page: TabsDocumentation
    }
  },
  component: TabsComponent
};

export default meta;

const Template: Story<Props> = args => {
  return (
    <TabsComponent {...args}>
      <Tab title="First tab">
        <Typography variant="h2">Tabs</Typography>
        <ul>
          <li>Tabs are used for third level navigation.</li>
          <li>Tabs can split up large pieces of information or configuration.</li>
          <li>If there is configuration inside a tab, it should be possible to save it per tab.</li>
          <li>When the user needs guidance for a process, use a wizard, not tabs.</li>
        </ul>
      </Tab>
      <Tab title="Second tab">
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
      </Tab>
      <Tab title="Third tab">
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
      </Tab>
    </TabsComponent>
  );
};

export const Tabs = Template.bind({});

Tabs.args = {};
