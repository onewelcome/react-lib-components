import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Tiles, Props } from '../../src/Tiles/Tiles';
import { Tile } from '../../src/Tiles/Tile';
import { ContextMenu } from '../../src/ContextMenu/ContextMenu';
import { IconButton } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Tiles',
  component: Tiles,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [showContext1, setShowContext1] = useState(false);
  const [showContext2, setShowContext2] = useState(false);
  const [showContext3, setShowContext3] = useState(false);
  const [showContext4, setShowContext4] = useState(false);

  return (
    <Tiles {...args}>
      <Tile
        key="tile1"
        title="Tile1"
        imageProps={{
          src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
          alt: 'OneWelcome logo',
        }}
        leftIcon={Icons.Checkmark}
        menu={
          <ContextMenu
            id="context_menu_1"
            placement={{ vertical: 'bottom', horizontal: 'end' }}
            transformOrigin="right"
            show={showContext1}
            onShow={() => {
              action('onShow');
              setShowContext1(!showContext1);
            }}
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
        imageProps={{
          src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
          alt: 'OneWelcome logo',
        }}
        leftIcon={Icons.Forbidden}
        menu={
          <ContextMenu
            id="context_menu_2"
            placement={{ vertical: 'bottom', horizontal: 'end' }}
            transformOrigin="right"
            show={showContext2}
            onShow={() => {
              action('onShow');
              setShowContext2(!showContext2);
            }}
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
          src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
          alt: 'OneWelcome logo',
        }}
        leftIcon={Icons.Checkmark}
        menu={
          <ContextMenu
            id="context_menu_3"
            placement={{ vertical: 'bottom', horizontal: 'end' }}
            transformOrigin="left"
            show={showContext3}
            onShow={() => {
              action('onShow');
              setShowContext3(!showContext3);
            }}
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
        leftIcon={Icons.Checkmark}
        menu={
          <ContextMenu
            id="context_menu_4"
            placement={{ vertical: 'bottom', horizontal: 'end' }}
            transformOrigin="right"
            show={showContext4}
            onShow={() => {
              action('onShow');
              setShowContext4(!showContext4);
            }}
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
    </Tiles>
  );
};

export const TilesEl = Template.bind({});

TilesEl.args = {
  grid: 3,
};
