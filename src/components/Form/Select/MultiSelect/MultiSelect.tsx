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
  ForwardRefRenderFunction,
  Fragment,
  ReactElement,
  createRef,
  useEffect,
  useRef,
  useState
} from "react";
import { useBodyClick } from "../../../../hooks/useBodyClick";
import { useDetermineStatusIcon } from "../../../../hooks/useDetermineStatusIcon";
import readyclasses from "../../../../readyclasses.module.scss";
import { escapeRegExp, filterProps, generateID } from "../../../../util/helper";
import { Icon, Icons } from "../../../Icon/Icon";
import { MultiSelectProps } from "../Select.interfaces";
import { useAddNewBtn } from "../useAddNewBtn";
import { useSelectPositionList } from "../useSelectPositionList";
import { SelectButton } from "./SelectButton";
import { Display, SelectedOptions } from "./SelectedOptions";
import { useArrowNavigation } from "./useArrowNavigation";
import { useSearch } from "./useSearch";

const getOptionId = (multiSelectId: string, optionIndex: number) =>
  `${multiSelectId}_option${optionIndex}`;

const getListboxId = (multiSelectId: string) => `${multiSelectId}_listbox`;

const MultiSelectComponent: ForwardRefRenderFunction<HTMLSelectElement, MultiSelectProps> = (
  {
    id,
    children,
    name,
    disabled = false,
    labeledBy,
    placeholder,
    describedBy,
    selectButtonProps = {},
    className,
    error = false,
    success = false,
    value,
    clearLabel = "Clear selection",
    noResultsLabel = "No results found",
    onChange,
    addNew,
    search = { enabled: true, renderThreshold: 0 },
    ...rest
  }: MultiSelectProps,
  ref
) => {
  const multiSelectId = useRef(id ?? generateID(20));
  const [expanded, setExpanded] = useState(false);
  const [display, setDisplay] = useState<Display[]>([]);
  const containerReference = useRef<HTMLDivElement>(null);
  const optionListReference = useRef<HTMLDivElement>(null);
  const [focusedSelectItem, setFocusedSelectItem] = useState(0);
  const [shouldClick, setShouldClick] =
    useState(
      false
    ); /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = useState(false);
  const [optionsVisibleCount, setOptionsVisibleCount] = useState(
    React.Children.count(children) - display.length
  );
  const { filter, renderSearch, searchInputRef, resetSearchState, searchVisible } = useSearch({
    selectId: multiSelectId.current,
    expanded,
    search,
    searchInputClassName: classes["select-search"],
    optionsCount: optionsVisibleCount,
    focusedSelectItem,
    setFocusedSelectItem,
    describedBy,
    getOptionId,
    getListboxId
  });
  const { addBtnRef, addNewBtnOptionsContainerClassName, renderAddNew } = useAddNewBtn({
    id: getOptionId(multiSelectId.current, optionsVisibleCount),
    addNew,
    filter,
    focusedSelectItem,
    optionsCount: optionsVisibleCount,
    searchInputRef,
    shouldClick,
    onClickCallback: () => {
      setShouldClick(false);
      resetSearchState();
    }
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
    resetSearchState();
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
    setFocusedSelectItem,
    childrenCount: optionsVisibleCount,
    setShouldClick,
    addBtnRef,
    searchInputRef,
    customSelectButtonRef,
    onClose: resetSearchState
  });

  const { listPosition, opacity, optionsListMaxHeight, setListPosition, setOpacity } =
    useSelectPositionList({ expanded, optionListReference, containerReference, addBtnRef });

  const syncDisplayValue = (values: string[]) => {
    const options = React.Children.map(children, child => child);
    const displayArray: Display[] = values.map(value => {
      const option = options.find(option => option.props.value === value);
      return { value, label: option?.props.children, fixed: option?.props.fixed };
    });
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
      return internalChildren.filter(
        child =>
          typeof child === "object" &&
          "props" in child &&
          !display.find(option => option.value === child.props.value)
      );
    };

    let results;
    if (filter !== "") {
      const filteredChildren = React.Children.toArray(children).filter(
        child =>
          (child as ReactElement).props.children
            .toLowerCase()
            .match(escapeRegExp(filter.toLowerCase())) !== null
      );

      results = _internalRenderChildren(filterOutSelectedChildren(filteredChildren));
    } else {
      results = _internalRenderChildren(
        filterOutSelectedChildren(React.Children.toArray(children))
      );
    }

    optionsVisibleCount !== results.length && setOptionsVisibleCount(results.length);

    if (results.length === 0) {
      return <li className={classes["no-results"]}>{noResultsLabel}</li>;
    }

    return results;

    function _internalRenderChildren(internalChildren: ReactChildrenType) {
      return React.Children.map(internalChildren, (child, index) => {
        return React.cloneElement(child as ReactElement, {
          onFocusChange: (childIndex: number) => {
            setFocusedSelectItem(childIndex);
          },
          onOptionSelect: (optionRef: React.RefObject<HTMLLIElement>) => {
            onOptionChangeHandler(optionRef.current);
            setExpanded(false);
            setShouldClick(false);
          },
          isSearching: false,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick,
          id: getOptionId(multiSelectId.current, index)
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
    if (expanded && searchInputRef.current) {
      setShouldFocusButtonAfterClose(true);
      searchInputRef.current.focus();
    }

    if (!expanded && customSelectButtonRef.current && shouldFocusButtonAfterClose) {
      setShouldFocusButtonAfterClose(false);
      customSelectButtonRef.current.focus();
    }
  }, [
    expanded,
    customSelectButtonRef.current,
    shouldFocusButtonAfterClose,
    searchInputRef.current
  ]);

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
    setExpanded(expanded => !expanded);
    setShouldClick(false);
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
        id={multiSelectId.current}
        ref={containerReference}
        onKeyDown={onArrowNavigation}
        className={`custom-select ${classes.select} ${additionalClasses.join(" ")} ${
          className ?? ""
        }`}
      >
        <div
          className={`${classes["custom-select"]} ${additionalClasses.join(" ")} `}
          style={{ display: "flex" }}
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
                disabled={disabled}
                display={display}
                onClick={onSelectButtonClick}
                onRemove={onSelectedOptionRemoveHandler}
              />
            )}
            {searchVisible && renderSearch()}
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
            id={getListboxId(multiSelectId.current)}
            className={addNewBtnOptionsContainerClassName}
            role="listbox"
            aria-multiselectable="true"
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
