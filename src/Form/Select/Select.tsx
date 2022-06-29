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
import { Input, Props as InputProps } from '../Input/Input';
import { Icon, Icons } from '../../Icon/Icon';
import { FormElement } from '../form.interfaces';
import { useBodyClick } from '../../hooks/useBodyClick';
import readyclasses from '../../readyclasses.module.scss';
import { filterProps } from '../../util/helper';

type PartialInputProps = Partial<InputProps>;

export interface Props extends ComponentPropsWithRef<'select'>, FormElement {
  children: ReactElement[];
  name?: string;
  labeledBy?: string;
  describedBy?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  searchInputProps?: PartialInputProps;
  selectButtonProps?: ComponentPropsWithRef<'button'>;
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

/** Amount of items to be rendered before a search input is rendered */
const renderSearchCondition = 10;

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
      searchInputProps,
      selectButtonProps,
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
    const [isSearching, setIsSearching] = useState(false);
    const [focusedSelectItem, setFocusedSelectItem] = useState(-1);
    const [shouldClick, setShouldClick] =
      useState(
        false
      ); /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
    const [childrenCount] = useState(React.Children.count(children));

    const nativeSelect = (ref as React.RefObject<HTMLSelectElement>) || createRef();
    const searchInputRef = useRef<HTMLInputElement>(null);

    const onArrowNavigation = (event: React.KeyboardEvent) => {
      const codesToPreventDefault = [
        'ArrowDown',
        'ArrowUp',
        'ArrowLeft',
        'ArrowRight',
        'Space',
        'Escape',
        'End',
        'Home',
      ];

      const codesToPreventDefaultWhenSearching = ['ArrowDown', 'ArrowUp', 'Enter', 'Escape'];

      /** If the select is expanded, we also want to control the Tab key */
      if (expanded) {
        codesToPreventDefault.push('Tab');
      }

      /** We will handle the way certain key strokes affect the Select, unless we're searching */
      if (codesToPreventDefault.includes(event.code) && !isSearching) {
        event.preventDefault();
      }

      if (isSearching && codesToPreventDefaultWhenSearching.includes(event.code)) {
        event.preventDefault();
      }

      if (isSearching) {
        switch (event.code) {
          case 'ArrowDown':
          case 'Enter':
            setIsSearching(false);
            setFocusedSelectItem(0);
            return;
          case 'ArrowUp':
            setIsSearching(false);
            setFocusedSelectItem(childrenCount - 1);
            return;
          case 'Escape':
          case 'Tab':
            setIsSearching(false);
            setExpanded(false);
            containerReference.current &&
              containerReference.current.querySelector('button')!.focus();
        }
      } else {
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
          case 'Space':
            if (!expanded) {
              setExpanded(true);
              return;
            }

            setShouldClick(true);
            setExpanded(false);
            containerReference.current &&
              containerReference.current.querySelector('button')!.focus();
            return;
          case 'Tab':
            if (childrenCount >= renderSearchCondition && expanded) {
              setIsSearching(true);
              searchInputRef.current && searchInputRef.current.focus();
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

      setExpanded(false);

      containerReference.current && containerReference.current.querySelector('button')!.focus();
    };

    /**
     * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
     * The `children` prop can be either a single object (1 child) or an array of multiple children.
     */
    const renderOptions = () => {
      if (isSearching || filter !== '') {
        const filteredChildren = React.Children.toArray(children).filter(
          (child) =>
            (child as ReactElement).props.children.toLowerCase().match(filter.toLowerCase()) !==
            null
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
            shouldClick: shouldClick,
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
        className={classes['select-search']}
        wrapperProps={{
          className: `${classes['select-search-wrapper']} ${searchInputProps?.wrapperProps?.className}`,
        }}
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
              e.preventDefault();
              e.stopPropagation();
              onClear(e);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.code === 'Enter' || e.code === 'Space') {
                e.preventDefault();
                e.stopPropagation();
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
            {...selectButtonProps}
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
            {Array.isArray(children) && children.length > renderSearchCondition && renderSearch()}
            <ul role="listbox">{renderOptions()}</ul>
          </div>
        </div>
      </Fragment>
    );
  }
);
