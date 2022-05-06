import React, { ReactElement, useEffect, useState } from 'react';
import { Spacing, useSpacing } from '../hooks/useSpacing';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Icon, Icons } from '../Icon/Icon';
import { HTMLProps } from '../interfaces';
import { generateID } from '../util/helper';
import classes from './Repeater.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactElement;
  addButtonLabel: string;
  spacing?: Spacing;
  onChange?: (...parameters: unknown[]) => void;
  onChildChange?: (allClonedChildren: ReactElement[]) => void;
}

export interface RepeatedComponentProps {
  onChange?: (...parameters: unknown[]) => {};
}

export const Repeater = ({
  children,
  addButtonLabel,
  spacing,
  onChange,
  onChildChange,
  ...rest
}: Props) => {
  const [repeatedChildren, setRepeatedChildren] = useState<ReactElement[]>([generateClonedChild()]);
  const spacingForRepeatedItems = useSpacing(spacing);

  function generateClonedChild() {
    return (
      <div
        className={classes['repeated-child']}
        key={generateID(20)}
        style={{ ...spacingForRepeatedItems }}
      >
        {React.cloneElement(children, {
          onChange: (...parameters: unknown[]) => onChange && onChange(parameters),
        })}
        <IconButton title="Remove repeated element">
          <Icon icon={Icons.Trash} />
        </IconButton>
      </div>
    );
  }

  const cloneChildren = () => {
    const newChild = generateClonedChild();

    setRepeatedChildren((prevState) => [...prevState, newChild]);
  };

  useEffect(() => {
    onChildChange && onChildChange(repeatedChildren);
  }, [repeatedChildren]);

  return (
    <div {...rest}>
      {repeatedChildren}
      <Button
        onClick={cloneChildren}
        variant="outline"
        startIcon={<Icon icon={Icons.Plus} />}
        className={classes['repeater-button']}
      >
        {addButtonLabel}
      </Button>
    </div>
  );
};
