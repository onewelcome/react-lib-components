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
  useState
} from "react";
import { Offset, Placement, PositionType, usePosition } from "../../hooks/usePosition";
import classes from "./Popover.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: ReactNode;
  show?: boolean;
  anchorEl?: RefObject<HTMLOrSVGElement>; //eslint-disable-line no-undef
  placement?: Placement;
  offset?: Offset;
  debounceAmount?: number;
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
    debounceAmount,
    transformOrigin,
    anchorEl,
    onAnchorOutOfView,
    ...rest
  },
  ref
) => {
  const [showPopover, setShowPopover] = useState(false);
  const elToBePositioned = useRef<HTMLDivElement>(null);
  const { top, left, right, bottom, calculatePosition, initialCalculationDone } = usePosition({
    elementToBePositioned: elToBePositioned,
    relativeElement: anchorEl,
    offset: offset,
    placement: placement,
    transformOrigin: transformOrigin,
    debounceAmount: debounceAmount ?? undefined
  });

  const normalizePosition = (value: PositionType) => {
    if (value === "initial") {
      return "initial";
    }

    if (isNaN(value)) {
      return 0;
    }

    return Number(value);
  };

  useEffect(() => {
    if (initialCalculationDone) {
      setShowPopover(!!show);
    }
  }, [show, initialCalculationDone]);

  useEffect(() => {
    if (!showPopover) {
      return;
    }

    window.addEventListener("resize", calculatePosition);
    window.addEventListener("scroll", calculatePosition);

    return () => {
      window.removeEventListener("resize", calculatePosition);
      window.removeEventListener("scroll", calculatePosition);
    };
  }, [showPopover]);

  useEffect(() => {
    calculatePosition();
  }, [showPopover]);

  useEffect(() => {
    const anchor = anchorEl?.current as HTMLElement;

    if (anchor) {
      const anchorTop = anchor.getBoundingClientRect().top;
      const anchorBottom = anchor.getBoundingClientRect().bottom;

      const isAnchorOffscreen =
        showPopover &&
        (Number(top) < 0 ||
          Number(left) < 0 ||
          Number(right) < 0 ||
          Number(bottom) < 0 ||
          anchorTop < 0 ||
          anchorBottom > window.innerHeight);

      if (isAnchorOffscreen) {
        onAnchorOutOfView?.();
      }
    }
  }, [top, left, right, bottom]);

  return (
    <div ref={ref} {...rest}>
      <div
        ref={elToBePositioned}
        className={`${classes.popover} ${className ?? ""} ${showPopover ? classes.show : ""}`}
        style={{
          top: normalizePosition(top),
          left: normalizePosition(left),
          right: normalizePosition(right),
          bottom: normalizePosition(bottom)
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Popover = React.forwardRef(PopoverComponent);
