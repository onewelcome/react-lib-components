import React, { useEffect, useRef } from "react";
import { Select as SelectComponent, Props } from "./Select";
import { render, waitFor } from "@testing-library/react";
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
  it("renders with 5 options and proper attributes", () => {
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
      userEvent.click(button);
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
  it("shows the search and filtering works", () => {
    const { select, list, button, getByTestId } = createSelect();

    const searchInput = getByTestId("search-input");

    if (button) {
      userEvent.click(button);
    }

    expect(select).toBeTruthy();
    expect(searchInput).toBeTruthy();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(17);

    if (searchInput) {
      userEvent.type(searchInput, "17");
    }

    expect(list?.querySelectorAll("li[role='option']").length).toBe(1);
    expect(list?.querySelector("li[role='option']")?.innerHTML).toBe("Test17");
  });
});

describe("Selecting options using keyboard", () => {
  it("should focus through list items and select on enterpress", async () => {
    const onChangeHandler = jest.fn();
    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      onChange: onChangeHandler
    }));

    userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    userEvent.keyboard("{arrowdown}");
    userEvent.keyboard("{arrowdown}");
    userEvent.keyboard("{enter}");

    expect(button).toHaveAttribute("aria-expanded", "false");

    expect(onChangeHandler).toHaveBeenCalled();

    userEvent.keyboard("{enter}");

    expect(button).toHaveAttribute("aria-expanded", "true");

    userEvent.keyboard("{arrowdown}");

    expect(select.querySelector('li[data-value="option3"]')).toHaveFocus();

    userEvent.keyboard("{arrowup}");
    userEvent.keyboard("{arrowup}");
    userEvent.keyboard("{arrowup}");
    userEvent.keyboard("{arrowup}");

    expect(select.querySelector('li[data-value="option16"]')).toHaveFocus();
    userEvent.keyboard("{arrowup}");
    expect(select.querySelector('li[data-value="option15"]')).toHaveFocus();

    userEvent.keyboard("{arrowdown}");
    userEvent.keyboard("{arrowdown}");
    userEvent.keyboard("{arrowdown}");

    expect(select.querySelector('li[data-value="option1"]')).toHaveFocus();

    userEvent.keyboard("{escape}");

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("Expanded should be false whenever we click the body", () => {
  it("closes select on body click", () => {
    const { button } = createSelect();

    if (button) {
      userEvent.click(button);
    }

    expect(button).toHaveAttribute("aria-expanded", "true");
    userEvent.click(document.body);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("List expansion", () => {
  it("should expand upwards", () => {
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
      userEvent.click(button);
    }

    expect(dropdownWrapper).toHaveStyle({ bottom: "0px" });
  });

  it("should expand downwards with a max height set", () => {
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

    userEvent.click(document.body);
    const button = getByRole("button");
    userEvent.click(button);

    expect(dropdownWrapper).toHaveStyle({ maxHeight: "474px" });
    expect(dropdownWrapper).toHaveStyle({ top: "0px" });
  });
});

describe("onClear method", () => {
  it("should show a cross and fire the passed onClear function with enter", async () => {
    const onClearHandler = jest.fn();

    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      onClear: onClearHandler,
      value: "option4"
    }));

    button.focus();
    const clearButton = select.querySelector("[data-clear]");

    userEvent.tab();

    expect(clearButton).toHaveFocus();

    userEvent.keyboard("{enter}");

    expect(onClearHandler).toHaveBeenCalled();
    expect(button?.getAttribute("aria-expanded")).toBe("false");
  });

  it("should show a cross and fire the passed onClear function with enter", async () => {
    const onClearHandler = jest.fn();

    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      onClear: onClearHandler,
      value: "option4"
    }));

    button.focus();
    const clearButton = select.querySelector("[data-clear]");
    expect(document.querySelector("[data-display-inner]")).toBeInTheDocument();

    userEvent.tab();

    expect(clearButton).toHaveFocus();

    userEvent.keyboard("{space}");

    expect(onClearHandler).toHaveBeenCalled();
    expect(button?.getAttribute("aria-expanded")).toBe("false");
  });

  it("should not show cross", () => {
    createSelect(defaultParams => ({
      ...defaultParams,
      value: ""
    }));

    expect(document.querySelector("[data-clear]")).not.toBeInTheDocument();
    expect(document.querySelector("[data-display-inner]")).not.toBeInTheDocument();
  });
});

describe("previously selected item", () => {
  it("should have focus", () => {
    const { select, button } = createSelect(defaultParams => ({
      ...defaultParams,
      value: "option4"
    }));

    button.focus();

    const option2 = select.querySelector('li[data-value="option2"]')!;

    userEvent.keyboard("{enter}");
    expect(button).toHaveAttribute("aria-expanded", "true");
    userEvent.keyboard("{arrowdown}");
    userEvent.keyboard("{arrowdown}");
    userEvent.keyboard("{space}");

    userEvent.click(button);

    expect(document.activeElement).toBe(option2);
  });
});

describe("search input", () => {
  it("listens to different keyboard inputs", async () => {
    const { button, select } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    userEvent.click(button);
    (searchInput as HTMLElement).focus();

    userEvent.keyboard("{arrowup}");
    expect(select.querySelector('li[data-value="option17"]')).toHaveFocus();
  });

  it("move focus with arrowdown", async () => {
    const { button, select } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    userEvent.click(button);
    (searchInput as HTMLElement).focus();

    userEvent.keyboard("{arrowdown}");
    expect(select.querySelector('li[data-value="option1"]')).toHaveFocus();
  });

  it("select with enter", async () => {
    const { button, select } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    userEvent.click(button);
    (searchInput as HTMLElement).focus();

    userEvent.keyboard("{enter}");
    expect(select.querySelector('li[data-value="option1"]')).toHaveFocus();
  });

  it("expand list with arrowdown", async () => {
    const { button } = createSelect();

    button.focus();
    userEvent.keyboard("{arrowdown}");

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("expand list with space", async () => {
    const { button } = createSelect();

    button.focus();
    userEvent.keyboard("{space}");

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("closes on escape", async () => {
    const { button } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    userEvent.click(button);
    userEvent.tab();

    await waitFor(() => expect(searchInput).toHaveFocus());

    userEvent.keyboard("{escape}");

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes on tab", async () => {
    const { button } = createSelect();

    const searchInput = document.querySelector(".select-search")!;

    userEvent.click(button);
    userEvent.tab();
    expect(searchInput).toHaveFocus();
    userEvent.tab();
  });
});

describe("home and end keys work", () => {
  it("goes to home and end", () => {
    const { button } = createSelect();

    userEvent.click(button);

    const firstOption = document.querySelector('li[data-value="option1"]');
    const lastOption = document.querySelector('li[data-value="option17"]');

    userEvent.keyboard("{end}");

    expect(lastOption).toHaveFocus();
    userEvent.keyboard("{home}");

    expect(firstOption).toHaveFocus();
  });
});

describe("search input props work", () => {
  it("adds a classname", () => {
    createSelect(defaultParams => ({
      ...defaultParams,
      searchInputProps: { wrapperProps: { className: "test-wrapper-classname" } }
    }));

    expect(document.querySelector(".test-wrapper-classname")).toBeInTheDocument();
  });
});
