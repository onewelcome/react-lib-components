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
import { MultiSelect as MultiSelectComponent } from "./MultiSelect";
import { act, render, waitFor, getByRole } from "@testing-library/react";
import { MultiOption } from "./MultiOption";
import userEvent from "@testing-library/user-event";
import { MultiSelectProps } from "../Select.interfaces";

const defaultParams: MultiSelectProps = {
  name: "Example select",
  children: [
    <MultiOption value="option1">Test</MultiOption>,
    <MultiOption value="option2">Test2</MultiOption>,
    <MultiOption value="option3">Test3</MultiOption>,
    <MultiOption value="option4">Test4</MultiOption>,
    <MultiOption value="option5">Test5</MultiOption>,
    <MultiOption value="option6">Test6</MultiOption>,
    <MultiOption value="option7">Test7</MultiOption>,
    <MultiOption value="option8">Test8</MultiOption>,
    <MultiOption value="option9">Test9</MultiOption>,
    <MultiOption value="option10">Test10</MultiOption>,
    <MultiOption value="option11">Test11</MultiOption>,
    <MultiOption value="option12">Test12</MultiOption>,
    <MultiOption value="option13">Test13</MultiOption>,
    <MultiOption value="option14">Test14</MultiOption>,
    <MultiOption value="option15">Test15</MultiOption>,
    <MultiOption value="option16">Test16</MultiOption>,
    <MultiOption value="option17">Test17</MultiOption>
  ],
  value: [],
  searchInputProps: { "data-testid": "search-input" },
  // @ts-ignore it does exist Typescript, pls.
  selectButtonProps: { "data-testid": "select-button" }
};

const createMultiSelect = (params?: (defaultParams: MultiSelectProps) => MultiSelectProps) => {
  let parameters: MultiSelectProps = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<MultiSelectComponent {...parameters} data-testid="multiselect" />);
  const select = queries.getByTestId("multiselect");
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

const scrollTo = jest.fn;

const turnOnScrollToFunctionSupportInTest = () => {
  Element.prototype.scrollTo = scrollTo;
};

const getSelectedOptionValue = (select: HTMLElement) =>
  getByRole(select, "option", { selected: true }).dataset.value;

describe("Select should render", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("renders with 5 options and proper attributes", async () => {
    const { select, button, list, dropdownWrapper } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      children: [
        <MultiOption value="option1">Test</MultiOption>,
        <MultiOption value="option2">Test2</MultiOption>,
        <MultiOption value="option3">Test3</MultiOption>,
        <MultiOption value="option4">Test4</MultiOption>,
        <MultiOption value="option5">Test5</MultiOption>
      ],
      placeholder: "Placeholder",
      value: []
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
    const { select, button } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      disabled: true
    }));

    expect(select).toHaveClass("disabled");
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("disabled");
  });

  it("should have an error", () => {
    const { select, button } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      error: true,
      value: ["option4"]
    }));

    expect(select).toHaveClass("error");
    expect(button).toHaveAttribute("aria-invalid", "true");
    expect(select.querySelector("[data-clear]")).not.toBeInTheDocument();
  });

  it("should have a success icon when success state", () => {
    const { select } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      success: true
    }));

    const icon = select.querySelector("[class*='icon-checkmark-circle-alt']");
    expect(select).toHaveClass("success");
    expect(icon).toBeDefined();
  });
});

describe("ref should work", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

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

      return <MultiSelectComponent {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current!.nodeName).toBe("SELECT");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Select should render with search", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("shows the search and filtering works", async () => {
    const { select, list, button, getByTestId } = createMultiSelect();

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
});

describe("Selecting options using keyboard", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("should open list on enter press", async () => {
    const { button } = createMultiSelect(defaultParams => ({
      ...defaultParams
    }));

    await act(() => {
      button.focus();
    });

    expect(button).toHaveFocus();

    await userEvent.keyboard("[enter]");

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("should focus through list items and select on enter press", async () => {
    const onChangeHandler = jest.fn();
    const { select, button } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      onChange: onChangeHandler
    }));

    await act(() => {
      button.focus();
    });

    expect(button).toHaveFocus();

    await userEvent.keyboard("[space]");

    expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("[enter]");
    await userEvent.keyboard("{escape}");

    await waitFor(() => expect(button).toHaveAttribute("aria-expanded", "false"));

    expect(onChangeHandler).toHaveBeenCalled();

    await userEvent.keyboard("[enter]");

    expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{arrowdown}");

    expect(getSelectedOptionValue(select)).toEqual("option2");

    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");

    expect(getSelectedOptionValue(select)).toEqual("option15");
    await userEvent.keyboard("{arrowup}");
    expect(getSelectedOptionValue(select)).toEqual("option14");

    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");

    expect(getSelectedOptionValue(select)).toEqual("option1");

    await userEvent.keyboard("{escape}");

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("Expanded should be false whenever we click the body", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("closes select on body click", async () => {
    const { button } = createMultiSelect();

    if (button) {
      await userEvent.click(button);
    }

    expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(document.body);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("List expansion", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("should expand upwards", async () => {
    const { select, button, dropdownWrapper } = createMultiSelect();

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
    const { select, getByRole, dropdownWrapper, debug } = createMultiSelect();

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
    expect(dropdownWrapper).toHaveStyle({ maxHeight: "434px" });
    expect(dropdownWrapper).toHaveStyle({ top: "2.75rem" });
  });
});

describe("search input", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("should have first option selected when expanding list", async () => {
    const { button, select } = createMultiSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    expect(searchInput).toHaveFocus();

    expect(getSelectedOptionValue(select)).toEqual("option1");
  });

  it("should have last option selected when expanding list and pressing arrow up", async () => {
    const { button, select } = createMultiSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    expect(searchInput).toHaveFocus();

    expect(getSelectedOptionValue(select)).toEqual("option1");
    await userEvent.keyboard("{arrowup}");
    expect(getSelectedOptionValue(select)).toEqual("option17");
  });

  it("should have second option selected when expanding list nad pressing arrow down", async () => {
    const { button, select } = createMultiSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    expect(searchInput).toHaveFocus();

    await userEvent.keyboard("{arrowdown}");
    expect(getSelectedOptionValue(select)).toEqual("option2");
  });

  it("should select option with enter", async () => {
    const onChangeHandler = jest.fn();
    const { select, button } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      onChange: onChangeHandler
    }));

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    expect(searchInput).toHaveFocus();

    await userEvent.keyboard("{arrowdown}");
    expect(getSelectedOptionValue(select)).toEqual("option2");

    expect(onChangeHandler).toHaveBeenCalledTimes(0);
    await userEvent.keyboard("{enter}");
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });

  it("should expand list with arrowdown", async () => {
    const { button } = createMultiSelect();

    await act(() => {
      button.focus();
    });

    expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.keyboard("{arrowdown}");
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("should expand list with arrowup", async () => {
    const { button } = createMultiSelect();

    await act(() => {
      button.focus();
    });

    expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.keyboard("{arrowup}");
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("should expand list with space", async () => {
    const { button } = createMultiSelect();

    await act(() => {
      button.focus();
    });

    expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.keyboard("[space]");
    await waitFor(() => expect(button).toHaveAttribute("aria-expanded", "true"));
  });

  it("should close on escape", async () => {
    const { button } = createMultiSelect();

    const searchInput = document.querySelector(".select-search")!;

    await userEvent.click(button);

    await userEvent.tab();

    await waitFor(() => expect(searchInput).toHaveFocus());

    expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.keyboard("{escape}");
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("home and end keys work", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("goes to home and end", async () => {
    const { button, select } = createMultiSelect();

    await userEvent.click(button);

    expect(getSelectedOptionValue(select)).toEqual("option1");

    await userEvent.keyboard("{end}");
    expect(getSelectedOptionValue(select)).toEqual("option17");

    await userEvent.keyboard("{home}");
    expect(getSelectedOptionValue(select)).toEqual("option1");
  });
});

describe("search input props work", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("adds a classname", () => {
    createMultiSelect(defaultParams => ({
      ...defaultParams,
      searchInputProps: { className: "test-wrapper-classname" }
    }));

    expect(document.querySelector(".test-wrapper-classname")).toBeInTheDocument();
  });
});

describe("meta arrow left and right", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("goes to the last item in the list when pressing meta right", async () => {
    const { select, button } = createMultiSelect();

    await act(() => {
      button.focus();
    });

    await userEvent.keyboard("{enter}");

    expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{Meta>}{arrowright}");

    expect(getSelectedOptionValue(select)).toEqual("option17");
  });

  it("goes to the first item in the list when pressing meta left", async () => {
    const { select, button } = createMultiSelect();

    await userEvent.click(button);

    await userEvent.keyboard("{Meta>}{arrowright}");

    expect(getSelectedOptionValue(select)).toEqual("option17");

    await userEvent.keyboard("{Meta>}{arrowleft}");

    expect(getSelectedOptionValue(select)).toEqual("option1");
  });
});
