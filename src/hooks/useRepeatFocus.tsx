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

import { RefObject, useEffect } from "react";

/**
 * @description This is a hook that will make sure that when a modal is open and the user tabs through the it,
 * the focus will be repeated and the user will not lose their entire focusable element to an element in the background
 * that is being blocked by the modal.
 */

export const useRepeatFocus = (ref: RefObject<HTMLDivElement>) => {
  const getFocusableElement = (
    element: HTMLElement,
    position: "first" | "last"
  ): HTMLElement | null => {
    const baseSelectors = [
      "button",
      "[href]",
      "input",
      "select",
      "textarea",
      "[tabindex]",
      "[contenteditable]"
    ];
    const focusableSelectors = baseSelectors
      .map(selector => `${selector}:not([tabindex="-1"])`)
      .join(", ");
    const focusableElements = element.querySelectorAll<HTMLElement>(focusableSelectors);

    if (position === "first") {
      return focusableElements[0] || null;
    } else if (position === "last") {
      return focusableElements[focusableElements.length - 1] || null;
    }

    return null;
  };

  useEffect(() => {
    if (!ref.current || !open) return;

    const lastFocusableElement = getFocusableElement(ref.current, "last");
    const firstFocusableElement = getFocusableElement(ref.current, "first");

    if (!lastFocusableElement || !firstFocusableElement) return;

    const handleTabKeyPress = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement?.focus();
        }
      } else if (document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement?.focus();
      }
    };

    lastFocusableElement.addEventListener("keydown", handleTabKeyPress);
    firstFocusableElement.addEventListener("keydown", handleTabKeyPress);

    return () => {
      lastFocusableElement.removeEventListener("keydown", handleTabKeyPress);
      firstFocusableElement.removeEventListener("keydown", handleTabKeyPress);
    };
  }, [ref, open]);
};
