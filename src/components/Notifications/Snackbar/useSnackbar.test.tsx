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
import React, { act } from "react";
import { renderHook } from "@testing-library/react";
import { useSnackbar } from "./useSnackbar";
import { SnackbarProvider } from "./SnackbarProvider/SnackbarProvider";

describe("useNotificationContext", () => {
  it("should return the correct context", () => {
    const { result } = renderHook(() => useSnackbar(), {
      wrapper: ({ children }) => (
        <SnackbarProvider closeButtonTitle="close">{children}</SnackbarProvider>
      )
    });

    expect(result.current).toEqual({
      enqueueWarningSnackbar: expect.any(Function),
      enqueueErrorSnackbar: expect.any(Function),
      enqueueSuccessSnackbar: expect.any(Function),
      enqueueSnackbar: expect.any(Function)
    });
  });

  it("should call new API", () => {
    const { result } = renderHook(() => useSnackbar(), {
      wrapper: ({ children }) => (
        <SnackbarProvider closeButtonTitle="close">{children}</SnackbarProvider>
      )
    });

    act(() => {
      result.current.enqueueSnackbar({ title: "title" });
      result.current.enqueueSnackbar({ title: "title", content: "content" });
      result.current.enqueueSnackbar({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueSnackbar({ content: "content" });
      result.current.enqueueSnackbar({ content: "content", className: "123" });
      result.current.enqueueSnackbar({ title: "title", variant: "error", duration: 123 });

      result.current.enqueueErrorSnackbar({ title: "title" });
      result.current.enqueueErrorSnackbar({ title: "title", content: "content" });
      result.current.enqueueErrorSnackbar({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueErrorSnackbar({ content: "content" });
      result.current.enqueueErrorSnackbar({ content: "content", className: "123" });
      result.current.enqueueErrorSnackbar({ title: "title", duration: 123 });

      result.current.enqueueSuccessSnackbar({ title: "title" });
      result.current.enqueueSuccessSnackbar({ title: "title", content: "content" });
      result.current.enqueueSuccessSnackbar({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueSuccessSnackbar({ content: "content" });
      result.current.enqueueSuccessSnackbar({ content: "content", className: "123" });
      result.current.enqueueSuccessSnackbar({ title: "title", duration: 123 });

      result.current.enqueueWarningSnackbar({ title: "title" });
      result.current.enqueueWarningSnackbar({ title: "title", content: "content" });
      result.current.enqueueWarningSnackbar({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueWarningSnackbar({ content: "content" });
      result.current.enqueueWarningSnackbar({ content: "content", className: "123" });
      result.current.enqueueWarningSnackbar({ title: "title", duration: 123 });
    });
  });

  it("should call deprecated API", () => {
    const { result } = renderHook(() => useSnackbar(), {
      wrapper: ({ children }) => (
        <SnackbarProvider closeButtonTitle="close">{children}</SnackbarProvider>
      )
    });

    act(() => {
      result.current.enqueueSnackbar("title");
      result.current.enqueueSnackbar("title", "content");
      result.current.enqueueSnackbar("title", "content", { onClose: () => {}, actions: [] });
      result.current.enqueueSnackbar(undefined, "content");
      result.current.enqueueSnackbar(undefined, "content", { className: "123" });
      result.current.enqueueSnackbar("title", undefined, { variant: "error", duration: 123 });

      result.current.enqueueErrorSnackbar("title");
      result.current.enqueueErrorSnackbar("title", "content");
      result.current.enqueueErrorSnackbar("title", "content", { onClose: () => {}, actions: [] });
      result.current.enqueueErrorSnackbar(undefined, "content");
      result.current.enqueueErrorSnackbar(undefined, "content", { className: "123" });
      result.current.enqueueErrorSnackbar("title", undefined, { duration: 123 });

      result.current.enqueueSuccessSnackbar("title");
      result.current.enqueueSuccessSnackbar("title", "content");
      result.current.enqueueSuccessSnackbar("title", "content", { onClose: () => {}, actions: [] });
      result.current.enqueueSuccessSnackbar(undefined, "content");
      result.current.enqueueSuccessSnackbar(undefined, "content", { className: "123" });
      result.current.enqueueSuccessSnackbar("title", undefined, {
        duration: 123
      });

      result.current.enqueueWarningSnackbar("title");
      result.current.enqueueWarningSnackbar("title", "content");
      result.current.enqueueWarningSnackbar("title", "content", { onClose: () => {}, actions: [] });
      result.current.enqueueWarningSnackbar(undefined, "content");
      result.current.enqueueWarningSnackbar(undefined, "content", { className: "123" });
      result.current.enqueueWarningSnackbar("title", undefined, {
        duration: 123
      });
    });
  });
});
