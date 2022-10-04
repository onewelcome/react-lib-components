import React, { useContext, useEffect, useState } from "react";
import classes from "./SnackbarContainer.module.scss";
import { SnackbarContext } from "../SnackbarProvider/SnackbarStateProvider";

export interface Placement {
  vertical: "top" | "bottom";
  horizontal: "start" | "center" | "end";
}

export interface Props {
  placement: Placement;
  children?: React.ReactNode;
  zIndex?: number;
  className?: string;
}

export const SnackbarContainer = ({ placement, children, zIndex, className, ...rest }: Props) => {
  const { snackbars } = useContext(SnackbarContext);
  const [height, setHeight] = useState(0);
  const [justifyContent, setJustifyContent] = useState<"flex-start" | "flex-end">("flex-start");

  useEffect(() => {
    const allHeights = snackbars.map(snackbar => snackbar.height);

    let totalHeight = allHeights.reduce((prev, curr) => prev + curr, 0);

    totalHeight += (snackbars.length - 1) * 8;

    if (snackbars.length >= 3)
      setTimeout(() => {
        setJustifyContent("flex-end");
      }, 800);

    if (height > totalHeight && justifyContent !== "flex-end") {
      setJustifyContent("flex-end");
    } else if (height < totalHeight && justifyContent !== "flex-start") {
      setJustifyContent("flex-start");
    }

    setTimeout(() => setHeight(totalHeight), 200);
  }, [snackbars]);

  return (
    <div
      {...rest}
      style={{ zIndex, height: height, justifyContent }}
      className={`${classes["snackbars"]} ${classes[placement.horizontal]} ${
        classes[placement.vertical]
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
