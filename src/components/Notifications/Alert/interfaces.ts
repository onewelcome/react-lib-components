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

import { ButtonHTMLAttributes } from "react";
import { PropsOrTitle } from "./AlertProvider/AlertProvider";

export type Variant = "info" | "success" | "error" | "warning";

export type Actions = (ButtonHTMLAttributes<HTMLButtonElement> & { label: string })[];

export interface AlertOptionsProps {
  actions?: Actions;
  className?: string;
  variant?: Variant;
  duration?: number;
  onClose?: () => void;
}

export interface EnqueueAlertProps extends AlertOptionsProps {
  title?: string;
  content?: string;
}

export type DeprecatedEnqueueAlertType = (
  propsOrTitle: PropsOrTitle,
  content?: string,
  options?: AlertOptionsProps
) => void;

export function isNewEnqueueAlertInterface(args: unknown): args is EnqueueAlertProps {
  return args !== null && typeof args === "object" && ("title" in args || "content" in args);
}
