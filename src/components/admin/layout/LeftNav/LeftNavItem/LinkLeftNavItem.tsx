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

import React, { ForwardRefRenderFunction, HTMLProps, MouseEvent, Ref } from "react";
import classes from "./LeftNavItem.module.scss";
import { MenuItem, RouterLinkComponent } from "../LeftNav.interfaces";
import { Link } from "../../../../Link/Link";
import { useKeyboardNavigation } from "./useKeyboardNavigation";
import { UseRefItemsReturnType } from "../useRefItems";

export interface Props extends HTMLProps<HTMLElement> {
  item: MenuItem;
  onItemClick: (path?: string, button?: boolean) => void;
  refItems: UseRefItemsReturnType;
  closeParentList?: () => void;
  RouterLinkComponent: RouterLinkComponent;
}

const LinkLeftNavItemComponent: ForwardRefRenderFunction<HTMLElement, Props> = (
  { item, onItemClick, refItems, closeParentList, RouterLinkComponent },
  ref
) => {
  const { onKeyPressNavigation } = useKeyboardNavigation({ refItems, item, closeParentList });

  const onLinkClickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    if (item.disabled) {
      event.preventDefault();
    } else {
      onItemClick(item.path);
    }
  };

  const getStylingClasses = () => {
    const menuItemLinkClasses = [classes["menu-item"], classes["menu-link"]];
    item.active && menuItemLinkClasses.push(classes["menu-item-active"]);
    item.disabled && menuItemLinkClasses.push(classes["disabled"]);
    const menuLinkWrapperClasses = [classes["menu-list-item"]];
    return {
      menuItemLinkClasses,
      menuLinkWrapperClasses
    };
  };

  const { menuItemLinkClasses, menuLinkWrapperClasses } = getStylingClasses();
  const tabIndexActive = item.active ? 0 : -1;
  const tabIndex = item.disabled ? -1 : tabIndexActive;

  return (
    <li className={menuLinkWrapperClasses.join(" ")} data-testid={`${item.key}`}>
      {item.path?.match(/^https?:\/\//) ? (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          onKeyDown={onKeyPressNavigation}
          onClick={onLinkClickHandler}
          data-testid={item.key}
          aria-current={item.active ? "page" : false}
          aria-disabled={item.disabled}
          className={menuItemLinkClasses.join(" ")}
          to={item.path ?? ""}
          type="external"
          disabled={item.disabled}
          tabIndex={tabIndex}
        >
          <div className={classes["menu-item-text-wrapper"]}>
            {item.iconComponent &&
              React.cloneElement(item.iconComponent, { className: classes["menu-item-icon"] })}
            <span className={classes["menu-item-text"]}>{item.title}</span>
          </div>
        </Link>
      ) : (
        <RouterLinkComponent
          ref={ref as Ref<HTMLAnchorElement>}
          onKeyDown={onKeyPressNavigation}
          onClick={onLinkClickHandler}
          aria-current={item.active ? "page" : false}
          aria-disabled={item.disabled}
          className={menuItemLinkClasses.join(" ")}
          to={item.path ?? ""}
          tabIndex={tabIndex}
        >
          <div className={classes["menu-item-text-wrapper"]}>
            {item.iconComponent &&
              React.cloneElement(item.iconComponent, { className: classes["menu-item-icon"] })}
            <span className={classes["menu-item-text"]}>{item.title}</span>
          </div>
        </RouterLinkComponent>
      )}
    </li>
  );
};

export const LinkLeftNavItem = React.forwardRef(LinkLeftNavItemComponent);
