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

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  borderWidth?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 32, borderWidth = 2, ...props }) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={
      {
        "--orbit-color": "var(--color-blue-grey100)",
        "--arch-color": "var(--color-blue-grey900)"
      } as React.CSSProperties
    }
  >
    <style>
      {`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .arch {
          animation: rotate 1s linear infinite;
          transform-origin: center;
        }
      `}
    </style>
    <circle
      cx={size / 2}
      cy={size / 2}
      r={(size - borderWidth) / 2}
      stroke="var(--orbit-color)"
      strokeWidth={borderWidth}
      fill="none"
    ></circle>
    <circle
      className="arch"
      cx={size / 2}
      cy={size / 2}
      r={(size - borderWidth) / 2}
      stroke="var(--arch-color)"
      strokeWidth={borderWidth}
      strokeLinecap="round"
      fill="none"
      strokeDasharray={`${size}`}
      transform="rotate(-90 25 25)"
    />
  </svg>
);
