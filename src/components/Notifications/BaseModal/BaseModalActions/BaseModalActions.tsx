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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef } from "react";
import classes from "./BaseModalActions.module.scss";
import { Button } from "../../../Button/Button";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
  onClose: () => void;
  cancelAction?: { label?: string };
}

const BaseModalActionsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, onClose, cancelAction, className = "", ...rest }: Props,
  ref
) => {
  const CancelButton = (
    <Button key="cancel" variant="text" onClick={onClose}>
      {cancelAction?.label || "Cancel"}
    </Button>
  );

  return (
    <div {...rest} ref={ref} className={`${classes["actions"]} ${className}`}>
      <div>{CancelButton}</div>
      <div>{children}</div>
    </div>
  );
};

export const BaseModalActions = React.forwardRef(BaseModalActionsComponent);
