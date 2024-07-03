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

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer
} from "react";
import {
  Notification,
  ErrorNotification,
  SuccessNotification,
  Translations,
  AddNotification
} from "./notification.interfaces";
import { defaultTranslations } from "./NotificationService";
import { deepMerge, generateID } from "../../../util/helper";
import { DeepPartial } from "../../../interfaces";
import { useAlert } from "../Alert/useAlert";

interface NotificationState {
  notifications: Notification<ErrorNotification | SuccessNotification>[];
}

export interface NotificationAction {
  type: "add" | "remove" | "handled" | "reset";
  payload?: Notification<ErrorNotification | SuccessNotification> & {
    id?: string;
    handled?: boolean;
  };
}

const initialState: NotificationState = {
  notifications: []
};

export interface NotificationHandlerProps {
  translations?: DeepPartial<Translations>;
  dispatchFn: React.Dispatch<NotificationAction>;
}

export const NotificationHandler = ({
  translations = {},
  dispatchFn
}: NotificationHandlerProps) => {
  const { enqueueErrorAlert, enqueueSuccessAlert } = useAlert();
  const {
    state: { notifications }
  } = useNotificationContext();

  const mergedTranslations = deepMerge<Translations>(defaultTranslations, translations);

  const determineNotificationMessage = (notification: Notification<ErrorNotification>) => {
    if (notification.message) {
      return notification.message;
    }

    switch (notification.status) {
      case 500:
        return mergedTranslations.messages.general;
      case 400:
        return mergedTranslations.messages.badRequest;
      case 401:
        return mergedTranslations.messages.unauthorized;
      case 403:
        return mergedTranslations.messages.forbidden;
      case 404:
        return mergedTranslations.messages.notFound;
      case 502:
      case 503:
        return mergedTranslations.messages.unavailable;
      case 504:
        return mergedTranslations.messages.timeout;
      default:
        return mergedTranslations.messages.general;
    }
  };

  useEffect(() => {
    notifications.forEach(notification => {
      if (
        notification.status &&
        notification.handled &&
        (notification.status === 401 || notification.status === 403)
      ) {
        dispatchFn({ type: "remove", payload: { id: notification.id } });
      } else if (notification.status && !notification.handled && notification.type === "error") {
        enqueueErrorAlert({
          title: notification.title ?? mergedTranslations.general.error,
          content: determineNotificationMessage(notification as Notification<ErrorNotification>),
          onClose: () => dispatchFn({ type: "remove", payload: { id: notification.id } })
        });
        dispatchFn({ type: "handled", payload: { id: notification.id, handled: true } });
      } else if (notification.title && !notification.handled && notification.type === "success") {
        enqueueSuccessAlert({
          title: notification.title ?? mergedTranslations.general.success,
          content: notification.message,
          onClose: () => dispatchFn({ type: "remove", payload: { id: notification.id } })
        });

        dispatchFn({ type: "handled", payload: { id: notification.id, handled: true } });
      }
    });
  }, [notifications.length]);

  return null;
};

export const NotificationContext = createContext<{
  state: NotificationState;
  dispatch: React.Dispatch<NotificationAction>;
}>({
  state: initialState,
  dispatch: () => undefined
});

export interface Props {
  children?: ReactNode;
  translations?: DeepPartial<Translations>;
}

export const NotificationProvider = ({ children, translations }: Props) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
      <NotificationHandler translations={translations} dispatchFn={dispatch} />
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const ctx = useContext(NotificationContext);

  const addNotification = useCallback(
    (notification: AddNotification) => {
      ctx.dispatch({ type: "add", payload: notification });
    },
    [ctx]
  );

  const removeNotification = useCallback(
    (id: string) => {
      ctx.dispatch({ type: "remove", payload: { id } });
    },
    [ctx]
  );

  const resetNotifications = useCallback(() => {
    ctx.dispatch({ type: "reset" });
  }, [ctx]);

  return {
    state: ctx.state,
    addNotification,
    removeNotification,
    resetNotifications
  };
};

export const notificationReducer = (
  state: NotificationState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.payload,
            id: generateID(),
            handled: false
          }
        ]
      };
    case "remove":
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload?.id
        )
      };
    case "handled":
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload?.id ? { ...notification, handled: true } : notification
        )
      };
    case "reset":
      return {
        ...state,
        notifications: []
      };
    default:
      return state;
  }
};
