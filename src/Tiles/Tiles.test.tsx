import React from 'react';
import { Tiles, Props } from './Tiles';
import { Tile } from './Tile';
import { render } from '@testing-library/react';
import { Icon, Icons } from '../Icon/Icon';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { ContextMenuItem } from '../ContextMenu/ContextMenuItem';
import { IconButton } from '../Button/IconButton';

const onShow = jest.fn();
const contextMenuItemOnClick = jest.fn();

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

const defaultParams: Props = {
  children: [
    <Tile
      data-testid="tile"
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
      data-testid="tile"
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
      data-testid="tile"
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
  grid: 1,
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

    expect(tiles).toHaveClass('grid-1');
    expect(tiles).toHaveClass('example-classname');
    expect(tiles).toBeDefined();
  });
});

describe('Tiles with different grids', () => {
  it('has a grid of 1', () => {
    const { individualTiles } = createTiles((defaultParams) => ({
      ...defaultParams,
      grid: 1,
    }));

    individualTiles?.forEach((tile) => {
      expect(tile).toHaveStyle({ 'flex-basis': '100%;' });
    });
  });

  it('has a grid of 2', () => {
    const { individualTiles } = createTiles((defaultParams) => ({
      ...defaultParams,
      grid: 2,
    }));

    individualTiles?.forEach((tile) => {
      expect(tile).toHaveStyle({ 'flex-basis': '50%;' });
    });
  });

  it('has a grid of 3', () => {
    const { individualTiles } = createTiles();

    individualTiles?.forEach((tile) => {
      expect(tile).toHaveStyle({ 'flex-basis': `${100 / 3}%;` });
    });
  });
});

describe('loading state should be handled properly', () => {
  it('is loading', () => {
    const { tiles } = createTiles((defaultParams) => ({ ...defaultParams, loading: true }));

    expect(tiles).toHaveAttribute('aria-busy', 'true');
    expect(tiles.querySelectorAll('.tile.loading').length).toBe(3);
  });
});

describe("should throw errors since we don't pass props", () => {
  it('throws because of missing imageProps', () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore: mandatory props (test for non-typescript react projects)
      render(<Tile />);
    } catch (e: any) {
      actual = e.message;
    }

    const expected =
      "Please make sure to include a src and alt key value pair in your imageProps object! Example: imageProps: {{ src: 'imagesource', alt: 'alt text for image' }}";

    expect(actual).toEqual(expected);

    console.error = err;
  });

  it('throws because of missing id', () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore: mandatory props (test for non-typescript react projects)
      render(<Tile imageProps={{ src: 'test', alt: 'test' }} />);
    } catch (e: any) {
      actual = e.message;
    }

    const expected = 'Please make sure to pass a title prop to your Tile component.';

    expect(actual).toEqual(expected);

    console.error = err;
  });
});
