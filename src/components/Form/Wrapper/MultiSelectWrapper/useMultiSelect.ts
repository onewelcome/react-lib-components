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
  pickedOptions: string[],
  onOptionAdded: (newOption: string) => void,
  onOptionRemoved: (removedOption: string) => void,
  onAddNew: (newOption: string) => void
) => {
  const handleOptionChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const htmlOptions = (e.nativeEvent.target as unknown as { options: HTMLOptionsCollection })
      .options;

    Array.from(htmlOptions).forEach(option => {
      const selected = option.selected;
      const exists = pickedOptions.includes(option.value);

      const shouldAdd = !exists && selected;
      const shouldRemove = exists && !selected;

      if (shouldAdd) {
        onOptionAdded(option.value);
      } else if (shouldRemove) {
        onOptionRemoved(option.value);
      }
    });
  };

  const onAddNewWrapper = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length == 0 || allOptions.includes(trimmedValue)) {
      return;
    }
    onOptionAdded(trimmedValue);
    onAddNew(trimmedValue);
  };

  return {
    handleOptionChange,
    onAddNew: onAddNewWrapper
  };
};
