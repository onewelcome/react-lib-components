import React, { ReactElement, useEffect, useState } from 'react';
import { Spacing, useSpacing } from '../hooks/useSpacing';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Icon, Icons } from '../Icon/Icon';
import { HTMLProps } from '../interfaces';
import { generateID } from '../util/helper';
import classes from './Repeater.module.scss';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  children: ReactElement;
  addButtonLabel: string;
  spacing?: Spacing;
  onChange?: (identifier: string, state?: { [key: string]: unknown }) => void;
  onChildChange?: (allClonedChildren: ReactElement[]) => void;
}

export interface RepeatedComponentProps {
  onChange?: (state?: { [key: string]: unknown }) => {};
}

export const Repeater = ({
  children,
  addButtonLabel,
  spacing,
  onChange,
  onChildChange,
  ...rest
}: Props) => {
  const generateClonedChild = () => {
    const identifier = generateID(20);

    return React.cloneElement(children, {
      onChange: (state: { [key: string]: unknown }) => {
        onChange && onChange(identifier, state);
      },
      key: identifier,
    });
  };

  const [repeatedChildren, setRepeatedChildren] = useState<ReactElement[]>([generateClonedChild()]);
  const spacingForRepeatedItems = useSpacing(spacing);

  const deleteRepeatedChild = (identifier: React.Key) => {
    const updatedChildren = repeatedChildren.filter((child) => child.key !== identifier);

    setRepeatedChildren(updatedChildren);
  };

  const cloneChildren = () => {
    const newChild = generateClonedChild();
    const newRepeatedChildren = [...repeatedChildren, newChild];

    setRepeatedChildren(newRepeatedChildren);
  };

  useEffect(() => {
    onChildChange && onChildChange(repeatedChildren);
  }, [repeatedChildren]);

  return (
    <div {...rest}>
      {repeatedChildren.map((child, index) => (
        <div
          className={classes['repeated-child']}
          style={{ ...spacingForRepeatedItems }}
          key={child.key}
        >
          {child}
          {index !== 0 && (
            <IconButton
              onClick={() => deleteRepeatedChild(child.key!)}
              title="Remove repeated element"
            >
              <Icon icon={Icons.Trash} />
            </IconButton>
          )}
        </div>
      ))}
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
