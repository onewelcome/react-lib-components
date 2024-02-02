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

import classes from "./MultiSelect.module.scss";

import React, {
  createRef,
  ForwardRefRenderFunction,
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState
} from "react";
import { Icon, Icons } from "../../../Icon/Icon";
import { useBodyClick } from "../../../../hooks/useBodyClick";
import readyclasses from "../../../../readyclasses.module.scss";
import { filterProps } from "../../../../util/helper";
import { useArrowNavigation, useSelectPositionList } from "../SelectService";
import { useDetermineStatusIcon } from "../../../../hooks/useDetermineStatusIcon";
import { SelectedOptions, Display } from "./SelectedOptions";
import { SelectButton } from "./SelectButton";
import { MultiSelectProps } from "../Select.interfaces";
import { useSearch } from "../useSearch";
import { useAddNewBtn } from "../useAddNewBtn";

const MultiSelectComponent: ForwardRefRenderFunction<HTMLSelectElement, MultiSelectProps> = (
  {
    children,
    name,
    disabled = false,
    labeledBy,
    placeholder,
    describedBy,
    searchPlaceholder = "Search item",
    searchInputProps,
    selectButtonProps = {},
    className,
    error = false,
    success = false,
    value,
    clearLabel = "Clear selection",
    noResultsLabel = "No results found",
    onChange,
    addNew,
    search,
    ...rest
  }: MultiSelectProps,
  ref
) => {
  const [expanded, setExpanded] = useState(false);
  const [display, setDisplay] = useState<Record<string, Display>>({});
  const containerReference = useRef<HTMLDivElement>(null);
  const optionListReference = useRef<HTMLDivElement>(null);
  const [focusedSelectItem, setFocusedSelectItem] = useState(-1);
  const [shouldClick, setShouldClick] =
    useState(
      false
    ); /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = useState(false);
  const optionsVisibleCount = React.Children.count(children) - Object.keys(display).length;
  const {
    filter,
    isSearching,
    renderSearch,
    searchInputRef,
    setIsSearching,
    searchThreshold,
    searchVisible
  } = useSearch({
    expanded,
    search,
    searchInputClassName: classes["select-search"],
    optionsCount: optionsVisibleCount,
    setFocusedSelectItem,
    searchInputProps,
    searchPlaceholder
  });
  const { addBtnRef, addNewBtnOptionsContainerClassName, renderAddNew } = useAddNewBtn({
    addNew,
    filter
  });

  const nativeSelect = (ref as React.RefObject<HTMLSelectElement>) || createRef();

  const onOptionChangeHandler = (optionElement: HTMLElement | null) => {
    if (nativeSelect.current && optionElement) {
      const value = optionElement.getAttribute("data-value")!;
      const options = [...nativeSelect.current.options];
      const lastSelectedOptionValues = options
        .filter(option => option.selected)
        .map(option => option.value);
      options.forEach(option => {
        if (option.value === value || lastSelectedOptionValues.includes(option.value)) {
          option.selected = true;
        }
      });
      nativeSelect.current.dispatchEvent(new Event("change", { bubbles: true }));
    }

    setExpanded(false);
  };

  const onSelectedOptionRemoveHandler = (value: string) => {
    if (nativeSelect.current) {
      const options = [...nativeSelect.current.options];
      options.find(option => option.value === value)!.selected = false;
      nativeSelect.current.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  const customSelectButtonRef = useRef<HTMLButtonElement>(null);
  const { onArrowNavigation } = useArrowNavigation({
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    onOptionChangeHandler,
    childrenCount: optionsVisibleCount,
    setShouldClick,
    searchInputRef,
    addBtnRef,
    renderThreshold: searchThreshold
  });

  const { listPosition, opacity, optionsListMaxHeight, setListPosition, setOpacity } =
    useSelectPositionList({ expanded, optionListReference, containerReference, addBtnRef });

  const syncDisplayValue = (vals: string[]) => {
    const displayArray = React.Children.map(children, child => child as ReactElement<any>).reduce(
      (prevOption, curOption) => {
        if (vals.includes(curOption.props.value)) {
          prevOption[curOption.props.value] = {
            label: curOption.props.children,
            fixed: curOption.props.fixed
          };
        }
        return prevOption;
      },
      {} as Record<string, Display>
    );
    setDisplay(displayArray);
  };

  const syncSelectedOption = (vals: string[]) => {
    if (nativeSelect.current) {
      const options = [...nativeSelect.current.options];
      options.forEach(option => {
        if (vals.includes(option.value)) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      });
    }
  };

  /**
   * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    type ReactChildrenType = ReturnType<typeof React.Children.toArray>;

    const filterOutSelectedChildren = (internalChildren: ReactChildrenType) => {
      const selectedValues = Object.keys(display);
      return internalChildren.filter(
        child =>
          typeof child === "object" &&
          "props" in child &&
          !selectedValues.includes(child.props.value as string)
      );
    };

    if (isSearching || filter !== "") {
      const filteredChildren = React.Children.toArray(children).filter(
        child =>
          (child as ReactElement).props.children.toLowerCase().match(filter.toLowerCase()) !== null
      );

      const internalChildren = _internalRenderChildren(filterOutSelectedChildren(filteredChildren));

      if (internalChildren.length === 0) {
        return <li className={classes["no-results"]}>{noResultsLabel}</li>;
      }

      return internalChildren;
    }

    return _internalRenderChildren(filterOutSelectedChildren(React.Children.toArray(children)));

    function _internalRenderChildren(internalChildren: ReactChildrenType) {
      return React.Children.map(internalChildren, (child, index) => {
        return React.cloneElement(child as ReactElement, {
          onFocusChange: (childIndex: number) => {
            setFocusedSelectItem(childIndex);
          },
          onOptionSelect: (optionRef: React.RefObject<HTMLLIElement>) => {
            onOptionChangeHandler(optionRef.current);
            setShouldClick(false);
          },
          isSearching: isSearching,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick
        });
      });
    }
  };

  const renderChevronIcon = () => {
    return expanded ? (
      <Icon className={classes["chevron-icon"]} icon={Icons.ChevronUp} />
    ) : (
      <Icon className={classes["chevron-icon"]} icon={Icons.ChevronDown} />
    );
  };

  const icon = useDetermineStatusIcon({ success, error });

  const nativeOnChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event);
  };

  useEffect(() => {
    if (expanded) {
      setFocusedSelectItem(0);
      setShouldFocusButtonAfterClose(true);
    }

    if (!expanded && customSelectButtonRef.current && shouldFocusButtonAfterClose) {
      customSelectButtonRef.current.focus();
      setShouldFocusButtonAfterClose(false);
    }
  }, [expanded, customSelectButtonRef.current, shouldFocusButtonAfterClose]);

  useEffect(() => {
    syncDisplayValue(value);
    syncSelectedOption(value);
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

  const onSelectButtonClick = () => {
    setExpanded(!expanded);
  };

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return (
    <Fragment>
      <select
        {...filterProps(rest, /^data-/, false)}
        tabIndex={-1}
        multiple={true}
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
        {searchVisible && renderSearch()}
        <div
          className={`${classes["custom-select"]} ${additionalClasses.join(" ")} `}
          style={{ display: expanded && searchVisible ? "none" : "flex" }}
        >
          <div className={classes["display-container"]} data-display>
            <SelectButton
              {...selectButtonProps}
              onClick={onSelectButtonClick}
              name={name}
              ref={customSelectButtonRef}
              disabled={disabled}
              aria-disabled={disabled}
              aria-invalid={error}
              aria-expanded={expanded}
              aria-haspopup="listbox"
              aria-labelledby={labeledBy}
              aria-describedby={describedBy}
            />
            {value?.length === 0 && placeholder && (
              <span className={classes["placeholder"]}>{placeholder}</span>
            )}
            {value?.length > 0 && (
              <SelectedOptions
                display={display}
                onClick={onSelectButtonClick}
                onRemove={onSelectedOptionRemoveHandler}
              />
            )}
          </div>
          <div className={classes["status"]}>{icon || renderChevronIcon()}</div>
        </div>

        <div
          ref={optionListReference}
          className={`list-wrapper ${classes["list-wrapper"]}`}
          style={{
            display: expanded ? "block" : "none",
            opacity: opacity,
            maxHeight: optionsListMaxHeight.wrapper,
            pointerEvents: expanded ? "auto" : "none",
            ...listPosition
          }}
        >
          <ul
            className={addNewBtnOptionsContainerClassName}
            role="listbox"
            style={{ maxHeight: optionsListMaxHeight.list }}
          >
            {renderOptions()}
          </ul>
          {renderAddNew()}
        </div>
      </div>
    </Fragment>
  );
};

export const MultiSelect = React.forwardRef(MultiSelectComponent);
