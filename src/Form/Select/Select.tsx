import classes from './Select.module.scss';

import React, { HTMLProps, ReactElement, useEffect, useRef, useState } from 'react';
import { Input } from '../Input/Input';
import { Icon, Icons } from '../../Icon/Icon';
import { FormElement } from '../form.interfaces';
import { useBodyClick } from '../../hooks/useBodyClick';

export interface Props extends FormElement<HTMLSelectElement> {
  children: ReactElement[];
  name?: string;
  labeledBy?: string;
  describedBy?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, child?: ReactElement) => void;
  onClear?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

type Position = {
  top: 0 | 'initial';
  bottom: 0 | 'initial';
};

export const Select = ({
  children,
  name,
  disabled = false,
  labeledBy,
  placeholder,
  describedBy,
  searchPlaceholder = 'Search item',
  className,
  error = false,
  value = '',
  onChange,
  onClear,
  ...rest
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [opacity, setOpacity] = useState(0); // We set opacity because other wise if we calculate the max height you see the list full height for a split second and then it shortens.
  const [filter, setFilter] = useState('');
  const [display, setDisplay] = useState('');
  const [listPosition, setListPosition] = useState<Partial<Position>>({});
  const [optionsListMaxHeight, setOptionsListMaxHeight] = useState('none');
  const containerReference = useRef<HTMLDivElement>(null);
  const optionListReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      setDisplay(value);
    }
  }, []);

  useBodyClick(
    (event: MouseEvent) => !(event.target as Element).closest('.custom-select') && expanded,
    () => {
      setExpanded(!expanded);
      setListPosition({ top: 0, bottom: 'initial' });
      setOpacity(0);
    },
    expanded
  );

  const rePositionList = () => {
    if (!expanded || !optionListReference.current || !containerReference.current) {
      return;
    }

    // Check whether there is more space above or below the select
    // Check space between the bottom of select and top of viewport
    const spaceOnTopOfSelect = containerReference.current.getBoundingClientRect().bottom;

    // Check space between the top of the select and bottom of viewport
    const spaceOnBottomOfSelect =
      window.innerHeight - containerReference.current.getBoundingClientRect().top;

    // Set position as if there's more space on the bottom
    let position: Position = { top: 0, bottom: 'initial' };

    // Set the position of the select
    if (spaceOnTopOfSelect > spaceOnBottomOfSelect) {
      position = { top: 'initial', bottom: 0 };
    }

    setListPosition(position);

    // Calculate the potential max height of the options list
    calculateOptionListMaxHeight(position);
  };

  const calculateOptionListMaxHeight = (position: Position) => {
    // Calculate max height if there's more space below the select
    const listHeight = optionListReference.current!.getBoundingClientRect().height;
    const transformOrigin = position.top !== 'initial' ? 'top' : 'bottom';

    const availableSpace =
      transformOrigin === 'top'
        ? window.innerHeight -
          containerReference.current!.getBoundingClientRect()[transformOrigin] -
          16
        : containerReference.current!.getBoundingClientRect()[transformOrigin] - 16;

    if (availableSpace < listHeight) {
      setOptionsListMaxHeight(`${availableSpace}px`);
      setOpacity(100);
      return;
    }

    setOptionsListMaxHeight('none');
    setOpacity(100);
  };

  useEffect(() => {
    rePositionList();
  }, [expanded]);

  const onOptionChangeHandler = (child: ReactElement) => (event: React.ChangeEvent) => {
    /**
     * We expose this to the outside inside of the onChange function as a parameter along with an optional second
     * parameter of the option that was clicked.
     */

    setDisplay(child.props.children);

    let newValue;
    let multiple = false; // Potential support for future multiple select. This should be a prop obviously.

    if (multiple) {
      /** We will implement the mulitple select in the next iteration */
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

      Object.defineProperty(clonedEvent as React.ChangeEvent<HTMLSelectElement>, 'target', {
        writable: true,
        value: { value: newValue },
      });

      onChange(clonedEvent as React.ChangeEvent<HTMLSelectElement>, child);
    }

    setDisplay((event.currentTarget as HTMLElement).innerText);
    setExpanded(false);
  };

  /**
   * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        onOptionSelect: onOptionChangeHandler(child),
        selected: child.props.value === value,
        filter: filter,
      })
    );

  const renderSearch = () => (
    <Input
      autoFocus
      onChange={filterResults}
      className={classes['select-search']}
      wrapperProps={{ className: classes['select-search-wrapper'] }}
      type="text"
      name="search-option"
      placeholder={searchPlaceholder}
    />
  );

  const filterResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const statusIcon = () => {
    if (error) {
      return <Icon className={classes['warning']} icon={Icons.Warning} />;
    }

    if (value.length !== 0 && onClear) {
      return (
        <Icon
          tag="div"
          data-clear
          icon={Icons.TimesThin}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            e.stopPropagation();
            onClear(e);
          }}
        />
      );
    }
    return null;
  };

  /** Set initial display value */
  useEffect(() => {
    for (let child of children) {
      if (child.props.value === value) {
        setDisplay(child.props.children);
      }
    }
  }, []);

  const additionalClasses = [];
  expanded && additionalClasses.push(classes.expanded);
  error && additionalClasses.push(classes.error);
  disabled && additionalClasses.push(classes.disabled);

  return (
    <div
      {...(rest as HTMLProps<HTMLDivElement>)}
      ref={containerReference}
      className={`custom-select ${classes.select} ${additionalClasses.join(' ')} ${
        className ?? ''
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        type="button"
        name={name}
        disabled={disabled}
        aria-disabled={disabled}
        aria-invalid={error}
        aria-expanded={expanded}
        aria-haspopup="listbox"
        aria-labelledby={labeledBy}
        aria-describedby={describedBy}
      >
        <div className={classes['selected']}>
          {value.length === 0 && placeholder && (
            <span className={classes['placeholder']}>{placeholder}</span>
          )}
          {value.length > 0 && <span data-display>{display}</span>}
        </div>
        <div className={classes['status']}>
          {statusIcon()}
          <Icon className={classes['triangle-down']} icon={Icons.TriangleDown} />
        </div>
      </button>
      <div
        ref={optionListReference}
        className={`list-wrapper ${classes['list-wrapper']}`}
        style={{
          display: expanded ? 'block' : 'none',
          opacity: opacity,
          maxHeight: optionsListMaxHeight,
          ...listPosition,
        }}
      >
        {Array.isArray(children) && children.length > 10 && renderSearch()}
        <ul role="listbox" tabIndex={-1}>
          {renderOptions()}
        </ul>
      </div>
    </div>
  );
};
