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

describe("useMutiSelect", () => {
  it("should handle basic usage scenario", () => {
    const allOptions = ["A", "B", "C", "D"];
    let newAllOptions: string[] = ["not called"];
    const pickedOptions = ["B", "C"];
    let newPickedOptions: string[] = ["not called"];

    const result = useMultiSelect({
      allOptions,
      setAllOptions: newOptions => (newAllOptions = newOptions),
      pickedOptions,
      setPickedOptions: newOptions => (newPickedOptions = newOptions)
    });

    const { event, selectElement } = prepareOptionSelection(
      allOptions,
      (optionValue: string) => pickedOptions.includes(optionValue) || optionValue == "D"
    );

    result.handleOptionChange(event);

    expect(newPickedOptions).toEqual(["B", "C", "D"]);
    expect(newAllOptions).toEqual(["not called"]);

    // unpick an option

    selectElement.options.item(2)!.selected = false;
    result.handleOptionChange(event);

    expect(newPickedOptions).toEqual(["B", "D"]);
    expect(newAllOptions).toEqual(["not called"]);
  });

  it("should handle creation of custom option and its deletion", () => {
    const allOptions = ["A", "B", "C", "D"];
    let newAllOptions: string[] = ["not called"];
    const pickedOptions = ["B", "C"];
    let newPickedOptions: string[] = ["not called"];

    let result = useMultiSelect({
      initialOptions: allOptions, // this automates removal of the custom option
      allOptions,
      setAllOptions: newOptions => (newAllOptions = newOptions),
      pickedOptions,
      setPickedOptions: newOptions => (newPickedOptions = newOptions)
    });

    result.onAddNew("E");

    expect(newPickedOptions).toEqual(["B", "C", "E"]);
    expect(newAllOptions).toEqual(["A", "B", "C", "D", "E"]);

    // next render after the custom option was added

    result = useMultiSelect({
      initialOptions: allOptions, // this automates removal of the custom option
      allOptions: newAllOptions,
      setAllOptions: newOptions => (newAllOptions = newOptions),
      pickedOptions: newPickedOptions,
      setPickedOptions: newOptions => (newPickedOptions = newOptions)
    });

    const { event } = prepareOptionSelection(
      newAllOptions,
      (optionValue: string) => newPickedOptions.includes(optionValue) && optionValue != "E"
    );

    result.handleOptionChange(event);

    expect(newPickedOptions).toEqual(["B", "C"]);

    // custom option removed also from all options
    expect(newAllOptions).toEqual(["A", "B", "C", "D"]);
  });

  it("should handle editable-list scenario", () => {
    const pickedOptions = ["A", "B"];
    let newPickedOptions: string[] = ["not called"];
    let newAllOptions: string[] = ["not called"];

    let result = useMultiSelect({
      pickedOptions,
      setPickedOptions: newOptions => (newPickedOptions = newOptions),

      // this one is not necessary for the use case, it's here only to check the behavior
      setAllOptions: newOptions => (newAllOptions = newOptions)
    });

    result.onAddNew("C");

    expect(newPickedOptions).toEqual(["A", "B", "C"]);
    expect(newAllOptions).toEqual(["A", "B", "C"]);

    // next render after the custom option was added

    result = useMultiSelect({
      pickedOptions: newPickedOptions,
      setPickedOptions: newOptions => (newPickedOptions = newOptions),

      // this one is not necessary for the use case, it's here only to check the behavior
      setAllOptions: newOptions => (newAllOptions = newOptions)
    });

    const { event } = prepareOptionSelection(
      newAllOptions,
      (optionValue: string) => newPickedOptions.includes(optionValue) && optionValue != "A"
    );

    result.handleOptionChange(event);

    expect(newPickedOptions).toEqual(["B", "C"]);
    expect(newAllOptions).toEqual(["A", "B", "C"]);
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
    const selected = shouldBeSelected(optionValue);

    // need to override default behavior of selected property which clears out other selections
    Object.defineProperty(optionElement, "selected", { value: selected, writable: true });

    selectElement.options.add(optionElement);
  });

  const event = {
    nativeEvent: { target: { options: selectElement.options } }
  } as unknown as React.FormEvent<HTMLSelectElement>;
  return { event, selectElement };
}
