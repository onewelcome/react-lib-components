import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Tiles as TitlesComponent, Props } from '../../src/Tiles/Tiles';
import { Tile } from '../../src/Tiles/Tile';
import { ContextMenu } from '../../src/ContextMenu/ContextMenu';
import { IconButton } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';
import TilesDocumentation from './Tiles.mdx';

const meta: Meta = {
  title: 'Stories/UI/Tiles/Tiles',
  component: TitlesComponent,
  parameters: {
    docs: {
      page: TilesDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const addToFavorites = () => {
    window.alert('Add to favorites!');
  };

  return (
    <TitlesComponent {...args}>
      <Tile
        key="tile1"
        title="Tile1"
        imageProps={{
          src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
        }}
        enabled={false}
        tileAction={
          <ContextMenu
            id="context_menu_1"
            placement={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
          src: '',
        }}
        enabled={true}
        tileAction={
          <ContextMenu
            id="context_menu_3"
            placement={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
          src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
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
