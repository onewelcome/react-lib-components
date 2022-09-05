import React, { ComponentPropsWithRef } from "react";
import { HeaderCell } from "../datagrid.interfaces";
import classes from "./DataGridRow.module.scss";

export interface Props extends ComponentPropsWithRef<"tr"> {
  headers?: HeaderCell[];
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  disableContextMenuColumn?: boolean;
}

export const DataGridRow = React.forwardRef<HTMLTableRowElement, Props>(
  (
    { children, className, headers, isLoading, spacing, disableContextMenuColumn, ...rest }: Props,
    ref
  ) => {
    const visibleCells = React.Children.map(children as React.ReactElement[], (child, index) => {
      if (child) {
        const cellWithSpacing = React.cloneElement(child, {
          spacing: spacing,
          cellIndex: index,
          columnLength: headers?.length,
          disableContextMenuColumn
        });

        const visible = headers && headers.length > index ? !headers[index].hidden : true;
        return visible && cellWithSpacing;
      }
      return null;
    });

    const classNames = [classes["row"]];
    className && classNames.push(className);
    isLoading && classNames.push(classes["loading"]);

    return (
      <tr {...rest} ref={ref} className={classNames.join(" ")}>
        {visibleCells}
      </tr>
    );
  }
);
