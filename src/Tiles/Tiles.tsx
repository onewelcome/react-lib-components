import React, { ComponentPropsWithRef, ReactNode } from "react";
import classes from "./Tiles.module.scss";
import { Tile } from "./Tile";

export interface Props extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
  loading?: boolean;
}

export const Tiles = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, loading = false, ...rest }: Props, ref) => {
    const renderChildren = () => {
      if (loading) {
        return [
          <Tile
            key="placeholder1"
            title="placeholder"
            imageProps={{ src: "placeholder" }}
            loading={true}
          />,
          <Tile
            key="placeholder2"
            title="placeholder"
            imageProps={{ src: "placeholder" }}
            loading={true}
          />,
          <Tile
            key="placeholder3"
            title="placeholder"
            imageProps={{ src: "placeholder" }}
            loading={true}
          />
        ];
      }

      return children;
    };

    return (
      <div
        {...rest}
        ref={ref}
        className={`${classes["tiles"]} ${className ?? ""}`}
        aria-live="polite"
        aria-busy={loading}
      >
        {renderChildren()}
      </div>
    );
  }
);
