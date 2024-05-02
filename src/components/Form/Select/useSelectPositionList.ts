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

import { useEffect, useState } from "react";
import { Position, UseSelectPositionListParams } from "./Select.interfaces";

/** @scope .*/
export const useSelectPositionList = ({
  expanded,
  optionListReference,
  addBtnRef,
  containerReference
}: UseSelectPositionListParams) => {
  const [optionsListMaxHeight, setOptionsListMaxHeight] = useState<{
    wrapper?: string;
    list?: string;
  }>({
    wrapper: undefined,
    list: undefined
  });
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
    const addNewButtonHeightWithMargin = addBtnRef.current
      ? addBtnRef.current.getBoundingClientRect().height +
        parseInt(getComputedStyle(addBtnRef.current).marginBottom)
      : 0;
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

    if (listHeight && availableSpace < listHeight + addNewButtonHeightWithMargin) {
      const maxHeightObject = {
        wrapper: `${availableSpace}px`,
        list:
          addNewButtonHeightWithMargin > 0
            ? `${availableSpace - addNewButtonHeightWithMargin}px`
            : "none"
      };
      setOptionsListMaxHeight(maxHeightObject);
      setOpacity(100);
      return;
    }

    setOptionsListMaxHeight({ wrapper: undefined, list: undefined });
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
