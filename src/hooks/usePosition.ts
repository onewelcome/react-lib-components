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

import React, { useState } from "react";
import { useDebouncedCallback } from "./useDebouncedCallback";

export interface ConfigObject {
  relativeElement: RefElement;
  elementToBePositioned: RefElement;
  transformOrigin?: Placement;
  placement?: Placement;
  offset?: Offset;
  debounceAmount?: number;
}

export type HorizontalPlacement = "left" | "center" | "centerh" | "right";
export type VerticalPlacement = "top" | "center" | "centerv" | "bottom";

type Axis = "vertical" | "horizontal";
type RefElement = React.RefObject<HTMLOrSVGElement> | undefined;

interface DomRectObject {
  top: number;
  right: number;
  bottom: number;
  left: number;
  center: number;
  centerh: number;
  centerv: number;
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface Placement {
  horizontal: HorizontalPlacement;
  vertical: VerticalPlacement;
}

export interface Offset {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Position {
  top: PositionType;
  right: PositionType;
  bottom: PositionType;
  left: PositionType;
}

interface Dimensions {
  height: number;
  width: number;
}

type PositionType = number | "initial";

const defaultConfigObject: ConfigObject = {
  relativeElement: undefined,
  elementToBePositioned: undefined,
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  },
  placement: {
    horizontal: "left",
    vertical: "top"
  },
  offset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  debounceAmount: 20
};

/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain*/
export const usePosition = (providedConfigObject: ConfigObject = defaultConfigObject) => {
  const configObject = { ...defaultConfigObject, ...providedConfigObject };

  if (configObject.transformOrigin === undefined) {
    configObject.transformOrigin = defaultConfigObject.transformOrigin;
  }

  if (configObject.placement === undefined) {
    configObject.placement = defaultConfigObject.placement;
  }

  if (configObject.offset === undefined) {
    configObject.offset = defaultConfigObject.offset;
  }

  const [position, setPosition] = useState<Position>({
    left: 0,
    top: 0,
    right: "initial",
    bottom: "initial"
  });

  const _fixPossibleViewportOverflow = (
    value: number,
    transformOrigin: Placement,
    requestedReturnValue: Axis,
    elDimensions: Dimensions
  ) => {
    let returnValue = value;

    if (
      (transformOrigin[requestedReturnValue] === "left" && returnValue < 0) ||
      (transformOrigin[requestedReturnValue] === "top" && returnValue < 0) ||
      (transformOrigin[requestedReturnValue] === "center" && returnValue < 0) ||
      (transformOrigin[requestedReturnValue] === "bottom" && returnValue < 0)
    ) {
      returnValue = 0;
    }

    if (
      (transformOrigin[requestedReturnValue] === "left" &&
        returnValue > window.innerWidth - elDimensions.width) ||
      (transformOrigin[requestedReturnValue] === "center" &&
        requestedReturnValue === "horizontal" &&
        returnValue > window.innerWidth - elDimensions.width)
    ) {
      returnValue = window.innerWidth - elDimensions.width;
    }

    if (
      (transformOrigin[requestedReturnValue] === "top" &&
        returnValue > window.innerHeight - elDimensions.height) ||
      (transformOrigin[requestedReturnValue] === "center" &&
        requestedReturnValue === "vertical" &&
        returnValue > window.innerHeight - elDimensions.height)
    ) {
      returnValue = window.innerHeight - elDimensions.height;
    }

    if (
      transformOrigin[requestedReturnValue] === "right" &&
      returnValue > window.innerWidth - elDimensions.width
    ) {
      returnValue = window.innerWidth - elDimensions.width;
    }

    if (
      transformOrigin[requestedReturnValue] === "bottom" &&
      returnValue > window.innerHeight - elDimensions.height
    ) {
      returnValue = window.innerHeight - elDimensions.height;
    }

    return returnValue;
  };

  const _applyOffsetToPlacementValue = (
    value: number,
    requestedReturnValue: Axis,
    transformOrigin: Placement
  ) => {
    let returnValue = value;
    if (
      (requestedReturnValue === "horizontal" && configObject.offset?.left !== 0) ||
      (requestedReturnValue === "horizontal" && configObject.offset?.right !== 0)
    ) {
      if (
        transformOrigin[requestedReturnValue] === "left" ||
        transformOrigin[requestedReturnValue] === "center"
      ) {
        returnValue += configObject.offset?.left!;
        returnValue -= configObject.offset?.right!;
      }

      if (transformOrigin[requestedReturnValue] === "right") {
        returnValue -= configObject.offset?.left!;
        returnValue += configObject.offset?.right!;
      }
    }

    if (
      (requestedReturnValue === "vertical" && configObject.offset?.top !== 0) ||
      (requestedReturnValue === "vertical" && configObject.offset?.bottom !== 0)
    ) {
      if (
        transformOrigin[requestedReturnValue] === "top" ||
        transformOrigin[requestedReturnValue] === "center"
      ) {
        returnValue += configObject.offset?.top!;
        returnValue -= configObject.offset?.bottom!;
      }

      if (transformOrigin[requestedReturnValue] === "bottom") {
        returnValue -= configObject.offset?.top!;
        returnValue += configObject.offset?.bottom!;
      }
    }

    return returnValue;
  };

  const _calculateInitialPlacementValue = (
    transformOrigin: Placement,
    requestedReturnValue: Axis,
    relEl: DomRectObject,
    placementOriginDefinition: HorizontalPlacement | VerticalPlacement,
    elDimensions: Dimensions
  ) => {
    let value = 0;

    if (
      transformOrigin[requestedReturnValue] === "left" ||
      transformOrigin[requestedReturnValue] === "top"
    ) {
      value = relEl[placementOriginDefinition];
    } else if (transformOrigin[requestedReturnValue] === "center") {
      value =
        relEl[placementOriginDefinition] -
        elDimensions[requestedReturnValue === "horizontal" ? "width" : "height"] / 2;
    } else if (
      transformOrigin[requestedReturnValue] === "right" ||
      transformOrigin[requestedReturnValue] === "bottom"
    ) {
      value =
        window[requestedReturnValue === "horizontal" ? "innerWidth" : "innerHeight"] -
        relEl[placementOriginDefinition];
    }

    return value;
  };

  /**
   *
   * @param requestedReturnValue whether the requested return value is for the horizontal or vertical axis
   * @returns either the horizontally centered placement definition (centerh) or the vertically centered one (centerv)
   */
  const _determineCenteredPlacementOrigin = (requestedReturnValue: Axis) => {
    if (requestedReturnValue === "horizontal") {
      return "centerh";
    } else if (requestedReturnValue === "vertical") {
      return "centerv";
    }
    throw new Error(
      `the requested return value isn't "vertical" or "horizontal" ${requestedReturnValue} was given.`
    );
  };

  const _calculatePlacementValue = (
    transformOrigin: Placement,
    placement: HorizontalPlacement | VerticalPlacement,
    requestedReturnValue: Axis,
    relEl: DomRectObject,
    elDimensions: Dimensions
  ): number => {
    const placementOriginDefinition =
      placement === "center" ? _determineCenteredPlacementOrigin(requestedReturnValue) : placement;

    const value = _calculateInitialPlacementValue(
      transformOrigin,
      requestedReturnValue,
      relEl,
      placementOriginDefinition,
      elDimensions
    );

    const valueWithOffset = _applyOffsetToPlacementValue(
      value,
      requestedReturnValue,
      transformOrigin
    );

    const valueCorrectionForViewportOverflow = _fixPossibleViewportOverflow(
      valueWithOffset,
      transformOrigin,
      requestedReturnValue,
      elDimensions
    );

    return valueCorrectionForViewportOverflow;
  };

  const _calculatePlacement = (relEl: DomRectObject, elDimensions: Dimensions, axis: Axis) => {
    const placementValue = _calculatePlacementValue(
      configObject.transformOrigin!,
      configObject.placement![axis]!,
      axis,
      relEl,
      elDimensions
    );

    let direction = "left";
    let oppositeDirection = "right";

    if (axis === "horizontal" && configObject.transformOrigin?.horizontal === "right") {
      direction = "right";
      oppositeDirection = "left";
    } else if (axis === "horizontal") {
      direction = "left";
      oppositeDirection = "right";
    }

    if (axis === "vertical" && configObject.transformOrigin?.vertical === "bottom") {
      direction = "bottom";
      oppositeDirection = "top";
    } else if (axis === "vertical") {
      direction = "top";
      oppositeDirection = "bottom";
    }

    setPosition(prevState => ({
      ...prevState,
      [direction]: placementValue,
      [oppositeDirection]: "initial"
    }));
  };

  const calculatePosition = useDebouncedCallback(() => {
    if (!configObject.relativeElement?.current) return;
    const relativeElRect = (configObject.relativeElement!
      .current as HTMLElement)!.getBoundingClientRect();
    const elementToBePositionedDimensions: Dimensions = {
      height: (configObject.elementToBePositioned!.current as HTMLElement).offsetHeight,
      width: (configObject.elementToBePositioned!.current as HTMLElement).offsetWidth
    };

    /** We want to add a center (horizontal and vertical) property to the DOMRect object. Since it's a special object we can't modify so we clone it and add it. */
    const clonedRelEl = {
      top: relativeElRect.top,
      right: relativeElRect.right,
      bottom: relativeElRect.bottom,
      center: 0,
      centerv: relativeElRect.top + relativeElRect.height / 2,
      centerh: relativeElRect.left + relativeElRect.width / 2,
      left: relativeElRect.left,
      width: relativeElRect.width,
      height: relativeElRect.height,
      x: relativeElRect.x,
      y: relativeElRect.y
    };

    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, "horizontal");
    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, "vertical");
  }, configObject.debounceAmount || 20);

  return {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
    calculatePosition
  };
};
