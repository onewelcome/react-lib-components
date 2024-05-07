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
import { act, getByRole, waitFor } from "@testing-library/react";
import { createMultiSelect, turnOnScrollToFunctionSupportInTest } from "./MultiSelect.test";

const getSelectedOptionValue = (select: HTMLElement) =>
  getByRole(select, "option", { selected: true }).dataset.value;

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
    // given
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
    // when
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("[enter]");
    await userEvent.keyboard("{escape}");
    // then
    await waitFor(() => expect(button).toHaveAttribute("aria-expanded", "false"));
    expect(onChangeHandler).toHaveBeenCalled();
    // when
    await userEvent.keyboard("[enter]");
    // then
    expect(button).toHaveAttribute("aria-expanded", "true");
    // when
    await userEvent.keyboard("{arrowdown}");
    // then
    expect(getSelectedOptionValue(select)).toEqual("option2");
    // when
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowup}");
    // then
    expect(getSelectedOptionValue(select)).toEqual("option15");
    // when
    await userEvent.keyboard("{arrowup}");
    // then
    expect(getSelectedOptionValue(select)).toEqual("option14");
    // when
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    // then
    expect(getSelectedOptionValue(select)).toEqual("option1");
    // when
    await userEvent.keyboard("{escape}");
    // then
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

describe("search input", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("should have first option selected when expanding list", async () => {
    const { button, select, getByTestId } = createMultiSelect();

    const searchInput = getByTestId("search-input");

    await userEvent.click(button);

    expect(searchInput).toHaveFocus();

    expect(getSelectedOptionValue(select)).toEqual("option1");
  });

  it("should have last option selected when expanding list and pressing arrow up", async () => {
    const { button, select, getByTestId } = createMultiSelect();

    const searchInput = getByTestId("search-input");

    await userEvent.click(button);

    expect(searchInput).toHaveFocus();

    expect(getSelectedOptionValue(select)).toEqual("option1");
    await userEvent.keyboard("{arrowup}");
    expect(getSelectedOptionValue(select)).toEqual("option17");
  });

  it("should have second option selected when expanding list nad pressing arrow down", async () => {
    const { button, select, getByTestId } = createMultiSelect();

    const searchInput = getByTestId("search-input");

    await userEvent.click(button);

    expect(searchInput).toHaveFocus();

    await userEvent.keyboard("{arrowdown}");
    expect(getSelectedOptionValue(select)).toEqual("option2");
  });

  it("should select option with enter", async () => {
    const onChangeHandler = jest.fn();
    const { select, button, getByTestId } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      onChange: onChangeHandler
    }));

    const searchInput = getByTestId("search-input");

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
    const { button, getByTestId } = createMultiSelect();

    const searchInput = getByTestId("search-input");

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

describe("addBtn feature", () => {
  beforeAll(() => {
    turnOnScrollToFunctionSupportInTest();
  });

  it("should btn be focused on pressing up arrow", async () => {
    const label = "You shall click me";
    const onAddNewCallback = jest.fn();
    const { button, select, getByTestId, findByTestId } = createMultiSelect(defaultParams => ({
      ...defaultParams,
      addNew: { label, onAddNew: onAddNewCallback, alwaysEnabled: true }
    }));

    const searchInput = getByTestId("search-input");

    await userEvent.click(button);

    expect(searchInput).toHaveFocus();
    expect(getSelectedOptionValue(select)).toEqual("option1");

    await userEvent.keyboard("123456789");

    const addNewBtn = await findByTestId("select-action-button");
    await waitFor(() => expect(addNewBtn).toBeDefined());
    await waitFor(() =>
      expect(addNewBtn?.textContent).toEqual(`"123456789" (${label.toLowerCase()})`)
    );

    await userEvent.keyboard("{enter}");

    await waitFor(() => expect(onAddNewCallback).toHaveBeenCalled());

    await waitFor(() => expect(button).toHaveFocus());
  });
});
