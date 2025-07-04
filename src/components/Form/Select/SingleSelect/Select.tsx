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
  createRef,
  ForwardRefRenderFunction,
  ReactElement,
  useEffect,
  useRef,
  useState
} from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { useDetermineStatusIcon } from "../../../../hooks/useDetermineStatusIcon";
import readyclasses from "../../../../readyclasses.module.scss";
import { filterProps } from "../../../../util/helper";
import { Icon, Icons } from "../../../Icon/Icon";
import { Position, SingleSelectProps } from "../Select.interfaces";
import { useSelectPositionList } from "../useSelectPositionList";
import { useAddNewBtn } from "../useAddNewBtn";
import { useSearch } from "./useSearch";
import { useArrowNavigation } from "./useArrowNavigation";
import { withReadOnly } from "../../../withReadOnly";
import { Tooltip } from "../../../Tooltip/Tooltip";

const SelectComponent: ForwardRefRenderFunction<HTMLSelectElement, SingleSelectProps> = (
  {
    children,
    name,
    disabled = false,
    labeledBy,
    placeholder,
    describedBy,
    selectButtonProps,
    className,
    error = false,
    success = false,
    info = false,
    value,
    clearLabel = "Clear selection",
    noResultsLabel = "No results found",
    onChange,
    addNew,
    search,
    isReadOnlyView,
    inlineEditing,
    tooltipText,
    ...rest
  }: SingleSelectProps,
  ref
) => {
  const [expanded, setExpanded] = useState(false);
  const [display, setDisplay] = useState("");
  const containerReference = useRef<HTMLDivElement>(null);
  const optionListReference = useRef<HTMLDivElement>(null);
  const [focusedSelectItem, setFocusedSelectItem] = useState(-1);
  const [shouldClick, setShouldClick] = useState(false);
  /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = useState(false);
  const optionsCount = React.Children.count(children);
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
    optionsCount,
    setFocusedSelectItem
  });
  const { addBtnRef, addNewBtnOptionsContainerClassName, renderAddNew } = useAddNewBtn({
    addNew,
    filter,
    focusedSelectItem,
    optionsCount,
    searchInputRef
  });

  const nativeSelect = (ref as React.RefObject<HTMLSelectElement>) || createRef();

  const onOptionChangeHandler = (optionElement: HTMLElement | null) => {
    if (nativeSelect.current && optionElement) {
      nativeSelect.current.value = optionElement.getAttribute("data-value")!;
      nativeSelect.current.dispatchEvent(new Event("change", { bubbles: true }));
    }

    setExpanded(false);
  };

  const customSelectButtonRef = useRef<HTMLButtonElement>(null);
  const { onArrowNavigation } = useArrowNavigation({
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    onOptionChangeHandler,
    childrenCount: optionsCount,
    setShouldClick,
    searchInputRef,
    addBtnRef,
    renderThreshold: searchThreshold,
    isReadOnlyView: isReadOnlyView || !!rest["data-readonlyview"]
  });

  const { listPosition, opacity, optionsListMaxHeight, setListPosition, setOpacity } =
    useSelectPositionList({ expanded, optionListReference, containerReference, addBtnRef });

  const syncDisplayValue = (val: string) => {
    React.Children.forEach(children, child => {
      if (child.props.value === val) {
        setDisplay(child.props.children);
      }
    });
  };

  /**
   * @description We have to modify the children (Option component) to have an additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    if (isSearching || filter !== "") {
      const filteredChildren = React.Children.toArray(children).filter(
        child =>
          (child as ReactElement).props.children.toLowerCase().match(filter.toLowerCase()) !== null
      );

      const internalChildren = _internalRenderChildren(filteredChildren as ReactElement[]);

      if (internalChildren.length === 0) {
        return <li className={classes["no-results"]}>{noResultsLabel}</li>;
      }

      return _internalRenderChildren(filteredChildren as ReactElement[]);
    }

    return _internalRenderChildren(children);

    function _internalRenderChildren(internalChildren: ReactElement[]) {
      return React.Children.map(internalChildren, (child, index) => {
        return React.cloneElement(child, {
          onFocusChange: (childIndex: number) => {
            setFocusedSelectItem(childIndex);
          },
          onOptionSelect: (optionRef: React.RefObject<HTMLLIElement>) => {
            onOptionChangeHandler(optionRef.current);
            setShouldClick(false);
          },
          isSelected: child.props.value === value,
          isSearching: isSearching,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick,
          isAddBtnFocused: addBtnRef.current === document.activeElement
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
  }, [value]);

  const myElementRef = useRef<HTMLDivElement>(null);

  useClickOutside(myElementRef, () => {
    if (!expanded) {
      return;
    }
    setExpanded(false);
    setListPosition(Position.Below);
    setOpacity(0);
  }, [expanded]);

  const additionalClasses = [];
  expanded && additionalClasses.push(classes.expanded);
  error && additionalClasses.push(classes.error);
  disabled && additionalClasses.push(classes.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(classes.success);

  const inlineEditingSelect = [];
  inlineEditing && inlineEditingSelect.push(classes.inlineEditing);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return (
    <div ref={myElementRef} className={`${classes["root"]} ${inlineEditingSelect.join(" ")}`}>
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
        className={`custom-select ${classes.select} ${additionalClasses.join(" ")}`}
      >
        {searchVisible && renderSearch()}
        <button
          {...selectButtonProps}
          onClick={() => {
            setExpanded(isReadOnlyView || rest["data-readonlyview"] ? false : !expanded);
          }}
          ref={customSelectButtonRef}
          type="button"
          name={name}
          className={`${classes["custom-select"]} ${additionalClasses.join(" ")} `}
          style={{ display: expanded && searchVisible ? "none" : "block" }}
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
            {icon || renderChevronIcon()}
            {(info || error || success) && tooltipText && inlineEditing && (
              <Tooltip
                label=""
                location="right"
                position="center"
                icon={error ? undefined : Icons.InfoCircle}
                error={error}
                inlineEditing={inlineEditing}
              >
                {tooltipText}
              </Tooltip>
            )}
          </div>
        </button>
        <div className="list-wrapper-container">
          <div
            ref={optionListReference}
            className={`list-wrapper ${classes["list-wrapper"]}`}
            style={{
              display: expanded ? "block" : "none",
              opacity: opacity,
              maxHeight: optionsListMaxHeight.wrapper,
              pointerEvents: expanded ? "auto" : "none",
              bottom: listPosition === Position.Above ? "2.85rem" : "initial",
              marginTop: "4px"
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
      </div>
    </div>
  );
};
export const Select = withReadOnly(React.forwardRef(SelectComponent));
