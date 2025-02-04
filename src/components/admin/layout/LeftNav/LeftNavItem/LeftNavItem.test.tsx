import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { Icon, Icons } from "../../../../Icon/Icon";
import { MenuItem } from "../LeftNav.interfaces";
import { LeftNavItem, Props } from "./LeftNavItem";

const mockNavigate = jest.fn();
const mockOnItemClick = jest.fn();

const item: MenuItem = {
  key: "menu1",
  title: "Menu Item 1",
  path: "/configuration/menu1"
};

const renderLeftNavItem = (params?: Partial<Props>) => {
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
