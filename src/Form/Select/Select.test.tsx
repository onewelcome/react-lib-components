import React, { ReactElement } from "react";
import { Select, Props } from "./Select";
import { render } from "@testing-library/react";
import { Option } from "./Option";
import userEvent from "@testing-library/user-event";

const createSelect = (amountOfOptions = 5, params?: Props) => {
  const renderOptions = (amount: number): ReactElement[] => {
    const returnArr: ReactElement[] = [];

    for (let i = 0; i < amount; i++) {
      returnArr.push(<Option key={i} value={`option${i}`}>{`Option${i}`}</Option>);
    }

    return returnArr;
  };

  const queries = render(
    <Select data-testid="select" {...params}>
      {renderOptions(amountOfOptions)}
    </Select>
  );
  const select = queries.getByTestId("select");
  const button = select.querySelector("button");

  if (button) {
    userEvent.click(button);
  }

  const list = select.querySelector('ul[role="listbox"]');

  return {
    ...queries,
    select,
    button,
    list,
  };
};

describe("Select should render", () => {
  it("renders with 5 options and proper attributes", () => {
    const { select, button, list } = createSelect(5);

    expect(select).toBeDefined();
    expect(button?.getAttribute("aria-expanded")).toBe("true");
    expect(button?.getAttribute("aria-disabled")).toBe("false");
    expect(list).toBeDefined();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(5);
  });
});

describe("Select should render with search", () => {
  it("shows the search and filtering works", () => {
    const { select, list } = createSelect(20);

    const search = list?.querySelector("input");

    expect(select).toBeTruthy();
    expect(search).toBeTruthy();
    expect(list?.querySelectorAll("li[role='option']").length).toBe(20);

    if (search) {
      userEvent.type(search, "19");
    }

    expect(list?.querySelectorAll("li[role='option']").length).toBe(1);
    expect(list?.querySelector("li[role='option']")?.innerHTML).toBe("Option19");
  });
});
