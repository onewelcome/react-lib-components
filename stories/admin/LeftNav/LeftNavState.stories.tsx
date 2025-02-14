/*
 * Copyright 2024 OneWelcome B.V.
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

import { Meta, StoryFn } from "@storybook/react";

import React from "react";
import { MemoryRouter } from "react-router";
import { Icon, Icons, LeftNav, LeftNavProps as Props } from "../../../src";
import LeftNavDocumentation from "./LeftNav.mdx";
import classes from "./LeftNav.module.scss";
import { MenuItem } from "../../../src/components/admin/layout/LeftNav/LeftNav.interfaces";

const meta: Meta = {
  title: "admin/Layout/LeftNav",
  component: LeftNav,
  parameters: {
    docs: {
      page: LeftNavDocumentation
    }
  }
};

const Template: StoryFn<Props> = args => {
  return (
    <MemoryRouter>
      <LeftNav className={classes["storybook-preview-static-left-nav"]} {...args} />
    </MemoryRouter>
  );
};

export const LeftNavStates = Template.bind({});
LeftNavStates.storyName = "LeftNav States";

type LeftNavStatesProps = {
  items: MenuItem[];
  firstItemPseudoState?: "hover" | "active" | "focus";
  firstNestedItemPseudoState?: "hover" | "active" | "focus";
};
const itemsWithActive: MenuItem[] = [
  { key: "home", title: "Home", path: "/", active: true },
  { key: "about", title: "About", path: "/about" },
  { key: "setting", title: "Settings", path: "/settings" }
];
const itemsWithActiveAndIcons: MenuItem[] = [
  {
    key: "home",
    title: "Home",
    path: "/",
    active: true,
    iconComponent: <Icon icon={Icons.Link} />
  },
  { key: "about", title: "About", path: "/about", iconComponent: <Icon icon={Icons.Edit} /> },
  {
    key: "setting",
    title: "Settings",
    path: "/settings",
    iconComponent: <Icon icon={Icons.ArrowUp} />
  }
];
const itemsWithDisabledAndIcons: MenuItem[] = [
  {
    key: "home",
    title: "Home",
    path: "/",
    disabled: true,
    iconComponent: <Icon icon={Icons.Warning} />
  },
  { key: "about", title: "About", path: "/about", iconComponent: <Icon icon={Icons.Eye} /> },
  {
    key: "setting",
    title: "Settings",
    path: "/settings",
    iconComponent: <Icon icon={Icons.ZoomOut} />
  }
];
const nestedItemsWithDisabledAndActiveAndIcons: MenuItem[] = [
  {
    key: "home",
    title: "Home",
    path: "/",
    disabled: true,
    iconComponent: <Icon icon={Icons.Warning} />
  },
  { key: "about", title: "About", path: "/about", iconComponent: <Icon icon={Icons.Eye} /> },
  {
    key: "setting",
    title: "Settings",
    path: "/settings",
    iconComponent: <Icon icon={Icons.ZoomOut} />,
    items: [
      {
        key: "profile",
        title: "Profile",
        path: "/settings/profile"
      },
      { key: "security", title: "Security", path: "/settings/security", disabled: true },
      { key: "activity", title: "Activity", path: "/settings/activity", active: true }
    ]
  }
];
const states: LeftNavStatesProps[] = [
  {
    items: itemsWithActive
  },
  {
    items: itemsWithActive,
    firstItemPseudoState: "hover"
  },
  {
    items: itemsWithActive,
    firstItemPseudoState: "focus"
  },
  {
    items: itemsWithActive,
    firstItemPseudoState: "active"
  },
  {
    items: itemsWithActiveAndIcons
  },
  {
    items: itemsWithActiveAndIcons,
    firstItemPseudoState: "hover"
  },
  {
    items: itemsWithActiveAndIcons,
    firstItemPseudoState: "focus"
  },
  {
    items: itemsWithActiveAndIcons,
    firstItemPseudoState: "active"
  },
  {
    items: itemsWithDisabledAndIcons
  },
  {
    items: itemsWithDisabledAndIcons,
    firstItemPseudoState: "hover"
  },
  {
    items: itemsWithDisabledAndIcons,
    firstItemPseudoState: "focus"
  },
  {
    items: itemsWithDisabledAndIcons,
    firstItemPseudoState: "active"
  },
  {
    items: nestedItemsWithDisabledAndActiveAndIcons
  },
  {
    items: nestedItemsWithDisabledAndActiveAndIcons,
    firstItemPseudoState: "hover"
  },
  {
    items: nestedItemsWithDisabledAndActiveAndIcons,
    firstItemPseudoState: "focus"
  },
  {
    items: nestedItemsWithDisabledAndActiveAndIcons,
    firstItemPseudoState: "active"
  }
];

LeftNavStates.decorators = [
  () => {
    return (
      <MemoryRouter>
        <div
          style={{
            marginLeft: "5px",
            marginTop: "5px",
            display: "grid",
            gridTemplateColumns: "auto auto auto auto"
          }}
        >
          {states.map((states, index) => {
            const { firstItemPseudoState, items, ...props } = states;
            return (
              <div style={{ marginBottom: "20px" }} key={index}>
                <LeftNav
                  {...props}
                  className={classes["storybook-preview-static-left-nav"]}
                  isSideMenuOpen={true}
                  navigate={() => {}}
                  onItemClick={() => {}}
                  id={firstItemPseudoState}
                  items={items}
                />
              </div>
            );
          })}
        </div>
      </MemoryRouter>
    );
  }
];

LeftNavStates.parameters = {
  pseudo: {
    hover: "#hover li:first-of-type>a",
    active: "#active li:first-of-type>a",
    focus: "#focus li:first-of-type>a",
    focusVisible: "#focus li:first-of-type>a"
  },
  controls: { disable: true }
};

export default meta;
