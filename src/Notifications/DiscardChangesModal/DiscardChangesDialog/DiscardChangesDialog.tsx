import React from 'react';
import { Dialog } from '../../Dialog/Dialog';
import { HTMLProps } from '../../../interfaces';
import { Typography } from '../../../Typography/Typography';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  open: boolean;
  discardChangesButtonLabel: string;
  keepEditingButtonLabel: string;
  contentLabel: string;
  titleLabel: string;
  onKeepEditing: () => void;
  onDiscardChanges: () => void;
}

export const DiscardChangesDialog = ({
  open,
  onKeepEditing,
  onDiscardChanges,
  discardChangesButtonLabel,
  keepEditingButtonLabel,
  contentLabel,
  titleLabel,
  ...rest
}: Props) => {
  return (
    <Dialog
      {...rest}
      open={open}
      alignActions="left"
      title={titleLabel}
      onClose={onKeepEditing}
      primaryAction={{
        label: discardChangesButtonLabel,
        onClick: onDiscardChanges,
      }}
      secondaryAction={{
        label: keepEditingButtonLabel,
        onClick: onKeepEditing,
      }}
      disableEscapeKeyDown={false}
    >
      <Typography variant="body" spacing={{ margin: 0 }}>
        {contentLabel}
      </Typography>
    </Dialog>
  );
};
