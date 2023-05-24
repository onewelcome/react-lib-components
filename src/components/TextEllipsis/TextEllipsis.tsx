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
  useRef,
  MouseEventHandler,
  useState,
  ComponentPropsWithRef
} from "react";
import { Popover } from "../Popover/Popover";
import classes from "./TextEllipsis.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: string;
  popoverClassName?: string;
}

const TextEllipsisComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, popoverClassName, className, ...rest }: Props,
  ref
) => {
  const [showPopover, setShowPopover] = useState(false);
  const textContainer = useRef<HTMLDivElement>(null);

  const ellipsisVisible = () => {
    if (
      textContainer.current &&
      textContainer.current.offsetWidth < textContainer.current.scrollWidth
    ) {
      return true;
    }
    return false;
  };

  const onMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    ellipsisVisible() && setShowPopover(true);
  };

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    ellipsisVisible() && setShowPopover(false);
  };

  return (
    <div
      {...rest}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${classes["text-ellipsis"]} ${className ?? ""}`}
      ref={ref || textContainer}
    >
      {children}
      <Popover
        aria-hidden={true}
        data-hidden={!showPopover}
        show={showPopover}
        role="tooltip"
        anchorEl={textContainer}
        className={`${classes.popover} ${popoverClassName ?? ""}`}
      >
        {children}
      </Popover>
    </div>
  );
};

export const TextEllipsis = React.forwardRef(TextEllipsisComponent);
