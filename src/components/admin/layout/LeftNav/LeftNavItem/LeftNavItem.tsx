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
  HTMLProps,
  MouseEvent,
  Ref,
  useEffect,
  useState
} from "react";
import classes from "./LeftNavItem.module.scss";
import { Link as RouterLink } from "react-router-dom";
import { MenuItem } from "../LeftNav.interfaces";
import { Icon, Icons } from "../../../../Icon/Icon";
import { Link } from "../../../../Link/Link";
import { useKeyboardNavigation } from "./useKeyboardNavigation";
import { UseRefItemsReturnType } from "../useRefItems";

export interface Props extends HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
  item: MenuItem;
  navigate: (path: string) => void;
  onItemClick: (path?: string, button?: boolean) => void;
  refItems: UseRefItemsReturnType;
  closeParentList?: () => void;
}

const LeftNavItemComponent: ForwardRefRenderFunction<HTMLElement, Props> = (
  { item, navigate, onItemClick, refItems, tabIndex, closeParentList },
  ref
) => {
  const [expanded, setExpanded] = useState(false);
  const shouldBeButton = !!(item.items?.length ?? 0 >= 1);
  const isActiveParent = shouldBeButton ? !!item.items?.find(menuItem => menuItem.active) : false;

  const { onKeyPressNavigation } = useKeyboardNavigation({ refItems, item, closeParentList });

  const onButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if ((event.target as Element).nodeName === "A" && item.path) {
      event.preventDefault();
      navigate(item.path);
      onItemClick(item.path, true);
    } else {
      setExpanded(!expanded);
    }
  };

  const openParentWithActiveElement = () => {
    if (isActiveParent) {
      setExpanded(true);
    }
  };

  useEffect(openParentWithActiveElement, [isActiveParent]);

  const getStylingClasses = () => {
    const menuItemLinkClasses = [classes["menu-item"], classes["menu-link"]];
    expanded && menuItemLinkClasses.push(classes["expanded"]);
    item.active && menuItemLinkClasses.push(classes["menu-item-active"]);
    item.disabled && menuItemLinkClasses.push(classes["disabled"]);

    const buttonClasses = [classes["menu-item"], classes["menu-button"]];
    expanded && buttonClasses.push(classes["expanded"]);
    (item.active || isActiveParent) && buttonClasses.push(classes["menu-item-active"]);
    item.disabled && buttonClasses.push(classes["disabled"]);

    const buttonWrapperClasses = [classes["menu-button-wrapper"], classes["menu-list-item"]];
    expanded && buttonWrapperClasses.push(classes["expanded"]);
    item.active && buttonWrapperClasses.push(classes["menu-item-active"]);

    const menuLinkWrapperClasses = [classes["menu-list-item"]];
    return {
      menuItemLinkClasses,
      buttonClasses,
      buttonWrapperClasses,
      menuLinkWrapperClasses
    };
  };

  const { menuItemLinkClasses, buttonClasses, buttonWrapperClasses, menuLinkWrapperClasses } =
    getStylingClasses();

  return shouldBeButton ? (
    <li className={buttonWrapperClasses.join(" ")} data-testid={item.key}>
      <button
        aria-controls={item.key}
        data-testid={`tab-btn-${item.key}`}
        aria-expanded={expanded}
        ref={ref as Ref<HTMLButtonElement>}
        onKeyDown={onKeyPressNavigation}
        onClick={onButtonClickHandler}
        className={buttonClasses.join(" ")}
        disabled={item.disabled}
        tabIndex={tabIndex}
      >
        <div className={classes["menu-item-text-wrapper"]}>
          {item.iconComponent &&
            React.cloneElement(item.iconComponent, { className: classes["menu-item-icon"] })}
          {item.path ? (
            <RouterLink
              to={item.path}
              aria-current={item.active ? "page" : false}
              className={classes["menu-item-text"]}
              tabIndex={item.disabled ? -1 : tabIndex}
            >
              {item.title}
            </RouterLink>
          ) : (
            <span className={classes["menu-item-text"]}>{item.title}</span>
          )}
        </div>
        <Icon className={classes["menu-item-expand-icon"]} icon={Icons.ChevronDown} />
      </button>
      <ul
        id={item.key}
        style={{ maxHeight: expanded ? undefined : 0 }}
        className={classes["menu-list"]}
      >
        {!item.disabled &&
          item.items?.map(item => (
            <LeftNavItem
              ref={el => refItems.addElementReference(el, item.key)}
              key={item.key}
              closeParentList={() => setExpanded(false)}
              onKeyUp={onKeyPressNavigation}
              tabIndex={expanded ? 0 : -1}
              item={item}
              navigate={navigate}
              onItemClick={onItemClick}
              refItems={refItems}
            >
              {item.title}
            </LeftNavItem>
          ))}
      </ul>
    </li>
  ) : (
    <li className={menuLinkWrapperClasses.join(" ")} data-testid={`${item.key}`}>
      {item.path?.match(/^https?:\/\//) ? (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          onKeyDown={onKeyPressNavigation}
          onClick={() => onItemClick(item.path)}
          data-testid={item.key}
          aria-current={item.active ? "page" : false}
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
        <RouterLink
          ref={ref as Ref<HTMLAnchorElement>}
          onKeyDown={onKeyPressNavigation}
          onClick={() => onItemClick(item.path)}
          aria-current={item.active ? "page" : false}
          className={menuItemLinkClasses.join(" ")}
          to={item.path ?? ""}
          tabIndex={item.disabled ? -1 : tabIndex}
        >
          <div className={classes["menu-item-text-wrapper"]}>
            {item.iconComponent &&
              React.cloneElement(item.iconComponent, { className: classes["menu-item-icon"] })}
            <span className={classes["menu-item-text"]}>{item.title}</span>
          </div>
        </RouterLink>
      )}
    </li>
  );
};

export const LeftNavItem = React.forwardRef(LeftNavItemComponent);
