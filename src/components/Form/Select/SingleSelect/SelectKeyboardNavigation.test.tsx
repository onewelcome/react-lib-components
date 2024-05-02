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

import userEvent from "@testing-library/user-event";
import { act, waitFor } from "@testing-library/react";
import { createSelect } from "./Select.test";

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

describe("search input", () => {
  it("listens to different keyboard inputs", async () => {
    const { button, select, getByTestId } = createSelect();

    const searchInput = getByTestId("search-input");

    await userEvent.click(button);

    await act(() => {
      (searchInput as HTMLElement).focus();
    });

    await userEvent.keyboard("{arrowup}");
    expect(select.querySelector('li[data-value="option17"]')).toHaveFocus();
  });

  it("move focus with arrowdown", async () => {
    const { button, select, getByTestId } = createSelect();

    const searchInput = getByTestId("search-input");

    await userEvent.click(button);

    await act(() => {
      (searchInput as HTMLElement).focus();
    });

    await userEvent.keyboard("{arrowdown}");
    expect(select.querySelector('li[data-value="option1"]')).toHaveFocus();
  });

  it("select with enter", async () => {
    const { button, select, getByTestId } = createSelect();

    const searchInput = getByTestId("search-input");

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
    const { button, getByTestId } = createSelect();

    const searchInput = getByTestId("search-input");

    await userEvent.click(button);

    await userEvent.tab();

    await waitFor(() => expect(searchInput).toHaveFocus());

    await userEvent.keyboard("{escape}");

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes on tab", async () => {
    const { button, getByTestId } = createSelect();

    const searchInput = getByTestId("search-input");

    await userEvent.click(button);

    await userEvent.tab();

    expect(searchInput).toHaveFocus();

    await userEvent.tab();

    expect(button).toHaveAttribute("aria-expanded", "false");
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

describe("addBtn feature", () => {
  it("should btn be focused on pressing tab and exits on next tab press", async () => {
    const label = "You shall never click me";
    const onAddNewCallback = jest.fn();
    const { button, findByTestId, getByTestId } = createSelect(defaultParams => ({
      ...defaultParams,
      addNew: { label: label, onAddNew: () => onAddNewCallback(), alwaysEnabled: true }
    }));

    const searchInput = getByTestId("search-input");
    const addNewBtn = await findByTestId("select-action-button");

    await userEvent.click(button);

    await userEvent.tab();

    expect(searchInput).toHaveFocus();

    await userEvent.tab();

    expect(addNewBtn).toHaveFocus();

    await userEvent.tab();

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
