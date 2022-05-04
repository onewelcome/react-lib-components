import React from 'react';
import { Tile, Props } from './Tile';
import { render, getByRole } from '@testing-library/react';
import { Icon, Icons } from '../Icon/Icon';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { IconButton } from '../Button/IconButton';
import { ContextMenuItem } from '../ContextMenu/ContextMenuItem';
import userEvent from '@testing-library/user-event';

const onShow = jest.fn();
const onClose = jest.fn();
const contextMenuItemOnClick = jest.fn();

const contextMenu = (
  <ContextMenu
    id="context_menu"
    data-testid="contextmenu"
    onShow={onShow}
    onClose={onClose}
    trigger={
      <IconButton data-testid="contextmenu-trigger" title="context menu">
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
  title: 'tile',
  enabled: true,
  tileAction: contextMenu,
};

const createTile = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Tile {...parameters} data-testid="tile">
      tile content
    </Tile>
  );
  const tile = queries.getByTestId('tile');
  const menutrigger = queries.getByTestId('contextmenu-trigger');

  return {
    ...queries,
    tile,
    menutrigger,
  };
};

describe('Tile should render', () => {
  it('renders without crashing and enabled', () => {
    const { tile } = createTile();

    expect(tile.querySelector('.icon-checkmark')).toBeTruthy();
    expect(tile.querySelector('.icon-forbidden')).toBeFalsy();
    expect(tile).toBeDefined();
  });

  it('renders disabled', () => {
    const { tile } = createTile((defaultParams) => ({ ...defaultParams, enabled: false }));

    expect(tile.querySelector('.icon-checkmark')).toBeFalsy();
    expect(tile.querySelector('.icon-forbidden')).toBeTruthy();
  });

  it('renders no status', () => {
    const { tile } = createTile((defaultParams) => ({ ...defaultParams, enabled: undefined }));

    expect(tile.querySelector('.icon-checkmark')).toBeFalsy();
    expect(tile.querySelector('.icon-forbidden')).toBeFalsy();
  });
});

describe("should throw errors since we don't pass props", () => {
  it('throws because of missing id', () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore: mandatory props (test for non-typescript react projects)
      render(<Tile imageProps={{ src: 'test' }} />);
    } catch (e: any) {
      actual = e.message;
    }

    const expected = 'Please make sure to pass a title prop to your Tile component.';

    expect(actual).toEqual(expected);

    console.error = err;
  });
});

describe('contextmenu', () => {
  it('should render everything correctly', () => {
    const { menutrigger, getByTestId } = createTile();

    const contextMenu = getByTestId('contextmenu');
    const menuitem1 = getByTestId('item1');
    const menuitem2 = getByTestId('item2');
    const menuitem3 = getByTestId('item3');
    const popover = document.querySelector('.popover');

    expect(popover).toHaveStyle({ opacity: '0;' });
    expect(menutrigger).toBeTruthy();
    expect(contextMenu).toBeTruthy();
    expect(menuitem1).toBeTruthy();
    expect(menuitem2).toBeTruthy();
    expect(menuitem3).toBeTruthy();

    userEvent.click(menutrigger);
    expect(onShow).toHaveBeenCalled();
    expect(popover).toHaveClass('show');
    expect(popover).toHaveStyle({ opacity: '1;' });

    userEvent.click(getByRole(menuitem1, 'button'));
    userEvent.click(getByRole(menuitem2, 'button'));
    userEvent.click(getByRole(menuitem3, 'button'));

    expect(contextMenuItemOnClick).toHaveBeenCalledTimes(3);
  });
});
