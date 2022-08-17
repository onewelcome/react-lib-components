import React, { ComponentPropsWithRef, ReactElement, Ref } from "react";
import { HeaderCell } from "../datagrid.interfaces";
import { DataGridCell } from "./DataGridCell";
import { DataGridRow } from "./DataGridRow";
import classes from "./DataGridBody.module.scss";
import { Typography } from "../../Typography/Typography";

export interface Props<T> extends ComponentPropsWithRef<"tbody"> {
  children: ({ item, index }: { item: T; index: number }) => ReactElement;
  data?: T[];
  headers: HeaderCell[];
  isLoading?: boolean;
  disableContextMenuColumn?: boolean;
  emptyLabel?: string;
  spacing?: React.CSSProperties;
}

const skeletonLoadingRows = 9;

const DataGridBodyInner = <T extends {}>(
  {
    children,
    data,
    headers,
    isLoading,
    disableContextMenuColumn,
    emptyLabel,
    spacing,
    ...rest
  }: Props<T>,
  ref: Ref<HTMLTableSectionElement>
) => {
  const renderContent = () => {
    const visibleColumns = headers.filter(header => !header.hidden).length;
    if (isLoading) {
      return Array.from(Array(skeletonLoadingRows)).map((_, rowIdx) => (
        <DataGridRow key={rowIdx} isLoading>
          {Array.from(Array(visibleColumns)).map((__, colIdx) => (
            <DataGridCell key={colIdx} isLoading></DataGridCell>
          ))}
          {!disableContextMenuColumn && <DataGridCell></DataGridCell>}
        </DataGridRow>
      ));
    }

    const emptyData = !data || data.length === 0;
    if (emptyData) {
      return (
        <tr>
          <td
            className={classes["empty"]}
            colSpan={visibleColumns + (disableContextMenuColumn ? 0 : 1)}
          >
            <Typography variant="body" spacing={{ margin: 0 }}>
              {emptyLabel}
            </Typography>
          </td>
        </tr>
      );
    }

    return data?.map((item, index) => {
      return React.cloneElement(children({ item, index }), {
        headers,
        spacing,
        disableContextMenuColumn
      });
    });
  };

  return (
    <tbody {...rest} ref={ref}>
      {renderContent()}
    </tbody>
  );
};

export const DataGridBody = React.forwardRef(DataGridBodyInner) as <T extends {}>(
  p: Props<T> & { ref?: Ref<HTMLTableSectionElement> }
) => ReactElement;
