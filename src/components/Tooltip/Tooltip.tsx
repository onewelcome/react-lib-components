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
  useMemo,
  useRef,
  useState
} from "react";
import { Icon, Icons } from "../Icon/Icon";
import classes from "./Tooltip.module.scss";
import { generateID } from "../../util/helper";
import { Offset, Placement, usePosition } from "../../hooks/usePosition";
import { createPortal } from "react-dom";
import { useGetDomRoot } from "../../hooks/useGetDomRoot";
import { useInlineEditing } from "../../context/InlineEditingContext";

export interface Props extends ComponentPropsWithRef<"div"> {
  label: ReactNode;
  title?: string;
  children: string;
  domRoot?: HTMLElement;
  icon?: Icons;
  iconState?: "info" | "error" | "success";
  location?: "left" | "right" | "top" | "bottom";
  color?: "black" | "blue";
  position?: "start" | "center" | "end";
}

interface DefaultPosition {
  placement: Placement;
  offset: Offset;
  transformOrigin: Placement;
}

type Location = "left" | "right" | "top" | "bottom";
type Position = "start" | "end";
type LocationPosition = `${Location}${Capitalize<Position>}` | `${Location}`;
const locations: Record<LocationPosition, DefaultPosition> = {
  left: {
    placement: { horizontal: "left", vertical: "center" },
    offset: { left: 0, right: 12, top: 0, bottom: 0 },
    transformOrigin: { horizontal: "right", vertical: "center" }
  },
  leftEnd: {
    placement: { horizontal: "left", vertical: "top" },
    offset: { left: 0, right: 12, top: -12, bottom: 0 },
    transformOrigin: { horizontal: "right", vertical: "top" }
  },
  leftStart: {
    placement: { horizontal: "left", vertical: "bottom" },
    offset: { left: 0, right: 12, top: 0, bottom: -12 },
    transformOrigin: { horizontal: "right", vertical: "bottom" }
  },
  right: {
    placement: { horizontal: "right", vertical: "center" },
    offset: { left: 12, right: 0, top: 0, bottom: 0 },
    transformOrigin: { horizontal: "left", vertical: "center" }
  },
  rightEnd: {
    placement: { horizontal: "right", vertical: "top" },
    offset: { left: 12, right: 0, top: -12, bottom: 0 },
    transformOrigin: { horizontal: "left", vertical: "top" }
  },
  rightStart: {
    placement: { horizontal: "right", vertical: "bottom" },
    offset: { left: 12, right: 0, top: 0, bottom: -12 },
    transformOrigin: { horizontal: "left", vertical: "bottom" }
  },
  top: {
    placement: { horizontal: "center", vertical: "top" },
    offset: { left: 0, right: 0, top: 0, bottom: 12 },
    transformOrigin: { horizontal: "center", vertical: "bottom" }
  },
  topEnd: {
    placement: { horizontal: "left", vertical: "top" },
    offset: { left: -12, right: 0, top: 0, bottom: 12 },
    transformOrigin: { horizontal: "left", vertical: "bottom" }
  },
  topStart: {
    placement: { horizontal: "right", vertical: "top" },
    offset: { left: 0, right: -12, top: 0, bottom: 12 },
    transformOrigin: { horizontal: "right", vertical: "bottom" }
  },
  bottom: {
    placement: { horizontal: "center", vertical: "bottom" },
    offset: { left: 0, right: 0, top: 12, bottom: 0 },
    transformOrigin: { horizontal: "center", vertical: "top" }
  },
  bottomEnd: {
    placement: { horizontal: "left", vertical: "bottom" },
    offset: { left: -12, right: 0, top: 12, bottom: 0 },
    transformOrigin: { horizontal: "left", vertical: "top" }
  },
  bottomStart: {
    placement: { horizontal: "right", vertical: "bottom" },
    offset: { left: 0, right: -12, top: 12, bottom: 0 },
    transformOrigin: { horizontal: "right", vertical: "top" }
  }
};

const TooltipComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    title,
    children,
    className,
    domRoot,
    label,
    location = "right",
    position = "center",
    color = "black",
    icon = Icons.InfoCircle,
    iconState,
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

  const iconStateClass = iconState && classes[iconState];

  const isInlineEditingFromContext = useInlineEditing();

  const determinedLocation = useMemo(() => {
    if (position === "center") {
      return location;
    }

    return `${location}${position.charAt(0).toUpperCase() + position.slice(1)}` as LocationPosition;
  }, [location, position]);

  const { top, bottom, right, left, calculatePosition } = usePosition({
    relativeElement: relativeElement,
    elementToBePositioned: elementToBePositioned,
    placement: locations[determinedLocation].placement,
    offset: locations[determinedLocation].offset,
    transformOrigin: locations[determinedLocation].transformOrigin
  });

  useEffect(() => {
    if (!visible) {
      return;
    }

    const escapePressHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVisible(false);
      }
    };

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

  const tooltipClasses = `${classes["tooltip"]} ${classes[color]} ${
    visible ? classes["visible"] : ""
  } ${classes[determinedLocation.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase()]}`;

  return (
    <div {...rest} ref={wrappingDivRef} className={`${classes.wrapper} ${className ?? ""}`}>
      {renderChildren()}
      <div
        className={`${classes["tooltip-wrapper"]} ${isInlineEditingFromContext ? classes["inline-editing"] : ""}`}
      >
        <Icon
          ref={relativeElement}
          tag="div"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          icon={icon}
          data-testid="tooltip-icon"
          className={`${classes.icon} ${iconStateClass}`}
        />
        {createPortal(
          <div
            ref={elementToBePositioned}
            style={{
              ...rest.style,
              top: top,
              left: left,
              right: right,
              bottom: bottom,
              zIndex: 9
            }}
            aria-hidden={!visible}
            id={identifier}
            className={tooltipClasses}
          >
            {title && <span className={classes["tooltip-title"]}>{title}</span>}
            {children}
          </div>,
          root
        )}
      </div>
    </div>
  );
};

export const Tooltip = React.forwardRef(TooltipComponent);
