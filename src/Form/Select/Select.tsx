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

import classes from "./Select.module.scss";

import React, {
  ComponentPropsWithRef,
  createRef,
  ForwardRefRenderFunction,
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState
} from "react";
import { Input, Props as InputProps } from "../Input/Input";
import { Icon, Icons } from "../../Icon/Icon";
import { FormElement } from "../form.interfaces";
import { useBodyClick } from "../../hooks/useBodyClick";
import readyclasses from "../../readyclasses.module.scss";
import { filterProps } from "../../util/helper";
import { useArrowNavigation, useSelectPositionList } from "./SelectService";
import { useDetermineStatusIcon } from "../../hooks/useDetermineStatusIcon";

type PartialInputProps = Partial<InputProps>;

export interface Props extends ComponentPropsWithRef<"select">, FormElement {
  children: ReactElement[];
  name?: string;
  labeledBy?: string;
  describedBy?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  searchInputProps?: PartialInputProps;
  selectButtonProps?: ComponentPropsWithRef<"button">;
  className?: string;
  value: string;
  clearLabel?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, child?: ReactElement) => void;
}

/** Amount of items to be rendered before a search input is rendered */
const renderSearchCondition = 10;

const SelectComponent: ForwardRefRenderFunction<HTMLSelectElement, Props> = (
  {
    children,
    name,
    disabled = false,
    labeledBy,
    placeholder,
    describedBy,
    searchPlaceholder = "Search item",
    searchInputProps,
    selectButtonProps,
    className,
    error = false,
    success = false,
    value,
    clearLabel = "Clear selection",
    onChange,
    ...rest
  }: Props,
  ref
) => {
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState("");
  const [display, setDisplay] = useState("");
  const containerReference = useRef<HTMLDivElement>(null);
  const optionListReference = useRef<HTMLDivElement>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [focusedSelectItem, setFocusedSelectItem] = useState(-1);
  const [shouldClick, setShouldClick] =
    useState(
      false
    ); /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [childrenCount] = useState(React.Children.count(children));

  const nativeSelect = (ref as React.RefObject<HTMLSelectElement>) || createRef();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const customSelectButtonRef = useRef<HTMLButtonElement>(null);
  const { onArrowNavigation } = useArrowNavigation({
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    childrenCount,
    customSelectButtonRef,
    setShouldClick,
    searchInputRef,
    renderSearchCondition
  });

  const { listPosition, opacity, optionsListMaxHeight, setListPosition, setOpacity } =
    useSelectPositionList({ expanded, optionListReference, containerReference });

  const syncDisplayValue = (val: string) => {
    React.Children.forEach(children, child => {
      if (child.props.value === val) {
        setDisplay(child.props.children);
      }
    });
  };

  const onOptionChangeHandler = (optionRef: React.RefObject<HTMLLIElement>) => {
    if (nativeSelect.current && optionRef.current) {
      nativeSelect.current.value = optionRef.current.getAttribute("data-value")!;
      nativeSelect.current.dispatchEvent(new Event("change", { bubbles: true }));
    }

    setExpanded(false);

    customSelectButtonRef.current && customSelectButtonRef.current.focus();
  };

  /**
   * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    if (isSearching || filter !== "") {
      const filteredChildren = React.Children.toArray(children).filter(
        child =>
          (child as ReactElement).props.children.toLowerCase().match(filter.toLowerCase()) !== null
      );

      return _internalRenderChildren(filteredChildren as ReactElement[]);
    }

    return _internalRenderChildren(children);

    function _internalRenderChildren(internalChildren: ReactElement[]) {
      return React.Children.map(internalChildren, (child, index) => {
        return React.cloneElement(child, {
          onFocusChange: (childIndex: number) => setFocusedSelectItem(childIndex),
          onOptionSelect: (optionRef: React.RefObject<HTMLLIElement>) => {
            onOptionChangeHandler(optionRef);
            setShouldClick(false);
          },
          isSelected: child.props.value === value,
          isSearching: isSearching,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick
        });
      });
    }
  };

  const renderSearch = () => (
    <Input
      {...searchInputProps}
      autoFocus
      ref={searchInputRef}
      onFocus={() => setIsSearching(true)}
      onBlur={() => setIsSearching(false)}
      onChange={filterResults}
      className={classes["select-search"]}
      wrapperProps={{
        className: `${classes["select-search-wrapper"]} ${searchInputProps?.wrapperProps?.className}`
      }}
      type="text"
      name="search-option"
      placeholder={searchPlaceholder}
    />
  );

  const filterResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const icon = useDetermineStatusIcon({ success, error });

  const nativeOnChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(event);
  };

  useEffect(() => {
    syncDisplayValue(value);
  }, [value]);

  useBodyClick(
    (event: MouseEvent) => !(event.target as Element).closest(".custom-select") && expanded,
    () => {
      setExpanded(false);
      setListPosition({ top: 0, bottom: "initial" });
      setOpacity(0);
    },
    expanded
  );

  const additionalClasses = [];
  expanded && additionalClasses.push(classes.expanded);
  error && additionalClasses.push(classes.error);
  disabled && additionalClasses.push(classes.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(classes.success);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return (
    <Fragment>
      <select
        {...filterProps(rest, /^data-/, false)}
        tabIndex={-1}
        aria-hidden="true"
        ref={nativeSelect}
        name={name}
        onChange={nativeOnChangeHandler}
        className={readyclasses["sr-only"]}
      >
        <option value=""></option>
        {React.Children.map(children, child => (
          <option value={child.props.value}></option>
        ))}
      </select>
      <div
        {...filterProps(rest, /^data-/)}
        ref={containerReference}
        onKeyDown={onArrowNavigation}
        className={`custom-select ${classes.select} ${additionalClasses.join(" ")} ${
          className ?? ""
        }`}
      >
        <button
          {...selectButtonProps}
          onClick={() => {
            setExpanded(!expanded);
          }}
          ref={customSelectButtonRef}
          type="button"
          name={name}
          className={`${classes["custom-select"]} ${additionalClasses.join(" ")} `}
          disabled={disabled}
          aria-disabled={disabled}
          aria-invalid={error}
          aria-expanded={expanded}
          aria-haspopup="listbox"
          aria-labelledby={labeledBy}
          aria-describedby={describedBy}
        >
          <div data-display className={classes["selected"]}>
            {!value && placeholder && <span className={classes["placeholder"]}>{placeholder}</span>}
            {value?.length > 0 && <span data-display-inner>{display}</span>}
          </div>
          <div className={classes["status"]}>
            {icon}
            <Icon className={classes["triangle-down"]} icon={Icons.TriangleDown} />
          </div>
        </button>
        <div
          ref={optionListReference}
          className={`list-wrapper ${classes["list-wrapper"]}`}
          style={{
            display: expanded ? "block" : "none",
            opacity: opacity,
            maxHeight: optionsListMaxHeight,
            pointerEvents: expanded ? "auto" : "none",
            ...listPosition
          }}
        >
          {Array.isArray(children) && children.length > renderSearchCondition && renderSearch()}
          <ul role="listbox">{renderOptions()}</ul>
        </div>
      </div>
    </Fragment>
  );
};

export const Select = React.forwardRef(SelectComponent);
