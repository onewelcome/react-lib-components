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

import React, { HTMLProps, MouseEvent, ReactElement, useEffect, useRef, useState } from "react";
import classes from "./LeftNavItem.module.scss";
import { Link as RouterLink } from "react-router-dom";
import { MenuItem } from "../LeftNav.interfaces";
import { Icon, Icons, Link } from "../../../../..";

export interface Props extends HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
  item: MenuItem;
  navigate: (path: string) => void;
  previousButtonRef?: React.RefObject<HTMLButtonElement>;
  closeParentList?: () => void;
}

export const LeftNavItem = ({ item, navigate, previousButtonRef, closeParentList }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const shouldBeButton = !!(item.items?.length ?? 0 > 0);
  const isActiveParent = shouldBeButton ? !!item.items?.find(menuItem => menuItem.active) : false;

  const onButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if ((event.target as Element).nodeName === "A" && item.path) {
      event.preventDefault();
      navigate(item.path);
    } else {
      setExpanded(!expanded);
    }
  };

  const openParentWithActiveElement = () => {
    if (isActiveParent) {
      setExpanded(true); //@TODO: still a bug with animation when expanding active parent
    }
  };

  useEffect(openParentWithActiveElement, [isActiveParent]);

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

  if (shouldBeButton) {
    return (
      <li className={buttonWrapperClasses.join(" ")} data-testid={item.key}>
        <button
          aria-controls={item.key}
          data-testid={`tab-btn-${item.key}`}
          aria-expanded={expanded}
          ref={buttonRef}
          // onKeyDown={determineKeyboardAction}
          onClick={onButtonClickHandler}
          className={buttonClasses.join(" ")}
          disabled={item.disabled}
        >
          <div className={classes["menu-item-text-wrapper"]}>
            {item.iconComponent &&
              React.cloneElement(item.iconComponent, { className: classes["menu-item-icon"] })}
            {item.path ? (
              <RouterLink
                to={item.path}
                aria-current={item.active ? "page" : false}
                className={classes["menu-item-text"]}
                tabIndex={item.disabled ? -1 : undefined}
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
          ref={listRef}
          style={{ maxHeight: expanded ? undefined : 0 }}
          className={classes["menu-list"]}
        >
          {!item.disabled &&
            item.items?.map(item => (
              <LeftNavItem
                key={item.key}
                previousButtonRef={buttonRef}
                closeParentList={() => setExpanded(false)}
                // onKeyUp={determineKeyboardAction}
                tabIndex={expanded ? 0 : -1}
                item={item}
                navigate={navigate}
              >
                {item.title}
              </LeftNavItem>
            ))}
        </ul>
      </li>
    );
  }

  return (
    <li className={menuLinkWrapperClasses.join(" ")} data-testid={`${item.key}`}>
      {item.path?.match(/^https?:\/\//) ? (
        <Link
          ref={linkRef}
          // onKeyDown={e => {
          //   determineKeyboardAction(e);
          // }}
          // onClick={dispatchCloseMobileMenu}
          data-testid={item.key}
          aria-current={item.active ? "page" : false}
          className={menuItemLinkClasses.join(" ")}
          to={item.path || ""}
          type="external"
          disabled={item.disabled}
        >
          <div className={classes["menu-item-text-wrapper"]}>
            {item.iconComponent &&
              React.cloneElement(item.iconComponent, { className: classes["menu-item-icon"] })}
            <span className={classes["menu-item-text"]}>{item.title}</span>
          </div>
        </Link>
      ) : (
        <RouterLink
          ref={linkRef}
          // onKeyDown={e => {
          //   determineKeyboardAction(e);
          // }}
          // onClick={() => {
          //   changeCategory && publishChangeCategory();
          //   dispatchCloseMobileMenu();
          //   publishRouteChange({ path: item.path, microfrontend: item.microFrontendName });
          // }}
          aria-current={item.active ? "page" : false}
          className={menuItemLinkClasses.join(" ")}
          to={item.path || ""}
          tabIndex={item.disabled ? -1 : undefined}
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
