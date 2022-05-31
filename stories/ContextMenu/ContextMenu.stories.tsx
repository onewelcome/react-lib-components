import React, { Fragment, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { ContextMenu as ContextMenuComponent, Props } from '../../src/ContextMenu/ContextMenu';
import { ContextMenuItem } from '../../src/ContextMenu/ContextMenuItem';
import { action } from '@storybook/addon-actions/dist/esm';
import { IconButton } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import { Placement } from '../../src/hooks/usePosition';
import ContextMenuDocumentation from './ContextMenu.mdx';

const meta: Meta = {
  title: 'Stories/UI/ContextMenu',
  component: ContextMenuComponent,
  parameters: {
    docs: {
      page: ContextMenuDocumentation,
    },
  },
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
  const [placement, setPlacement] = useState<Placement>({
    vertical: 'bottom',
    horizontal: 'left',
  });
  const [transformOrigin, setTransformOrigin] = useState<Placement>({
    vertical: 'top',
    horizontal: 'left',
  });

  return (
    <Fragment>
      <ContextMenuComponent
        {...args}
        placement={{ vertical: placement.vertical, horizontal: placement.horizontal }}
        transformOrigin={transformOrigin}
      ></ContextMenuComponent>
      <div id="controls" style={{ marginTop: '20px', textAlign: 'left' }}>
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
                    horizontal: event.target.value as 'left',
                  }))
                }
                name="placementhorizontal"
                id="left"
                type="radio"
                value="left"
                checked={placement.horizontal === 'left'}
              />
              <label htmlFor="left">Left</label>
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
                    horizontal: event.target.value as 'right',
                  }))
                }
                name="placementhorizontal"
                id="right"
                type="radio"
                value="right"
                checked={placement.horizontal === 'right'}
              />
              <label htmlFor="right">Right</label>
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
            <legend>Transform Origin Horizontal</legend>
            <div>
              <input
                onChange={(event) =>
                  setTransformOrigin((prevState) => ({
                    ...prevState,
                    horizontal: event.target.value as 'left',
                  }))
                }
                name="transformoriginhorizontalleft"
                id="transformoriginhorizontalleft"
                type="radio"
                value="left"
                checked={transformOrigin.horizontal === 'left'}
              />
              <label htmlFor="transformoriginhorizontalleft">Left</label>
            </div>
            <div>
              <input
                onChange={(event) =>
                  setTransformOrigin((prevState) => ({
                    ...prevState,
                    horizontal: event.target.value as 'center',
                  }))
                }
                name="transformoriginhorizontalcenter"
                id="transformoriginhorizontalcenter"
                type="radio"
                value="center"
                checked={transformOrigin.horizontal === 'center'}
              />
              <label htmlFor="transformoriginhorizontalcenter">Center</label>
            </div>
            <div>
              <input
                onChange={(event) =>
                  setTransformOrigin((prevState) => ({
                    ...prevState,
                    horizontal: event.target.value as 'right',
                  }))
                }
                name="transformoriginhorizontalright"
                id="transformoriginhorizontalright"
                type="radio"
                value="right"
                checked={transformOrigin.horizontal === 'right'}
              />
              <label htmlFor="transformoriginhorizontalright">Right</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Transform Origin Vertical</legend>
            <div>
              <input
                onChange={(event) =>
                  setTransformOrigin((prevState) => ({
                    ...prevState,
                    vertical: event.target.value as 'top',
                  }))
                }
                name="transformoriginverticaltop"
                id="transformoriginverticaltop"
                type="radio"
                value="top"
                checked={transformOrigin.vertical === 'top'}
              />
              <label htmlFor="transformoriginverticaltop">Top</label>
            </div>
            <div>
              <input
                onChange={(event) =>
                  setTransformOrigin((prevState) => ({
                    ...prevState,
                    vertical: event.target.value as 'center',
                  }))
                }
                name="transformoriginverticalcenter"
                id="transformoriginverticalcenter"
                type="radio"
                value="center"
                checked={transformOrigin.vertical === 'center'}
              />
              <label htmlFor="transformoriginverticalcenter">Center</label>
            </div>
            <div>
              <input
                onChange={(event) =>
                  setTransformOrigin((prevState) => ({
                    ...prevState,
                    vertical: event.target.value as 'bottom',
                  }))
                }
                name="transformoriginverticalbottom"
                id="transformoriginverticalbottom"
                type="radio"
                value="bottom"
                checked={transformOrigin.vertical === 'bottom'}
              />
              <label htmlFor="transformoriginverticalbottom">Bottom</label>
            </div>
          </fieldset>
        </div>
      </div>
    </Fragment>
  );
};

export const ContextMenu = Template.bind({});

ContextMenu.args = {
  id: 'example-contextmenu',
  trigger: (
    <IconButton color="default" title="click me for contextmenu">
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
};
ContextMenu.storyName = 'ContextMenu';
