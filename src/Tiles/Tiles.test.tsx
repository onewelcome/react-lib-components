import React from 'react';
import { Tiles, Props } from './Tiles';
import { Tile } from './Tile';
import { render } from '@testing-library/react';
import { Icon, Icons } from '../Icon/Icon';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { ContextMenuItem } from '../ContextMenu/ContextMenuItem';
import { IconButton } from '../Button/IconButton';

const onShow = jest.fn();
const onClose = jest.fn();
const contextMenuItemOnClick = jest.fn();

const contextMenu = (
  <ContextMenu
    id="context_menu"
    onShow={onShow}
    onClose={onClose}
    trigger={
      <IconButton title="context menu">
        <Icon icon={Icons.EllipsisAlt} />
      </IconButton>
    }
  >
    <ContextMenuItem data-testid="item1" onClick={contextMenuItemOnClick}>
      Item 1
    </ContextMenuItem>
    <ContextMenuItem data-testid="item2" onClick={contextMenuItemOnClick}>
      Item 2
    </ContextMenuItem>
    <ContextMenuItem data-testid="item3" onClick={contextMenuItemOnClick}>
      Item 3
    </ContextMenuItem>
  </ContextMenu>
);

const addToFavoriteButton = (
  <IconButton title="Add to favorite">
    <Icon icon={Icons.Star} />
  </IconButton>
);

const defaultParams: Props = {
  children: [
    <Tile
      data-testid="tile"
      key="tile1"
      title="Tile1"
      imageProps={{
        src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
      }}
      enabled={true}
      tileAction={contextMenu}
    />,
    <Tile
      data-testid="tile"
      key="tile2"
      title="Tile2"
      imageProps={{
        src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
      }}
      enabled={false}
      tileAction={addToFavoriteButton}
    />,
    <Tile
      data-testid="tile"
      key="tile3"
      title="Tile3"
      imageProps={{
        src: 'https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg',
      }}
      tileAction={contextMenu}
    />,
  ],
  className: 'example-classname',
};

const createTiles = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Tiles {...parameters} data-testid="tiles" />);
  const tiles = queries.getByTestId('tiles');

  let individualTiles;

  if (!parameters.loading) {
    individualTiles = queries.getAllByTestId('tile');
  }

  return {
    ...queries,
    tiles,
    individualTiles,
  };
};

describe('Tiles should render', () => {
  it('renders without crashing', () => {
    const { tiles, individualTiles } = createTiles();

    individualTiles?.forEach((tile, index) => {
      expect(tile.querySelector('.title')).toHaveTextContent('Tile' + (index + 1).toFixed(0));
      expect(tile.querySelector('img')).toBeTruthy();
    });

    expect(tiles).toHaveClass('example-classname');
    expect(tiles).toBeDefined();
  });
});

describe('loading state should be handled properly', () => {
  it('is loading', () => {
    const { tiles } = createTiles((defaultParams) => ({ ...defaultParams, loading: true }));

    expect(tiles).toHaveAttribute('aria-busy', 'true');
    expect(tiles.querySelectorAll('.tile.loading').length).toBe(3);
  });
});
