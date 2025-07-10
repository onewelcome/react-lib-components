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

import isChromatic from "chromatic/isChromatic";

/**
 * To improve our visual tests, we need to display various states of our components. This often requires simulating user actions.
 * In Storybook, visiting the desired component automatically triggers the play function, which can be confusing for those not familiar with the tool.
 * To address this, we've wrapped the original play function, so it only runs when Chromatic is active or when in development mode.
 * @param playFunction
 */
export const conditionalPlay = (
  playFunction: ({ canvasElement }: { canvasElement: any }) => Promise<void>
) => {
  const isDevMode = process.env.NODE_ENV === "development";

  if (isChromatic() || isDevMode) {
    return async (context: { canvasElement: any }) => {
      await playFunction(context);
    };
  }

  return async () => {};
};
