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
import React from "react";
import { act, renderHook } from "@testing-library/react";
import { useAlert } from "./useAlert";
import { AlertProvider } from "./AlertProvider/AlertProvider";

describe("useAlertContext", () => {
  it("should have enqueue functions", () => {
    const rendered = renderHook(() => useAlert(), {
      wrapper: ({ children }) => <AlertProvider closeButtonTitle="close">{children}</AlertProvider>
    });
    const currentResult = rendered.result.current;
    expect(currentResult.enqueueAlert).toBeDefined();
    expect(currentResult.enqueueInfoAlert).toBeDefined();
    expect(currentResult.enqueueSuccessAlert).toBeDefined();
    expect(currentResult.enqueueWarningAlert).toBeDefined();
    expect(currentResult.enqueueErrorAlert).toBeDefined();
    expect(currentResult.setAlertHeight).toBeDefined();
  });

  it("should call API", () => {
    const { result } = renderHook(() => useAlert(), {
      wrapper: ({ children }) => <AlertProvider closeButtonTitle="close">{children}</AlertProvider>
    });

    act(() => {
      result.current.enqueueAlert({ title: "title" });
      result.current.enqueueAlert({ title: "title", content: "content" });
      result.current.enqueueAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueAlert({ content: "content" });
      result.current.enqueueAlert({ content: "content", className: "123" });
      result.current.enqueueAlert({ title: "title", variant: "error", duration: 123 });

      result.current.enqueueErrorAlert({ title: "title" });
      result.current.enqueueErrorAlert({ title: "title", content: "content" });
      result.current.enqueueErrorAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueErrorAlert({ content: "content" });
      result.current.enqueueErrorAlert({ content: "content", className: "123" });
      result.current.enqueueErrorAlert({ title: "title", duration: 123 });

      result.current.enqueueSuccessAlert({ title: "title" });
      result.current.enqueueSuccessAlert({ title: "title", content: "content" });
      result.current.enqueueSuccessAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueSuccessAlert({ content: "content" });
      result.current.enqueueSuccessAlert({ content: "content", className: "123" });
      result.current.enqueueSuccessAlert({ title: "title", duration: 123 });

      result.current.enqueueWarningAlert({ title: "title" });
      result.current.enqueueWarningAlert({ title: "title", content: "content" });
      result.current.enqueueWarningAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueWarningAlert({ content: "content" });
      result.current.enqueueWarningAlert({ content: "content", className: "123" });
      result.current.enqueueWarningAlert({ title: "title", duration: 123 });
    });
  });

  it("should call API", () => {
    const { result } = renderHook(() => useAlert(), {
      wrapper: ({ children }) => <AlertProvider closeButtonTitle="close">{children}</AlertProvider>
    });

    act(() => {
      result.current.enqueueAlert("content");
      result.current.enqueueAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueAlert({ content: "content", className: "123" });
      result.current.enqueueAlert({ title: "title", variant: "error", duration: 123 });

      result.current.enqueueInfoAlert("content");
      result.current.enqueueInfoAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueInfoAlert({ content: "content", className: "123" });
      result.current.enqueueInfoAlert({ title: "title", variant: "informative", duration: 123 });

      result.current.enqueueSuccessAlert("content");
      result.current.enqueueSuccessAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueSuccessAlert({ content: "content", className: "123" });
      result.current.enqueueSuccessAlert({ title: "title", duration: 123 });

      result.current.enqueueWarningAlert("content");
      result.current.enqueueWarningAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueWarningAlert({ content: "content", className: "123" });
      result.current.enqueueWarningAlert({ title: "title", duration: 123, emphasis: "low" });

      result.current.enqueueErrorAlert("content");
      result.current.enqueueErrorAlert(new Error("content"));
      result.current.enqueueErrorAlert({
        title: "title",
        content: "content",
        onClose: () => {},
        actions: []
      });
      result.current.enqueueErrorAlert({ content: "content", className: "123" });
      result.current.enqueueErrorAlert({ title: "title", duration: 123, emphasis: "high" });
    });
  });
});
