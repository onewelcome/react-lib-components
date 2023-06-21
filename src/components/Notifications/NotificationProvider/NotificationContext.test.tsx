const enqueueErrorSnackbarMock = jest.fn();

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

import React, { useEffect } from "react";
import { render, renderHook, waitFor } from "@testing-library/react";
import { NotificationProvider, useNotificationContext } from "./NotificationContext";
import { Translations } from "./notification.interfaces";
import { act } from "react-dom/test-utils";

jest.mock("../Snackbar/useSnackbar", () => ({
  useSnackbar: () => ({
    enqueueErrorSnackbar: enqueueErrorSnackbarMock,
    enqueueSuccessSnackbar: jest.fn()
  })
}));

jest.mock("../../../util/helper", () => ({
  generateID: () => "test-id",
  deepMerge: (defaultTranslations: Translations, translations: Translations) => ({
    ...defaultTranslations,
    ...translations
  })
}));

describe("Notification", () => {
  describe("useNotificationContext", () => {
    it("returns the correct context", () => {
      const { result } = renderHook(() => useNotificationContext(), {
        wrapper: NotificationProvider
      });
      expect(result.current).toEqual({
        addNotification: expect.any(Function),
        removeNotification: expect.any(Function),
        resetNotifications: expect.any(Function),
        state: {
          notifications: []
        }
      });
    });
  });

  describe("Adding and using the notification functions", () => {
    it("Fires the addNotification and removeNotification function", async () => {
      const { result } = renderHook(() => useNotificationContext(), {
        wrapper: NotificationProvider
      });

      expect(result.current.state.notifications).toEqual([]);

      await act(() => {
        result.current.addNotification({
          type: "error",
          status: 401,
          message: "Test Error"
        });
      });

      expect(result.current.state.notifications).toEqual([
        {
          id: "test-id",
          type: "error",
          status: 401,
          message: "Test Error",
          handled: true
        }
      ]);

      await act(() => {
        result.current.removeNotification("test-id");
      });

      expect(result.current.state.notifications).toEqual([]);
    });

    it("Fires the resetNotifications function", async () => {
      const { result } = renderHook(() => useNotificationContext(), {
        wrapper: NotificationProvider
      });

      expect(result.current.state.notifications).toEqual([]);

      await act(() => {
        result.current.addNotification({
          type: "error",
          status: 401,
          message: "Test Error"
        });
      });

      expect(result.current.state.notifications).toEqual([
        {
          id: "test-id",
          type: "error",
          status: 401,
          message: "Test Error",
          handled: true
        }
      ]);

      await act(() => {
        result.current.resetNotifications();
      });

      expect(result.current.state.notifications).toEqual([]);
    });
  });

  describe("Translations", () => {
    it("Translates the status 400, 401 and 403 translations", async () => {
      const providedTranslations = {
        general: { error: "TestError" },
        messages: {
          unauthorized: "Test unauthorized",
          badRequest: "Test bad request",
          forbidden: "Test forbidden"
        }
      };

      const TestComponent = () => {
        const { addNotification, state } = useNotificationContext();

        useEffect(() => {
          (async () => {
            if (state.notifications.length === 3) {
              await waitFor(() =>
                expect(state.notifications).toEqual([
                  {
                    id: "test-id",
                    type: "error",
                    status: 400,
                    message: "TestError",
                    handled: true
                  },
                  {
                    id: "test-id",
                    type: "error",
                    status: 401,
                    message: "TestError",
                    handled: true
                  },
                  {
                    id: "test-id",
                    type: "error",
                    status: 403,
                    message: "TestError",
                    handled: true
                  }
                ])
              );
            }
          })();
        }, [state.notifications]);

        useEffect(() => {
          (async () => {
            await act(() => {
              addNotification({ type: "error", status: 400 });
              addNotification({ type: "error", status: 401 });
              addNotification({ type: "error", status: 403 });
            });
          })();
        }, []);

        return null;
      };

      render(
        <NotificationProvider translations={providedTranslations}>
          <TestComponent />
        </NotificationProvider>
      );

      await waitFor(() => {
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledTimes(3);
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test bad request", {
          onClose: expect.any(Function)
        });
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test unauthorized", {
          onClose: expect.any(Function)
        });
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test forbidden", {
          onClose: expect.any(Function)
        });
      });
    });

    it("Translates the status 404, 500 and 502 translations", async () => {
      const providedTranslations = {
        general: { error: "TestError" },
        messages: {
          notFound: "Test not found",
          general: "Test general",
          unavailable: "Test unavailable"
        }
      };

      const TestComponent = () => {
        const { addNotification, state } = useNotificationContext();

        useEffect(() => {
          (async () => {
            if (state.notifications.length === 3) {
              await waitFor(() =>
                expect(state.notifications).toEqual([
                  {
                    id: "test-id",
                    type: "error",
                    status: 404,
                    message: "TestError",
                    handled: true
                  },
                  {
                    id: "test-id",
                    type: "error",
                    status: 500,
                    message: "TestError",
                    handled: true
                  },
                  {
                    id: "test-id",
                    type: "error",
                    status: 502,
                    message: "TestError",
                    handled: true
                  }
                ])
              );
            }
          })();
        }, [state.notifications]);

        useEffect(() => {
          (async () => {
            await act(() => {
              addNotification({ type: "error", status: 404 });
              addNotification({ type: "error", status: 500 });
              addNotification({ type: "error", status: 502 });
            });
          })();
        }, []);

        return null;
      };

      render(
        <NotificationProvider translations={providedTranslations}>
          <TestComponent />
        </NotificationProvider>
      );

      await waitFor(() => {
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledTimes(3);
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test not found", {
          onClose: expect.any(Function)
        });
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test general", {
          onClose: expect.any(Function)
        });
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test unavailable", {
          onClose: expect.any(Function)
        });
      });
    });

    it("Translates the status 503, 504 and general if the code isn't recognized", async () => {
      const providedTranslations = {
        general: { error: "TestError" },
        messages: {
          timeout: "Test timeout",
          general: "Test general",
          unavailable: "Test unavailable"
        }
      };

      const TestComponent = () => {
        const { addNotification, state } = useNotificationContext();

        useEffect(() => {
          (async () => {
            if (state.notifications.length === 3) {
              await waitFor(() =>
                expect(state.notifications).toEqual([
                  {
                    id: "test-id",
                    type: "error",
                    status: 503,
                    message: "TestError",
                    handled: true
                  },
                  {
                    id: "test-id",
                    type: "error",
                    status: 504,
                    message: "TestError",
                    handled: true
                  },
                  {
                    id: "test-id",
                    type: "error",
                    status: 999,
                    message: "TestError",
                    handled: true
                  }
                ])
              );
            }
          })();
        }, [state.notifications]);

        useEffect(() => {
          (async () => {
            await act(() => {
              addNotification({ type: "error", status: 503 });
              addNotification({ type: "error", status: 504 });
              // @ts-ignore-next-line - We want to test the default case
              addNotification({ type: "error", status: 999 });
            });
          })();
        }, []);

        return null;
      };

      render(
        <NotificationProvider translations={providedTranslations}>
          <TestComponent />
        </NotificationProvider>
      );

      await waitFor(() => {
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledTimes(3);
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test timeout", {
          onClose: expect.any(Function)
        });
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test general", {
          onClose: expect.any(Function)
        });
        expect(enqueueErrorSnackbarMock).toHaveBeenCalledWith("TestError", "Test unavailable", {
          onClose: expect.any(Function)
        });
      });
    });
  });
});
