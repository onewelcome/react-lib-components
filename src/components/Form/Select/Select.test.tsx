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
import { Select as SelectComponent } from "./Select";
import { act, render, waitFor } from "@testing-library/react";
import { Option } from "./Option";
import userEvent from "@testing-library/user-event";
import { SingleSelectProps } from "./Select.interfaces";

export const defaultParams: SingleSelectProps = {
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

export const createSelect = (params?: (defaultParams: SingleSelectProps) => SingleSelectProps) => {
  let parameters: SingleSelectProps = defaultParams;
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
    const { select, getByRole, dropdownWrapper, debug } = createSelect();

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

    debug();

    expect(dropdownWrapper).toHaveStyle({ maxHeight: "434px" });
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
      search: {
        enabled: true,
        searchInputProps: { wrapperProps: { className: "test-wrapper-classname" } }
      }
    }));

    expect(document.querySelector(".test-wrapper-classname")).toBeInTheDocument();
  });
});

describe("addBtn feature", () => {
  it("should not be visible by default", async () => {
    const { button, queryByTestId } = createSelect();

    await userEvent.click(button);

    await waitFor(() => expect(queryByTestId("select-action-button")).toBeNull());
  });

  it("should be visible when action defined", async () => {
    const label = "You shall never click me";
    const onAddNewCallback = jest.fn();
    const { button, findByTestId } = createSelect(defaultParams => ({
      ...defaultParams,
      addNew: { label: label, onAddNew: () => onAddNewCallback() }
    }));
    const addNewBtn = await findByTestId("select-action-button");

    await userEvent.click(button);

    await waitFor(() => expect(addNewBtn).toBeDefined());
    await waitFor(() => expect(addNewBtn?.textContent).toEqual(label));

    await userEvent.click(addNewBtn);

    await waitFor(() => expect(onAddNewCallback).toHaveBeenCalled());
  });
});
