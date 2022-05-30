import React, {
  ComponentPropsWithRef,
  createRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { generateID } from '../util/helper';
import { Props as TabProps } from './Tab';
import { TabButton } from './TabButton';
import { TabPanel } from './TabPanel';
import classes from './Tabs.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  selected?: number;
  'aria-label'?: string;
  onTabChange?: (index: number) => void;
}

export const Tabs = ({
  children,
  selected = 0,
  'aria-label': ariaLabel,
  onTabChange,
  className,
  ...rest
}: Props) => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [indicatorPosition, setIndicatorPosition] = useState({ left: 0, top: 0 });
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const [max] = useState(React.Children.count(children) - 1);
  const min = 0;

  const [selectedTab, setSelectedTab] = useState(Math.min(max, Math.max(min, selected)));
  const [focussedTab, setFocussedTab] = useState(-1);
  const [tabIds] = useState([...Array(max)].map(() => generateID()));
  const [tabPanelIds] = useState([...Array(max)].map(() => generateID()));

  useEffect(() => {
    setSelectedTab(Math.min(max, Math.max(min, selected)));
    setFocussedTab(-1);
  }, [selected]);

  useEffect(() => {
    calculateIndicatorPosition();
  }, [selectedTab]);

  const calculateIndicatorPosition = () => {
    const selectedTabButton = (
      tabButtons[selectedTab].ref as MutableRefObject<HTMLButtonElement | null>
    ).current as HTMLButtonElement;

    setIndicatorPosition({
      left: selectedTabButton.offsetLeft,
      top:
        selectedTabButton.offsetTop +
        selectedTabButton.offsetHeight -
        indicatorRef.current!.offsetHeight,
    });
    setIndicatorWidth(selectedTabButton.offsetWidth);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    // do not show focus unless we came here before
    let currentFocussedTab = focussedTab === -1 ? selectedTab : focussedTab;

    switch (e.code) {
      case 'ArrowLeft':
        setFocussedTab(currentFocussedTab === min ? max : currentFocussedTab - 1);
        break;
      case 'ArrowRight':
        setFocussedTab(currentFocussedTab === max ? min : currentFocussedTab + 1);
        break;
      case 'Home':
        setFocussedTab(min);
        break;
      case 'End':
        setFocussedTab(max);
        break;
      case 'Space':
      case 'Enter':
        activateTab(currentFocussedTab);
        break;
    }
  };

  const handleBlur = () => {
    setFocussedTab(selectedTab);
  };

  const activateTab = (index: number) => {
    setSelectedTab(index);
    setFocussedTab(index);
    onTabChange && onTabChange(index);
  };

  const tabButtons = React.Children.map(children, (child, index) =>
    React.createElement(TabButton, {
      ref: child.props.buttonRef || createRef<HTMLButtonElement>(),
      key: generateID(),
      tabId: tabIds[index],
      tabPanelId: tabPanelIds[index],
      selected: selectedTab === index,
      focussed: focussedTab === index,
      onTabButtonClick: () => activateTab(index),
      children: child.props.title,
    })
  );

  const tabPanels = React.Children.map(children, (child, index) =>
    React.createElement(TabPanel, {
      ref: child.props.panelRef || createRef<HTMLDivElement>(),
      key: generateID(),
      selected: selectedTab === index,
      tabId: tabIds[index],
      tabPanelId: tabPanelIds[index],
      children: child.props.children,
    })
  );

  return (
    <div {...rest} className={`${classes['tabs']} ${className ?? ''}`}>
      <div
        role="tablist"
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        aria-label={ariaLabel}
        className={classes['tablist']}
      >
        {tabButtons}
        <div
          className={classes['indicator']}
          ref={indicatorRef}
          aria-hidden="true"
          tabIndex={-1}
          style={{
            width: indicatorWidth,
            ...indicatorPosition,
          }}
        />
      </div>
      <div className={classes['tabpanels']}>{tabPanels}</div>
    </div>
  );
};
