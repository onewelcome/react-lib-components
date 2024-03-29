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

import React, { useEffect, useRef } from "react";
import { ContextMenu, Props } from "./ContextMenu";
import { render } from "@testing-library/react";
import { Button } from "../Button/Button";
import { ContextMenuItem } from "./ContextMenuItem";
import userEvent from "@testing-library/user-event";

const onShow = jest.fn();
const onClick = jest.fn();

const defaultParams: Props = {
  id: "example-contextmenu",
  trigger: <Button data-testid="trigger">Click me for a context menu</Button>,
  children: [
    <ContextMenuItem onClick={onClick} data-testid="contextmenuitem" key="1">
      Example item 1
    </ContextMenuItem>,
    <ContextMenuItem onClick={onClick} data-testid="contextmenuitem2" key="2">
      Example item 2
    </ContextMenuItem>,
    <ContextMenuItem onClick={onClick} data-testid="contextmenuitem3" key="3">
      Example item 3
    </ContextMenuItem>
  ],
  show: false,
  onShow: onShow
};

const createContextMenu = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(<ContextMenu {...parameters} data-testid="contextmenu"></ContextMenu>);

  const contextmenu = queries.getByTestId("contextmenu");
  const trigger = queries.getByTestId("trigger");

  return {
    ...queries,
    contextmenu,
    trigger
  };
};

describe("<ContextMenu />", () => {
  it("should render without crashing", () => {
    const { contextmenu } = createContextMenu();

    expect(contextmenu).toBeTruthy();
  });

  it("should execute onShow function", async () => {
    const { trigger } = createContextMenu();

    await userEvent.click(trigger);

    expect(onShow).toHaveBeenCalled();
  });

  it("should execute onClick function on ContextMenuItem", async () => {
    const { getByTestId } = createContextMenu(defaultParams => ({
      ...defaultParams,
      show: true
    }));

    const button = getByTestId("contextmenuitem");

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should set active state based on value prop", async () => {
    const onChange = jest.fn();
    const { getByTestId } = createContextMenu(defaultParams => ({
      ...defaultParams,
      show: true,
      value: 1,
      onChange
    }));

    const button = getByTestId("contextmenuitem");
    const button1 = getByTestId("contextmenuitem2");
    const button2 = getByTestId("contextmenuitem3");

    expect(button).not.toHaveClass("active");
    expect(button1).toHaveClass("active");
    expect(button2).not.toHaveClass("active");

    await userEvent.click(button);

    expect(onChange).toHaveBeenCalled();
  });

  it("should set active state based on showActiveState ContextMenuItem prop", async () => {
    const onChange = jest.fn();
    const { getByTestId } = createContextMenu(defaultParams => ({
      ...defaultParams,
      show: true,
      children: [
        <ContextMenuItem onClick={onClick} data-testid="contextmenuitem" key="1" showActiveState>
          Example item 1
        </ContextMenuItem>,
        <ContextMenuItem onClick={onClick} data-testid="contextmenuitem2" key="2">
          Example item 2
        </ContextMenuItem>
      ]
    }));

    const button = getByTestId("contextmenuitem");
    const button1 = getByTestId("contextmenuitem2");

    expect(button).toHaveClass("active");
    expect(button1).not.toHaveClass("active");
  });

  it("should pass custom class to ContextMenuItem", () => {
    const { getByRole } = createContextMenu(defaultParams => ({
      ...defaultParams,
      show: true,
      children: [
        <ContextMenuItem data-testid="contextmenuitem" key="1" className="custom">
          Item 1
        </ContextMenuItem>
      ]
    }));

    const child = getByRole("menuitem");

    expect(child.parentElement).toHaveClass("custom");
  });

  it("should render the decorative element", () => {
    const { getByText } = createContextMenu(defaultParams => ({
      ...defaultParams,
      show: true,
      decorativeElement: <div>test</div>
    }));

    expect(getByText("test")).toBeInTheDocument();
  });

  it("should generate ID if not passed", () => {
    const { getByTestId } = render(
      <ContextMenu
        trigger={<Button data-testid="trigger">Click me for a context menu</Button>}
        children={[
          <ContextMenuItem onClick={onClick} data-testid="contextmenuitem" key="1">
            Example item 1
          </ContextMenuItem>
        ]}
      />
    );

    expect(getByTestId("trigger").id).toMatch(/ID-*/);
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref);
        }
      }, [ref]);

      return <ContextMenu {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("accessibility controls", () => {
  it("opening works correctly with arrow key down, then navigation should work with arrow keys", async () => {
    const { getByTestId, trigger } = createContextMenu();
    const firstContextMenuItem = getByTestId("contextmenuitem");
    const secondContextMenuItem = getByTestId("contextmenuitem2");
    const thirdContextMenuItem = getByTestId("contextmenuitem3");

    await userEvent.tab();
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(firstContextMenuItem).toHaveFocus();

    await userEvent.keyboard("{arrowdown}");
    expect(secondContextMenuItem).toHaveFocus();

    await userEvent.keyboard("{arrowdown}");
    expect(thirdContextMenuItem).toHaveFocus();

    await userEvent.keyboard("{arrowdown}");
    expect(firstContextMenuItem).toHaveFocus();

    await userEvent.keyboard("{arrowup}");
    expect(thirdContextMenuItem).toHaveFocus();

    await userEvent.keyboard("{arrowup}");
    expect(secondContextMenuItem).toHaveFocus();
  });

  it("opens correctly with enter key, closing works with escape key.", async () => {
    const { trigger } = createContextMenu();

    await userEvent.tab();
    await userEvent.keyboard("{enter}");

    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{escape}");

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("opens correctly with space, home and end buttons work", async () => {
    const { trigger, getByTestId } = createContextMenu();
    const firstContextMenuItem = getByTestId("contextmenuitem");
    const thirdContextMenuItem = getByTestId("contextmenuitem3");

    await userEvent.tab();
    await userEvent.keyboard("[space]");

    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{end}");

    expect(thirdContextMenuItem).toHaveFocus();

    await userEvent.keyboard("{home}");

    expect(firstContextMenuItem).toHaveFocus();
  });

  it("opens correctly with space, navigate with arrow keys, select with enter", async () => {
    onClick.mockImplementation(e => {
      expect(e.target.getAttribute("data-testid")).toBe("contextmenuitem3");
    });

    const { trigger, getByTestId } = createContextMenu(defaultParams => ({
      ...defaultParams
    }));
    const thirdContextMenuItem = getByTestId("contextmenuitem3");

    await userEvent.tab();
    await userEvent.keyboard("[space]");

    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");

    expect(thirdContextMenuItem).toHaveFocus();

    await userEvent.keyboard("{enter}");

    expect(onClick).toHaveBeenCalled();
  });

  it("opens correctly with enter, navigate with arrow keys, select with space", async () => {
    onClick.mockImplementation(e => {
      expect(e.target.getAttribute("data-testid")).toBe("contextmenuitem3");
    });

    const { trigger, getByTestId } = createContextMenu(defaultParams => ({
      ...defaultParams
    }));
    const thirdContextMenuItem = getByTestId("contextmenuitem3");

    await userEvent.tab();
    await userEvent.keyboard("{enter}");

    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");

    expect(thirdContextMenuItem).toHaveFocus();

    await userEvent.keyboard("[space]");

    expect(onClick).toHaveBeenCalled();

    await userEvent.keyboard("[space]");

    expect(thirdContextMenuItem).toHaveFocus();
  });

  it("opens correctly with enter, navigate with arrow keys skipping the decorative element", async () => {
    onClick.mockImplementation(e => {
      expect(e.target.getAttribute("data-testid")).toBe("contextmenuitem3");
    });

    const { trigger, getByTestId, getByText } = createContextMenu(defaultParams => ({
      ...defaultParams,
      decorativeElement: <div>test</div>
    }));
    const thirdContextMenuItem = getByTestId("contextmenuitem3");

    await userEvent.tab();
    await userEvent.keyboard("{enter}");

    expect(getByText("test")).toBeInTheDocument();

    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");

    expect(thirdContextMenuItem).toHaveFocus();

    await userEvent.keyboard("[space]");

    expect(onClick).toHaveBeenCalled();

    await userEvent.keyboard("[space]");

    expect(thirdContextMenuItem).toHaveFocus();
  });
});
