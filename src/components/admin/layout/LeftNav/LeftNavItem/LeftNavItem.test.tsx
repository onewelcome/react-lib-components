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

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { Icon, Icons } from "../../../../Icon/Icon";
import { MenuItem } from "../LeftNav.interfaces";
import { LeftNavItem } from "./LeftNavItem";
import { LeftNavItemProps } from "./LeftNavItem.interface";

const mockNavigate = jest.fn();
const mockOnItemClick = jest.fn();

const item: MenuItem = {
  key: "menu1",
  title: "Menu Item 1",
  path: "/configuration/menu1"
};

const renderLeftNavItem = (params?: Partial<LeftNavItemProps>) => {
  const ExampleComponent = () => {
    const location = useLocation();

    useEffect(() => {
      mockNavigate(location.pathname);
    }, [location]);

    return (
      <LeftNavItem
        item={item}
        data-testid={"left-nav-item"}
        navigate={mockNavigate}
        onItemClick={mockOnItemClick}
        refItems={{
          addElementReference: jest.fn(),
          getNextElement: jest.fn(),
          getNextElementOnSameLevel: jest.fn(),
          getPrevElementOnSameLevel: jest.fn(),
          getFirstElementOnSameLevel: jest.fn(),
          getLastElementOnSameLevel: jest.fn(),
          getParentElement: jest.fn(),
          getItemMap: jest.fn()
        }}
        {...params}
      />
    );
  };

  return render(
    <MemoryRouter>
      <ExampleComponent />
    </MemoryRouter>
  );
};

describe("<LeftNavItem />", () => {
  test("should render without crashing", () => {
    const { findByTestId, getByRole } = renderLeftNavItem();

    const renderedLeftNavItem = findByTestId("left-nav-item");
    expect(renderedLeftNavItem).toBeDefined();
    expect(getByRole("link", { name: "Menu Item 1" })).toBeDefined();
  });

  test("should render with icon", () => {
    const { findByTestId, getByRole, getByTestId } = renderLeftNavItem({
      item: {
        ...item,
        iconComponent: <Icon data-testid="icon-test-id" icon={Icons.UploadOutline} />
      }
    });

    const renderedLeftNavItem = findByTestId("left-nav-item");
    expect(renderedLeftNavItem).toBeDefined();
    expect(getByRole("link", { name: "Menu Item 1" })).toBeDefined();
    expect(getByTestId("icon-test-id")).toBeDefined();
  });

  test("should render with disabled state", () => {
    const { findByTestId, getByRole } = renderLeftNavItem({
      item: {
        ...item,
        disabled: true
      }
    });

    const renderedLeftNavItem = findByTestId("left-nav-item");
    expect(renderedLeftNavItem).toBeDefined();
    expect(getByRole("link", { name: "Menu Item 1" })).toHaveAttribute("aria-disabled", "true");
  });

  test("should render nested items", () => {
    const { findByTestId, getByRole } = renderLeftNavItem({
      item: {
        ...item,
        items: [
          {
            key: "menu1.1",
            title: "Sub Menu Item 1.1",
            path: "/configuration/menu11"
          }
        ]
      }
    });

    const renderedLeftNavItem = findByTestId("left-nav-item");
    expect(renderedLeftNavItem).toBeDefined();
    expect(getByRole("button", { name: "Menu Item 1" })).toBeDefined();
    expect(getByRole("link", { name: "Sub Menu Item 1.1" })).toBeDefined();
  });

  describe("interacts", () => {
    test("should non-disabled links be clickable", async () => {
      //given
      const { getByRole } = renderLeftNavItem({
        item: {
          ...item,
          items: [
            {
              key: "menu1.1",
              title: "Sub Menu Item 1.1",
              path: "/configuration/menu11",
              disabled: true
            },
            {
              key: "menu1.2",
              title: "Sub Menu Item 1.2",
              path: "/configuration/menu12"
            }
          ]
        }
      });
      //when
      await userEvent.click(getByRole("link", { name: "Menu Item 1" }));
      //then
      expect(mockNavigate).toHaveBeenCalledWith(item.path);
      expect(mockOnItemClick).toHaveBeenCalledWith(item.path, true);
      mockNavigate.mockReset();
      mockOnItemClick.mockReset();
      //when
      await userEvent.click(getByRole("link", { name: "Sub Menu Item 1.1" }));
      //then
      expect(mockNavigate).not.toHaveBeenCalled();
      expect(mockOnItemClick).not.toHaveBeenCalled();
      //when
      await userEvent.click(getByRole("link", { name: "Sub Menu Item 1.2" }));
      //then
      expect(mockNavigate).toHaveBeenCalledWith("/configuration/menu12");
      expect(mockOnItemClick).toHaveBeenCalledWith("/configuration/menu12");
    });
  });
});
