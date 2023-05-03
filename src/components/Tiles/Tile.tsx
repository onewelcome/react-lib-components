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

import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  ReactElement,
  useState
} from "react";
import { Icon, Icons } from "../Icon/Icon";
import classes from "./Tile.module.scss";
import readyClasses from "../../readyclasses.module.scss";

import { Props as ContextMenuProps } from "../ContextMenu/ContextMenu";
import { generateID } from "../../util/helper";
import { Props as IconButtonProps } from "../Button/IconButton";

interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  src: string;
}

export interface Props extends ComponentPropsWithRef<"div"> {
  title: string;
  imageProps?: ImageProps;
  enabled?: boolean;
  loading?: boolean;
  tileAction?: ReactElement<ContextMenuProps> | ReactElement<IconButtonProps>;
}

const TileComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { title, imageProps, enabled, className, loading, tileAction, ...rest }: Props,
  ref
) => {
  const [tileDescriptionID] = useState(generateID(20));

  if (!title) {
    throw new Error("Please make sure to pass a title prop to your Tile component.");
  }

  const statusMessage = () => {
    if (enabled) {
      return "Status: enabled";
    }

    return "Status: disabled";
  };

  return (
    <article
      {...rest}
      tabIndex={0}
      aria-labelledby={tileDescriptionID}
      ref={ref}
      className={`${classes["tile"]} ${loading ? classes["loading"] : ""}`}
    >
      <header style={{ justifyContent: enabled === undefined ? "flex-end" : "space-between" }}>
        {enabled === true && (
          <Icon
            color="var(--success)"
            icon={Icons.Checkmark}
            className={`${classes["icon"]} ${className ?? ""}`}
          />
        )}
        {enabled === false && (
          <Icon
            color="var(--greyed-out)"
            icon={Icons.Forbidden}
            className={`${classes["icon"]} ${className ?? ""}`}
          />
        )}
        {enabled !== undefined && (
          <span id={tileDescriptionID} className={readyClasses["sr-only"]}>
            {`${title}. ${statusMessage()}`}
          </span>
        )}
        {tileAction ?? null}
      </header>
      <div className={classes["content"]}>
        {imageProps && imageProps.src.length > 0 && (
          <figure className={classes["image"]}>{!loading && <img {...imageProps} alt="" />}</figure>
        )}
        {(!imageProps || imageProps.src.length === 0) && (
          <Icon className={classes["placeholder"]} icon={Icons.Image} />
        )}
        <span className={classes["title"]}>{title}</span>
      </div>
    </article>
  );
};

export const Tile = React.forwardRef(TileComponent);
