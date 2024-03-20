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

import React, { ButtonHTMLAttributes, useContext, useEffect, useRef } from "react";
import { IconButton } from "../../../Button/IconButton";
import { Icon, Icons } from "../../../Icon/Icon";
import classes from "./AlertItem.module.scss";
import readyclasses from "../../../../readyclasses.module.scss";
import { useAnimation } from "../../../../hooks/useAnimation";
import { Typography } from "../../../Typography/Typography";
import AlertContext from "../AlertProvider/AlertContext";

const EMPHASES = ["low", "medium", "high"] as const;
export type Emphasis = (typeof EMPHASES)[keyof typeof EMPHASES];

const VARIANTS = ["neutral", "informative", "success", "warning", "error"] as const;
export type Variant = (typeof VARIANTS)[keyof typeof VARIANTS];

export type Actions = (ButtonHTMLAttributes<HTMLButtonElement> & { label: string })[];

export interface Props {
  id: string;
  title?: string;
  content?: string;
  duration?: number;
  emphasis?: Emphasis;
  variant?: Variant;
  className?: string;
  onClose?: () => void;
  closeButtonTitle?: string;
  actions?: Actions;
  wasShown?: boolean;
}

const useRegisterAlertHeight = (
  singleAlertRef: React.RefObject<HTMLDivElement>,
  alertId: string
) => {
  const ctx = useContext(AlertContext);

  useEffect(() => {
    if (singleAlertRef.current) {
      ctx.setAlertHeight(alertId, singleAlertRef.current.getBoundingClientRect().height);
    }
  }, [singleAlertRef.current]);
};

let actionButtonKeyCounter = 1;
export const AlertItem = ({
  id,
  title,
  duration,
  variant = "neutral",
  emphasis = "medium",
  content,
  className,
  actions = [],
  onClose,
  closeButtonTitle,
  wasShown
}: Props) => {
  const timerHandler = useRef<ReturnType<typeof setTimeout>>();
  const onAnimationEnd = () => onClose?.();
  const { ref, animationStarted, startAnimation } = useAnimation<HTMLDivElement>(onAnimationEnd);

  useRegisterAlertHeight(ref, id);

  useEffect(() => {
    if (duration && duration > 0) {
      timerHandler.current = setTimeout(() => startAnimation(), duration);
    }
    return () => {
      timerHandler.current && clearTimeout(timerHandler.current);
    };
  }, []);

  const onItemFocus = () => {
    timerHandler.current && clearTimeout(timerHandler.current);
  };

  const onItemBlur = () => {
    if (duration && duration > 0) {
      timerHandler.current = setTimeout(() => startAnimation(), duration);
    }
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

  const actionButtons = actions.map(actionProp => (
    <button
      key={`alert-action-button-${(actionButtonKeyCounter++).toString()}`}
      {...actionProp}
      onClick={e => {
        onClose?.();
        actionProp.onClick?.(e);
      }}
      className={classes["action-button"]}
    >
      {actionProp.label}
    </button>
  ));

  const getAlertClasses = (): string => {
    const alertClasses = [
      classes["alert"],
      classes[variant as string],
      classes[`emph-${emphasis as string}`]
    ];
    if (animationStarted) {
      alertClasses.push(readyclasses["slide-out"]);
    }
    if (!animationStarted && !wasShown) {
      alertClasses.push(readyclasses["slide-in"]);
    }
    if (className) {
      alertClasses.push(className);
    }
    return alertClasses.join(" ");
  };

  const getAria = (): "off" | "polite" | "assertive" | undefined => {
    if (variant === "error" && (emphasis === "medium" || emphasis === "high")) {
      return "assertive";
    }
    return "polite";
  };

  return (
    <div
      ref={ref}
      aria-live={getAria()}
      className={getAlertClasses()}
      onMouseEnter={onItemFocus}
      onMouseLeave={onItemBlur}
      onFocus={onItemFocus}
      onBlur={onItemBlur}
      role="alert"
    >
      <div className={classes["outer-content-wrapper"]}>
        <Icon icon={getVariantIcon()} className={classes["icon"]} />
        <div className={classes["content-wrapper"]} role="log">
          {!!title && !!content && (
            <Typography className={classes["title"]} variant="body-bold" tag="span">
              {title}
            </Typography>
          )}
          {(!!content || !!title) && (
            <Typography className={classes["content"]} variant="body">
              {content || title}
            </Typography>
          )}
        </div>
      </div>
      {actionButtons.length > 0 && <div className={classes["actions"]}>{actionButtons}</div>}
      <IconButton
        id={classes["close-btn"]}
        onClick={() => startAnimation()}
        title={closeButtonTitle}
      >
        <Icon icon={Icons.Times} />
      </IconButton>
    </div>
  );
};
