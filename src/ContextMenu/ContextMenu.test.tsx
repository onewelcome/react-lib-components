import React from 'react';
import { ContextMenu, Props } from './ContextMenu';
import { render } from '@testing-library/react';
import { Button } from '../Button/Button';
import { ContextMenuItem } from './ContextMenuItem';

const defaultParams: Props = {
  id: 'example-contextmenu',
  trigger: <Button>Click me for a context menu</Button>,
  children: [
    <ContextMenuItem key="1">Example item 1</ContextMenuItem>,
    <ContextMenuItem key="2">Example item 2</ContextMenuItem>,
    <ContextMenuItem key="3">Example item 3</ContextMenuItem>,
  ],
  show: false,
  onShow: jest.fn(),
};

const createContextMenu = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(<ContextMenu {...parameters} data-testid="contextmenu"></ContextMenu>);
  const contextmenu = queries.getByTestId('contextmenu');

  return {
    ...queries,
    contextmenu,
  };
};

describe('ContextMenu should render', () => {
  it('renders without crashing', () => {
    const { contextmenu } = createContextMenu();

    expect(contextmenu).toBeDefined();
  });
});
