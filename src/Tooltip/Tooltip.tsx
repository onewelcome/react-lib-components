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
  ComponentPropsWithRef,
  createRef,
  ForwardRefRenderFunction,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { Icon, Icons } from "../Icon/Icon";
import classes from "./Tooltip.module.scss";
import { generateID } from "../util/helper";
import { Offset, Placement, usePosition } from "../hooks/usePosition";
import { createPortal } from "react-dom";
import { useGetDomRoot } from "../hooks/useGetDomRoot";

export interface Props extends ComponentPropsWithRef<"div"> {
  label: string | ReactNode;
  children: string;
  placement?: Placement;
  offset?: Offset;
  transformOrigin?: Placement;
  domRoot?: HTMLElement;
}

interface DefaultPosition {
  placement: Placement;
  offset: Offset;
  transformOrigin: Placement;
}

const defaultPosition: DefaultPosition = {
  placement: { horizontal: "right", vertical: "center" },
  offset: { left: 16, right: 0, top: 0, bottom: 0 },
  transformOrigin: { horizontal: "left", vertical: "center" }
};

const TooltipComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    className,
    placement = defaultPosition.placement,
    offset = defaultPosition.offset,
    transformOrigin = defaultPosition.transformOrigin,
    domRoot,
    label,
    ...rest
  }: Props,
  ref
) => {
  const [identifier] = useState(generateID());
  const [visible, setVisible] = useState(false);

  const wrappingDivRef = (ref as RefObject<HTMLDivElement>) || createRef<HTMLDivElement>();
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);

  const relativeElement = useRef<HTMLDivElement>(null);
  const elementToBePositioned = useRef<HTMLDivElement>(null);

  const { top, bottom, right, left, calculatePosition } = usePosition({
    relativeElement: relativeElement,
    elementToBePositioned: elementToBePositioned,
    placement: placement,
    offset: offset,
    transformOrigin: transformOrigin
  });

  useEffect(() => {
    if (!visible) return;

    function escapePressHandler(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setVisible(false);
      }
    }

    document.addEventListener("keyup", escapePressHandler);

    return () => {
      document.removeEventListener("keyup", escapePressHandler);
    };
  }, [visible]);

  useLayoutEffect(() => {
    calculatePosition();
  }, [visible]);

  const renderChildren = () => {
    if (React.isValidElement(label)) {
      return React.cloneElement(label as ReactElement, {
        onFocus: () => setVisible(true),
        onBlur: () => setVisible(false),
        "aria-describedby": identifier,
        tabIndex: 0,
        className: classes["label"]
      });
    }

    return (
      <span
        className={classes["label"]}
        tabIndex={0}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        aria-describedby={identifier}
      >
        {label}
      </span>
    );
  };

  return (
    <div {...rest} ref={wrappingDivRef} className={`${classes.wrapper} ${className ?? ""}`}>
      {renderChildren()}
      <div className={`${classes["tooltip-wrapper"]}`}>
        <Icon
          ref={relativeElement}
          tag="div"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          icon={Icons.InfoCircle}
          className={classes.icon}
        />
        {createPortal(
          <div
            ref={elementToBePositioned}
            style={{
              ...rest.style,
              top: top,
              left: left,
              right: right,
              bottom: bottom
            }}
            aria-hidden={!visible}
            id={identifier}
            className={`${classes.tooltip} ${visible ? classes.visible : ""}`}
          >
            {children}
          </div>,
          root
        )}
      </div>
    </div>
  );
};

export const Tooltip = React.forwardRef(TooltipComponent);
