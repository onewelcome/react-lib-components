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

import React, { ComponentType, ForwardedRef, PropsWithChildren } from "react";
import { Input } from "./Form/Input/Input";

export interface WithReadOnlyProps {
  readOnlyView?: boolean;
  required?: boolean;
  helperText?: string;
  type?: string;
}

const getDisplayName = <P,>(WrappedComponent: ComponentType<P>) => {
  return WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";
};

const getConditionalProps = (
  readOnlyView: boolean,
  type: string,
  helperText: string | undefined
) => {
  let props = {};
  if (readOnlyView) {
    if (type !== "text") {
      props = {
        style: { ...props, pointerEvents: "none", userSelect: "text" }
      };
    }
  }
  if (readOnlyView && helperText) {
    props = { ...props, helperText: "" };
  } else {
    props = { ...props, helperText: helperText };
  }
  if (type) {
    props = { ...props, type: type };
  }

  return {
    ...props
  };
};

export const withReadOnly = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithReadOnlyComponent = React.forwardRef(
    (props: PropsWithChildren<P & WithReadOnlyProps>, ref: ForwardedRef<any>) => {
      const {
        readOnlyView = false,
        required,
        children,
        helperText,
        type = "",
        ...restProps
      } = props;

      return (
        <WrappedComponent
          ref={ref}
          {...(restProps as P)}
          data-readonlyview={readOnlyView}
          aria-readonly={readOnlyView}
          required={readOnlyView ? false : required}
          {...getConditionalProps(readOnlyView, type, helperText)}
        >
          {children}
        </WrappedComponent>
      );
    }
  );

  WithReadOnlyComponent.displayName = `withReadOnly_${getDisplayName(WrappedComponent)}`;
  return WithReadOnlyComponent;
};
