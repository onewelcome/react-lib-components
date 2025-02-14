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

import React, { ComponentPropsWithRef, CSSProperties, ForwardRefRenderFunction } from "react";
import classes from "./IdentityProviderButton.module.scss";
import { Button } from "../Button/Button";

export interface Props extends Omit<ComponentPropsWithRef<"button">, "color"> {
  iconUrl?: string;
  imgAltText?: string;
  idpType: string;
  style?: CSSProperties;
}

export const IdentityProviderButton: ForwardRefRenderFunction<HTMLButtonElement, Props> = ({
  children,
  iconUrl,
  imgAltText,
  style,
  idpType,
  ...rest
}) => {
  return (
    <Button
      style={style}
      color="primary"
      variant="fill"
      className={classes["idp-button"]}
      {...rest}
    >
      <span className={classes["idp-button--with-icon"]}>
        <img
          height={24}
          width={24}
          src={iconUrl ? iconUrl : `/ui-resources-static/common/icons/${idpType}.svg`}
          alt={imgAltText ? imgAltText : "Identity Provider icon"}
        />
        {children}
      </span>
    </Button>
  );
};
