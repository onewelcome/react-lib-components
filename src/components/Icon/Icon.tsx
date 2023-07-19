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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef } from "react";
import classes from "./Icon.module.scss";

export enum Icons {
  Bell = "bell",
  BellAlt = "bell-alt",
  Bookmark = "bookmark",
  BookmarkAlt = "bookmark-alt",
  Build = "build",
  Calendar = "calendar",
  Change = "change",
  Checkmark = "checkmark",
  CheckmarkCircle = "checkmark-circle",
  CheckmarkCircleAlt = "checkmark-circle-alt",
  CheckmarkCircleBreakout = "checkmark-circle-breakout",
  CheckmarkSquare = "checkmark-square",
  ChevronUp = "chevron-up",
  ChevronDown = "chevron-down",
  ChevronLeft = "chevron-left",
  ChevronRight = "chevron-right",
  Circle = "circle",
  Clock = "clock",
  Copy = "copy",
  Edit = "edit",
  Ellipsis = "ellipsis",
  EllipsisAlt = "ellipsis-alt",
  Equal = "equal",
  Error = "error-circle",
  ErrorAlt = "error-circle-alt",
  Eye = "eye",
  EyeBlocked = "eye-blocked",
  Filter = "filter",
  FilterAlt = "filter-alt",
  FilterAltArrow = "filter-alt-arrow",
  FilterAltTimes = "filter-alt-times",
  Forbidden = "forbidden",
  Fullscreen = "fullscreen",
  FullscreenExit = "fullscreen-exit",
  Gearwheel = "gearwheel",
  Grid = "grid",
  Hamburger = "hamburger",
  HomeFilled = "home-filled",
  Heart = "heart",
  Image = "image",
  InfoBell = "info-bell",
  InfoCircle = "info-circle",
  Link = "link",
  MinusSquare = "minus-square",
  NavigationFirst = "navigation-first",
  NavigationLast = "navigation-last",
  Plus = "plus",
  Radio = "radio",
  Refresh = "refresh",
  Search = "search",
  Share = "share",
  Square = "square",
  Star = "star",
  StarAlt = "star-alt",
  TableSearch = "table-search",
  Times = "times",
  TimesCircle = "times-circle",
  TimesCircleAlt = "times-circle-alt",
  TimesThin = "times-thin",
  Trash = "trash",
  TriangleDown = "triangle-down",
  TriangleDownCircle = "triangle-down-circle",
  TriangleLeft = "triangle-left",
  TriangleRight = "triangle-right",
  TriangleUp = "triangle-up",
  Undo = "undo",
  Warning = "warning",
  FileOutline = "file-outline",
  FileUpload = "file-upload-outline",
  FileDownload = "file-download-outline"
}

type Tag = "span" | "div" | "i";

export interface Props extends ComponentPropsWithRef<"div"> {
  icon: Icons;
  color?: string;
  size?: string;
  tag?: Tag;
}

const IconComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { icon, color, className, style, size, tag = "span", ...rest }: Props,
  ref
) => {
  const Component = tag;

  return (
    <Component
      {...rest}
      ref={ref}
      style={{ color: color, ...style, fontSize: size }}
      data-icon
      aria-hidden="true"
      className={`${classes["icon"]} ${classes["icon-" + icon]} ${className ? className : ""}`}
    />
  );
};

export const Icon = React.forwardRef(IconComponent);
