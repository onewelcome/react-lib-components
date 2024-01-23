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

import React, { useEffect, useState } from "react";
import {
  Position,
  UseArrowNavigationParams,
  UseSelectPositionListParams
} from "./Select.interfaces";

/* @scope . */
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
  renderThreshold
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

export const useSelectPositionList = ({
  expanded,
  optionListReference,
  addBtnRef,
  containerReference
}: UseSelectPositionListParams) => {
  const [optionsListMaxHeight, setOptionsListMaxHeight] = useState("none");
  const [opacity, setOpacity] = useState(0); // We set opacity because otherwise if we calculate the max height you see the list full height for a split second and then it shortens.
  const [listPosition, setListPosition] = useState<Partial<Position>>({});

  useEffect(() => {
    rePositionList();
  }, [expanded]);

  const rePositionList = () => {
    if (!expanded || !optionListReference.current || !containerReference.current) {
      return;
    }

    // Check whether there is more space above or below the select
    // Check space between the bottom of select and top of viewport
    const spaceOnTopOfSelect = containerReference.current.getBoundingClientRect().bottom;

    // Check space between the top of the select and bottom of viewport
    const spaceOnBottomOfSelect =
      window.innerHeight - containerReference.current.getBoundingClientRect().top;

    // Set position as if there's more space on the bottom
    let position: Position = { top: "2.75rem", bottom: "initial" };

    // Set the position of the select
    if (spaceOnTopOfSelect > spaceOnBottomOfSelect) {
      position = { top: "initial", bottom: "2.75rem" };
    }

    setListPosition(position);

    // Calculate the potential max height of the options list
    calculateOptionListMaxHeight(position);
  };

  const calculateOptionListMaxHeight = (position: Position) => {
    // Calculate max height if there's more space below the select
    const listHeight = optionListReference.current?.getBoundingClientRect().height;
    const addNewButtonHeight = addBtnRef.current?.getBoundingClientRect().height ?? 0;
    const transformOrigin = position.top !== "initial" ? "top" : "bottom";

    if (!containerReference.current) {
      console.error(
        "The containerReference is empty for some reason in the SelectService.ts for the Select component in react-lib-components. We are trying to calculate the option list max height on expand"
      );
      return;
    }

    const availableSpace =
      transformOrigin === "top"
        ? window.innerHeight - containerReference.current.getBoundingClientRect().bottom - 16
        : containerReference.current.getBoundingClientRect().top - 16;

    if (listHeight && availableSpace < listHeight + addNewButtonHeight) {
      setOptionsListMaxHeight(`${availableSpace}px`);
      setOpacity(100);
      return;
    }

    setOptionsListMaxHeight("none");
    setOpacity(100);
  };

  return {
    optionsListMaxHeight,
    opacity,
    setOpacity,
    listPosition,
    setListPosition
  };
};
