import { useState } from 'react';

export interface ConfigObject {
  relativeElement: React.RefObject<HTMLOrSVGElement> | undefined;
  elementToBePositioned: React.RefObject<HTMLOrSVGElement> | undefined;
  transformOrigin?: Placement;
  placement?: Placement;
  offset?: Offset;
}

export type HorizontalPlacment = 'left' | 'center' | 'centerh' | 'right';
export type VerticalPlacement = 'top' | 'center' | 'centerv' | 'bottom';

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
  horizontal: HorizontalPlacment;
  vertical: VerticalPlacement;
}

export interface Offset {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface Position {
  top: PositionType;
  right: PositionType;
  bottom: PositionType;
  left: PositionType;
}

interface Dimensions {
  height: number;
  width: number;
}

type PositionType = number | 'initial';

const defaultConfigObject: ConfigObject = {
  relativeElement: undefined,
  elementToBePositioned: undefined,
  transformOrigin: {
    horizontal: 'left',
    vertical: 'top',
  },
  placement: {
    horizontal: 'left',
    vertical: 'top',
  },
  offset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

export const usePosition = (configObject: ConfigObject = defaultConfigObject) => {
  configObject = { ...defaultConfigObject, ...configObject };
  const [position, setPosition] = useState<Position>({
    left: 0,
    top: 0,
    right: 'initial',
    bottom: 'initial',
  });

  const _calculatePlacementValue = (
    transformOrigin: Placement,
    placement: HorizontalPlacment | VerticalPlacement,
    requestedReturnValue: 'vertical' | 'horizontal',
    relEl: DomRectObject,
    elDimensions: Dimensions
  ): number => {
    let value = 0;
    let placementOriginDefinition = placement;

    if (requestedReturnValue === 'horizontal' && placement === 'center') {
      placementOriginDefinition = 'centerh';
    }

    if (requestedReturnValue === 'vertical' && placement === 'center') {
      placementOriginDefinition = 'centerv';
    }

    if (
      transformOrigin[requestedReturnValue] === 'left' ||
      transformOrigin[requestedReturnValue] === 'top'
    ) {
      value = relEl[placementOriginDefinition];
    }

    if (transformOrigin[requestedReturnValue] === 'center') {
      value =
        relEl[placementOriginDefinition] -
        elDimensions[requestedReturnValue === 'horizontal' ? 'width' : 'height'] / 2;
    }

    if (
      transformOrigin[requestedReturnValue] === 'right' ||
      transformOrigin[requestedReturnValue] === 'bottom'
    ) {
      value =
        window[requestedReturnValue === 'horizontal' ? 'innerWidth' : 'innerHeight'] -
        relEl[placementOriginDefinition];
    }

    if (
      (transformOrigin[requestedReturnValue] === 'bottom' && value > window.innerHeight) ||
      (transformOrigin[requestedReturnValue] === 'right' && value > window.innerWidth)
    ) {
      value =
        window[requestedReturnValue === 'horizontal' ? 'innerWidth' : 'innerHeight'] -
        elDimensions[requestedReturnValue === 'horizontal' ? 'width' : 'height'];
    }

    /** Calculate the proper value when we have an offset. */
    if (
      (requestedReturnValue === 'horizontal' && configObject.offset?.left !== 0) ||
      (requestedReturnValue === 'horizontal' && configObject.offset?.right !== 0)
    ) {
      if (
        transformOrigin[requestedReturnValue] === 'left' ||
        transformOrigin[requestedReturnValue] === 'center'
      ) {
        value += configObject.offset?.left!;
        value -= configObject.offset?.right!;
      }

      if (transformOrigin[requestedReturnValue] === 'right') {
        value -= configObject.offset?.left!;
        value += configObject.offset?.right!;
      }
    }

    if (
      (requestedReturnValue === 'vertical' && configObject.offset?.top !== 0) ||
      (requestedReturnValue === 'vertical' && configObject.offset?.bottom !== 0)
    ) {
      if (
        transformOrigin[requestedReturnValue] === 'top' ||
        transformOrigin[requestedReturnValue] === 'center'
      ) {
        value += configObject.offset?.top!;
        value -= configObject.offset?.bottom!;
      }

      if (transformOrigin[requestedReturnValue] === 'bottom') {
        value -= configObject.offset?.top!;
        value += configObject.offset?.bottom!;
      }
    }

    /** If after all the calculations done above, the value causes the elementToBePositioned to be outside of the viewport, we fix that. */
    if (
      (transformOrigin[requestedReturnValue] === 'left' && value < 0) ||
      (transformOrigin[requestedReturnValue] === 'top' && value < 0) ||
      (transformOrigin[requestedReturnValue] === 'center' && value < 0) ||
      (transformOrigin[requestedReturnValue] === 'bottom' && value < 0)
    ) {
      value = 0;
    }

    if (
      (transformOrigin[requestedReturnValue] === 'left' &&
        value > window.innerWidth - elDimensions.width) ||
      (transformOrigin[requestedReturnValue] === 'center' &&
        requestedReturnValue === 'horizontal' &&
        value > window.innerWidth - elDimensions.width)
    ) {
      value = window.innerWidth - elDimensions.width;
    }

    if (
      (transformOrigin[requestedReturnValue] === 'top' &&
        value > window.innerHeight - elDimensions.height) ||
      (transformOrigin[requestedReturnValue] === 'center' &&
        requestedReturnValue === 'vertical' &&
        value > window.innerHeight - elDimensions.height)
    ) {
      value = window.innerHeight - elDimensions.height;
    }

    if (
      transformOrigin[requestedReturnValue] === 'right' &&
      value > window.innerWidth - elDimensions.width
    ) {
      value = window.innerWidth - elDimensions.width;
    }

    if (
      transformOrigin[requestedReturnValue] === 'bottom' &&
      value > window.innerHeight - elDimensions.height
    ) {
      value = window.innerHeight - elDimensions.height;
    }

    return value;
  };

  const _calculatePlacement = (
    relEl: DomRectObject,
    elDimensions: Dimensions,
    axis: 'horizontal' | 'vertical'
  ) => {
    let placementValue = _calculatePlacementValue(
      configObject.transformOrigin!,
      configObject.placement![axis]!,
      axis,
      relEl,
      elDimensions
    );

    let direction = 'left';
    let oppositeDirection = 'right';

    if (axis === 'horizontal' && configObject.transformOrigin?.horizontal === 'right') {
      direction = 'right';
      oppositeDirection = 'left';
    } else if (axis === 'horizontal') {
      direction = 'left';
      oppositeDirection = 'right';
    }

    if (axis === 'vertical' && configObject.transformOrigin?.vertical === 'bottom') {
      direction = 'bottom';
      oppositeDirection = 'top';
    } else if (axis === 'vertical') {
      direction = 'top';
      oppositeDirection = 'bottom';
    }

    setPosition((prevState) => ({
      ...prevState,
      [direction]: placementValue,
      [oppositeDirection]: 'initial',
    }));
  };

  const calculatePosition = () => {
    const relativeElRect = (configObject.relativeElement!
      .current as HTMLElement)!.getBoundingClientRect();
    const elementToBePositionedDimensions: Dimensions = {
      height: (configObject.elementToBePositioned!.current as HTMLElement).offsetHeight,
      width: (configObject.elementToBePositioned!.current as HTMLElement).offsetWidth,
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
      y: relativeElRect.y,
    };

    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, 'horizontal');
    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, 'vertical');
  };

  return {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
    calculatePosition,
  };
};
