import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { InputWrapper } from '../../src/Form/Wrapper/InputWrapper/InputWrapper';
import { useRepeater } from '../../src/hooks/useRepeater';
import { Button } from '../../src/Button/Button';
import { IconButton } from '../../src/Button/IconButton';
import { Icon, Icons } from '../../src/Icon/Icon';
import RepeaterDocumentation from './useRepeater.mdx';

const meta: Meta = {
  title: 'hooks/useRepeater',
  parameters: {
    docs: {
      page: RepeaterDocumentation,
    },
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

export default meta;

export interface RepeatedComponentProps {
  onChange?: (state: { [key: string]: unknown }) => void;
  identifier?: string;
}

const ComponentToRepeat = ({ onChange, identifier }: RepeatedComponentProps) => {
  const [inputState, setInputState] = useState({
    errorMessage: 'random error',
    error: false,
    value: '',
    identifier: identifier,
  });

  useEffect(() => {
    onChange(inputState);
  }, [inputState]);

  return (
    <InputWrapper
      helperText="Helper text for this field. Description should be short and not repeat the label"
      name={`input_${identifier}`}
      errorMessage={inputState.errorMessage}
      type="text"
      error={inputState.error}
      value={inputState.value}
      label="Label for this inputfield"
      onChange={(event) => {
        setInputState((prevState) => ({ ...prevState, value: event.target.value }));
      }}
    />
  );
};

const Template: Story = () => {
  const [tags, setTags] = useState([]);

  const onChangeHandler = (state) => {
    console.log(state);
    console.log('executing on change handler');
  };

  const { repeatedComponents, repeat, remove } = useRepeater<RepeatedComponentProps>({
    componentToRepeat: <ComponentToRepeat onChange={onChangeHandler} />,
  });

  useEffect(() => {}, [repeatedComponents]);

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <div>
      {repeatedComponents.map((component, index) => (
        <div style={{ display: 'flex', width: '100%', marginBottom: '16px' }} key={component.key}>
          <div style={{ flexGrow: '1' }}>
            {React.cloneElement(component, { identifier: `input_${index}` })}
          </div>
          {index !== 0 && (
            <div style={{ marginTop: '10px', marginLeft: '8px' }}>
              <IconButton title="Remove repeated component" onClick={() => remove(component)}>
                <Icon icon={Icons.Trash} />
              </IconButton>
            </div>
          )}
        </div>
      ))}
      <Button onClick={repeat}>Add tag!</Button>
    </div>
  );
};

export const Repeater = Template.bind({});

Repeater.args = {};
