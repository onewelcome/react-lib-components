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
import { BaseButton, Props as BaseButtonProps } from "./BaseButton";
import classes from "./IdentityProviderButton.module.scss";

interface Props extends BaseButtonProps {
  iconUrl: string;
  backgroundColor: string;
}

export const IdentityProviderButton: ForwardRefRenderFunction<HTMLButtonElement, Props> = ({
  children,
  iconUrl,
  backgroundColor,
  ...rest
}) => {
  return (
    <BaseButton
      style={{ backgroundColor: backgroundColor }}
      className={classes["idp-button"]}
      {...rest}
    >
      <img height={24} width={24} src={iconUrl} />
      {children}
    </BaseButton>
  );
};
