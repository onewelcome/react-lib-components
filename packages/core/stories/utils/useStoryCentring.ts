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

import { useEffect } from "react";

export const useStoryCentring = () => {
  const isStory = () => window.location.search.includes("viewMode=story");

  const centerStory = () => {
    /** In order to show off the positioning for the tooltip we need to center everything in the middle of the screen. */
    const root = document.querySelector("html");
    if (root && isStory()) {
      root.style.height = "100%";
      root.style.width = "100%";
      root.style.display = "flex";
      root.style.justifyContent = "center";
      root.style.alignItems = "center";
      root.style.overflow = "hidden";
    }
  };

  const resetStory = () => {
    /** We want to reset story positioning when we are unmounting story */
    const root = document.querySelector("html");
    if (root) {
      root.style.height = "";
      root.style.width = "";
      root.style.display = "";
      root.style.justifyContent = "";
      root.style.alignItems = "";
      root.style.overflow = "";
    }
  };

  useEffect(() => {
    centerStory();
    return () => {
      resetStory();
    };
  }, []);
};
