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

import React, { HTMLAttributes, ReactElement, useMemo } from "react";
import { Button, Props as ButtonProps } from "../../Button/Button";
import { Typography } from "../../Typography/Typography";

import classes from "./ContentHeader.module.scss";
import { IconButton } from "../../Button/IconButton";
import { Icon, Icons } from "../../Icon/Icon";
import { NavigateFunction } from "react-router-dom";
import { Tag, Props as TagProps } from "../../Tag/Tag";
import { TextEllipsis } from "../../TextEllipsis/TextEllipsis";

export interface ContentHeaderNavigationProps {
  displayText?: string;
  navigateFN: NavigateFunction;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  /**
   * @deprecated pass text as children
   */
  subtitle?: string;
  buttons?: ReactElement<ButtonProps, typeof Button> | ReactElement<ButtonProps, typeof Button>[];
  collapsed?: boolean;
  navigation?: ContentHeaderNavigationProps;
  tags?: ReactElement<TagProps, typeof Tag>[];
  error?: boolean;
  errorMessage?: string;
  errorTagText?: string;
}

export const ContentHeaderComponent = ({
  title,
  children,
  buttons,
  collapsed,
  subtitle,
  navigation,
  tags,
  error,
  errorMessage,
  errorTagText,
  ...rest
}: Props) => {
  const errorTag = (
    <Tag icon={Icons.Forbidden} backgroundColor="var(--color-red100)" color="var(--color-red900)">
      {errorTagText || "Blocked"}
    </Tag>
  );

  const getTags = () => tags ?? [];

  const renderTags = useMemo(() => {
    if (error && collapsed) {
      return [errorTag, ...getTags().filter(tag => tag.props.variant !== "enabled")];
    } else if (error) {
      return getTags().filter(tag => tag.props.variant !== "enabled");
    }
    return getTags();
  }, [tags, error, collapsed]);

  return (
    <div className={classes["header-background-color"]}>
      <div
        className={`${classes["header"]} ${rest.className} ${collapsed ? classes["collapsed-header"] : ""}`}
        {...rest}
      >
        <div>
          {navigation && !collapsed && (
            <IconButton
              onClick={() => {
                navigation.navigateFN(-1);
              }}
              className={classes["back-arrow"]}
              iconSize="s"
            >
              <Icon icon={Icons.ArrowLeft} />
              <span className={classes["back-text"]}>
                {navigation.displayText ? navigation.displayText : "Back"}
              </span>
            </IconButton>
          )}
          <Typography className={classes["header-text"]} variant={"h1"}>
            {navigation && collapsed && (
              <IconButton
                onClick={() => {
                  navigation.navigateFN(-1);
                }}
                className={classes["back-arrow"]}
              >
                <Icon icon={Icons.ArrowLeft} />
              </IconButton>
            )}
            <TextEllipsis data-testid={"content-header-title"}>{title}</TextEllipsis>
            <span className={classes["header-tags"]}>
              {renderTags.map((tag, index) => (
                <React.Fragment key={tag.key || index}>{tag}</React.Fragment>
              ))}
            </span>
          </Typography>
          {subtitle && !error && (
            <Typography
              className={`${classes["header-subtitle"]} ${collapsed ? classes["hide-text"] : ""}`}
              variant="h4"
            >
              {subtitle}
            </Typography>
          )}
          <Typography
            className={`${collapsed ? classes["hide-text"] : ""}`}
            variant="body"
            spacing={{ margin: 0 }}
          >
            {error ? (
              <>
                {errorTag}
                <span className={classes["error-text"]}>{errorMessage}</span>
              </>
            ) : (
              children
            )}
          </Typography>
        </div>
        {buttons && <div className={classes["buttons-wrapper"]}>{buttons}</div>}
      </div>
    </div>
  );
};

export const ContentHeader = ContentHeaderComponent;
