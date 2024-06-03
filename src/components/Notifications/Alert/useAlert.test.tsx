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
  it("should have enqueue functions defined", () => {
    const rendered = renderHook(() => useAlert(), {
      wrapper: ({ children }) => <AlertProvider closeButtonTitle="close">{children}</AlertProvider>
    });
    const currentResult = rendered.result.current;

    expect(currentResult.enqueueAlert).toBeDefined();
    expect(currentResult.enqueueInfoAlert).toBeDefined();
    expect(currentResult.enqueueSuccessAlert).toBeDefined();
    expect(currentResult.enqueueWarningAlert).toBeDefined();
    expect(currentResult.enqueueErrorAlert).toBeDefined();
  });

  it("calling enqueue functions should work", () => {
    const { result } = renderHook(() => useAlert(), {
      wrapper: ({ children }) => <AlertProvider closeButtonTitle="close">{children}</AlertProvider>
    });

    act(() => {
      result.current.enqueueAlert({ title: "title" });
      result.current.enqueueAlert({ content: "content" });
      result.current.enqueueAlert({ title: "title", content: "content" });
      result.current.enqueueAlert({
        title: "title",
        content: "content",
        variant: "error",
        duration: 123,
        onClose: () => {},
        actions: []
      });
    });
  });
});
