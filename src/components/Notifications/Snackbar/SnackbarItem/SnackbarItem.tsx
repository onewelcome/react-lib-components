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

import React, { useContext, useEffect, useRef } from "react";
import { IconButton } from "../../../Button/IconButton";
import { Icon, Icons } from "../../../Icon/Icon";
import { Variant, Actions } from "../interfaces";
import classes from "./SnackbarItem.module.scss";
import readyclasses from "../../../../readyclasses.module.scss";
import { useAnimation } from "../../../../hooks/useAnimation";
import { Typography } from "../../../Typography/Typography";
import { SnackbarContext } from "../SnackbarProvider/SnackbarStateProvider";

const textColor = "var(--snackbar-text-color)";

export interface Props {
  id: string;
  title?: string;
  duration: number;
  variant: Variant;
  className?: string;
  onClose: (key: string) => void;
  closeButtonTitle: string;
  content?: string;
  actions?: Actions;
}

const useRegisterSnackbarHeight = (
  singleSnackbarRef: React.RefObject<HTMLDivElement>,
  snackbarId: string
) => {
  const ctx = useContext(SnackbarContext);

  useEffect(() => {
    if (singleSnackbarRef.current) {
      ctx.setSnackbarHeight(snackbarId, singleSnackbarRef.current.getBoundingClientRect().height);
    }
  }, [singleSnackbarRef.current]);
};

export const SnackbarItem = ({
  id,
  title,
  duration,
  variant,
  content,
  className,
  actions = [],
  onClose,
  closeButtonTitle
}: Props) => {
  const timerHandler = useRef<ReturnType<typeof setTimeout>>();
  const onAnimationEnd = () => onClose(id);
  const { ref, animationStarted, startAnimation } = useAnimation<HTMLDivElement>(onAnimationEnd);
  const hasOnlyTitle = !content && !!title;
  const renderTitle = title && !hasOnlyTitle;
  const renderContentOrTitleOnly = content || hasOnlyTitle;

  useRegisterSnackbarHeight(ref, id);

  useEffect(() => {
    timerHandler.current = setTimeout(() => startAnimation(), duration);
    return () => {
      timerHandler.current && clearTimeout(timerHandler.current);
    };
  }, []);

  const onMouseEnter = () => {
    timerHandler.current && clearTimeout(timerHandler.current);
  };

  const onMouseLeave = () => {
    timerHandler.current = setTimeout(() => startAnimation(), duration);
  };

  const getVariantIcon = () => {
    if (variant === "error") {
      return Icons.Error;
    }

    if (variant === "warning") {
      return Icons.Warning;
    }

    return variant === "success" ? Icons.CheckmarkCircleAlt : Icons.InfoCircle;
  };

  const actionButtons = actions.map((actionProp, index) => (
    <button
      key={index}
      {...actionProp}
      onClick={e => {
        onClose(id);
        actionProp.onClick?.(e);
      }}
      className={classes["action-button"]}
    >
      {actionProp.label}
    </button>
  ));

  const snackbarClasses = [
    classes["snackbar"],
    classes[variant],
    animationStarted ? readyclasses["slide-out"] : readyclasses["slide-in"],
    renderTitle ? classes["has-title"] : "",
    className ?? ""
  ].join(" ");

  return (
    <div
      ref={ref}
      aria-live="polite"
      className={snackbarClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon icon={getVariantIcon()} className={classes["icon"]} />
      <div className={classes["content-wrapper"]}>
        {renderTitle && (
          <Typography className={classes["title"]} variant="body-bold" tag="span">
            {title}
          </Typography>
        )}
        {renderContentOrTitleOnly && (
          <Typography className={classes["content"]} variant="body">
            {hasOnlyTitle ? title : content}
          </Typography>
        )}
      </div>
      {actionButtons.length > 0 && <div className={classes["actions"]}>{actionButtons}</div>}
      <IconButton
        id={classes["close-btn"]}
        onClick={() => startAnimation()}
        title={closeButtonTitle}
      >
        <Icon icon={Icons.Times} color={textColor} />
      </IconButton>
    </div>
  );
};
