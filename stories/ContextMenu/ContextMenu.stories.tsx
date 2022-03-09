import React, { useCallback, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { ContextMenu, Props } from '../../src/ContextMenu/ContextMenu';
import { Button } from '../../src/Button/Button';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';
import { action } from '@storybook/addon-actions/dist/esm';

const meta: Meta = {
  title: 'ContextMenu',
  component: ContextMenu,
  argTypes: {
    onShow: {
      control: false,
    },
    show: {
      control: false,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleCloseContextMenuOnBodyClick = useCallback(
    (event: MouseEvent) => {
      if (!(event.target as Element).closest('#example-contextmenu-menu') && showContextMenu) {
        setShowContextMenu(false);
      }
    },
    [showContextMenu]
  );

  useEffect(() => {
    /**
     * Add body click listener to close contextmenu and remove it in the cleanup function whenever show state changes.
     */
    window.addEventListener('click', handleCloseContextMenuOnBodyClick);
    return () => {
      /**
       * Cleanup the eventlistener so we can set it again after expanded h  as changed.
       */
      window.removeEventListener('click', handleCloseContextMenuOnBodyClick);
    };
  }, [showContextMenu]);

  return (
    <ContextMenu
      {...args}
      onShow={() => setShowContextMenu(!showContextMenu)}
      show={showContextMenu}
      placement={{ vertical: 'bottom', horizontal: 'start' }}
    ></ContextMenu>
  );
};

export const ContextMenuEl = Template.bind({});

ContextMenuEl.args = {
  id: 'example-contextmenu',
  trigger: <Button>Click me for a context menu</Button>,
  children: [
    <ContextMenuItem onClick={action('ContextMenuItem onClick event')} key="1">
      Example item 1
    </ContextMenuItem>,
    <ContextMenuItem onClick={action('ContextMenuItem onClick event')} key="2">
      Example item 2
    </ContextMenuItem>,
    <ContextMenuItem onClick={action('ContextMenuItem onClick event')} key="3">
      Example item 3
    </ContextMenuItem>,
  ],
  show: false,
};
