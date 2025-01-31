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

import { useEffect, useRef } from "react";
import { MenuItem } from "./LeftNav.interfaces";

interface Props {
  items: MenuItem[];
}

interface LinkedMapValue {
  item: MenuItem;
  level: number;
  prev?: MenuItem;
  next?: MenuItem;
}

export type UseRefItemsReturnType = ReturnType<typeof useRefItems>;

export const useRefItems = ({ items }: Props) => {
  const navRefs = useRef<Record<string, HTMLElement>>({});
  const itemsMap = useRef<Record<string, LinkedMapValue>>({});

  useEffect(() => {
    createLinkedMap(items);
  }, [items]);

  const createLinkedMap = (menuItems: MenuItem[]) => {
    const map: Record<string, LinkedMapValue> = {};
    createRecursiveLinkedMap(map, 0, menuItems);
    itemsMap.current = map;
  };

  const createRecursiveLinkedMap = (
    itemsMap: Record<string, LinkedMapValue>,
    level: number,
    items?: MenuItem[],
    prevItem?: MenuItem,
    nextItem?: MenuItem
  ): { lastItem?: MenuItem } => {
    let currentPreviousItem: MenuItem | undefined = prevItem,
      currentNextItem: MenuItem | undefined = nextItem;
    items?.forEach((currentItem, index) => {
      const isLast = index === items.length - 1;
      if (!isLast) {
        currentNextItem = items[index + 1];
      } else {
        currentNextItem = nextItem;
      }

      const hasChildren = currentItem?.items !== undefined;
      if (hasChildren) {
        itemsMap[currentItem.key] = {
          item: currentItem,
          level,
          prev: currentPreviousItem,
          next: currentItem?.items?.[0]
        };
        currentPreviousItem = currentItem;
        const { lastItem } = createRecursiveLinkedMap(
          itemsMap,
          level + 1,
          currentItem?.items,
          currentPreviousItem,
          currentNextItem
        );
        currentPreviousItem = lastItem;
      } else {
        itemsMap[currentItem.key] = {
          item: currentItem,
          level,
          prev: currentPreviousItem,
          next: currentNextItem
        };
        currentPreviousItem = currentItem;
      }
    });
    return { lastItem: currentPreviousItem };
  };

  const addElementReference = (el: HTMLElement | null, key: string) => {
    if (el) {
      navRefs.current[key] = el;
    } else {
      delete navRefs.current[key];
    }
  };

  const getNextElement = (currentKey: string, whenHavingChildren: boolean = false) => {
    const currentItem = itemsMap.current?.[currentKey];
    if (whenHavingChildren && !currentItem.item.items) {
      return;
    }
    const nextKey = currentItem.next?.key;
    return nextKey ? navRefs.current?.[nextKey] : undefined;
  };

  const getNextElementOnSameLevel = (currentKey: string) => {
    const currentItem = itemsMap.current?.[currentKey];
    const currentLevel = currentItem.level;
    const nextItem = _traverseNextElements({
      currentItem,
      desiredLevel: currentLevel,
      currentLevel
    });
    return nextItem?.item.key ? navRefs.current?.[nextItem?.item.key] : undefined;
  };

  const getPrevElementOnSameLevel = (currentKey: string) => {
    const currentItem = itemsMap.current?.[currentKey];
    const currentLevel = currentItem.level;
    const prevItem = _traversePrevElements({
      currentItem,
      desiredLevel: currentLevel
    });
    return prevItem?.item.key ? navRefs.current?.[prevItem?.item.key] : undefined;
  };

  const getParentElement = (currentKey: string) => {
    const currentItem = itemsMap.current?.[currentKey];
    const currentLevel = currentItem.level;
    const parentLevel = currentLevel - 1;
    const parentItem = _traversePrevElements({
      currentItem,
      desiredLevel: parentLevel,
      checkForMenuEscape: false
    });
    return parentItem?.item.key ? navRefs.current?.[parentItem?.item.key] : undefined;
  };

  const _traverseNextElements = ({
    currentItem,
    desiredLevel,
    currentLevel
  }: {
    currentItem: LinkedMapValue;
    desiredLevel: number;
    currentLevel: number;
  }) => {
    const nextKey = currentItem.next?.key;
    if (!nextKey) {
      return;
    }
    const escapedSubMenu = desiredLevel > currentLevel;
    if (escapedSubMenu) {
      return;
    }

    const next = itemsMap.current?.[nextKey];
    if (next && next.level === desiredLevel) {
      return next;
    } else {
      return _traverseNextElements({ currentItem: next, desiredLevel, currentLevel: next.level });
    }
  };

  const _traversePrevElements = ({
    currentItem,
    desiredLevel,
    checkForMenuEscape = true
  }: {
    currentItem: LinkedMapValue;
    desiredLevel: number;
    checkForMenuEscape?: boolean;
  }) => {
    const prevKey = currentItem.prev?.key;
    if (!prevKey) {
      return;
    }
    const prev = itemsMap.current?.[prevKey];
    const prevLevel = prev.level;

    const escapedSubMenu = desiredLevel > prevLevel;
    if (checkForMenuEscape && escapedSubMenu) {
      return;
    }

    if (prev && prev.level === desiredLevel) {
      return prev;
    } else {
      return _traversePrevElements({ currentItem: prev, desiredLevel });
    }
  };

  return {
    addElementReference,
    getNextElement,
    getNextElementOnSameLevel,
    getPrevElementOnSameLevel,
    getParentElement,
    getItemMap: () => itemsMap.current
  };
};
