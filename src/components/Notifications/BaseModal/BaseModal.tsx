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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useGetDomRoot } from "../../../hooks/useGetDomRoot";
import classes from "./BaseModal.module.scss";
import { labelId, descriptionId } from "./BaseModalContext";

const SCROLL_PROPERTY_NAME = "overflow";
const SCROLL_PROPERTY_VALUE = "hidden";

export interface Props extends ComponentPropsWithRef<"div"> {
  id: string;
  children: React.ReactNode;
  open: boolean;
  onClose?: (event?: React.MouseEvent<HTMLElement>) => unknown;
  className?: string;
  containerProps?: ComponentPropsWithRef<"div">;
  backdropProps?: ComponentPropsWithRef<"div">;
  labelledby?: string;
  describedby?: string;
  disableEscapeKeyDown?: boolean;
  disableBackdrop?: boolean;
  forceContainerOpen?: boolean;
  zIndex?: number;
  domRoot?: HTMLElement;
}

export const useSetBodyScroll = (open: boolean) => {
  const hideBodyScroll = () => {
    document.body.style[SCROLL_PROPERTY_NAME] = SCROLL_PROPERTY_VALUE;
  };

  const showBodyScroll = () => {
    const allModalsClosed =
      document.querySelectorAll("[role=dialog][data-hidden=false]").length === 0;
    if (allModalsClosed) {
      document.body.style.removeProperty(SCROLL_PROPERTY_NAME);
    }
  };

  useEffect(() => {
    if (open) {
      hideBodyScroll();
    } else {
      showBodyScroll();
    }
  }, [open]);
};

const BaseModalComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    id,
    children,
    open,
    onClose,
    className = "",
    containerProps,
    backdropProps,
    labelledby,
    describedby,
    disableEscapeKeyDown = false,
    disableBackdrop = false,
    forceContainerOpen = false,
    zIndex,
    domRoot,
    ...rest
  }: Props,
  ref
) => {
  useSetBodyScroll(open);
  const wrappingDivRef = useRef<HTMLDivElement>(null);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);

  const handleEscKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disableEscapeKeyDown && event.key === "Escape") {
      event.stopPropagation();
      onClose?.();
    }
  };

  useEffect(() => {
    if (open) {
      wrappingDivRef.current?.focus();
    }
  }, [open]);

  const handleBackdropClick = () => !disableBackdrop && onClose && onClose();

  return (
    <div ref={wrappingDivRef}>
      {createPortal(
        <div
          {...rest}
          ref={ref}
          id={id}
          className={`${classes["modal"]} ${open ? classes["visible"] : ""} ${className}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledby ?? labelId(id)}
          aria-describedby={describedby ?? descriptionId(id)}
          aria-hidden={!open}
          tabIndex={-1}
          data-hidden={!open}
          onKeyDown={handleEscKeyPress}
          style={{ zIndex }}
        >
          <div
            {...backdropProps}
            className={`${classes["backdrop"]} ${backdropProps?.className ?? ""}`}
            onClick={handleBackdropClick}
          ></div>
          {forceContainerOpen ? (
            <div
              {...containerProps}
              aria-hidden={!open}
              data-element="dialog"
              hidden={!open}
              style={{ zIndex: zIndex && zIndex + 1 }}
              className={`${classes["container"]} ${containerProps?.className ?? ""}`}
            >
              {children}
            </div>
          ) : (
            open && (
              <div
                {...containerProps}
                data-element="dialog"
                style={{ zIndex: zIndex && zIndex + 1 }}
                className={`${classes["container"]} ${containerProps?.className ?? ""}`}
              >
                {children}
              </div>
            )
          )}
        </div>,
        root
      )}
    </div>
  );
};

export const BaseModal = React.forwardRef(BaseModalComponent);
