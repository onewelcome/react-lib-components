import { Option } from './Option';
import classes from './Select.module.scss';

import React, {
  Fragment,
  HTMLAttributes,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Input } from '../Input/Input';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  disabled?: boolean;
  name?: string;
  id?: string;
  labeledBy?: string;
  placeholder?: string;
  error?: boolean;
  onSelectChange?: (option: { label: string; value: string }) => void;
}

export const Select = ({
  children,
  labeledBy,
  placeholder = 'Choose an option',
  error = false,
  onSelectChange,
  ...rest
}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  }>({ label: '', value: '' });
  const [filter, setFilter] = useState<string>('');

  const onOptionChangeHandler = (option: { label: string; value: string }) => {
    setSelectedOption({ label: option.label, value: option.value });
    setExpanded(false);
  };

  const handleSelectCloseOnBodyClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (!(event.target as Element).closest('.custom-select') && expanded) {
        setExpanded(false);
      }
    },
    [expanded]
  );

  useEffect(() => {
    onSelectChange && onSelectChange(selectedOption);
  }, [selectedOption]);

  /**
   * We need to make sure that the only children nested in this component are from the Option component, because we add props to the children.Î
   */
  useEffect(() => {
    for (let child of children) {
      if (child.type !== Option) {
        throw new Error(
          'Child element of <Select /> component needs to be <Option /> component'
        );
      }
    }
  }, []);

  /**
   * Add body click listener to close select and remove it in the cleanup function whenever expanded state changes.
   */
  useEffect(() => {
    window.addEventListener('click', handleSelectCloseOnBodyClick);

    return () => {
      window.removeEventListener('click', handleSelectCloseOnBodyClick);
    };
  }, [expanded]);

  /**
   * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    return children?.map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          onOptionSelect: onOptionChangeHandler,
          selected: selectedOption,
          filter: filter,
        })}
      </Fragment>
    ));
  };

  const renderSearch = () => {
    return (
      <Input
        onChange={filterResults}
        className={classes['select-search']}
        type="search"
        name="search-option"
        placeholder="Search item"
      />
    );
  };

  const filterResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <div
      {...rest}
      className={`${classes.select} ${expanded ? classes.expanded : ''} ${
        error ? classes.error : ''
      } custom-select`}
    >
      <button
        onClick={setExpanded.bind(null, !expanded)}
        aria-expanded={expanded}
        aria-haspopup="listbox"
        aria-labelledby={labeledBy}
      >
        <span className={classes.selected}>
          {selectedOption.value.length === 0 && (
            <span className={classes.placeholder}>{placeholder}</span>
          )}
          {selectedOption.label}
        </span>
      </button>
      {expanded && (
        <ul tabIndex={-1} role="listbox">
          {children.length > 10 && renderSearch()}
          {renderOptions()}
        </ul>
      )}
    </div>
  );
};
