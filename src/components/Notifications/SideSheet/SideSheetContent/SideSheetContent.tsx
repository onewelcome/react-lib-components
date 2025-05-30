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
import { BaseModalContent, Props } from "../../BaseModal/BaseModalContent/BaseModalContent";
import classes from "./SideSheetContent.module.scss";

export const SideSheetContent: React.FC<Props> = ({ className, ...rest }) => (
  <BaseModalContent {...rest} className={`${classes["side-sheet-content"]} ${className}`} />
);

export type { Props } from "../../BaseModal/BaseModalContent/BaseModalContent";
