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

import React, { Fragment, ReactElement, ReactNode, useEffect, useState } from "react";
import {
  Button,
  ButtonProps,
  ContentHeader,
  Icon,
  IconButton,
  Icons,
  MicrofrontendContainer,
  LeftNav,
  LeftNavProps as Props
} from "../../../src";
import LeftNavDocumentation from "./LeftNav.mdx";
import { MenuItem } from "../../../src/components/admin/layout/LeftNav/LeftNav.interfaces";
import { MemoryRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router";
import classes from "./LeftNav.module.scss";

const meta: Meta = {
  title: "admin/Layout/LeftNav",
  component: LeftNav,
  parameters: {
    docs: {
      page: LeftNavDocumentation
    }
  }
};

const formButtonList: ReactElement<ButtonProps, typeof Button>[] = [
  <Button key="1" onClick={() => alert("Cancel button clicked.")} variant="text">
    Cancel
  </Button>,
  <Button key="2" disabled startIcon={<Icon icon={Icons.SaveOutline} />}>
    Save Draft
  </Button>,
  <Button
    key="3"
    onClick={() => alert("Submit button clicked.")}
    startIcon={<Icon icon={Icons.ReplyOutline} />}
  >
    Submit
  </Button>
];

const items: MenuItem[] = [
  {
    key: "menu1",
    title: "Menu Item 1",
    path: "/configuration/menu1",
    iconComponent: <Icon icon={Icons.UploadOutline} />
  },
  {
    key: "menu2",
    title: "Menu Item 2",
    path: "/configuration/menu2",
    iconComponent: <Icon icon={Icons.Trash} />
  },
  {
    key: "menu3",
    title: "Menu Item 3",
    path: "/configuration/menu3",
    iconComponent: <Icon icon={Icons.FileAltIcon} />,
    items: [
      {
        key: "menu3.1",
        title: "Sub Menu Item 3.1",
        path: "/configuration/menu31"
      },
      {
        key: "menu3.2",
        title: "Sub Menu Item 3.2",
        path: "/configuration/menu32"
      },
      {
        key: "menu3.3",
        title: "Sub Menu Item 3.3",
        path: "/configuration/menu33"
      },
      {
        key: "menu3.4",
        title: "Sub Menu Item 3.4",
        path: "/configuration/menu34"
      }
    ]
  },
  {
    key: "menu4",
    title: "Menu Item 4",
    path: "/configuration/menu4",
    iconComponent: <Icon icon={Icons.SaveOutline} />
  },
  {
    key: "menu5",
    title: "Menu Item 5",
    path: "/configuration/menu5",
    iconComponent: <Icon icon={Icons.Warning} />
  }
];

const extractRoutes = (menuItems: MenuItem[]): MenuItem[] => {
  const routes: MenuItem[] = [];
  menuItems.forEach(item => {
    if (item.path) {
      routes.push(item);
    }
    if (item.items) {
      routes.push(...extractRoutes(item.items));
    }
  });
  return routes;
};

const generateRedirects = (menuItems: MenuItem[]): ReactNode[] => {
  const redirects: ReactNode[] = [];
  menuItems.forEach(item => {
    if (item.items && item.items.length > 0) {
      redirects.push(
        <Route
          key={`${item.key}-redirect`}
          path={item.path}
          element={<Navigate to={item.items[0].path!} />}
        />
      );
      redirects.push(...generateRedirects(item.items));
    }
  });
  return redirects;
};

const setActiveItem = (menuItems: MenuItem[], path: string) => {
  menuItems.forEach(item => {
    item.active = item.path === path;
    if (item.items && item.items.length > 0) {
      setActiveItem(item.items, path);
    }
  });
};

const routes = extractRoutes(items);
const redirects = generateRedirects(items);

const ExtendedTemplateWithRouterWrapper: StoryFn<Props> = args => {
  return (
    <MemoryRouter>
      <ExtendedVersionTemplate {...args} />
    </MemoryRouter>
  );
};

const ExtendedVersionTemplate: StoryFn<Props> = args => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [localItems, setLocalItems] = useState(items);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };

  useEffect(() => {
    const newItems = [...localItems];
    setActiveItem(newItems, location.pathname);
    setLocalItems(newItems);
  }, [location]);

  return (
    <Fragment>
      <div className={classes["top-nav"]}>
        <IconButton
          className={classes["menu-icon"]}
          aria-controls="sidemenu"
          data-testid="sidemenu-btn"
          aria-expanded={isSideMenuOpen}
          title={isSideMenuOpen ? "Hide menu" : "Show menu"}
          color="default"
          onClick={() => setIsSideMenuOpen(state => !state)}
        >
          {isSideMenuOpen ? <Icon icon={Icons.Times} /> : <Icon icon={Icons.Hamburger} />}
        </IconButton>
        LOGO
      </div>
      <div>
        <LeftNav
          items={localItems}
          isSideMenuOpen={isSideMenuOpen}
          navigate={navigate}
          onItemClick={handleSideMenuClose}
        />
        <div className={classes["content"]}>
          <MicrofrontendContainer
            header={
              <ContentHeader
                buttons={formButtonList}
                title="Example title"
                subtitle="This is a subtitle, you can put a short message here"
              >
                If you need more place to write some explanation to your user, this is the place you
                can do it. Have fun!
              </ContentHeader>
            }
            {...args}
          >
            <div className={classes["inner"]}>
              <Routes>
                {redirects}
                {routes.map(route => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<span>{route.title} Content</span>}
                  />
                ))}
                <Route path="*" element={<Navigate to={routes[0]?.path || "/"} />} />
              </Routes>
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
              Some content
              <br />
            </div>
          </MicrofrontendContainer>
        </div>
      </div>
    </Fragment>
  );
};

export const AdvancedLeftNav = ExtendedTemplateWithRouterWrapper.bind({});
AdvancedLeftNav.storyName = "Advanced LeftNav";

const Template: StoryFn<Props> = args => {
  return (
    <MemoryRouter>
      <LeftNav className={classes["storybook-preview-static-left-nav"]} {...args} />
    </MemoryRouter>
  );
};

export const BasicLeftNav = Template.bind({});
BasicLeftNav.args = {
  items: [
    { key: "home", title: "Home", path: "/", iconComponent: <Icon icon={Icons.MinusCircle} /> },
    { key: "about", title: "About", path: "/about", iconComponent: <Icon icon={Icons.InfoBell} /> },
    {
      key: "setting",
      title: "Settings",
      path: "/settings",
      iconComponent: <Icon icon={Icons.SaveOutline} />
    }
  ]
} as Props;
BasicLeftNav.storyName = "Basic LeftNav";

export const NestedItemsLeftNav = Template.bind({});
NestedItemsLeftNav.args = {
  items: [
    { key: "home", title: "Home", path: "/", iconComponent: <Icon icon={Icons.MinusCircle} /> },
    { key: "about", title: "About", path: "/about", iconComponent: <Icon icon={Icons.InfoBell} /> },
    {
      key: "setting",
      title: "Settings",
      path: "/settings",
      iconComponent: <Icon icon={Icons.SaveOutline} />,
      items: [
        { key: "profile", title: "Profile", path: "/settings/profile" },
        { key: "security", title: "Security", path: "/settings/security" }
      ]
    }
  ]
} as Props;
NestedItemsLeftNav.storyName = "Nested LeftNav items";

export default meta;
