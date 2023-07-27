/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { Fragment, useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  ContextMenu as ContextMenuComponent,
  Props
} from "../../src/components/ContextMenu/ContextMenu";
import { ContextMenuItem } from "../../src/components/ContextMenu/ContextMenuItem";
import { action } from "@storybook/addon-actions";
import { IconButton } from "../../src/components/Button/IconButton";
import { Icon, Icons } from "../../src/components/Icon/Icon";
import { Placement } from "../../src/hooks/usePosition";
import ContextMenuDocumentation from "./ContextMenu.mdx";
import { Typography } from "../../src/components/Typography/Typography";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { centerStory } from "../utils/helpers";

const meta: Meta = {
  title: "components/Navigation/ContextMenu",
  component: ContextMenuComponent,
  parameters: {
    docs: {
      page: ContextMenuDocumentation
    }
  },
  argTypes: {
    onShow: {
      control: false
    },
    show: {
      control: false
    },
    transformOrigin: {
      control: false
    },
    placement: {
      control: false
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  const [placement, setPlacement] = useState<Placement>({
    vertical: "bottom",
    horizontal: "left"
  });
  const [transformOrigin, setTransformOrigin] = useState<Placement>({
    vertical: "top",
    horizontal: "left"
  });

  centerStory();

  return (
    <Fragment>
      <ContextMenuComponent
        {...args}
        placement={{ vertical: placement.vertical, horizontal: placement.horizontal }}
        transformOrigin={transformOrigin}
      ></ContextMenuComponent>
      <div id="controls" style={{ marginTop: "20px", textAlign: "left" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            maxWidth: "600px",
            margin: "0 auto"
          }}
        >
          <fieldset>
            <legend>Horizontal Placement</legend>
            <div>
              <input
                onChange={event =>
                  setPlacement(prevState => ({
                    ...prevState,
                    horizontal: event.target.value as "left"
                  }))
                }
                name="placementhorizontal"
                id="left"
                type="radio"
                value="left"
                checked={placement.horizontal === "left"}
              />
              <label htmlFor="left">Left</label>
            </div>
            <div>
              <input
                onChange={event =>
                  setPlacement(prevState => ({
                    ...prevState,
                    horizontal: event.target.value as "center"
                  }))
                }
                name="placementhorizontal"
                id="centerhorizontal"
                type="radio"
                value="center"
                checked={placement.horizontal === "center"}
              />
              <label htmlFor="centerhorizontal">Center</label>
            </div>
            <div>
              <input
                onChange={event =>
                  setPlacement(prevState => ({
                    ...prevState,
                    horizontal: event.target.value as "right"
                  }))
                }
                name="placementhorizontal"
                id="right"
                type="radio"
                value="right"
                checked={placement.horizontal === "right"}
              />
              <label htmlFor="right">Right</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Vertical Placement</legend>
            <div>
              <input
                onChange={event =>
                  setPlacement(prevState => ({
                    ...prevState,
                    vertical: event.target.value as "top"
                  }))
                }
                name="placementvertical"
                id="top"
                type="radio"
                value="top"
                checked={placement.vertical === "top"}
              />
              <label htmlFor="top">Top</label>
            </div>
            <div>
              <input
                onChange={event =>
                  setPlacement(prevState => ({
                    ...prevState,
                    vertical: event.target.value as "center"
                  }))
                }
                name="placementvertical"
                id="centervertical"
                type="radio"
                value="center"
                checked={placement.vertical === "center"}
              />
              <label htmlFor="centervertical">Center</label>
            </div>
            <div>
              <input
                onChange={event =>
                  setPlacement(prevState => ({
                    ...prevState,
                    vertical: event.target.value as "bottom"
                  }))
                }
                name="placementvertical"
                id="bottom"
                type="radio"
                value="bottom"
                checked={placement.vertical === "bottom"}
              />
              <label htmlFor="bottom">Bottom</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Transform Origin Horizontal</legend>
            <div>
              <input
                onChange={event =>
                  setTransformOrigin(prevState => ({
                    ...prevState,
                    horizontal: event.target.value as "left"
                  }))
                }
                name="transformoriginhorizontalleft"
                id="transformoriginhorizontalleft"
                type="radio"
                value="left"
                checked={transformOrigin.horizontal === "left"}
              />
              <label htmlFor="transformoriginhorizontalleft">Left</label>
            </div>
            <div>
              <input
                onChange={event =>
                  setTransformOrigin(prevState => ({
                    ...prevState,
                    horizontal: event.target.value as "center"
                  }))
                }
                name="transformoriginhorizontalcenter"
                id="transformoriginhorizontalcenter"
                type="radio"
                value="center"
                checked={transformOrigin.horizontal === "center"}
              />
              <label htmlFor="transformoriginhorizontalcenter">Center</label>
            </div>
            <div>
              <input
                onChange={event =>
                  setTransformOrigin(prevState => ({
                    ...prevState,
                    horizontal: event.target.value as "right"
                  }))
                }
                name="transformoriginhorizontalright"
                id="transformoriginhorizontalright"
                type="radio"
                value="right"
                checked={transformOrigin.horizontal === "right"}
              />
              <label htmlFor="transformoriginhorizontalright">Right</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Transform Origin Vertical</legend>
            <div>
              <input
                onChange={event =>
                  setTransformOrigin(prevState => ({
                    ...prevState,
                    vertical: event.target.value as "top"
                  }))
                }
                name="transformoriginverticaltop"
                id="transformoriginverticaltop"
                type="radio"
                value="top"
                checked={transformOrigin.vertical === "top"}
              />
              <label htmlFor="transformoriginverticaltop">Top</label>
            </div>
            <div>
              <input
                onChange={event =>
                  setTransformOrigin(prevState => ({
                    ...prevState,
                    vertical: event.target.value as "center"
                  }))
                }
                name="transformoriginverticalcenter"
                id="transformoriginverticalcenter"
                type="radio"
                value="center"
                checked={transformOrigin.vertical === "center"}
              />
              <label htmlFor="transformoriginverticalcenter">Center</label>
            </div>
            <div>
              <input
                onChange={event =>
                  setTransformOrigin(prevState => ({
                    ...prevState,
                    vertical: event.target.value as "bottom"
                  }))
                }
                name="transformoriginverticalbottom"
                id="transformoriginverticalbottom"
                type="radio"
                value="bottom"
                checked={transformOrigin.vertical === "bottom"}
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

ContextMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() =>
    expect(canvas.getByRole("button", { name: "click me for contextmenu" })).toBeInTheDocument()
  );

  userEvent.click(canvas.getByRole("button", { name: "click me for contextmenu" }));

  await waitFor(() => expect(canvas.getAllByRole("menuitem")).toHaveLength(3));
};

ContextMenu.args = {
  id: "example-contextmenu",
  trigger: (
    <IconButton color="default" title="click me for contextmenu">
      <Icon icon={Icons.EllipsisAlt} />
    </IconButton>
  ),
  children: [
    <ContextMenuItem onClick={action("ContextMenuItem 1 onClick event")} key="1">
      Example item 1
    </ContextMenuItem>,
    <ContextMenuItem onClick={action("ContextMenuItem 2 onClick event")} key="2">
      Example item 2
    </ContextMenuItem>,
    <ContextMenuItem onClick={action("ContextMenuItem 3 onClick event")} key="3">
      Example item 3
    </ContextMenuItem>
  ]
};
ContextMenu.storyName = "ContextMenu";

export const ContextMenuWithDecorativeElement = Template.bind({});

ContextMenuWithDecorativeElement.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() =>
    expect(canvas.getByRole("button", { name: "click me for contextmenu" })).toBeInTheDocument()
  );

  userEvent.click(canvas.getByRole("button", { name: "click me for contextmenu" }));

  await waitFor(() => expect(canvas.getAllByRole("menuitem")).toHaveLength(1));
  expect(canvas.getByText("Decorative element")).toBeInTheDocument();
};

ContextMenuWithDecorativeElement.args = {
  id: "example-contextmenu",
  decorativeElement: (
    <Typography variant="body-bold" spacing={{ marginLeft: 5, marginBottom: 0 }}>
      Decorative element
    </Typography>
  ),
  trigger: (
    <IconButton color="default" title="click me for contextmenu">
      <Icon icon={Icons.EllipsisAlt} />
    </IconButton>
  ),
  children: [
    <ContextMenuItem onClick={action("ContextMenuItem 1 onClick event")} key="1">
      Example item
    </ContextMenuItem>
  ]
};
ContextMenuWithDecorativeElement.storyName = "ContextMenu with decorative element";
