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

import { DependencyList, useEffect } from "react";

export const useClickOutside = (
  myElementRef: React.RefObject<HTMLElement>,
  onClickOutside: (event: MouseEvent) => void,
  dependencies?: DependencyList
) => {
  function eventListener(event: MouseEvent) {
    const myElement = myElementRef?.current;
    if (!myElement) {
      return;
    }
    const clickedInsideMyElement = myElement.contains(event.target as Node);

    if (!clickedInsideMyElement) {
      onClickOutside(event);
    }
  }
  useEffect(() => {
    setTimeout(() => window.addEventListener("click", eventListener));

    return () => {
      setTimeout(() => window.removeEventListener("click", eventListener));
    };
  }, dependencies);
};
