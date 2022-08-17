import React, { ComponentPropsWithRef, ReactChild } from "react";
import { Typography } from "../../Typography/Typography";
import classes from "./DataGridCell.module.scss";

export interface Props extends ComponentPropsWithRef<"td"> {
  children?: ReactChild;
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  cellIndex?: number;
  columnLength?: number;
  disableContextMenuColumn?: boolean;
}

export const DataGridCell = React.forwardRef<HTMLTableCellElement, Props>(
  (
    {
      children,
      className,
      isLoading,
      spacing,
      cellIndex,
      columnLength,
      disableContextMenuColumn,
      ...rest
    }: Props,
    ref
  ) => {
    let cellStyle: React.CSSProperties = {};

    if (cellIndex === 0) {
      cellStyle.paddingLeft = spacing?.paddingLeft;
    }
    if (
      (cellIndex === columnLength && !disableContextMenuColumn) ||
      (columnLength && cellIndex === columnLength - 1 && disableContextMenuColumn)
    ) {
      cellStyle.paddingRight = spacing?.paddingRight;
    }

    return (
      <td
        {...rest}
        ref={ref}
        style={{ ...rest.style, ...cellStyle }}
        className={`${classes["cell"]} ${className ?? ""}`}
      >
        {isLoading && (
          <div className={classes["loading"]} aria-busy="true" aria-live="polite"></div>
        )}
        {!isLoading && (
          <Typography variant="body" tag="span">
            {children}
          </Typography>
        )}
      </td>
    );
  }
);
