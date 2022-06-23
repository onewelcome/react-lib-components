import classes from './Select.module.scss';

import React, {
  ComponentPropsWithRef,
  createRef,
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Input } from '../Input/Input';
import { Icon, Icons } from '../../Icon/Icon';
import { FormElement } from '../form.interfaces';
import { useBodyClick } from '../../hooks/useBodyClick';
import readyclasses from '../../readyclasses.module.scss';
import { filterProps } from '../../util/helper';

export interface Props extends ComponentPropsWithRef<'select'>, FormElement {
  children: ReactElement[];
  name?: string;
  labeledBy?: string;
  describedBy?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
  value: string;
  clearLabel?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, child?: ReactElement) => void;
  onClear?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}

type Position = {
  top: 0 | 'initial';
  bottom: 0 | 'initial';
};

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  (
    {
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
      clearLabel = 'Clear selection',
      onChange,
      onClear,
      ...rest
    }: Props,
    ref
  ) => {
    const [expanded, setExpanded] = useState(false);
    const [opacity, setOpacity] = useState(0); // We set opacity because other wise if we calculate the max height you see the list full height for a split second and then it shortens.
    const [filter, setFilter] = useState('');
    const [display, setDisplay] = useState('');
    const [listPosition, setListPosition] = useState<Partial<Position>>({});
    const [optionsListMaxHeight, setOptionsListMaxHeight] = useState('none');
    const containerReference = useRef<HTMLDivElement>(null);
    const optionListReference = useRef<HTMLDivElement>(null);

    const [selectedSelectItem, setSelectedSelectItem] = useState(-1);
    const [focusedSelectItem, setFocusedSelectItem] = useState(-1);
    const [shouldClick, setShouldClick] =
      useState(
        false
      ); /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
    const [shouldOpen, setShouldOpen] = useState(true);
    const [childrenCount] = useState(React.Children.count(children));

    const nativeSelect = (ref as React.RefObject<HTMLSelectElement>) || createRef();

    const onArrowNavigation = (event: React.KeyboardEvent) => {
      /** If we hit enter, or click, on the onClear button, we don't want the select to open. */
      if ((event.target as HTMLElement).nodeName === 'DIV') {
        return;
      }

      const codesToPrevenDefault = [
        'ArrowDown',
        'ArrowUp',
        'ArrowLeft',
        'ArrowRight',
        'Enter',
        'Space',
        'Escape',
        'End',
        'Home',
      ];

      if (focusedSelectItem === -1 && selectedSelectItem !== -1) {
        setFocusedSelectItem(selectedSelectItem);
      }
      if (codesToPrevenDefault.includes(event.code)) {
        event.preventDefault();
      }
      if (!shouldOpen) {
        setShouldOpen(true);
        return;
      }
      switch (event.code) {
        case 'ArrowDown':
          if (!expanded) {
            setExpanded(true);
            return;
          }
          setFocusedSelectItem((prevState) => {
            return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
          });
          return;
        case 'ArrowUp':
          setFocusedSelectItem((prevState) => {
            return prevState - 1 < 0 ? childrenCount - 1 : prevState - 1;
          });
          return;
        case 'Enter':
        case 'Space':
          if (!expanded) {
            setExpanded(true);
            return;
          }

          setShouldClick(true);
          setSelectedSelectItem(focusedSelectItem);
          setExpanded(false);
          containerReference.current && containerReference.current.querySelector('button')!.focus();
          return;
        case 'Tab':
          if (childrenCount >= 10) {
            return;
          }
          setExpanded(false);

          return;
        case 'Escape':
          if (expanded) {
            setExpanded(false);
            containerReference.current &&
              containerReference.current.querySelector('button')!.focus();
          }
          return;
        case 'End':
          setFocusedSelectItem(childrenCount - 1);
          return;
        case 'Home':
          setFocusedSelectItem(0);
          return;
      }
    };

    const syncDisplayValue = (val: string) => {
      React.Children.forEach(children, (child) => {
        if (child.props.value === val) {
          setDisplay(child.props.children);
        }
      });
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

    const onOptionChangeHandler = (optionRef: React.RefObject<HTMLLIElement>) => {
      if (nativeSelect.current && optionRef.current) {
        nativeSelect.current.value = optionRef.current.getAttribute('data-value')!;
        nativeSelect.current.dispatchEvent(new Event('change', { bubbles: true }));
      }
      setShouldOpen(false);
      setExpanded(false);

      containerReference.current && containerReference.current.querySelector('button')!.focus();
    };

    /**
     * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
     * The `children` prop can be either a single object (1 child) or an array of multiple children.
     */
    const renderOptions = () =>
      React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          onFocusChange: (childIndex: number) => setFocusedSelectItem(childIndex),
          onOptionSelect: (optionRef: React.RefObject<HTMLLIElement>) => {
            onOptionChangeHandler(optionRef);
            setShouldClick(false);
          },
          isSelected: child.props.value === value,
          filter: filter,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick,
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

      if (value?.length !== 0 && onClear) {
        return (
          <div
            aria-hidden={false}
            role="button"
            tabIndex={0}
            data-clear
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              setShouldOpen(false);
              onClear(e);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.code === 'Enter' || e.code === 'Space') {
                e.preventDefault();
                e.stopPropagation();
                setShouldOpen(false);
                onClear(e);
                containerReference.current &&
                  containerReference.current.querySelector('button')!.focus();
              }
            }}
          >
            <span className={readyclasses['sr-only']}>{clearLabel}</span>
            <Icon tag="span" icon={Icons.TimesThin} />
          </div>
        );
      }
      return null;
    };

    const nativeOnChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange && onChange(event);
    };

    useEffect(() => {
      syncDisplayValue(value);
    }, [value]);

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
          className={readyclasses['sr-only']}
        >
          <option value=""></option>
          {React.Children.map(children, (child) => (
            <option value={child.props.value}></option>
          ))}
        </select>
        <div
          {...filterProps(rest, /^data-/)}
          ref={containerReference}
          onKeyDown={onArrowNavigation}
          className={`custom-select ${classes.select} ${additionalClasses.join(' ')} ${
            className ?? ''
          }`}
        >
          <button
            onClick={() => {
              setExpanded(!expanded);
            }}
            type="button"
            name={name}
            disabled={disabled}
            aria-disabled={disabled}
            aria-invalid={error}
            aria-expanded={expanded}
            aria-haspopup="listbox"
            aria-labelledby={labeledBy}
            aria-describedby={describedBy}
            className={classes['custom-select']}
          >
            <div data-display className={classes['selected']}>
              {!value && placeholder && (
                <span className={classes['placeholder']}>{placeholder}</span>
              )}
              {value?.length > 0 && <span data-display-inner>{display}</span>}
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
  }
);
