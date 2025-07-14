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

import { UseArrowNavigationParams } from "../Select.interfaces";

/** @scope .*/
export const useArrowNavigation = ({
  expanded,
  setExpanded,
  isSearching,
  setIsSearching,
  setFocusedSelectItem,
  onOptionChangeHandler,
  childrenCount,
  setShouldClick,
  searchInputRef,
  addBtnRef,
  renderThreshold,
  isReadOnlyView
}: UseArrowNavigationParams) => {
  const onArrowNavigation = (event: React.KeyboardEvent) => {
    const codesToPreventDefault = [
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "Space",
      "Escape",
      "End",
      "Home"
    ];

    const codesToPreventDefaultWhenSearching = [
      "ArrowDown",
      "ArrowUp",
      "Enter",
      "Escape",
      "MetaLeft",
      "MetaRight"
    ];

    const isAddBtnFocused = addBtnRef?.current === document.activeElement;

    if (isReadOnlyView) {
      return;
    }

    if (expanded) {
      codesToPreventDefault.push("Tab");
    }

    if (addBtnRef) {
      codesToPreventDefaultWhenSearching.push("Tab");
    }

    if (codesToPreventDefault.includes(event.code) && !event.metaKey && !isSearching) {
      event.preventDefault();
    }

    if (isSearching && codesToPreventDefaultWhenSearching.includes(event.code)) {
      event.preventDefault();
    }

    if (isSearching) {
      switch (event.code) {
        case "ArrowDown":
        case "Enter":
          setIsSearching(false);
          setFocusedSelectItem(0);
          return;
        case "ArrowUp":
          setIsSearching(false);
          setFocusedSelectItem(childrenCount - 1);
          return;
        case "Escape":
          setIsSearching(false);
          setExpanded(false);
          return;
        case "Tab":
          if (addBtnRef?.current) {
            addBtnRef.current.focus();
            return;
          }
          setIsSearching(false);
          setExpanded(false);
      }
    } else {
      switch (event.code) {
        case "ArrowDown":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(0);
            return;
          }
          setFocusedSelectItem(prevState => {
            return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
          });
          return;
        case "ArrowUp":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(childrenCount - 1);
            return;
          }

          setFocusedSelectItem(prevState => {
            return prevState - 1 < 0 ? childrenCount - 1 : prevState - 1;
          });
          return;
        case "Space":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(0);
            return;
          }

          onOptionChangeHandler(event.target as HTMLElement);
          setShouldClick(true);
          setExpanded(false);

          return;
        case "Enter":
        case "Home":
          setFocusedSelectItem(0);

          return;
        case "Tab":
          if (childrenCount >= renderThreshold && expanded && !isAddBtnFocused) {
            setIsSearching(true);
            searchInputRef.current?.focus();
            return;
          } else if (addBtnRef?.current && expanded && !isAddBtnFocused) {
            addBtnRef.current.focus();
            return;
          }
          setExpanded(false);

          return;
        case "Escape":
          if (expanded) {
            setExpanded(false);
          }
          return;
        case "End":
          setFocusedSelectItem(childrenCount - 1);
          return;
        case "ArrowLeft":
          if (event.metaKey && expanded) {
            event.preventDefault();
            setFocusedSelectItem(0);
          }
          return;
        case "ArrowRight":
          if (event.metaKey && expanded) {
            event.preventDefault();
            setFocusedSelectItem(childrenCount - 1);
          }
          return;
      }
    }
  };

  return { onArrowNavigation };
};
