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
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  HTMLProps,
  MouseEvent,
  Ref,
  useEffect,
  useState
} from "react";
import classes from "./LeftNavItem.module.scss";
import { MenuItem, RouterLinkComponent } from "../LeftNav.interfaces";
import { Icon, Icons } from "../../../../Icon/Icon";
import { useKeyboardNavigation } from "./useKeyboardNavigation";
import { UseRefItemsReturnType } from "../useRefItems";
import { LeftNavItemProps } from "./LeftNavItem.interface";

export interface Props extends HTMLProps<HTMLElement> {
  item: MenuItem;
  navigate: (path: string) => void;
  onItemClick: (path?: string, button?: boolean) => void;
  refItems: UseRefItemsReturnType;
  NestedComponent: ForwardRefExoticComponent<LeftNavItemProps>;
  closeParentList?: () => void;
  RouterLinkComponent: RouterLinkComponent;
}

const chevronIconDataKey = { attributeKey: "chevron-icon", objectKey: "chevronIcon" };

const ButtonLeftNavItemComponent: ForwardRefRenderFunction<HTMLElement, Props> = (
  { item, navigate, onItemClick, refItems, NestedComponent, closeParentList, RouterLinkComponent },
  ref
) => {
  const [expanded, setExpanded] = useState(false);
  const isActiveParent = !!item.items?.find(menuItem => menuItem.active);
  const { onKeyPressNavigation } = useKeyboardNavigation({ refItems, item, closeParentList });

  const onButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const isChevronIcon = !!(event.target as HTMLElement).dataset[chevronIconDataKey.objectKey];
    if (!isChevronIcon && item.path && !item.disabled) {
      event.preventDefault();
      navigate(item.path);
      onItemClick(item.path, true);
    }
  };

  const onExpandIconClickHandler = () => {
    setExpanded(expanded => !expanded);
  };

  const openParentWithActiveElement = () => {
    if (isActiveParent) {
      setExpanded(true);
    }
  };

  useEffect(openParentWithActiveElement, [isActiveParent]);

  const getStylingClasses = () => {
    const buttonClasses = [classes["menu-item"], classes["menu-button"]];
    expanded && buttonClasses.push(classes["expanded"]);
    (item.active || isActiveParent) && buttonClasses.push(classes["menu-item-active"]);
    item.disabled && buttonClasses.push(classes["disabled"]);
    const buttonWrapperClasses = [classes["menu-button-wrapper"], classes["menu-list-item"]];
    expanded && buttonWrapperClasses.push(classes["expanded"]);
    item.active && buttonWrapperClasses.push(classes["menu-item-active"]);
    return {
      buttonClasses,
      buttonWrapperClasses
    };
  };

  const { buttonClasses, buttonWrapperClasses } = getStylingClasses();
  const tabIndexActive = item.active ? 0 : -1;
  const tabIndex = item.disabled ? -1 : tabIndexActive;

  return (
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
            <RouterLinkComponent
              to={item.path}
              aria-current={item.active ? "page" : false}
              className={classes["menu-item-text"]}
              tabIndex={-1}
            >
              {item.title}
            </RouterLinkComponent>
          ) : (
            <span className={classes["menu-item-text"]}>{item.title}</span>
          )}
        </div>
        <Icon
          onClick={onExpandIconClickHandler}
          className={classes["menu-item-expand-icon"]}
          icon={Icons.ChevronDown}
          {...{ [`data-${chevronIconDataKey.attributeKey}`]: "true" }}
        />
      </button>
      <ul
        id={item.key}
        style={{ maxHeight: expanded ? undefined : 0 }}
        className={classes["menu-list"]}
      >
        {!item.disabled &&
          item.items?.map(item => (
            <NestedComponent
              ref={el => refItems.addElementReference(el, item.key)}
              key={item.key}
              closeParentList={() => setExpanded(false)}
              onKeyUp={onKeyPressNavigation}
              item={item}
              navigate={navigate}
              onItemClick={onItemClick}
              refItems={refItems}
              RouterLinkComponent={RouterLinkComponent}
            >
              {item.title}
            </NestedComponent>
          ))}
      </ul>
    </li>
  );
};

export const ButtonLeftNavItem = React.forwardRef(ButtonLeftNavItemComponent);
