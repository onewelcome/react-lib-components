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

import { useMultiSelect } from "./useMultiSelect";
import { act, renderHook } from "@testing-library/react";
import { MultiOption } from "./MultiOption";

describe("useMutiSelect", () => {
  describe("basic usage scenario", () => {
    it("should handle picking an element", () => {
      //given
      const allOptions = ["A", "B", "C", "D"];
      const pickedOptions = ["B", "C"];
      const setAllOptions = jest.fn();
      const setPickedOptions = jest.fn();

      const { result } = renderHook(() =>
        useMultiSelect({
          allOptions,
          pickedOptions,
          setAllOptions,
          setPickedOptions
        })
      );

      //when
      act(() => {
        const { event: eventForOptionPicking } = prepareOptionSelection(
          allOptions,
          optionValue => pickedOptions.includes(optionValue) || optionValue === "D"
        );

        result.current.handleOptionChange(eventForOptionPicking);
      });

      //then
      const expectedPickedOptionsWithNewE = ["B", "C", "D"];
      expect(setPickedOptions).toHaveBeenCalledWith(expectedPickedOptionsWithNewE);
      expect(setAllOptions).toHaveBeenCalledTimes(0);
    });

    it("should handle unpicking an element", () => {
      //given
      const allOptions = ["A", "B", "C", "D"];
      const pickedOptions = ["B", "C", "D"];
      const setAllOptions = jest.fn();
      const setPickedOptions = jest.fn();

      const { result } = renderHook(() =>
        useMultiSelect({
          allOptions,
          pickedOptions,
          setAllOptions,
          setPickedOptions
        })
      );

      //when
      act(() => {
        const { event: eventForOptionUnpicking } = prepareOptionSelection(
          allOptions,
          optionValue => pickedOptions.includes(optionValue) && optionValue !== "D"
        );
        result.current.handleOptionChange(eventForOptionUnpicking);
      });

      //then
      const expectedPickedOptionsWithoutE = ["B", "C"];
      expect(setPickedOptions).toHaveBeenCalledWith(expectedPickedOptionsWithoutE);
      expect(setAllOptions).toHaveBeenCalledTimes(0);
    });
  });

  describe("custom option handling", () => {
    it("should handle creation of custom option E", () => {
      //given
      const allOptions = ["A", "B", "C", "D"];
      const initialOptions = [...allOptions];
      const pickedOptions = ["B", "C"];
      const setAllOptions = jest.fn();
      const setPickedOptions = jest.fn();

      const { result } = renderHook(() =>
        useMultiSelect({
          initialOptions,
          allOptions,
          pickedOptions,
          setAllOptions,
          setPickedOptions
        })
      );

      //when
      act(() => {
        result.current.onAddNew("E");
      });

      //then
      const expectedPickedOptionsWithNewE = ["B", "C", "E"];
      expect(setPickedOptions).toHaveBeenCalledWith(expectedPickedOptionsWithNewE);
      const expectedAllOptionsWithNewE = ["A", "B", "C", "D", "E"];
      expect(setAllOptions).toHaveBeenCalledWith(expectedAllOptionsWithNewE);
    });

    it("should handle deletion of custom added option E", () => {
      //given
      const allOptions = ["A", "B", "C", "D", "E"];
      const initialOptions = ["A", "B", "C", "D"];
      const pickedOptions = ["B", "C", "E"];
      const setAllOptions = jest.fn();
      const setPickedOptions = jest.fn();

      const { result } = renderHook(() =>
        useMultiSelect({
          initialOptions,
          allOptions,
          pickedOptions,
          setAllOptions,
          setPickedOptions
        })
      );

      //when
      act(() => {
        const { event: eventForOptionUnpicking } = prepareOptionSelection(
          allOptions,
          optionValue => pickedOptions.includes(optionValue) && optionValue !== "E"
        );
        result.current.handleOptionChange(eventForOptionUnpicking);
      });

      //then
      const expectedPickedOptionsWithoutE = ["B", "C"];
      expect(setPickedOptions).toHaveBeenCalledWith(expectedPickedOptionsWithoutE);
      const expectedAllOptionsWithoutE = ["A", "B", "C", "D"];
      expect(setAllOptions).toHaveBeenCalledWith(expectedAllOptionsWithoutE);
    });
  });

  describe("editable list scenario", () => {
    it("should handle adding an item", () => {
      //given
      const pickedOptions = ["A", "B"];
      const setAllOptions = jest.fn();
      const setPickedOptions = jest.fn();

      const { result } = renderHook(() =>
        useMultiSelect({
          pickedOptions,
          setPickedOptions,
          setAllOptions
        })
      );

      //when
      act(() => {
        result.current.onAddNew("C");
      });

      //then
      const expectedListWithAddedC = ["A", "B", "C"];
      expect(setPickedOptions).toHaveBeenCalledWith(expectedListWithAddedC);
      expect(setAllOptions).toHaveBeenCalledWith(expectedListWithAddedC);
    });

    it("should handle removing an item", () => {
      //given
      const pickedOptions = ["A", "B", "C"];
      const setPickedOptions = jest.fn();
      const { result } = renderHook(() =>
        useMultiSelect({
          pickedOptions,
          setPickedOptions
        })
      );

      //when
      act(() => {
        const { event: eventForItemARemoval } = prepareOptionSelection(
          pickedOptions,
          optionValue => pickedOptions.includes(optionValue) && optionValue !== "A"
        );
        result.current.handleOptionChange(eventForItemARemoval);
      });

      //then
      const expectedListWithoutA = ["B", "C"];
      expect(setPickedOptions).toHaveBeenCalledWith(expectedListWithoutA);
    });
  });

  it("should generate option elements", () => {
    const allOptions = ["A", "B"];
    const pickedOptions: string[] = [];

    const { result } = renderHook(() =>
      useMultiSelect({
        allOptions,
        pickedOptions,
        setPickedOptions: _ => {}
      })
    );

    const optionElements = result.current.optionElements as any[];

    expect(optionElements).toHaveLength(2);
    expect({ type: optionElements[0].type, ...optionElements[0].props }).toMatchObject({
      type: MultiOption,
      value: "A",
      children: "A"
    });
    expect({ type: optionElements[1].type, ...optionElements[1].props }).toMatchObject({
      type: MultiOption,
      value: "B",
      children: "B"
    });
  });

  it("should handle add new without value from search (search disabled, addNew enabled, so no value provided)", () => {
    const allOptions = ["A", "B", "C", "D"];
    let newAllOptions = ["not called"];
    const pickedOptions = ["B", "C"];
    let newPickedOptions = ["not called"];
    const onAddNew = jest.fn();

    const { result } = renderHook(() =>
      useMultiSelect({
        allOptions,
        setAllOptions: newOptions => (newAllOptions = newOptions),
        pickedOptions,
        setPickedOptions: newOptions => (newPickedOptions = newOptions),
        onAddNew
      })
    );

    act(() => {
      result.current.onAddNew("");
    });

    expect(onAddNew).toHaveBeenCalledWith("");

    expect(newPickedOptions).toEqual(["not called"]);
    expect(newAllOptions).toEqual(["not called"]);
  });
});

function prepareOptionSelection(
  options: string[],
  shouldBeSelected: (optionValue: string) => boolean
) {
  const selectElement = document.createElement("select");
  options.forEach(optionValue => {
    const optionElement = document.createElement("option");

    optionElement.value = optionValue;
    forceOptionSelectedPropertyConstantValue(optionElement, shouldBeSelected(optionValue));

    selectElement.options.add(optionElement);
  });

  const event = {
    target: { options: selectElement.options }
  } as unknown as React.ChangeEvent<HTMLSelectElement>;
  return { event };
}

function forceOptionSelectedPropertyConstantValue(
  optionElement: HTMLOptionElement,
  selected: boolean
) {
  Object.defineProperty(optionElement, "selected", { value: selected, writable: true });
}
