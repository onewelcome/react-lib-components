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

const useSnackbarContainerHeightAnimation = () => {
  const { snackbars } = useContext(SnackbarContext);
  const [height, setHeight] = useState(0);
  const [justifyContent, setJustifyContent] = useState<"flex-start" | "flex-end">("flex-start");
  const spaceBetweenSnackbars = 8;
  const exceedsMaximumVisibleSnackbars = snackbars.length >= 3;

  useEffect(() => {
    const allHeights = snackbars.map(snackbar => snackbar.height);

    let totalHeight = allHeights.reduce((prev, curr) => prev + curr, 0);

    totalHeight += (Math.min(snackbars.length, 3) - 1) * spaceBetweenSnackbars;

    /**
     * Once we reach the maximum amount of snackbars, they will start to disappear. We have to wait with reversing the justify-content until the last snackbar
     * has completed their animationIn. This is around 500ms. Then we want to reverse it, because otherwise whenever a snackbar disappears they shift up
     * and then down again, which looks really bad.
     * */
    if (exceedsMaximumVisibleSnackbars)
      setTimeout(() => {
        setJustifyContent("flex-end");
      }, 500);

    if (height > totalHeight && justifyContent !== "flex-end") {
      setJustifyContent("flex-end");
    } else if (height < totalHeight && justifyContent !== "flex-start") {
      setJustifyContent("flex-start");
    }

    setHeight(totalHeight);
  }, [snackbars]);

  return { height, justifyContent };
};

export const SnackbarContainer = ({ placement, children, zIndex, className, ...rest }: Props) => {
  const { height, justifyContent } = useSnackbarContainerHeightAnimation();

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
