import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tile as TileComponent, Props } from '../../src/Tiles/Tile';
import { Icon, Icons } from '../../src/Icon/Icon';
import { ContextMenu } from '../../src/ContextMenu/ContextMenu';
import { IconButton } from '../../src/Button/IconButton';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';

const meta: Meta = {
  title: 'Stories/UI/Tiles/Tile',
  component: TileComponent,
};

export default meta;

const Template: Story<Props> = (args) => <TileComponent {...args} />;

export const Tile = Template.bind({});

Tile.args = {
  title: 'Tile1',
  imageProps: {
    src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
  },
  iconProps: { icon: Icons.Forbidden },
  tileDescription: 'Disabled OneWelcome identity provider',
  tileAction: (
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
  ),
};
