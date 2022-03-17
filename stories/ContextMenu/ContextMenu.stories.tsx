import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { ContextMenu, Props } from '../../src/ContextMenu/ContextMenu';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';
import { action } from '@storybook/addon-actions/dist/esm';
import { IconButton } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import { Placement } from '../../src/Popover/Popover';

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
    transformOrigin: {
      control: false,
    },
    placement: {
      control: false,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [placement, setPlacement] = useState<Placement>({ vertical: 'bottom', horizontal: 'end' });
  const [transformOrigin, setTransformOrigin] = useState<'left' | 'right'>('left');

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
    <Fragment>
      <ContextMenu
        {...args}
        onShow={() => setShowContextMenu(!showContextMenu)}
        show={showContextMenu}
        placement={{ vertical: placement.vertical, horizontal: placement.horizontal }}
        transformOrigin={transformOrigin}
      ></ContextMenu>
      <div style={{ marginTop: '20px', display: 'block', textAlign: 'left' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <fieldset>
            <legend>Horizontal Placement</legend>
            <div>
              <input
                onChange={(event) =>
                  setPlacement((prevState) => ({
                    ...prevState,
                    horizontal: event.target.value as 'start',
                  }))
                }
                name="placementhorizontal"
                id="start"
                type="radio"
                value="start"
                checked={placement.horizontal === 'start'}
              />
              <label htmlFor="start">Start</label>
            </div>
            <div>
              <input
                onChange={(event) =>
                  setPlacement((prevState) => ({
                    ...prevState,
                    horizontal: event.target.value as 'center',
                  }))
                }
                name="placementhorizontal"
                id="centerhorizontal"
                type="radio"
                value="center"
                checked={placement.horizontal === 'center'}
              />
              <label htmlFor="centerhorizontal">Center</label>
            </div>
            <div>
              <input
                onChange={(event) =>
                  setPlacement((prevState) => ({
                    ...prevState,
                    horizontal: event.target.value as 'end',
                  }))
                }
                name="placementhorizontal"
                id="end"
                type="radio"
                value="end"
                checked={placement.horizontal === 'end'}
              />
              <label htmlFor="end">End</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Vertical Placement</legend>
            <div>
              <input
                onChange={(event) =>
                  setPlacement((prevState) => ({
                    ...prevState,
                    vertical: event.target.value as 'top',
                  }))
                }
                name="placementvertical"
                id="top"
                type="radio"
                value="top"
                checked={placement.vertical === 'top'}
              />
              <label htmlFor="top">Top</label>
            </div>
            <div>
              <input
                onChange={(event) =>
                  setPlacement((prevState) => ({
                    ...prevState,
                    vertical: event.target.value as 'center',
                  }))
                }
                name="placementvertical"
                id="centervertical"
                type="radio"
                value="center"
                checked={placement.vertical === 'center'}
              />
              <label htmlFor="centervertical">Center</label>
            </div>
            <div>
              <input
                onChange={(event) =>
                  setPlacement((prevState) => ({
                    ...prevState,
                    vertical: event.target.value as 'bottom',
                  }))
                }
                name="placementvertical"
                id="bottom"
                type="radio"
                value="bottom"
                checked={placement.vertical === 'bottom'}
              />
              <label htmlFor="bottom">Bottom</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Transform Origin</legend>
            <div>
              <input
                onChange={(event) => setTransformOrigin(event.target.value as 'left')}
                name="transformorigin"
                id="left"
                type="radio"
                value="left"
                checked={transformOrigin === 'left'}
              />
              <label htmlFor="left">Left</label>
            </div>
            <div>
              <input
                onChange={(event) => setTransformOrigin(event.target.value as 'right')}
                name="transformorigin"
                id="right"
                type="radio"
                value="right"
                checked={transformOrigin === 'right'}
              />
              <label htmlFor="right">Right</label>
            </div>
          </fieldset>
        </div>
      </div>
    </Fragment>
  );
};

export const ContextMenuEl = Template.bind({});

ContextMenuEl.args = {
  id: 'example-contextmenu',
  trigger: (
    <IconButton>
      <Icon icon={Icons.EllipsisAlt} />
    </IconButton>
  ),
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
