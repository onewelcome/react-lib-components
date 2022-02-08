import classes from "./Select.module.scss";

import React, { Fragment, HTMLAttributes, ReactElement, useCallback, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { Icon, Icons } from "../../Icon/Icon";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement;
  disabled?: boolean;
  name?: string;
  id?: string;
  labeledBy?: string;
  placeholder?: string;
  error?: boolean;
  onSelectChange?: (option: { label: string; value: string | undefined }) => void;
}

export const Select = ({
  children,
  labeledBy,
  placeholder = "Choose an option",
  error = false,
  disabled = false,
  onSelectChange,
  ...rest
}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string | undefined;
  }>({ label: "", value: undefined });
  const [filter, setFilter] = useState<string>("");

  const onOptionChangeHandler = (option: { label: string; value: string }) => {
    setSelectedOption({ label: option.label, value: option.value });
    setExpanded(false);
  };

  /**
   * Emit an event so that the end user can execute an onChange event on our custom Select component.
   */
  useEffect(() => {
    onSelectChange && onSelectChange(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    /**
     * Force our children prop to be an array of ReactElements so we can loop over them and add custom props.
     */
    if (!Array.isArray(children)) {
      children = [children];
    }

    for (let child of children) {
      /**
       * If there's an option with the selected attribute, we actually select that one. But since we don't want the placeholder to switch out
       * with the value on render, we initially set to undefined and then change it if there's an <Option /> with the selected prop
       */
      if (child.props.selected) {
        setSelectedOption({
          label: child.props.children,
          value: child.props.value,
        });
      }
    }
  }, []);

  const handleSelectCloseOnBodyClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (!(event.target as Element).closest(".custom-select") && expanded) {
        setExpanded(false);
      }
    },
    [expanded]
  );

  /**
   * Add body click listener to close select and remove it in the cleanup function whenever expanded state changes.
   */
  useEffect(() => {
    window.addEventListener("click", handleSelectCloseOnBodyClick);

    return () => {
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
          onOptionSelect: onOptionChangeHandler,
          selected: child.props.value === selectedOption.value,
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

    if (selectedOption.value !== undefined) {
      return (
        <button
          onClick={() => {
            setSelectedOption({ label: "", value: undefined });
          }}
        >
          <Icon icon={Icons.TimesThin} />
        </button>
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
      <button
        onClick={setExpanded.bind(null, !expanded)}
        aria-disabled={disabled}
        aria-invalid={error}
        aria-expanded={expanded}
        aria-haspopup="listbox"
        aria-labelledby={labeledBy}
      >
        <span className={classes.selected}>
          {selectedOption.value === undefined && <span className={classes.placeholder}>{placeholder}</span>}
          {selectedOption.value !== undefined && <span>{selectedOption.label}</span>}
        </span>
        {statusIcon()}
        <Icon icon={Icons.TriangleDown} />
      </button>
      {expanded && !disabled && (
        <ul role="listbox">
          {Array.isArray(children) && children.length > 10 && renderSearch()}
          {renderOptions()}
        </ul>
      )}
    </div>
  );
};
