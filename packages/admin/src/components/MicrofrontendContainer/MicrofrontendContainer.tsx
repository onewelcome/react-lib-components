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

import React, { ReactElement } from "react";
import classes from "./MicrofrontendContainer.module.scss";

export interface Props {
  header?: ReactElement | ReactElement[];
  children: ReactElement | ReactElement[];
  contentMargins?: boolean;
  contentMaxWidth?: boolean;
}

export const MicrofrontendContainer2 = ({
  header,
  children,
  contentMargins = true,
  contentMaxWidth = true,
  ...rest
}: Props) => {
  const appliedClasses = [];

  contentMargins && appliedClasses.push(classes["microfrontend-container-margin"]);
  contentMaxWidth && appliedClasses.push(classes["microfrontend-container-max-width"]);

  return (
    <>
      <div>{header}</div>
      <div className={appliedClasses.join(" ")} {...rest}>
        {children}
      </div>
    </>
  );
};
