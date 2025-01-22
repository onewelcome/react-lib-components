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

import { useEffect, useState } from "react";

export interface Breakpoints {
  small: string;
  medium: string;
  large: string;
}

export const defaultBreakpoints: Breakpoints = {
  small: "30em", // 480px
  medium: "50em", // 800px
  large: "90em" // 1440px
};

export const breakpointsMap = (breakpoints: Breakpoints) => ({
  minSmall: `screen and (min-width: ${breakpoints.small})`,
  minMedium: `screen and (min-width: ${breakpoints.medium})`,
  minLarge: `screen and (min-width: ${breakpoints.large})`,
  maxSmall: `screen and (max-width: ${breakpoints.small})`,
  maxMedium: `screen and (max-width: ${breakpoints.medium})`,
  maxLarge: `screen and (max-width: ${breakpoints.large})`
});

export type BreakpointsMapKeys = keyof ReturnType<typeof breakpointsMap>;

export default function useMediaQuery(
  queryKey: BreakpointsMapKeys,
  breakpoints: Breakpoints = defaultBreakpoints
) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    const query = breakpointsMap(breakpoints)[queryKey];
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  return matches;
}
//@TODO: add tests
