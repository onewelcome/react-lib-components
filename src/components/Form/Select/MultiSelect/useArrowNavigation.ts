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

interface UseArrowNavigationParams {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusedSelectItem: React.Dispatch<React.SetStateAction<number>>;
  focusedSelectItem: number;
  childrenCount: number;
  setShouldClick: React.Dispatch<React.SetStateAction<boolean>>;
  addBtnRef: React.RefObject<HTMLButtonElement>;
}

export const useArrowNavigation = ({
  expanded,
  setExpanded,
  setFocusedSelectItem,
  focusedSelectItem,
  childrenCount,
  setShouldClick,
  addBtnRef
}: UseArrowNavigationParams) => {
  const onArrowNavigation = (event: React.KeyboardEvent) => {
    const codesToPreventDefault = [
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "Escape",
      "End",
      "Home"
    ];
    const hasAddBtn = !!addBtnRef?.current;
    const childrenCountWithAddButton = childrenCount + (hasAddBtn ? 1 : 0);
    // const isAddBtnFocused = (focusedItem: number) =>
    //   hasAddBtn ? childrenCountWithAddButton - 1 === focusedItem : false;

    if (expanded) {
      codesToPreventDefault.push("Tab");
    }

    if (!expanded) {
      codesToPreventDefault.push("Space");
    }

    if (codesToPreventDefault.includes(event.code) && !event.metaKey) {
      event.preventDefault();
    }

    switch (event.code) {
      case "ArrowDown":
        if (!expanded) {
          setExpanded(true);
          setFocusedSelectItem(0);
          break;
        }
        setFocusedSelectItem(prevState =>
          prevState + 1 > childrenCountWithAddButton - 1 ? 0 : prevState + 1
        );
        break;
      case "ArrowUp":
        if (!expanded) {
          setExpanded(true);
          setFocusedSelectItem(childrenCountWithAddButton - 1);
          break;
        }

        setFocusedSelectItem(prevState =>
          prevState - 1 < 0 ? childrenCountWithAddButton - 1 : prevState - 1
        );
        break;
      case "Enter":
        if (expanded) {
          setShouldClick(true);
          setExpanded(false);
        }
        break;
      case "Space":
        if (!expanded) {
          setExpanded(true);
          setFocusedSelectItem(0);
        }
        break;
      case "Home":
        setFocusedSelectItem(0);
        break;
      case "Escape":
        if (expanded) {
          setExpanded(false);
        }
        break;
      case "End":
        setFocusedSelectItem(childrenCount - 1);
        break;
      case "ArrowLeft":
        if (event.metaKey && expanded) {
          event.preventDefault();
          setFocusedSelectItem(0);
        }
        break;
      case "ArrowRight":
        if (event.metaKey && expanded) {
          event.preventDefault();
          setFocusedSelectItem(childrenCount - 1);
        }
        break;
    }
  };

  return { onArrowNavigation };
};
