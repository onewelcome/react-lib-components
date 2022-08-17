import React, { ComponentPropsWithRef } from "react";
import classes from "./Skeleton.module.scss";

export interface Props extends Omit<ComponentPropsWithRef<"div">, "children"> {
  variant?: "circular" | "rectangle" | "text";
  height?: number | string;
  width?: number | string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, Props>(
  ({ variant = "text", height, width, className, style, ...rest }: Props, ref) => {
    const classNames = [classes["skeleton"]];
    !height && classNames.push(classes["no-height"]);
    variant === "text" && classNames.push(classes["text"]);
    variant === "circular" && classNames.push(classes["circular"]);
    className && classNames.push(className);

    return (
      <span
        {...rest}
        aria-busy="true"
        aria-hidden="true"
        ref={ref}
        style={{ ...style, width, height }}
        className={classNames.join(" ")}
      ></span>
    );
  }
);
