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
import "./base.scss";
import { BaseStyling } from "../src/_BaseStyling_/BaseStyling.tsx";
import { useState } from "react";
import { useCallback } from "react";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" }
};

const Preview = Story => {
  const [properties, setProperties] = useState({});

  useEffect(() => {
    parseBaseStylingStorage();
  }, []);

  useEffect(() => {
    window.addEventListener("updated-styling", parseBaseStylingStorage);

    return () => {
      window.removeEventListener("updated-styling", parseBaseStylingStorage);
    };
  });

  const parseBaseStylingStorage = () => {
    const baseStylingSessionStorage = window.sessionStorage.getItem("basestyling");

    if (baseStylingSessionStorage !== "undefined") {
      setProperties(JSON.parse(baseStylingSessionStorage));
    }
  };

  return <BaseStyling properties={properties}>{Story()}</BaseStyling>;
};

export const decorators = [Story => Preview(Story)];
