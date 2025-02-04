import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Icon, Icons } from "../../../Icon/Icon";
import { LeftNav, Props } from "./LeftNav";
import { MenuItem } from "./LeftNav.interfaces";

const mockNavigate = jest.fn();
const mockOnItemClick = jest.fn();

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
    disabled: true
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
      }
    ]
  },
  { key: "menu4", title: "Menu Item 4", path: "/configuration/menu4" }
];

const renderLeftNav = (params?: Partial<Props>) => {
  return render(
    <MemoryRouter>
      <LeftNav
        isSideMenuOpen={true}
        items={items}
        data-testid={"left-nav"}
        navigate={mockNavigate}
        onItemClick={mockOnItemClick}
        {...params}
      />
    </MemoryRouter>
  );
};

describe("<LeftNav />", () => {
  test("should render without crashing", () => {
    const { findByTestId, getByRole } = renderLeftNav();

    const renderedLeftNav = findByTestId("left-nav");
    expect(renderedLeftNav).toBeDefined();
    expect(getByRole("link", { name: "Menu Item 1" })).toBeDefined();
    expect(getByRole("link", { name: "Menu Item 2" })).toBeDefined();
    expect(getByRole("link", { name: "Menu Item 3" })).toBeDefined();
    expect(getByRole("link", { name: "Sub Menu Item 3.1" })).toBeDefined();
  });

  describe("interacts via mouse", () => {
    test("should allow to interact with menu items via mouse", async () => {
      //when
      const { getByRole } = renderLeftNav();
      await userEvent.click(getByRole("link", { name: "Menu Item 1" }));
      //then
      expect(mockOnItemClick).toHaveBeenCalledWith("/configuration/menu1");
      //when
      await userEvent.click(getByRole("link", { name: "Menu Item 2" }));
      //then
      expect(mockOnItemClick).not.toHaveBeenCalledWith("/configuration/menu2");
      //when
      await userEvent.click(getByRole("link", { name: "Menu Item 3" }));
      //then
      expect(mockOnItemClick).toHaveBeenCalledWith("/configuration/menu3", true);
      //when
      await userEvent.click(getByRole("link", { name: "Sub Menu Item 3.1" }));
      //then
      expect(mockOnItemClick).toHaveBeenCalledWith("/configuration/menu31");
    });

    test("should not allow to interact with disabled menu items via mouse", async () => {
      //given
      const disabledItems: MenuItem[] = [
        {
          key: "menu2",
          title: "Menu Item 2",
          path: "/configuration/menu2",
          disabled: true
        },
        {
          key: "menu3",
          title: "Menu Item 3",
          path: "/configuration/menu3",
          items: [
            {
              key: "menu3.1",
              title: "Sub Menu Item 3.1",
              path: "/configuration/menu31",
              disabled: true
            }
          ]
        }
      ];
      //when
      const { getByRole } = renderLeftNav({ items: disabledItems });
      await userEvent.click(getByRole("link", { name: "Menu Item 2" }));
      await userEvent.click(getByRole("link", { name: "Sub Menu Item 3.1" }));
      //then
      expect(mockOnItemClick).toHaveBeenCalledTimes(0);
      //when
      await userEvent.click(getByRole("link", { name: "Menu Item 3" }));
      //then
      expect(mockOnItemClick).toHaveBeenCalledTimes(1);
    });

    test("should not allow to interact with children of disabled menu items", async () => {
      //given
      const disabledItems: MenuItem[] = [
        {
          key: "menu3",
          title: "Menu Item 3",
          path: "/configuration/menu3",
          disabled: true,
          items: [
            {
              key: "menu3.1",
              title: "Sub Menu Item 3.1",
              path: "/configuration/menu31",
              items: [
                {
                  key: "menu3.1.1",
                  title: "Sub Menu Item 3.1.1",
                  path: "/configuration/menu311"
                }
              ]
            }
          ]
        }
      ];
      //when
      const { getByRole, queryByRole } = renderLeftNav({ items: disabledItems });
      //then
      expect(queryByRole("link", { name: "Menu Item 3" })).toBeDefined();
      expect(queryByRole("link", { name: "Sub Menu Item 3.1" })).toBeNull();
      expect(queryByRole("link", { name: "Sub Menu Item 3.1.1" })).toBeNull();
      //when
      await userEvent.click(getByRole("link", { name: "Menu Item 3" }));
      //then
      expect(mockOnItemClick).toHaveBeenCalledTimes(0);
    });
  });
  describe("interacts via keyboard", () => {
    const doKeyboardAction = (actionKey: string) => {
      switch (actionKey) {
        case "enter":
        case "space": {
          return userEvent.keyboard(`[${actionKey}]`);
        }
        case "escape":
        case "arrowdown":
        case "arrowup":
        case "arrowright":
        case "arrowleft": {
          return userEvent.keyboard(`{${actionKey}}`);
        }
        default:
          throw new Error(`Unsupported actionKey: ${actionKey}`);
      }
    };

    test.each([
      ["arrowdown", "arrowup", "arrowright", "arrowleft"],
      ["arrowdown", "arrowup", "space", "escape"],
      ["arrowdown", "arrowup", "enter", "arrowleft"]
    ])(
      "should allow to traverse and interact with menu items via %s, and %s, and %s and %s keys",
      async (moveNextKey: string, movePrevKey: string, moveInKey: string, moveOutKey: string) => {
        //when
        const { getByRole } = renderLeftNav();
        getByRole("link", { name: "Menu Item 1" }).focus();
        await doKeyboardAction(movePrevKey);
        //then
        expect(getByRole("link", { name: "Menu Item 1" })).toHaveFocus();
        //when
        await doKeyboardAction(moveNextKey);
        //then
        expect(getByRole("button", { name: "Menu Item 3" })).toHaveFocus();
        //when
        await doKeyboardAction(moveNextKey);
        expect(getByRole("link", { name: "Menu Item 4" })).toHaveFocus();
        //when
        await doKeyboardAction(movePrevKey);
        //then
        expect(getByRole("button", { name: "Menu Item 3" })).toHaveFocus();
        //when
        await doKeyboardAction(moveInKey);
        //then
        expect(getByRole("link", { name: "Sub Menu Item 3.1" })).toHaveFocus();
        expect(mockOnItemClick).toHaveBeenCalledTimes(0);
        //when
        await doKeyboardAction(moveNextKey);
        //then
        expect(getByRole("link", { name: "Sub Menu Item 3.1" })).toHaveFocus();
        //when
        await doKeyboardAction(movePrevKey);
        //then
        expect(getByRole("link", { name: "Sub Menu Item 3.1" })).toHaveFocus();
        //when
        await doKeyboardAction(moveOutKey);
        //then
        expect(getByRole("button", { name: "Menu Item 3" })).toHaveFocus();
        //when
        await doKeyboardAction(moveNextKey);
        //then
        expect(getByRole("link", { name: "Menu Item 4" })).toHaveFocus();
        //when
        await doKeyboardAction(moveNextKey);
        //then
        expect(getByRole("link", { name: "Menu Item 4" })).toHaveFocus();
      }
    );

    it("should allow to traverse and interact with menu items via tab, and enter and escape keys", async () => {
      //when
      const { getByRole } = renderLeftNav();
      getByRole("link", { name: "Menu Item 1" }).focus();
      await userEvent.tab();
      //then
      expect(getByRole("button", { name: "Menu Item 3" })).toHaveFocus();
      //when
      await userEvent.tab();
      //then
      expect(getByRole("link", { name: "Menu Item 3" })).toHaveFocus();
      //when
      await userEvent.tab();
      expect(getByRole("link", { name: "Menu Item 4" })).toHaveFocus();
      //when
      await userEvent.tab({ shift: true });
      //then
      expect(getByRole("link", { name: "Menu Item 3" })).toHaveFocus();
      //when
      await userEvent.keyboard("[enter]");
      //then
      expect(getByRole("link", { name: "Sub Menu Item 3.1" })).toHaveFocus();
      expect(mockOnItemClick).toHaveBeenCalledTimes(0);
      //when
      await userEvent.tab();
      //then
      expect(getByRole("link", { name: "Menu Item 4" })).toHaveFocus();
      //when
      await userEvent.tab({ shift: true });
      //then
      expect(getByRole("link", { name: "Sub Menu Item 3.1" })).toHaveFocus();
      //when
      await userEvent.keyboard("{escape}");
      //then
      expect(getByRole("button", { name: "Menu Item 3" })).toHaveFocus();
      //when
      await userEvent.tab();
      //then
      expect(getByRole("link", { name: "Menu Item 3" })).toHaveFocus();
      //when
      await userEvent.tab();
      //then
      expect(getByRole("link", { name: "Menu Item 4" })).toHaveFocus();
      //when
      await userEvent.tab();
      //then
      expect(document.body).toHaveFocus();
    });
  });
});
