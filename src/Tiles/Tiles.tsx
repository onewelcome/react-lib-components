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

import React, { ComponentPropsWithRef, ReactNode } from "react";
import classes from "./Tiles.module.scss";
import { Tile } from "./Tile";

export interface Props extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
  loading?: boolean;
}

export const Tiles = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, loading = false, ...rest }: Props, ref) => {
    const renderChildren = () => {
      if (loading) {
        return [
          <Tile
            key="placeholder1"
            title="placeholder"
            imageProps={{ src: "placeholder" }}
            loading={true}
          />,
          <Tile
            key="placeholder2"
            title="placeholder"
            imageProps={{ src: "placeholder" }}
            loading={true}
          />,
          <Tile
            key="placeholder3"
            title="placeholder"
            imageProps={{ src: "placeholder" }}
            loading={true}
          />
        ];
      }

      return children;
    };

    return (
      <div
        {...rest}
        ref={ref}
        className={`${classes["tiles"]} ${className ?? ""}`}
        aria-live="polite"
        aria-busy={loading}
      >
        {renderChildren()}
      </div>
    );
  }
);
