import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { SnackbarContextProvider } from './SnackbarStateProvider';
import { Actions, SnackbarOptionsProps, Variant } from '../interfaces';
import { SnackbarItem } from '../SnackbarItem/SnackbarItem';
import { Position, SnackbarContainer } from '../SnackbarContainer/SnackbarContainer';

interface Duration {
  long: number;
  short: number;
}

export interface Props {
  children?: React.ReactNode;
  position?: Position;
  stackSize?: number;
  domRoot?: HTMLElement;
  autoHideDuration?: Duration;
}

interface SnackbarItem {
  id: string;
  title: string;
  duration: number;
  variant: Variant;
  content?: string;
  actions?: Actions;
}

export const SnackbarProvider = ({
  position = { vertical: 'bottom', horizontal: 'center' },
  autoHideDuration = { long: 8000, short: 4000 },
  stackSize = 3,
  domRoot = document.body,
  children,
}: Props = {}) => {
  const [snackbars, setSnackbars] = useState<SnackbarItem[]>([]);

  const addSnackbar = (item: SnackbarItem) => {
    setSnackbars((items) => [...items, item]);
  };

  const getDuration = (variant: Variant, actions?: Actions, content?: string) => {
    const hasError = variant === 'error';
    const hasContentOrActions = content || actions;
    if (hasError || hasContentOrActions) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };

  /**
   * Shows snackbar. Short msg is when only title is provided. Long one when content or/and actions are provided.
   */
  const enqueueSnackbar = (
    title: string,
    content?: string,
    options: SnackbarOptionsProps = {}
  ): void => {
    const {
      variant = 'info',
      actions,
      duration = getDuration(variant, actions, content),
    } = options;
    const item: SnackbarItem = {
      title,
      content,
      variant,
      actions,
      duration,
      id: 'tmp' + Date.now(),
    };
    addSnackbar(item);
  };

  const enqueueSuccessSnackbar = (
    title: string,
    content?: string,
    options?: SnackbarOptionsProps
  ): void => {
    enqueueSnackbar(title, content, { ...options, variant: 'success' });
  };

  const enqueueErrorSnackbar = (
    title: string,
    content?: string,
    options?: SnackbarOptionsProps
  ): void => {
    enqueueSnackbar(title, content, { ...options, variant: 'error' });
  };

  const onItemClosed = (id: string) => {
    setSnackbars((snackbars) => [...snackbars].filter((item) => item.id !== id));
  };

  const snackbarList = snackbars.map((item, index) =>
    index < stackSize ? <SnackbarItem {...item} key={item.id} onClose={onItemClosed} /> : null
  );

  const snackbarPortal = createPortal(
    <SnackbarContainer position={position}>{snackbarList}</SnackbarContainer>,
    domRoot
  );

  console.log('snackbars', snackbars);

  return (
    <SnackbarContextProvider
      initialState={{ enqueueSnackbar, enqueueSuccessSnackbar, enqueueErrorSnackbar }}
    >
      {children}
      {snackbarPortal}
    </SnackbarContextProvider>
  );
};
