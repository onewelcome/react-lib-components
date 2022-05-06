import React, { ComponentState, Key, ReactElement, useEffect, useState } from 'react';
import { Spacing, useSpacing } from '../hooks/useSpacing';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Icon, Icons } from '../Icon/Icon';
import { HTMLProps } from '../interfaces';
import classes from './Repeater.module.scss';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  addButtonLabel: string;
  spacing?: Spacing;
  name: string;
  repeat: (props: RepeatedComponentProps) => JSX.Element;
  onChange: (array: ReturnedInformation[]) => void;
  onChildChange?: (allClonedChildren: ReactElement[]) => void;
}

export interface RepeatedComponentProps {
  onChange?: (state: { [key: string]: unknown }) => void;
}

export interface ReturnedInformation {
  key: string;
  state: ComponentState;
}

export const Repeater = ({ addButtonLabel, spacing, name, repeat, onChange, ...rest }: Props) => {
  const [repeatingComponents, setRepeatingComponents] = useState<
    ReactElement<RepeatedComponentProps>[]
  >([]);
  const [returnedInformation, setReturnedInformation] = useState<ReturnedInformation[]>([]);
  const RepeatComponent = repeat;
  const spacingForRepeatedItems = useSpacing(spacing);

  useEffect(() => {
    renderRepeatingComponent();
  }, []);

  useEffect(() => {
    onChange(returnedInformation);
  }, [returnedInformation]);

  const repeatOnChangeHandler = (state: { [key: string]: unknown }, key: string) => {
    const newInformationObject = {
      key: key,
      state: state,
    };

    setReturnedInformation((prevState) => {
      const filteredPrevState = prevState.filter(
        (repeatedComponent) => repeatedComponent.key !== key
      );

      return [...filteredPrevState, newInformationObject];
    });
  };

  const deleteComponent = (key: Key) => {
    const filteredRepeatingComponents = repeatingComponents.filter(
      (component) => component.key !== key
    );

    setRepeatingComponents(filteredRepeatingComponents);

    const filteredReturnedInformation = returnedInformation.filter(
      (information) => information.key !== key
    );

    setReturnedInformation(filteredReturnedInformation);
  };

  const renderRepeatingComponent = () => {
    const key = `${name}-${repeatingComponents.length}`;

    setRepeatingComponents((prevState) => {
      return [
        ...prevState,
        <RepeatComponent onChange={(state) => repeatOnChangeHandler(state, key)} key={key} />,
      ];
    });

    setReturnedInformation((prevState) => {
      const informationObject = {
        key: key,
        state: {},
      };

      return [...prevState, informationObject];
    });
  };

  return (
    <div {...rest}>
      {repeatingComponents.map((component, index) => (
        <div
          className={classes['repeated-child']}
          style={{ ...spacingForRepeatedItems }}
          key={component.key}
        >
          {component}
          {index > 0 && (
            <IconButton
              title={`Click here to delete ${component.key}`}
              onClick={() => deleteComponent(component.key!)}
            >
              <Icon icon={Icons.Trash} />
            </IconButton>
          )}
        </div>
      ))}
      <Button
        onClick={renderRepeatingComponent}
        variant="outline"
        startIcon={<Icon icon={Icons.Plus} />}
        className={classes['repeater-button']}
      >
        {addButtonLabel}
      </Button>
    </div>
  );
};
