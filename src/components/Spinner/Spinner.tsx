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
import classes from "./Spinner.module.scss";

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  thickness?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 32, thickness = 2, ...props }) => (
  <svg
    {...props}
    className={classes["spinner"]}
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx={size / 2}
      cy={size / 2}
      r={(size - thickness) / 2}
      stroke="var(--orbit-color)"
      strokeWidth={thickness}
      fill="none"
    ></circle>
    <circle
      className={classes["arch"]}
      cx={size / 2}
      cy={size / 2}
      r={(size - thickness) / 2}
      stroke="var(--arch-color)"
      strokeWidth={thickness}
      strokeLinecap="round"
      fill="none"
      strokeDasharray={`${size}`}
      transform="rotate(-90 25 25)"
    />
  </svg>
);
