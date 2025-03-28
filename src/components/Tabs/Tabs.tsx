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
  createRef,
  ForwardRefRenderFunction,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState
} from "react";
import { Props as TabProps } from "./Tab";
import { TabButton } from "./TabButton";
import classes from "./Tabs.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  children: ReactElement<TabProps>[];
  selected?: number;
  onTabChange?: (index: number) => void;
  fluid?: boolean;
  align?: "left" | "center" | "right";
  tabListClassName?: string;
  iconsPosition?: "left" | "right" | "top" | "bottom";
}

const TabsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    selected = 0,
    onTabChange,
    className,
    fluid,
    tabListClassName,
    align,
    iconsPosition = "left",
    ...rest
  }: Props,
  ref
) => {
  const [renderedButtons, setRenderedButtons] = useState<ReactElement[]>([]);
  const [renderedTabs, setRenderedTabs] = useState<ReactElement[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(selected);
  const [usingKeyboardNavigation, setUsingKeyboardNavigation] = useState(false);
  const [indicatorStyles, setIndicatorStyles] = useState<{
    width: number;
    left: number;
    top: number;
  }>({
    width: 0,
    left: 0,
    top: 0
  });
  const tabsRef = (ref as RefObject<HTMLDivElement>) || createRef<HTMLDivElement>();
  const indicatorRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalAmountOfTabs = [children].flat().length;
    if (!usingKeyboardNavigation) {
      setUsingKeyboardNavigation(true);
    }
    if (totalAmountOfTabs === 1) {
      return;
    }

    switch (e.key) {
      case "ArrowRight":
        setActiveTabIndex(currentIndex => {
          return currentIndex + 1 > totalAmountOfTabs - 1 ? 0 : currentIndex + 1;
        });
        break;
      case "ArrowLeft":
        setActiveTabIndex(currentIndex => {
          return currentIndex - 1 < 0 ? totalAmountOfTabs - 1 : currentIndex - 1;
        });
        break;
      case "Home":
        setActiveTabIndex(0);
        break;
      case "End":
        setActiveTabIndex(totalAmountOfTabs - 1);
        break;
      default:
        return;
    }
  };

  const calculateIndicatorPosition = () => {
    if (tabsRef.current) {
      const selectedButton = tabsRef.current.querySelectorAll('button[role="tab"]')[
        activeTabIndex
      ] as HTMLElement;

      setIndicatorStyles({
        left: selectedButton.offsetLeft,
        top:
          selectedButton.offsetTop +
          selectedButton.offsetHeight -
          indicatorRef.current!.offsetHeight -
          parseInt(getComputedStyle(selectedButton).borderBottomWidth),
        width: selectedButton.offsetWidth
      });
    }
  };

  useEffect(() => {
    if (tabsRef.current && renderedButtons.length) {
      calculateIndicatorPosition();
    }
  }, [tabsRef.current, activeTabIndex, renderedButtons]);

  useEffect(() => {
    onTabChange?.(activeTabIndex);
  }, [activeTabIndex]);

  useEffect(() => {
    const buttons = React.Children.map(children, (child, index) => {
      if (Object.prototype.hasOwnProperty.call(child.props, "title")) {
        return React.createElement(
          TabButton,
          {
            key: `${child.props.title.toLowerCase().replace(/\s/, "_")}_button`,
            tabIndex: activeTabIndex === index ? 0 : -1,
            "aria-selected": activeTabIndex === index,
            focused: usingKeyboardNavigation && activeTabIndex === index,
            tabActive: activeTabIndex === index,
            "aria-controls": `tab_${index}`,
            onClick: () => setActiveTabIndex(index),
            disabled: child.props.disabled,
            fluid: fluid,
            iconPosition: iconsPosition,
            icon: child.props.icon
          },
          child.props.title
        );
      }
      return null;
    });

    const tabs = React.Children.map(children, (child, index) => {
      if (Object.prototype.hasOwnProperty.call(child.props, "title")) {
        return React.cloneElement(child, {
          key: `${child.props.title.toLowerCase().replace(/\s/, "_")}_tab`,
          tabIndex: activeTabIndex === index ? 0 : -1,
          tabActive: activeTabIndex === index,
          id: `tab_${index}`,
          children: child.props.children
        });
      }

      return null;
    });

    setRenderedTabs(tabs);
    setRenderedButtons(buttons);
  }, [activeTabIndex, fluid, align, iconsPosition]);

  const tabListClasses = [classes["tablist"]];
  align && tabListClasses.push(classes[align]);
  tabListClassName && tabListClasses.push(tabListClassName);

  return (
    <div {...rest} ref={tabsRef} className={`${classes["tabs"]} ${className ?? ""}`}>
      <div role="tablist" className={tabListClasses.join(" ")} onKeyDown={handleKeyDown}>
        {renderedButtons}
        <div
          className={classes["indicator"]}
          ref={indicatorRef}
          aria-hidden="true"
          tabIndex={-1}
          style={{
            width: indicatorStyles.width,
            left: indicatorStyles.left,
            top: indicatorStyles.top
          }}
        />
      </div>
      <div>{renderedTabs}</div>
    </div>
  );
};

export const Tabs = React.forwardRef(TabsComponent);
