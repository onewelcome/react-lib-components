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

import React, { ComponentType, ForwardedRef, ReactNode, PropsWithChildren } from "react";

export interface WithReadOnlyProps {
  readOnlyView?: boolean;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
}

const getDisplayName = <P,>(WrappedComponent: ComponentType<P>) => {
  return WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";
};

export const withReadOnly = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithReadOnlyComponent = React.forwardRef(
    (props: PropsWithChildren<P & WithReadOnlyProps>, ref: ForwardedRef<any>) => {
      const {
        readOnlyView = false,
        required,
        disabled,
        children,
        helperText,
        ...restProps
      } = props;

      return (
        <WrappedComponent
          ref={ref}
          {...(restProps as P)}
          data-readonlyview={readOnlyView}
          required={readOnlyView ? false : required}
          disabled={readOnlyView || disabled}
          helperText={readOnlyView ? "" : helperText}
        >
          {children}
        </WrappedComponent>
      );
    }
  );

  WithReadOnlyComponent.displayName = `withReadOnly_${getDisplayName(WrappedComponent)}`;
  return WithReadOnlyComponent;
};
