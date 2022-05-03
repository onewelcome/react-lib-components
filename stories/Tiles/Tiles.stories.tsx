import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Tiles as TitlesComponent, Props } from '../../src/Tiles/Tiles';
import { Tile } from '../../src/Tiles/Tile';
import { ContextMenu } from '../../src/ContextMenu/ContextMenu';
import { IconButton } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Stories/UI/Tiles',
  component: TitlesComponent,
};

export default meta;

const Template: Story<Props> = (args) => {
  return (
    <TitlesComponent {...args}>
      <Tile
        key="tile1"
        title="Tile1"
        imageProps={{
          src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
          alt: 'OneWelcome logo',
        }}
        iconProps={{ icon: Icons.Forbidden }}
        menu={
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
        iconProps={{ icon: Icons.Bell }}
        menu={
          <ContextMenu
            id="context_menu_2"
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
        key="tile3"
        title="Tile3"
        imageProps={{
          src: '',
          alt: 'OneWelcome logo',
        }}
        iconProps={{ icon: Icons.Checkmark }}
        menu={
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
          alt: 'OneWelcome logo',
        }}
        iconProps={{ icon: Icons.Bell }}
        menu={
          <ContextMenu
            id="context_menu_4"
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
    </TitlesComponent>
  );
};

export const Tiles = Template.bind({});

Tiles.args = {};
