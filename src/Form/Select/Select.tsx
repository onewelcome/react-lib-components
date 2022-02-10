import classes from "./Select.module.scss";

import React, { Fragment, HTMLAttributes, ReactElement, useCallback, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { Icon, Icons } from "../../Icon/Icon";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  disabled?: boolean;
  labeledBy?: string;
  placeholder?: string;
  error?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, child?: ReactElement) => void;
  onClear?: () => void;
}

export const Select = ({
  children,
  disabled = false,
  labeledBy,
  placeholder = "Choose an option",
  error = false,
  value = "",
  onChange,
  onClear,
  ...rest
}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const [display, setDisplay] = useState("");

  const onOptionChangeHandler = (child: ReactElement) => (event: React.SyntheticEvent<HTMLLIElement>) => {
    let newValue;
    let multiple = false; // Potential support for future multiple select. This should be a prop obviously.

    if (multiple) {
      /** stuff here */
    } else {
      newValue = child.props.value;
    }

    if (onChange) {
      // Redefine target to allow name and value to be read.
      // This allows seamless integration with the most popular form libraries.
      // Clone the event to not override `target` of the original event.
      // Don't know how to fix this any.. compiler whines that it can't construct it otherwise.
      const nativeEvent: any = event.nativeEvent || event;
      const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);

      Object.defineProperty(clonedEvent, "target", {
        writable: true,
        value: { value: newValue },
      });

      onChange(clonedEvent, child);
    }

    setDisplay(event.currentTarget.innerText);
    setExpanded(false);
  };

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleSelectCloseOnBodyClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (!(event.target as Element).closest(".custom-select") && expanded) {
        setExpanded(false);
      }
    },
    [expanded]
  );

  useEffect(() => {
    /**
     * Add body click listener to close select and remove it in the cleanup function whenever expanded state changes.
     */
    window.addEventListener("click", handleSelectCloseOnBodyClick);

    /**
     * Calculate dropdown maxheight
     */

    return () => {
      /**
       * Cleanup the eventlistener so we can set it again after expanded has changed.
       */
      window.removeEventListener("click", handleSelectCloseOnBodyClick);
    };
  }, [expanded]);

  /**
   * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    if (!Array.isArray(children)) {
      children = [children];
    }

    return children?.map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          onOptionSelect: onOptionChangeHandler(child),
          selected: child.props.value === value,
          filter: filter,
        })}
      </Fragment>
    ));
  };

  const renderSearch = () => (
    <Input
      autoFocus
      onChange={filterResults}
      className={classes["select-search"]}
      type="text"
      name="search-option"
      placeholder="Search item"
    />
  );

  const filterResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const statusIcon = () => {
    if (error) {
      return <Icon icon={Icons.Warning} />;
    }

    if (value !== undefined) {
      return (
        <div onClick={onClear}>
          <Icon icon={Icons.TimesThin} />
        </div>
      );
    }

    return null;
  };

  const additionalClasses = [];
  if (expanded) additionalClasses.push(classes.expanded);
  if (error) additionalClasses.push(classes.error);
  if (disabled) additionalClasses.push(classes.disabled);

  return (
    <div {...rest} className={`${classes.select} ${additionalClasses.join(" ")} custom-select`}>
      <input style={{ display: "none" }} value={value} tabIndex={-1} aria-hidden="true" onChange={onInputChangeHandler} />
      <button
        onClick={setExpanded.bind(null, !expanded)}
        aria-disabled={disabled}
        aria-invalid={error}
        aria-expanded={expanded}
        aria-haspopup="listbox"
        aria-labelledby={labeledBy}
      >
        <span className={classes.selected}>
          {value === undefined && <span className={classes.placeholder}>{placeholder}</span>}
          {value !== undefined && <span>{display}</span>}
        </span>
        {statusIcon()}
        <Icon icon={Icons.TriangleDown} />
      </button>
      <div className={`list-wrapper ${classes["list-wrapper"]}`} style={{ display: expanded ? "block" : "none" }}>
        {Array.isArray(children) && children.length > 10 && renderSearch()}
        <ul role="listbox">{renderOptions()}</ul>
      </div>
    </div>
  );
};
