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
import { Meta, StoryFn } from "@storybook/react";
import { Props, Tile as TileComponent } from "../../src/components/Tiles/Tile";
import { ContextMenu, ContextMenuItem, Icon, IconButton, Icons } from "../../src";
import TileDocumentation from "./Tile.mdx";

const meta: Meta = {
  title: "components/Layout/Tiles/Tile",
  component: TileComponent,
  parameters: {
    docs: {
      page: TileDocumentation
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => <TileComponent {...args} />;

export const Tile = Template.bind({});

Tile.args = {
  title: "components/Tile1",
  imageProps: {
    src: "https://yt3.ggpht.com/ytc/AIdro_kADn_H24AfNf1hw5v3P3ShFuYFhlTjUsdNtZv2r1YpfyM=s68-c-k-c0x00ffffff-no-rj"
  },
  tileAction: (
    <ContextMenu
      id="context_menu_1"
      placement={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      trigger={
        <IconButton title="context menu">
          <Icon icon={Icons.EllipsisAlt} />
        </IconButton>
      }
    >
      <ContextMenuItem>Item 1</ContextMenuItem>
      <ContextMenuItem>Item 2</ContextMenuItem>
      <ContextMenuItem>Item 3</ContextMenuItem>
    </ContextMenu>
  ),
  enabled: true
};
