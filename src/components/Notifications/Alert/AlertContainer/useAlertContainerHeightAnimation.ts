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

import { useContext, useEffect, useState } from "react";
import AlertContext from "../AlertProvider/AlertContext";

export default function useAlertContainerHeightAnimation() {
  const { alerts } = useContext(AlertContext);
  const [height, setHeight] = useState(0);
  const [justifyContent, setJustifyContent] = useState<"flex-start" | "flex-end">("flex-start");
  const spaceBetweenAlerts = 8;
  const exceedsMaximumVisibleAlerts = alerts.length >= 3;

  useEffect(() => {
    const allHeights = alerts.map(alert => alert.height ?? 0);
    let totalHeight = allHeights.reduce((prev, curr) => prev + curr, 0);
    totalHeight += (Math.min(alerts.length, 3) - 1) * spaceBetweenAlerts;

    if (exceedsMaximumVisibleAlerts) {
      setTimeout(() => {
        setJustifyContent("flex-end");
      }, 500);
    }
    if (height > totalHeight && justifyContent !== "flex-end") {
      setJustifyContent("flex-end");
    } else if (height < totalHeight && justifyContent !== "flex-start") {
      setJustifyContent("flex-start");
    }

    setHeight(totalHeight);
  }, [alerts]);

  return { height, justifyContent };
}
