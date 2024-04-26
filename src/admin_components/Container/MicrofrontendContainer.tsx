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

import React, { ForwardRefRenderFunction, HTMLProps } from "react";
import classes from "./MicrofrontendContainer.module.scss";

export interface Props extends HTMLProps<HTMLDivElement> {
  fullWidth?: boolean;
}

/*
 *  FIXME: This component is meant to be moved to a separate UCL package when it's finished.
 */
export const MicrofrontendContainer: ForwardRefRenderFunction<HTMLDivElement, Props> = ({
  fullWidth = false,
  children,
  ...rest
}: Props) => {
  const containerClasses: string[] = [];

  fullWidth && containerClasses.push(classes["full-width"]);
  containerClasses.push(classes["container"]);

  return (
    <div {...rest} className={containerClasses.join(" ")}>
      {children}
    </div>
  );
};
