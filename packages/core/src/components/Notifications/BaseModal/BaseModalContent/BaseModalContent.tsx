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
  ForwardRefRenderFunction,
  ComponentPropsWithRef,
  createRef,
  useEffect
} from "react";
import classes from "./BaseModalContent.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  disableAutoFocus?: boolean;
}

const BaseModalContentComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { id, children, className = "", disableAutoFocus = false, ...rest }: Props,
  ref
) => {
  const contentRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!disableAutoFocus && ref) {
      (ref as React.RefObject<HTMLDivElement>).current?.focus();
    } else if (!disableAutoFocus) {
      contentRef.current?.focus();
    }
  }, []);

  /**tabIndex is set to be able to do focus on that element which we need for catching keyDown events */
  return (
    <div
      {...rest}
      ref={ref ?? contentRef}
      id={id}
      className={`${classes["content"]} ${className}`}
      tabIndex={-1}
    >
      {children}
    </div>
  );
};

export const BaseModalContent = React.forwardRef(BaseModalContentComponent);
