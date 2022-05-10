import classes from './Select.module.scss';

import React, { Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { Input } from '../Input/Input';
import { Icon, Icons } from '../../Icon/Icon';
import { FormElement } from '../form.interfaces';
import { useBodyClick } from '../../hooks/useBodyClick';
import readyclasses from '../../readyclasses.module.scss';
import { filterProps } from '../../util/helper';

export interface Props extends FormElement<HTMLSelectElement> {
  children: ReactElement[];
  name: string;
  labeledBy?: string;
  describedBy?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
  value: string;
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
  value,
  onChange,
  onClear,
  ...rest
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [selectValue, setSelectValue] = useState(value);
  const [opacity, setOpacity] = useState(0); // We set opacity because other wise if we calculate the max height you see the list full height for a split second and then it shortens.
  const [filter, setFilter] = useState('');
  const [display, setDisplay] = useState('');
  const [listPosition, setListPosition] = useState<Partial<Position>>({});
  const [optionsListMaxHeight, setOptionsListMaxHeight] = useState('none');
  const containerReference = useRef<HTMLDivElement>(null);
  const optionListReference = useRef<HTMLDivElement>(null);

  const nativeSelect = useRef<HTMLSelectElement>(null);

  const syncDisplayValue = (value: string) => {
    for (let child of children) {
      if (child.props.value === value) {
        setDisplay(child.props.children);
      }
    }
  };

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

  const onOptionChangeHandler = (event: React.ChangeEvent) => {
    setSelectValue(event.currentTarget.getAttribute('data-value')!);
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
        onOptionSelect: onOptionChangeHandler,
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

    if (selectValue && selectValue.length !== 0 && onClear) {
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

  const nativeOnChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(event);
  };

  useEffect(() => {
    setSelectValue(value);
    syncDisplayValue(value);
  }, []);

  useEffect(() => {
    syncDisplayValue(value);
    setSelectValue(value);
  }, [value]);

  useEffect(() => {
    if (nativeSelect.current) {
      nativeSelect.current.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, [selectValue]);

  useEffect(() => {
    rePositionList();
  }, [expanded]);

  useBodyClick(
    (event: MouseEvent) => !(event.target as Element).closest('.custom-select') && expanded,
    () => {
      setExpanded(!expanded);
      setListPosition({ top: 0, bottom: 'initial' });
      setOpacity(0);
    },
    expanded
  );

  const additionalClasses = [];
  expanded && additionalClasses.push(classes.expanded);
  error && additionalClasses.push(classes.error);
  disabled && additionalClasses.push(classes.disabled);
  className && additionalClasses.push(className);

  return (
    <Fragment>
      <select
        {...filterProps(rest, false, /^data-/)}
        ref={nativeSelect}
        key={selectValue}
        value={selectValue}
        name={name}
        onChange={nativeOnChangeHandler}
        className={readyclasses['sr-only']}
      >
        <option value=""></option>
        {React.Children.map(children, (child) => (
          <option value={child.props.value}></option>
        ))}
      </select>
      <div
        {...filterProps(rest, true, /^data-/)}
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
          <div data-display className={classes['selected']}>
            {!selectValue && placeholder && (
              <span className={classes['placeholder']}>{placeholder}</span>
            )}
            {selectValue && selectValue.length > 0 && <span>{display}</span>}
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
    </Fragment>
  );
};
