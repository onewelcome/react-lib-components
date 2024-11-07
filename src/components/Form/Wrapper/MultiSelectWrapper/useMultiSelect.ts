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

interface UseMultiSelectArgs {
  initialOptions?: string[];
  allOptions?: string[];
  setAllOptions?: (options: string[]) => void;
  pickedOptions: string[];
  setPickedOptions: (options: string[]) => void;
  onAddNew?: (newOption: string) => void;
  // onOptionAdded: (newOption: string) => void = _ => {},
  // onOptionRemoved: (removedOption: string) => void = _ => {}
}

interface UseMultiSelectResult {
  handleOptionChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  onAddNew: (newValue: string) => void;
}

type UseMultiSelect = (args: UseMultiSelectArgs) => UseMultiSelectResult;

export const useMultiSelect: UseMultiSelect = (args: UseMultiSelectArgs) => {
  const initialOptions = args.initialOptions;
  const allOptions = args.allOptions || args.pickedOptions;
  const setAllOptions = args.setAllOptions || args.setPickedOptions;
  const pickedOptions = args.pickedOptions;
  const setPickedOptions = args.setPickedOptions;
  const onAddNew = args.onAddNew;

  const handleOptionChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const htmlOptions = (e.nativeEvent.target as unknown as { options: HTMLOptionsCollection })
      .options;

    const newPickedOptions = [...pickedOptions];
    Array.from(htmlOptions).forEach(option => {
      const selected = option.selected;
      const exists = pickedOptions.includes(option.value);

      const shouldAdd = !exists && selected;
      const shouldRemove = exists && !selected;

      if (shouldAdd) {
        newPickedOptions.push(option.value);
        // onOptionAdded(option.value);
      } else if (shouldRemove) {
        const index = newPickedOptions.indexOf(option.value);
        newPickedOptions.splice(index, 1);
        // onOptionRemoved(option.value);

        if (initialOptions) {
          const isInInitialOptions = initialOptions.includes(option.value);
          if (!isInInitialOptions) {
            setAllOptions(allOptions.filter(value => value !== option.value));
          }
        }
      }
    });
    setPickedOptions(newPickedOptions);
  };

  const onAddNewWrapper = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length == 0 || allOptions.includes(trimmedValue)) {
      return;
    }

    setAllOptions([...allOptions, trimmedValue]);
    setPickedOptions([...pickedOptions, trimmedValue]);

    // onOptionAdded(trimmedValue);
    if (onAddNew) {
      onAddNew(trimmedValue);
    }
  };

  return {
    handleOptionChange,
    onAddNew: onAddNewWrapper
  };
};
