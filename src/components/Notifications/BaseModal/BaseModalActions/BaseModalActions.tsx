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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useRef } from "react";
import classes from "./BaseModalActions.module.scss";
import { Button, Props as ButtonProps } from "../../../Button/Button";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
  onClose?: () => void;
  cancelAction?: CancelAction;
  cancelActionsClassName?: string;
}

export interface CancelAction {
  label: string;
  cancelButtonProps?: ButtonProps;
}

const BaseModalActionsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, cancelAction, cancelActionsClassName = "", onClose, className = "", ...rest }: Props,
  ref
) => {
  const innerRef = (React.createRef() as React.RefObject<HTMLDivElement>) || ref;
  const cancelButtonRef = useRef<HTMLDivElement>(null);
  const primaryActionsRef = useRef<HTMLDivElement>(null);

  const cancelButton = (
    <Button variant="text" color="default" {...cancelAction?.cancelButtonProps} onClick={onClose}>
      {cancelAction?.label}
    </Button>
  );

  return (
    <div {...rest} ref={innerRef} className={`${classes["actions"]} ${className}`}>
      {cancelAction && (
        <div
          className={`${classes["cancel-action"]} ${cancelActionsClassName}`}
          ref={cancelButtonRef}
        >
          {cancelButton}
        </div>
      )}
      {children && (
        <div ref={primaryActionsRef} className={classes["primary-actions"]}>
          {children}
        </div>
      )}
    </div>
  );
};

export const BaseModalActions = React.forwardRef(BaseModalActionsComponent);
