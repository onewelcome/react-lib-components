import React from 'react';
import { ContextMenu, Props } from './ContextMenu';
import { render, getByRole } from '@testing-library/react';
import { Button } from '../Button/Button';
import { ContextMenuItem } from './ContextMenuItem';
import userEvent from '@testing-library/user-event';

const onShow = jest.fn();
const onClick = jest.fn();

const defaultParams: Props = {
  id: 'example-contextmenu',
  trigger: <Button data-testid="trigger">Click me for a context menu</Button>,
  children: [
    <ContextMenuItem onClick={onClick} data-testid="contextmenuitem" key="1">
      Example item 1
    </ContextMenuItem>,
    <ContextMenuItem key="2">Example item 2</ContextMenuItem>,
    <ContextMenuItem key="3">Example item 3</ContextMenuItem>,
  ],
  show: false,
  onShow: onShow,
};

const createContextMenu = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(<ContextMenu {...parameters} data-testid="contextmenu"></ContextMenu>);

  const contextmenu = queries.getByTestId('contextmenu');
  const trigger = queries.getByTestId('trigger');

  return {
    ...queries,
    contextmenu,
    trigger,
  };
};

describe('ContextMenu should render', () => {
  it('renders without crashing', () => {
    const { contextmenu } = createContextMenu();

    expect(contextmenu).toBeTruthy();
  });

  it('executed onShow function', () => {
    const { trigger } = createContextMenu();

    userEvent.click(trigger);

    expect(onShow).toHaveBeenCalled();
  });

  it('executed onShow function', () => {
    const { getByTestId } = createContextMenu((defaultParams) => ({
      ...defaultParams,
      show: true,
    }));

    const contextmenuitem = getByTestId('contextmenuitem');
    const button = getByRole(contextmenuitem, 'button');

    userEvent.click(button);

    expect(contextmenuitem).toBeTruthy();
    expect(onClick).toHaveBeenCalled();
  });

  it('should throw an error', () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore: mandatory props (test for non-typescript react projects)
      render(<ContextMenu />);
    } catch (e: any) {
      actual = e.message;
    }

    const expected = 'You need to provide an ID to the context menu';

    expect(actual).toEqual(expected);

    console.error = err;
  });
});
