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
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { Icon, Icons } from "../Icon/Icon";
import classes from "./Step.module.scss";

export type StepStatus = "waiting" | "current" | "done" | "error";

export interface Props extends ComponentPropsWithRef<"button"> {
  status: StepStatus;
  label: string;
  caption?: string;
  index?: number;
  lastStep?: boolean;
  disabled?: boolean;
  direction?: "horizontal" | "vertical";
}

const getStepContent = (index: number, status: StepStatus) => {
  switch (status) {
    case "waiting":
      return String(index + 1);
    case "current":
      return String(index + 1);
    case "done":
      return <Icon icon={Icons.Checkmark} />;
    case "error":
      return "!";
  }
};

export const StepComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { label, caption, status, index, direction, disabled, lastStep, ...rest }: Props,
  ref
) => {
  const stepIndex = index ?? 0;
  const additionalClasses = [classes[status]];
  const [stepContentHeight, setStepContentHeight] = useState<number>(28);
  const [stepContentWidth, setStepContentWidth] = useState<number>(28);
  direction === "vertical" && additionalClasses.push(classes["vertical"]);

  const captionRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const stepContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (captionRef.current && stepContentRef.current && labelRef.current && lastStep) {
      if (direction == "vertical") {
        const capionHeight = captionRef.current?.getBoundingClientRect().height;
        const stepContentHeight = stepContentRef.current?.getBoundingClientRect().height;
        setStepContentHeight(capionHeight + stepContentHeight);
      }

      if (direction == "horizontal") {
        const captionWidth = captionRef.current?.getBoundingClientRect().width;
        const labelWidth = labelRef.current?.getBoundingClientRect().width;
        setStepContentWidth(captionWidth > labelWidth ? captionWidth + 36 : labelWidth + 36);
      }
    }
  }, []);

  return (
    <button
      {...rest}
      ref={ref}
      disabled={disabled}
      aria-current={status === "current" ? "step" : undefined}
      className={`${classes["step-wrapper"]} ${additionalClasses.join(" ")}`}
    >
      <div
        style={{
          height: lastStep && direction == "vertical" ? `${stepContentHeight}px` : "auto",
          width: lastStep && direction == "horizontal" ? `${stepContentWidth}px` : "auto"
        }}
      >
        <div ref={stepContentRef} className={classes["step-content"]}>
          <div aria-hidden className={classes["step"]}>
            {getStepContent(stepIndex, status)}
          </div>
          <span ref={labelRef} className={classes["label"]}>
            {label}
            <span ref={captionRef} className={classes["caption"]}>
              {caption}
            </span>
          </span>
        </div>
      </div>
    </button>
  );
};

export const Step = React.forwardRef(StepComponent);
