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

import React, {
  ForwardRefRenderFunction,
  ComponentPropsWithRef,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useCallback
} from "react";
import { Offset, Placement, usePosition } from "../hooks/usePosition";
import classes from "./Popover.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: ReactNode;
  show?: boolean;
  anchorEl?: RefObject<HTMLOrSVGElement>; //eslint-disable-line no-undef
  placement?: Placement;
  offset?: Offset;
  transformOrigin?: Placement;
  onAnchorOutOfView?: () => void;
}

const PopoverComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    className,
    show,
    placement,
    offset,
    transformOrigin,
    anchorEl,
    onAnchorOutOfView,
    ...rest
  },
  ref
) => {
  const elToBePositioned = useRef<HTMLDivElement>(null);

  if (show === undefined) {
    throw new Error('Please make sure to define the "show" property on your Popover component');
  }

  const { top, left, right, bottom, calculatePosition } = usePosition({
    elementToBePositioned: elToBePositioned,
    relativeElement: anchorEl,
    offset: offset,
    placement: placement,
    transformOrigin: transformOrigin
  });

  const determineIfExecuteCalculatePosition = useCallback(() => {
    if (show) {
      calculatePosition();
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("resize", determineIfExecuteCalculatePosition);
    window.addEventListener("scroll", determineIfExecuteCalculatePosition);

    return () => {
      window.removeEventListener("resize", determineIfExecuteCalculatePosition);
      window.removeEventListener("scroll", determineIfExecuteCalculatePosition);
    };
  }, [show]);

  useEffect(() => {
    calculatePosition();
  }, [show]);

  useEffect(() => {
    if (
      show &&
      (top === 0 ||
        left === 0 ||
        right === 0 ||
        bottom === 0 ||
        window.innerHeight - (elToBePositioned.current as HTMLElement).offsetHeight === top)
    ) {
      onAnchorOutOfView && onAnchorOutOfView();
    }
  }, [top, left, right, bottom]);

  return (
    <div ref={ref} {...rest}>
      <div
        ref={elToBePositioned}
        className={`${classes.popover} ${className ?? ""} ${show ? classes.show : ""}`}
        style={{ top: top, left: left, right: right, bottom: bottom }}
      >
        {children}
      </div>
    </div>
  );
};

export const Popover = React.forwardRef(PopoverComponent);
