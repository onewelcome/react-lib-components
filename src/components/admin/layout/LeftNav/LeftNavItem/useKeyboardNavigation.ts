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

import { KeyboardEvent } from "react";
import { MenuItem } from "../LeftNav.interfaces";
import { UseRefItemsReturnType } from "../useRefItems";

interface Props {
  item: MenuItem;
  refItems: UseRefItemsReturnType;
  closeParentList?: () => void;
}

export const useKeyboardNavigation = ({ refItems, item, closeParentList }: Props) => {
  const onKeyPressNavigation = (e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (e.code === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      closeParentList?.();
      refItems.getParentElement(item.key)?.focus();
    }
    if (e.code === "ArrowUp") {
      e.preventDefault();
      e.stopPropagation();
      refItems.getPrevElementOnSameLevel(item.key)?.focus();
    }
    if (e.code === "ArrowDown") {
      e.preventDefault();
      e.stopPropagation();
      refItems.getNextElementOnSameLevel(item.key)?.focus();
    }
    if (e.code === "Home") {
      e.preventDefault();
      e.stopPropagation();
      refItems.getFirstElementOnSameLevel(item.key)?.focus();
    }
    if (e.code === "End") {
      e.preventDefault();
      e.stopPropagation();
      refItems.getLastElementOnSameLevel(item.key)?.focus();
    }
    if (e.code === "Space" || e.code === "Enter") {
      e.stopPropagation();
      e.preventDefault();
      refItems.getNextElement(item.key, true)?.focus();
      e.currentTarget.click();
    }
  };

  return { onKeyPressNavigation };
};
