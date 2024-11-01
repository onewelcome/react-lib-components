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

export const useMultiSelect = (
  allOptions: string[],
  setAllOptions: (options: string[]) => void,
  pickedOptions: string[],

  //TODO replace by setPickedOptions ?
  onOptionAdded: (optionsAdded: string) => void,
  onOptionRemoved: (optionsRemoved: string) => void,

  onAddNew: (newOption: string) => void
) => {
  const handleOptionChange = (
    e: React.FormEvent<HTMLSelectElement>,
    obsoletePickedOptions: string[]
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const htmlOptions = (e.nativeEvent.target as unknown as any).options as HTMLOptionsCollection;

    const newPickedOptions = [...obsoletePickedOptions];
    Array.from(htmlOptions).forEach(option => {
      const selected = option.selected;
      const exists = newPickedOptions.includes(option.value);

      const shouldAdd = !exists && selected;
      const shouldRemove = exists && !selected;

      if (shouldAdd) {
        onOptionAdded(option.value);
        // newPickedOptions.push(option.value);
      } else if (shouldRemove) {
        onOptionRemoved(option.value);
        // newPickedOptions = newPickedOptions.filter(value => value !== option.value);
      }
    });
    return newPickedOptions;
  };

  const onAddNewWrapper = (value: string) => {
    //trim, check if value is unique within allOptions, call onAddNew
    const trimmedValue = value.trim();
    if (trimmedValue.length == 0) {
      return;
    }
    setAllOptions([...allOptions, trimmedValue]);
    onOptionAdded(trimmedValue);
  };

  return {
    handleOptionChange,
    onAddNew: onAddNewWrapper
  };
};
