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
}

function getDisplayName<P>(WrappedComponent: ComponentType<P>) {
  return WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";
}

export const withReadOnly = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithReadOnlyComponent = React.forwardRef(
    (props: PropsWithChildren<P & WithReadOnlyProps>, ref: ForwardedRef<any>) => {
      const { readOnlyView = false, required, disabled, children, ...restProps } = props;

      // Recursive function to add data-readonlyview to all child elements
      const addReadOnlyAttribute = (childNodes: ReactNode): ReactNode => {
        return React.Children.map(childNodes, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { readonlyview: readOnlyView } as Record<string, any>);
          }
          return child;
        });
      };

      return (
        // Using "data-readonlyview" in lowercase to fix below warning:
        // Warning: React does not recognize the `data-readonlyView` prop on a DOM element.
        //  If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `data-readonlyview` instead.
        //  If you accidentally passed it from a parent component, remove it from the DOM element.

        <WrappedComponent
          ref={ref}
          {...(restProps as P)}
          data-readonlyview={readOnlyView}
          required={readOnlyView ? false : required}
          disabled={readOnlyView || disabled}
        >
          {children && addReadOnlyAttribute(children)}
        </WrappedComponent>
      );
    }
  );

  WithReadOnlyComponent.displayName = `withReadOnly_${getDisplayName(WrappedComponent)}`;
  return WithReadOnlyComponent;
};
