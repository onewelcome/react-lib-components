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

import React, { ComponentPropsWithRef, ForwardRefRenderFunction } from "react";
import classes from "./FormSection.module.scss";
import { Typography } from "../../Typography/Typography";

export interface Props extends ComponentPropsWithRef<"div"> {
  header?: string;
  subtext?: string;
}

export const FormSectionComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { header, subtext, children, ...rest },
  ref
) => {
  return (
    <div {...rest} className={classes["section-wrapper"]} ref={ref}>
      {header && (
        <div className={classes["section-header-wrapper"]}>
          <Typography
            variant="h4"
            className={classes["section-header"]}
            spacing={{ marginBottom: 0 }}
          >
            {header}
          </Typography>
          {subtext && (
            <Typography variant="sub-text" spacing={{ marginBottom: 0 }}>
              {subtext}
            </Typography>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export const FormSection = React.forwardRef(FormSectionComponent);
