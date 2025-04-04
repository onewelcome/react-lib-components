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
import { Dialog } from "../../Dialog/Dialog";
import { Typography } from "../../../Typography/Typography";
import { DataAttributeKey } from "../../../../interfaces";
import { CancelAction } from "../../BaseModal/BaseModalActions/BaseModalActions";

export interface Props extends ComponentPropsWithRef<"div"> {
  open: boolean;
  discardChangesButtonLabel: string;
  keepEditingButtonLabel: string;
  cancelAction?: CancelAction;
  contentLabel: string;
  titleLabel: string;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [dataAttribute: DataAttributeKey]: any;

  onKeepEditing: () => void;
  onDiscardChanges: () => void;
}

const DiscardChangesDialogComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    open,
    onKeepEditing,
    onDiscardChanges,
    discardChangesButtonLabel,
    keepEditingButtonLabel,
    contentLabel,
    titleLabel,
    cancelAction,
    ...rest
  }: Props,
  ref
) => {
  return (
    <Dialog
      {...rest}
      ref={ref}
      open={open}
      title={titleLabel}
      onClose={onKeepEditing}
      cancelAction={cancelAction}
      primaryAction={{
        label: discardChangesButtonLabel,
        onClick: onDiscardChanges
      }}
      secondaryAction={{
        label: keepEditingButtonLabel,
        onClick: onKeepEditing
      }}
      disableEscapeKeyDown={false}
    >
      <Typography variant="body" spacing={{ margin: 0 }}>
        {contentLabel}
      </Typography>
    </Dialog>
  );
};

export const DiscardChangesDialog = React.forwardRef(DiscardChangesDialogComponent);
