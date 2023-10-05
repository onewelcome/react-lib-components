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

import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tabs as TabsComponent, Props } from "../../src/components/Tabs/Tabs";
import { Typography } from "../../src/components/Typography/Typography";
import { Tab } from "../../src/components/Tabs/Tab";
import TabsDocumentation from "./Tabs.mdx";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { conditionalPlay } from "../../.storybook/conditionalPlay";
import { Icon, Icons } from "../../src/components/Icon/Icon";

const meta: Meta = {
  title: "components/Navigation/Tabs",
  parameters: {
    docs: {
      page: TabsDocumentation
    }
  },
  component: TabsComponent,
  args: {
    fluid: false
  }
};

export default meta;

const Template: Story<Props> = args => {
  return (
    <TabsComponent {...args}>
      <Tab title="First tab" {...(args as any).tabs?.[0]}>
        <Typography variant="h2">Tabs</Typography>
        <ul>
          <li>Tabs are used for third level navigation.</li>
          <li>Tabs can split up large pieces of information or configuration.</li>
          <li>If there is configuration inside a tab, it should be possible to save it per tab.</li>
          <li>When the user needs guidance for a process, use a wizard, not tabs.</li>
        </ul>
      </Tab>
      <Tab title="Second tab" {...(args as any).tabs?.[1]}>
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
      <Tab title="Third tab" {...(args as any).tabs?.[2]}>
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

export const TabsWithFocusRing = Template.bind({});

TabsWithFocusRing.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => canvas.getByRole("tab", { name: "First tab" }));

  const tab1 = await canvas.getByRole("tab", { name: "First tab" });
  const tab2 = await canvas.getByRole("tab", { name: "Second tab" });
  const tab3 = await canvas.getByRole("tab", { name: "Third tab" });

  expect(tab1).toHaveAttribute("aria-selected", "true");

  await userEvent.click(tab2);

  expect(tab1).toHaveAttribute("aria-selected", "false");

  expect(tab2).toHaveAttribute("aria-selected", "true");

  await userEvent.click(tab3);

  expect(tab2).toHaveAttribute("aria-selected", "false");

  expect(tab3).toHaveAttribute("aria-selected", "true");

  await userEvent.click(tab1);

  expect(tab3).toHaveAttribute("aria-selected", "false");
});

Tabs.args = {};

export const TabsWithIcons = Template.bind({});

TabsWithIcons.args = {
  iconsPosition: "left",
  tabs: [
    {
      icon: <Icon icon={Icons.HomeFilled} />
    },
    {
      icon: <Icon icon={Icons.Calendar} />
    },
    {
      icon: <Icon icon={Icons.Heart} />
    }
  ]
};
