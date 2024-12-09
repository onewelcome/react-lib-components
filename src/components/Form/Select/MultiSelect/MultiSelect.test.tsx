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
import { MultiSelect } from "./MultiSelect";
import { render } from "@testing-library/react";
import { MultiOption } from "./MultiOption";
import userEvent from "@testing-library/user-event";
import { MultiSelectProps } from "../Select.interfaces";
import { MockDOMRect } from "../../../../util/unitTestUtils";

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
  search: { enabled: true, searchInputProps: { "data-testid": "search-input" } },
  selectButtonProps: { "data-testid": "select-button" }
};

export const createMultiSelect = (
  params?: (defaultParams: MultiSelectProps) => MultiSelectProps
) => {
  let parameters: MultiSelectProps = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<MultiSelect {...parameters} data-testid="multiselect" />);
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

export const turnOnScrollToFunctionSupportInTest = () => {
  Element.prototype.scrollTo = scrollTo;
};

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

      return <MultiSelect {...defaultParams} data-ref="testing" ref={ref} />;
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

  it("and filtering should escape reserved chars", async () => {
    const { list, button, getByTestId } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      children: [<MultiOption value="option1">\</MultiOption>]
    }));

    const searchInput = getByTestId("search-input");
    await userEvent.click(button);
    await userEvent.type(searchInput, "\\");

    expect(list?.querySelectorAll("li[role='option']").length).toBe(1);
    expect(list?.querySelector("li[role='option']")?.innerHTML).toBe("\\");
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
    const { select, button } = createMultiSelect();

    const selectTop = 300;
    const selectHeight = 50;

    Object.defineProperty(window, "innerHeight", { value: 500, writable: true });
    select.getBoundingClientRect = () => new MockDOMRect(50, selectTop, 500, selectHeight);

    await userEvent.click(button);

    const dropdownWrapper = select.querySelector(".list-wrapper");
    expect(dropdownWrapper).toHaveStyle({ top: "initial" });
    expect(dropdownWrapper).toHaveStyle({ bottom: "4px" });
    const dropdownRect = dropdownWrapper!.getBoundingClientRect();
    expect(dropdownRect.bottom).toBeLessThan(selectTop + selectHeight / 2);
  });

  it("should expand downwards with a max height set", async () => {
    const { select, getByRole, dropdownWrapper: initialDropdownWrapper } = createMultiSelect();

    initialDropdownWrapper!.getBoundingClientRect = () => new MockDOMRect(50, 50, 500, 600);

    const selectTop = 10;
    const selectHeight = 40;

    Object.defineProperty(window, "innerHeight", { value: 500, writable: true });
    select.getBoundingClientRect = () => new MockDOMRect(50, selectTop, 500, selectHeight);

    await userEvent.click(document.body);

    const button = getByRole("button");
    await userEvent.click(button);

    const dropdownWrapper = select.querySelector(".list-wrapper")!;
    expect(dropdownWrapper).toHaveStyle({ top: "4px" });
    expect(dropdownWrapper).toHaveStyle({ bottom: "initial" });
    expect(dropdownWrapper).toHaveStyle({ maxHeight: "434px" });

    const dropdownRect = dropdownWrapper!.getBoundingClientRect();
    expect(dropdownRect.top).toBeGreaterThan(selectTop + selectHeight / 2);
  });
});

describe("search input props work", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("adds a classname", () => {
    createMultiSelect(defaultParams => ({
      ...defaultParams,
      search: { enabled: true, searchInputProps: { className: "test-wrapper-classname" } }
    }));

    expect(document.querySelector(".test-wrapper-classname")).toBeInTheDocument();
  });
});
