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
import { Select as SelectComponent, Props } from "./Select";
import { act, render, waitFor } from "@testing-library/react";
import { Option } from "./Option";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  name: "Example select",
  children: [
    <Option value="option1">Test</Option>,
    <Option value="option2">Test2</Option>,
    <Option value="option3">Test3</Option>,
    <Option value="option4">Test4</Option>,
    <Option value="option5">Test5</Option>,
    <Option value="option6">Test6</Option>,
    <Option value="option7">Test7</Option>,
    <Option value="option8">Test8</Option>,
    <Option value="option9">Test9</Option>,
    <Option value="option10">Test10</Option>,
    <Option value="option11">Test11</Option>,
    <Option value="option12">Test12</Option>,
    <Option value="option13">Test13</Option>,
    <Option value="option14">Test14</Option>,
    <Option value="option15">Test15</Option>,
    <Option value="option16">Test16</Option>,
    <Option value="option17">Test17</Option>
  ],
  value: "option1",
  searchInputProps: { "data-testid": "search-input" },
  // @ts-ignore it does exist Typescript, pls.
  selectButtonProps: { "data-testid": "select-button" }
};

const createSelect = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<SelectComponent {...parameters} data-testid="select" />);
  const select = queries.getByTestId("select");
  const button = queries.getByTestId("select-button");
  const list = select.querySelector('ul[role="listbox"]');
  const dropdownWrapper = select.querySelector(".list-wrapper");

  return {
    ...queries,
    select,
    button,
    list,
    dropdownWrapper
  };
};

describe("Select should render", () => {
  it("renders with 5 options and proper attributes", async () => {
    const { select, button, list, dropdownWrapper } = createSelect(defaultParams => ({
      ...defaultParams,
      children: [
        <Option value="option1">Test</Option>,
        <Option value="option2">Test2</Option>,
        <Option value="option3">Test3</Option>,
        <Option value="option4">Test4</Option>,
        <Option value="option5">Test5</Option>
      ],
      placeholder: "Placeholder",
      value: ""
    }));

    expect(dropdownWrapper).toHaveStyle({ "pointer-events": "none" });

    if (button) {
      await userEvent.click(button);
    }

    expect(select).toBeDefined();
    expect(select.querySelector(".placeholder")).toBeInTheDocument();
    expect(button?.getAttribute("aria-expanded")).toBe("true");
    expect(button?.getAttribute("aria-disabled")).toBe("false");
    expect(list).toBeDefined();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(5);
    expect(dropdownWrapper).toHaveStyle({ "pointer-events": "auto" });
  });

  it("should be disabled", () => {
    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      disabled: true
    }));

    expect(select).toHaveClass("disabled");
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("disabled");
  });

  it("should have an error", () => {
    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      error: true,
      value: "option4"
    }));

    expect(select).toHaveClass("error");
    expect(button).toHaveAttribute("aria-invalid", "true");
    expect(select.querySelector("[data-clear]")).not.toBeInTheDocument();
  });

  it("should have a success icon when success state", () => {
    const { button } = createSelect(defaultParams => ({
      ...defaultParams,
      success: true
    }));

    const icon = button.querySelector("[class*='icon-checkmark-circle-alt']");
    expect(button).toHaveClass("success");
    expect(icon).toBeDefined();
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

      return <SelectComponent {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current!.nodeName).toBe("SELECT");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Select should render with search", () => {
  it("shows the search and filtering works", async () => {
    const { select, list, button, getByTestId } = createSelect();

    const searchInput = getByTestId("search-input");

    if (button) {
      await userEvent.click(button);
    }

    expect(select).toBeTruthy();
    expect(searchInput).toBeTruthy();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(17);

    if (searchInput) {
      await userEvent.type(searchInput, "17");
    }

    expect(list?.querySelectorAll("li[role='option']").length).toBe(1);
    expect(list?.querySelector("li[role='option']")?.innerHTML).toBe("Test17");
  });

  it("should not show the search if disabled", async () => {
    const { select, button, queryByTestId } = createSelect(defaultParams => ({
      ...defaultParams,
      search: { enabled: false }
    }));

    const searchInput = queryByTestId("search-input");

    if (button) {
      await userEvent.click(button);
    }

    expect(select).toBeTruthy();
    expect(searchInput).toBeNull();
  });

  it("should not show the search if only one search property is defined", async () => {
    const { select, button, queryByTestId } = createSelect(defaultParams => ({
      ...defaultParams,
      search: { renderThreshold: 0 }
    }));

    const searchInput = queryByTestId("search-input");

    if (button) {
      await userEvent.click(button);
    }

    expect(select).toBeTruthy();
    expect(searchInput).toBeNull();
  });

  it("should render search when enabled", async () => {
    const { select, button, queryByTestId } = createSelect(defaultParams => ({
      ...defaultParams,
      search: { enabled: true }
    }));

    const searchInput = queryByTestId("search-input");

    if (button) {
      await userEvent.click(button);
    }

    expect(select).toBeTruthy();
    expect(searchInput).not.toBeNull();
  });

  it("should not render search when enabled but too little elements", async () => {
    const { select, button, queryByTestId } = createSelect(defaultParams => ({
      ...defaultParams,
      search: { enabled: true, renderThreshold: 20 }
    }));

    const searchInput = queryByTestId("search-input");

    if (button) {
      await userEvent.click(button);
    }

    expect(select).toBeTruthy();
    expect(searchInput).toBeNull();
  });
});

describe("Selecting options using keyboard", () => {
  it("should focus through list items and select on enterpress", async () => {
    const onChangeHandler = jest.fn();
    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      onChange: onChangeHandler
    }));

    await userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{enter}");

    expect(button).toHaveAttribute("aria-expanded", "false");

    expect(onChangeHandler).toHaveBeenCalled();

    await userEvent.keyboard("{enter}");

    expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");

    expect(select.querySelector('li[data-value="option2"]')).toHaveFocus();

    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");

    expect(select.querySelector('li[data-value="option15"]')).toHaveFocus();
    await userEvent.keyboard("{arrowup}");
    expect(select.querySelector('li[data-value="option14"]')).toHaveFocus();

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");

    expect(select.querySelector('li[data-value="option1"]')).toHaveFocus();

    await userEvent.keyboard("{escape}");

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("should focus through list items and select on spacebar press", async () => {
    const onChangeHandler = jest.fn();
    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      onChange: onChangeHandler
    }));

    await act(() => {
      button.focus();
    });

    expect(button).toHaveFocus();

    await userEvent.keyboard("[Space]");

    expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("[Space]");

    await waitFor(() => expect(button).toHaveAttribute("aria-expanded", "false"));

    expect(onChangeHandler).toHaveBeenCalled();

    await userEvent.keyboard("[Space]");

    expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");

    expect(select.querySelector('li[data-value="option2"]')).toHaveFocus();

    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");

    expect(select.querySelector('li[data-value="option15"]')).toHaveFocus();
    await userEvent.keyboard("{arrowup}");
    expect(select.querySelector('li[data-value="option14"]')).toHaveFocus();

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");

    expect(select.querySelector('li[data-value="option1"]')).toHaveFocus();

    await userEvent.keyboard("{escape}");

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("Expanded should be false whenever we click the body", () => {
  it("closes select on body click", async () => {
    const { button } = createSelect();

    if (button) {
      await userEvent.click(button);
    }

    expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(document.body);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("List expansion", () => {
  it("should expand upwards", async () => {
    const { select, button, dropdownWrapper } = createSelect();

    Object.defineProperty(window, "innerHeight", { value: 500, writable: true });

    select.getBoundingClientRect = () => ({
      x: 50,
      y: 50,
      width: 500,
      height: 50,
      top: 250,
      left: 250,
      right: 750,
      bottom: 750,
      toJSON: () => jest.fn()
    });

    if (button) {
      await userEvent.click(button);
    }

    expect(dropdownWrapper).toHaveStyle({ bottom: "2.75rem" });
  });

  it("should expand downwards with a max height set", async () => {
    const { select, getByRole, dropdownWrapper } = createSelect();

    dropdownWrapper!.getBoundingClientRect = () => ({
      x: 50,
      y: 50,
      width: 500,
      height: 600,
      top: 10,
      left: 250,
      right: 750,
      bottom: 50,
      toJSON: () => jest.fn()
    });

    Object.defineProperty(window, "innerHeight", { value: 500, writable: true });

    select.getBoundingClientRect = () => ({
      x: 50,
      y: 50,
      width: 500,
      height: 40,
      top: 10,
      left: 250,
      right: 750,
      bottom: 50,
      toJSON: () => jest.fn()
    });

    await userEvent.click(document.body);

    const button = getByRole("button");
    await userEvent.click(button);

    expect(dropdownWrapper).toHaveStyle({ maxHeight: "474px" });
    expect(dropdownWrapper).toHaveStyle({ top: "2.75rem" });
  });
});

describe("previously selected item", () => {
  it("should have focus", async () => {
    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      value: "option4"
    }));

    await act(() => {
      button.focus();
    });

    const option1 = select.querySelector('li[data-value="option1"]')!;

    await userEvent.keyboard("{enter}");

    expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{enter}");

    await userEvent.click(button);

    expect(document.activeElement).toStrictEqual(option1);
  });
});

describe("search input", () => {
  it("listens to different keyboard inputs", async () => {
    const { button, select } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    await act(() => {
      (searchInput as HTMLElement).focus();
    });

    await userEvent.keyboard("{arrowup}");
    expect(select.querySelector('li[data-value="option17"]')).toHaveFocus();
  });

  it("move focus with arrowdown", async () => {
    const { button, select } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    await act(() => {
      (searchInput as HTMLElement).focus();
    });

    await userEvent.keyboard("{arrowdown}");
    expect(select.querySelector('li[data-value="option1"]')).toHaveFocus();
  });

  it("select with enter", async () => {
    const { button, select } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    await act(() => {
      (searchInput as HTMLElement).focus();
    });

    await userEvent.keyboard("{enter}");
    expect(select.querySelector('li[data-value="option1"]')).toHaveFocus();
  });

  it("expand list with arrowdown", async () => {
    const { button } = createSelect();

    await act(() => {
      button.focus();
    });

    await userEvent.keyboard("{arrowdown}");

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("expand list with arrowup", async () => {
    const { button } = createSelect();

    await act(() => {
      button.focus();
    });

    await userEvent.keyboard("{arrowup}");

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("expand list with space", async () => {
    const { button } = createSelect();

    await act(() => {
      button.focus();
    });

    await userEvent.keyboard("[space]");

    await waitFor(() => expect(button).toHaveAttribute("aria-expanded", "true"));
  });

  it("closes on escape", async () => {
    const { button } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    await userEvent.tab();

    await waitFor(() => expect(searchInput).toHaveFocus());

    await userEvent.keyboard("{escape}");

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes on tab", async () => {
    const { button } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    await userEvent.tab();

    expect(searchInput).toHaveFocus();

    await userEvent.tab();
  });
});

describe("home and end keys work", () => {
  it("goes to home and end", async () => {
    const { button } = createSelect();

    await userEvent.click(button);

    const firstOption = document.querySelector('li[data-value="option1"]');
    const lastOption = document.querySelector('li[data-value="option17"]');
    await userEvent.keyboard("{end}");

    expect(lastOption).toHaveFocus();

    await userEvent.keyboard("{home}");

    expect(firstOption).toHaveFocus();
  });
});

describe("search input props work", () => {
  it("adds a classname [DEPRECATED]", () => {
    createSelect(defaultParams => ({
      ...defaultParams,
      searchInputProps: { wrapperProps: { className: "test-wrapper-classname" } }
    }));

    expect(document.querySelector(".test-wrapper-classname")).toBeInTheDocument();
  });

  it("adds a classname", () => {
    createSelect(defaultParams => ({
      ...defaultParams,
      search: { searchInputProps: { wrapperProps: { className: "test-wrapper-classname" } } }
    }));

    expect(document.querySelector(".test-wrapper-classname")).toBeInTheDocument();
  });
});

describe("meta arrow left and right", () => {
  it("goes to the last item in the list when pressing meta right", async () => {
    const { button } = createSelect();

    await act(() => {
      button.focus();
    });

    await userEvent.keyboard("{enter}");

    expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{Meta>}{arrowright}");

    await waitFor(() => expect(document.querySelector('li[data-value="option17"]')).toHaveFocus());
  });

  it("goes to the first item in the list when pressing meta left", async () => {
    const { button } = createSelect();

    await userEvent.click(button);

    await userEvent.keyboard("{Meta>}{arrowright}");

    await waitFor(() => expect(document.querySelector('li[data-value="option17"]')).toHaveFocus());

    await userEvent.keyboard("{Meta>}{arrowleft}");

    expect(document.querySelector('li[data-value="option1"]')).toHaveFocus();
  });
});
