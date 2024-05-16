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
import { Props, Tiles as TitlesComponent } from "../../src/components/Tiles/Tiles";
import { ContextMenu, ContextMenuItem, Icon, IconButton, Icons, Tile } from "../../src";
import TilesDocumentation from "./Tiles.mdx";

const meta: Meta = {
  title: "components/Layout/Tiles/Tiles",
  component: TitlesComponent,
  parameters: {
    docs: {
      page: TilesDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  const addToFavorites = () => {
    window.alert("Add to favorites!");
  };

  return (
    <TitlesComponent {...args}>
      <Tile
        key="tile1"
        title="Tile1"
        imageProps={{
          src: "https://www.onewelcome.com/hubfs/OneWelcome_Beeldmerk.svg"
        }}
        enabled={false}
        tileAction={
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
        }
      />
      <Tile
        key="tile2"
        title="Tile2"
        enabled={true}
        tileAction={
          <IconButton onClick={addToFavorites} title="Add to favorite">
            <Icon icon={Icons.StarAlt} />
          </IconButton>
        }
      />
      <Tile
        key="tile3"
        title="Tile3"
        imageProps={{
          src: ""
        }}
        enabled={true}
        tileAction={
          <ContextMenu
            id="context_menu_3"
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
        }
      />
      <Tile
        key="tile4"
        title="Tile4"
        imageProps={{
          src: "https://www.onewelcome.com/hubfs/OneWelcome_Beeldmerk.svg"
        }}
        enabled={false}
        tileAction={
          <IconButton onClick={addToFavorites} title="Add to favorite">
            <Icon icon={Icons.Star} />
          </IconButton>
        }
      />
    </TitlesComponent>
  );
};

export const Tiles = Template.bind({});

Tiles.args = {};
