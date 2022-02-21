import React from "react";
import { Textarea, Props } from "./Textarea";
import { render } from "@testing-library/react";

const createTextarea = (params?: Props) => {
  const queries = render(<Textarea data-testid="textarea" {...params} />);
  const textarea = queries.getByRole("textbox");

  return {
    ...queries,
    textarea,
  };
};

describe("Textarea should render", () => {
  it("renders without crashing", () => {
    const { textarea } = createTextarea();
    expect(textarea).toBeTruthy();
  });
});

describe("Textarea properties", () => {
  it("is disabled", () => {
    const { textarea } = createTextarea({ disabled: true });

    expect(textarea).toHaveAttribute("disabled");
  });

  it("has 20 columns", () => {
    const { textarea } = createTextarea({ cols: 20 });

    expect(textarea).toHaveAttribute("cols", "20");
  });

  it("has autofocus", () => {
    const { textarea } = createTextarea({ autoFocus: true });

    setTimeout(() => {
      expect(textarea).toHaveAttribute("autofocus");
    }, 0);
  });
});

describe("Error status", () => {
  it("has error class, and an icon", () => {
    const { textarea } = createTextarea({ error: true });

    expect(textarea).toHaveClass("error");
    expect(textarea.nextElementSibling).toHaveClass("icon-warning");
  });
});
