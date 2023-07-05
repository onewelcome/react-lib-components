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
import { Button } from "../../../Button/Button";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
  onClose: () => void;
  cancelAction?: CancelAction;
}

export interface CancelAction {
  label?: string;
  disable?: boolean;
}

const BaseModalActionsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    onClose,
    cancelAction = { label: undefined, disable: false },
    className = "",
    ...rest
  }: Props,
  ref
) => {
  const innerRef = (React.createRef() as React.RefObject<HTMLDivElement>) || ref;
  const cancelButtonRef = useRef<HTMLDivElement>(null);
  const primaryActionsRef = useRef<HTMLDivElement>(null);

  const CancelButton = (
    <Button key="cancel" variant="text" color="default" onClick={onClose}>
      {cancelAction?.label ?? "Cancel"}
    </Button>
  );

  return (
    <div {...rest} ref={innerRef} className={`${classes["actions"]} ${className}`}>
      {!cancelAction.disable && (
        <div className={classes["cancel-action"]} ref={cancelButtonRef}>
          {CancelButton}
        </div>
      )}
      <div ref={primaryActionsRef} className={classes["primary-actions"]}>
        {children}
      </div>
    </div>
  );
};

export const BaseModalActions = React.forwardRef(BaseModalActionsComponent);
