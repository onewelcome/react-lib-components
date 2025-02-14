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

import React, { ForwardRefRenderFunction } from "react";
import { ButtonLeftNavItem } from "./ButtonLeftNavItem";
import { LinkLeftNavItem } from "./LinkLeftNavItem";
import { LeftNavItemProps } from "./LeftNavItem.interface";

const LeftNavItemComponent: ForwardRefRenderFunction<HTMLElement, LeftNavItemProps> = (
  props,
  ref
) => {
  const shouldBeButton = !!(props.item.items?.length ?? 0 >= 1);
  return shouldBeButton ? (
    <ButtonLeftNavItem {...props} ref={ref} NestedComponent={LeftNavItem} />
  ) : (
    <LinkLeftNavItem {...props} ref={ref} />
  );
};

export const LeftNavItem = React.forwardRef(LeftNavItemComponent);
