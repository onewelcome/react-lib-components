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
import { Tile as TileComponent, Props } from "../../src/Tiles/Tile";
import { Icon, Icons } from "../../src/Icon/Icon";
import { ContextMenu } from "../../src/ContextMenu/ContextMenu";
import { IconButton } from "../../src/Button/IconButton";
import { ContextMenuItem } from "../../src/ContextMenu/ContextMenuItem";
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

const Template: Story<Props> = args => <TileComponent {...args} />;

export const Tile = Template.bind({});

Tile.args = {
  title: "components/Tile1",
  imageProps: {
    src: "https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg"
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
