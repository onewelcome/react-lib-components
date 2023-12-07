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

export type Variant = "info" | "success" | "error" | "warning";

export type Actions = (ButtonHTMLAttributes<HTMLButtonElement> & { label: string })[];

export interface SnackbarOptionsProps {
  actions?: Actions;
  className?: string;
  variant?: Variant;
  duration?: number;
  onClose?: () => void;
}

export interface EnqueueSnackbarProps extends SnackbarOptionsProps {
  title?: string;
  content?: string;
}

export type DeprecatedEnqueueSnackbarType = (
  propsOrTitle: EnqueueSnackbarProps | string | undefined,
  content?: string,
  options?: SnackbarOptionsProps
) => void;

export function isNewEnqueueSnackbarInterface(args: unknown): args is EnqueueSnackbarProps {
  return args !== null && typeof args === "object" && ("title" in args || "content" in args);
}
