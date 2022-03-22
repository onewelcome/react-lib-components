import React from 'react';
import { Tiles, Props } from './Tiles';
import { Tile } from './Tile';
import { render } from '@testing-library/react';
import { Icon, Icons } from '../Icon/Icon';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { ContextMenuItem } from '../ContextMenu/ContextMenuItem';
import { IconButton } from '../Button/IconButton';

const onShow = jest.fn();

const contextMenu = (
  <ContextMenu
    id="context_menu"
    show={false}
    onShow={onShow}
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
);

const defaultParams: Props = {
  children: [
    <Tile
      key="tile1"
      title="Tile1"
      imageProps={{
        src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
        alt: 'OneWelcome logo',
      }}
      leftIcon={Icons.Checkmark}
      menu={contextMenu}
    />,
    <Tile
      key="tile2"
      title="Tile2"
      imageProps={{
        src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
        alt: 'OneWelcome logo',
      }}
      leftIcon={Icons.Forbidden}
      menu={contextMenu}
    />,
    <Tile
      key="tile3"
      title="Tile3"
      imageProps={{
        src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
        alt: 'OneWelcome logo',
      }}
      leftIcon={Icons.Checkmark}
      menu={contextMenu}
    />,
  ],
};

const createTiles = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Tiles {...parameters} data-testid="tiles" />);
  const tiles = queries.getByTestId('tiles');

  return {
    ...queries,
    tiles,
  };
};

describe('Tiles should render', () => {
  it('renders without crashing', () => {
    const { tiles } = createTiles();

    expect(tiles).toBeDefined();
  });
});
