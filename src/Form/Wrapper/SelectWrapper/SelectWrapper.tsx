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
  ReactChild,
  ReactElement
} from "react";
import classes from "./SelectWrapper.module.scss";
import { Wrapper, WrapperProps } from "../Wrapper/Wrapper";
import { Select, Props as SelectProps } from "../../Select/Select";
import { useWrapper } from "../../../hooks/useWrapper";

interface PartialSelectProps extends Partial<SelectProps> {}

export interface Props
  extends Omit<ComponentPropsWithRef<"div">, "onChange">,
    Omit<WrapperProps, "onChange" | "error"> {
  children: ReactChild | ReactChild[];
  placeholder?: string;
  value: string;
  error?: boolean;
  selectProps?: PartialSelectProps;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectWrapperComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    error,
    success,
    value,
    placeholder,
    selectProps,
    helperProps,
    onChange,
    ...rest
  }: Props,
  ref
) => {
  const { errorId, helperId, labelId } = useWrapper();

  return (
    <Wrapper
      {...rest}
      ref={ref}
      errorId={errorId}
      helperId={helperId}
      labelProps={{ id: labelId, className: classes["select-label"] }}
      helperProps={{
        ...helperProps,
        className: `${classes["select-helper-text"]} ${helperProps?.className ?? ""}`
      }}
      error={error}
    >
      <Select
        {...selectProps}
        value={value}
        labeledBy={labelId}
        error={error}
        success={success}
        describedBy={error ? errorId : helperId}
        onChange={onChange}
        placeholder={placeholder}
        className={`${selectProps?.className ?? ""}`}
      >
        {children as ReactElement[]}
      </Select>
    </Wrapper>
  );
};

export const SelectWrapper = React.forwardRef(SelectWrapperComponent);
