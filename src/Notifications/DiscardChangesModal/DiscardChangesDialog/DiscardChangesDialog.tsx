import React, { ComponentPropsWithRef } from "react";
import { Dialog } from "../../Dialog/Dialog";
import { Typography } from "../../../Typography/Typography";
import { DataAttributeKey } from "../../../interfaces";

export interface Props extends ComponentPropsWithRef<"div"> {
  open: boolean;
  discardChangesButtonLabel: string;
  keepEditingButtonLabel: string;
  contentLabel: string;
  titleLabel: string;
  [dataAttribute: DataAttributeKey]: any;
  onKeepEditing: () => void;
  onDiscardChanges: () => void;
}

export const DiscardChangesDialog = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      open,
      onKeepEditing,
      onDiscardChanges,
      discardChangesButtonLabel,
      keepEditingButtonLabel,
      contentLabel,
      titleLabel,
      ...rest
    }: Props,
    ref
  ) => {
    return (
      <Dialog
        {...rest}
        ref={ref}
        open={open}
        alignActions="left"
        title={titleLabel}
        onClose={onKeepEditing}
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
  }
);
