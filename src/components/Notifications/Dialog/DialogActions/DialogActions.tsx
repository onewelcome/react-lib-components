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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useEffect } from "react";
import {
  BaseModalActions,
  Props as BaseModalActionsProps,
  CancelAction
} from "../../BaseModal/BaseModalActions/BaseModalActions";
import classes from "./DialogActions.module.scss";

export interface Props extends ComponentPropsWithRef<any>, BaseModalActionsProps {
  cancelAction?: CancelAction;
}

const DialogActionsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, cancelAction, onClose, ...rest }: Props,
  ref
) => {
  return (
    <BaseModalActions
      {...rest}
      cancelAction={{ label: cancelAction?.label, disable: cancelAction?.disable }}
      onClose={onClose}
      ref={ref}
      className={classes["actions"]}
    >
      {children}
    </BaseModalActions>
  );
};

export const DialogActions = React.forwardRef(DialogActionsComponent);
