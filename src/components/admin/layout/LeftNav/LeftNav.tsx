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
  ComponentPropsWithRef,
  CSSProperties,
  ForwardRefRenderFunction,
  useState
} from "react";
import classes from "./LeftNav.module.scss";
import { MenuItem } from "./LeftNav.interfaces";
import { LeftNavItem } from "./LeftNavItem/LeftNavItem";

export interface Props extends ComponentPropsWithRef<"nav"> {
  isSideMenuOpen?: boolean;
  items: MenuItem[];
  navigate: (path: string) => void;
  marginTop?: string;
}

const LeftNavComponent: ForwardRefRenderFunction<HTMLElement, Props> = (
  { isSideMenuOpen, items, navigate, marginTop, ...rest },
  ref
) => {
  const [isSideNavbarVisible, setIsSideNavbarVisible] = useState(isSideMenuOpen);

  const onSideNavbarTransitionEnd: React.TransitionEventHandler<HTMLUListElement> = () => {
    setIsSideNavbarVisible(isSideMenuOpen);
  };

  const renderMenuItems = () => {
    if (!items.length) {
      return null;
    }

    return items.map(item => {
      return <LeftNavItem key={item.key} item={item} navigate={navigate} />;
    });
  };

  return (
    <nav {...rest} ref={ref}>
      <ul
        style={{ "--margin-top": marginTop } as CSSProperties}
        className={`${classes["sidenavbar"]} ${isSideMenuOpen ? classes["open"] : ""} ${
          !isSideNavbarVisible ? classes["hidden"] : ""
        }`}
        onTransitionEnd={onSideNavbarTransitionEnd}
      >
        {renderMenuItems()}
      </ul>
    </nav>
  );
};

export const LeftNav = React.forwardRef(LeftNavComponent);
