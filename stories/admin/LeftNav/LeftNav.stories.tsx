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

import React, { Fragment, ReactElement, useState } from "react";
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
import { MemoryRouter } from "react-router";

const meta: Meta = {
  title: "admin/Layout/LeftNav",
  component: LeftNav,
  argTypes: {
    children: {
      control: false
    },
    contentMargins: {
      description:
        "Specifies if the content (children) element should have the default margins added.\n"
    },
    contentMaxWidth: {
      description:
        "Specifies if the content (children) element should have the default max-width added.\n"
    }
  },
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

const boxShadow = {
  boxShadow: "0px 1px 5px 0px #01053214"
};

const centerText = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Template: StoryFn<Props> = args => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const items: MenuItem[] = [
    { key: "menu1", title: "Menu Item", path: "/configuration/test" },
    { key: "menu2", title: "Menu Item", path: "/configuration/test" },
    {
      key: "menu3",
      title: "Menu Item",
      path: "/configuration/test",
      items: [
        {
          key: "menu3.1",
          title: "Sub Menu Item",
          path: "/configuration/test"
        },
        {
          key: "menu3.2",
          title: "Sub Menu Item",
          path: "/configuration/test"
        },
        {
          key: "menu3.3",
          title: "Sub Menu Item",
          path: "/configuration/test"
        },
        {
          key: "menu3.4",
          title: "Sub Menu Item",
          path: "/configuration/test"
        }
      ]
    },
    { key: "menu4", title: "Menu Item", path: "/configuration/test" },
    { key: "menu5", title: "Menu Item", path: "/configuration/test" }
  ];
  return (
    <MemoryRouter>
      <div
        style={{
          height: "3rem",
          ...boxShadow,
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: "1rem",
          backgroundColor: "white",
          zIndex: 1
        }}
      >
        <IconButton
          aria-controls="sidemenu"
          data-testid="sidemenu-btn"
          aria-expanded={isSideMenuOpen}
          title={isSideMenuOpen ? "Hide menu" : "Show menu"}
          color="default"
          style={{ flexShrink: 0, marginLeft: "0.75rem", marginRight: "1rem" }}
          onClick={() => setIsSideMenuOpen(state => !state)}
        >
          {isSideMenuOpen ? <Icon icon={Icons.Times} /> : <Icon icon={Icons.Hamburger} />}
        </IconButton>
        LOGO
      </div>
      <div>
        <LeftNav items={items} />
        <div style={{ marginLeft: "16rem" }}>
          <MicrofrontendContainer
            header={
              <ContentHeader
                buttons={formButtonList}
                title={"Example title"}
                subtitle={"This is a subtitle, you can put a short message here"}
              >
                If you need more place to write some explanation to your user, this is the place you
                can do it. Have fun!
              </ContentHeader>
            }
            {...args}
          >
            <div style={{ backgroundColor: "#F7F7F9", width: "100%", ...boxShadow, ...centerText }}>
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
    </MemoryRouter>
  );
};

export const DefaultLeftNav = Template.bind({});
DefaultLeftNav.storyName = "LeftNav";

export default meta;
