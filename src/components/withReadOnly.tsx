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

export interface WithReadOnlyProps {
  readOnlyView?: boolean;
  required?: boolean;
  helperText?: string;
  type?: string;
}

const componentsWithKeyEventsToPrevent: string[] = ["CheckboxWrapper"];

const getDisplayName = <P,>(WrappedComponent: ComponentType<P>) => {
  return WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";
};

const getConditionalProps = (readOnlyView: boolean, type: string, helperText?: string) => {
  const props: Record<string, any> = {};

  if (readOnlyView) {
    props.style = { pointerEvents: "none", userSelect: "text" };
    if (helperText) {
      props.helperText = "";
    }
  } else {
    props.helperText = helperText;
  }

  if (type) {
    props.type = type;
  }

  return props;
};

export const withReadOnly = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const preventKeyUpAndKeyDownHandlerForSpecificComponents = (readOnlyView: boolean) => {
    const preventSubmissionKeys = (e: KeyboardEvent) => {
      const isEnterOrSpace = (e: KeyboardEvent) => e.key === "Enter" || e.key === " ";
      if (isEnterOrSpace(e)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    if (
      readOnlyView &&
      componentsWithKeyEventsToPrevent.includes(
        WrappedComponent.displayName || WrappedComponent.name
      )
    ) {
      const props: Record<string, any> = {};

      props.onKeyUp = (e: KeyboardEvent) => {
        preventSubmissionKeys(e);
      };

      props.onKeyDown = (e: KeyboardEvent) => {
        preventSubmissionKeys(e);
      };

      return props;
    }

    return {};
  };

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
          {...preventKeyUpAndKeyDownHandlerForSpecificComponents(readOnlyView)}
        >
          {children}
        </WrappedComponent>
      );
    }
  );

  WithReadOnlyComponent.displayName = `withReadOnly_${getDisplayName(WrappedComponent)}`;
  return WithReadOnlyComponent;
};
