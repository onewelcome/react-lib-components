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

import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { cssPropertyToObjectKey, objectKeyToCSSProperty } from "./utils/helpers";

export const withBaseStyling: DecoratorFunction = (StoryFn, context) => {
  const [{ baseStyling }, updateGlobals] = useGlobals();
  const waitForMs = 1; // See README.md technical explanation for why a timeout is necessary.

  useEffect(() => {
    setTimeout(() => {
      const htmlElement = context.canvasElement?.closest("html");

      if (htmlElement) {
        const stylesObject = parseStylesToObject(htmlElement.getAttribute("style"));

        updateGlobals({
          baseStyling: stylesObject
        });
      }
    }, waitForMs);
  }, [window.location.search]);

  useEffect(() => {
    updateCSSPropertiesOnHTMLElement(baseStyling);
  }, [baseStyling]);

  const parseStylesToObject = (styleString: string) => {
    const propertiesArray = styleString.split(";");

    const propertiesObject: Record<string, string> = propertiesArray.reduce(
      (propertiesObj, currentProperty) => {
        if (currentProperty) {
          return {
            ...propertiesObj,
            [cssPropertyToObjectKey(currentProperty).key]:
              cssPropertyToObjectKey(currentProperty).value
          };
        }

        return propertiesObj;
      },
      {}
    );

    return propertiesObject;
  };

  const updateCSSPropertiesOnHTMLElement = (stylingObject: Record<string, string>) => {
    let styleString = "";
    for (const property in stylingObject) {
      const CSSPropertyString = objectKeyToCSSProperty({
        key: property,
        value: stylingObject[property]
      });

      styleString += CSSPropertyString;
    }

    window.sessionStorage.setItem("basestyling", JSON.stringify(stylingObject));

    const updatedStyling = new Event("updated-styling");

    window.dispatchEvent(updatedStyling);
  };
  return StoryFn();
};
