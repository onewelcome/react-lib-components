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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useState } from "react";
import { BaseModal } from "../BaseModal/BaseModal";
import { BaseModalContent } from "../BaseModal/BaseModalContent/BaseModalContent";
import { DialogActions } from "./DialogActions/DialogActions";
import classes from "./Dialog.module.scss";
import { DialogTitle } from "./DialogTitle/DialogTitle";
import { Button, Props as ButtonProps } from "../../Button/Button";
import { labelId, descriptionId } from "../BaseModal/BaseModalContext";
import { generateID } from "../../../util/helper";

export interface Props extends ComponentPropsWithRef<"div"> {
  id?: string;
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  title: string;
  primaryAction: Action;
  secondaryAction?: Action;
  cancelAction?: Omit<Action, "onClick">;
  zIndex?: number;
  disableEscapeKeyDown?: boolean;
}

export interface Action extends Omit<ButtonProps, "variant" | "ref"> {
  label: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => unknown;
}

const DialogComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    id,
    open,
    children,
    onClose,
    title,
    primaryAction,
    secondaryAction,
    cancelAction,
    zIndex,
    disableEscapeKeyDown = true,
    ...rest
  }: Props,
  ref
) => {
  const [dialogId] = useState(id ?? generateID(20));
  const { label: primaryLabel, ...restOfPrimaryAction } = primaryAction;
  const PrimaryButton = (
    <Button key="primary" {...restOfPrimaryAction}>
      {primaryLabel}
    </Button>
  );

  const SecondaryButton =
    secondaryAction &&
    (function () {
      const { label: secondaryLabel, ...restOfSecondaryAction } = secondaryAction;
      return (
        <Button key="tertiary" variant="outline" {...restOfSecondaryAction}>
          {secondaryLabel}
        </Button>
      );
    })();

  const onHiddenInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    /** It has to be here because then we will need to check if user doesn't click tab to select action button and want to do another action then primary one? */
    if (event.key === "Enter") {
      primaryAction.onClick();
    }
  };

  return (
    <BaseModal
      {...rest}
      ref={ref}
      id={dialogId}
      className={classes["dialog"]}
      containerProps={{ className: classes["container"] }}
      open={open}
      disableBackdrop
      onClose={onClose}
      zIndex={zIndex}
      disableEscapeKeyDown={disableEscapeKeyDown}
    >
      <DialogTitle id={labelId(dialogId)} title={title} />
      <BaseModalContent
        id={descriptionId(dialogId)}
        className={classes["content"]}
        disableAutoFocus
      >
        {children}
      </BaseModalContent>
      <DialogActions onClose={onClose} cancelAction={cancelAction}>
        {[SecondaryButton, PrimaryButton]}
      </DialogActions>
      <input
        autoFocus
        aria-hidden={true}
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          opacity: 0
        }}
        maxLength={0}
        tabIndex={-1}
        onKeyDown={onHiddenInputKeyPress}
      />
    </BaseModal>
  );
};

export const Dialog = React.forwardRef(DialogComponent);
