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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef } from "react";
import { Tag } from "../../../Tag/Tag";

import classes from "./SelectedOptions.module.scss";

export type Display = {
  value: string;
  label: string;
  fixed?: boolean;
};

export interface Props extends ComponentPropsWithRef<"div"> {
  display: Display[];
  onRemove: (value: string) => void;
  disabled: boolean;
}

const SelectedOptionsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { display, onRemove, disabled, ...rest }: Props,
  ref
) => {
  return (
    <div {...rest} className={classes["options"]} ref={ref}>
      {display.map(item => (
        <Tag
          key={item.value}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
          }}
          className={classes["tag"]}
          removeButton={
            !disabled && !item.fixed
              ? {
                  onRemove: (e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    onRemove(item.value);
                  },
                  className: classes["remove-btn"]
                }
              : undefined
          }
          backgroundColor="var(--color-blue-grey100)"
          shape="sharp"
        >
          {item.label}
        </Tag>
      ))}
    </div>
  );
};

export const SelectedOptions = React.forwardRef(SelectedOptionsComponent);
