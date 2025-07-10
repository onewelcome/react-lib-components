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

import { Icons } from "../components/Icon/Icon";

interface StatusProps {
  error?: boolean;
  success?: boolean;
  info?: boolean;
}

type StatusState = "error" | "success" | "info";

export function getStatusIcon(props: StatusProps, defaultToInfo?: boolean): Icons | undefined;
export function getStatusIcon(
  { error, success, info }: StatusProps,
  defaultToInfo = false
): Icons | undefined {
  if (error) {
    return Icons.Error;
  }
  if (success) {
    return Icons.CheckmarkCircleAlt;
  }
  if (info || defaultToInfo) {
    return Icons.InfoCircle;
  }
  return undefined;
}

export function getStatusState(
  props: StatusProps,
  defaultToInfo?: boolean
): StatusState | undefined;
export function getStatusState(
  { error, success, info }: StatusProps,
  defaultToInfo = false
): StatusState | undefined {
  if (error) {
    return "error";
  }
  if (success) {
    return "success";
  }
  if (info || defaultToInfo) {
    return "info";
  }
  return undefined;
}
