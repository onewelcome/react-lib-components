/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import { InputWrapper } from "../../src/components/Form/Wrapper/InputWrapper/InputWrapper";
import { useRepeater } from "../../src/hooks/useRepeater";
import { Button } from "../../src/components/Button/Button";
import { IconButton } from "../../src/components/Button/IconButton";
import { Icon, Icons } from "../../src/components/Icon/Icon";
import RepeaterDocumentation from "./useRepeater.mdx";
import { generateID } from "../../src/util/helper";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta = {
  title: "Hooks/useRepeater",
  parameters: {
    docs: {
      page: RepeaterDocumentation
    },
    controls: {
      hideNoControlsWarning: true
    }
  }
};

export default meta;

export interface RepeatedComponentProps {
  onChange?: (state: { [key: string]: unknown }) => void;
  identifier?: string;
}

const ComponentToRepeat = ({ onChange, identifier }: RepeatedComponentProps) => {
  const [inputState, setInputState] = useState({
    errorMessage: "random error",
    error: false,
    value: "",
    identifier: identifier
  });

  useEffect(() => {
    onChange && onChange(inputState);
  }, [inputState]);

  return (
    <InputWrapper
      helperText="Enter a tag"
      name={`input_${inputState.identifier}`}
      errorMessage={inputState.errorMessage}
      type="text"
      error={inputState.error}
      value={inputState.value}
      label="Enter tag name"
      onChange={event => {
        setInputState(prevState => ({ ...prevState, value: event.target.value }));
      }}
    />
  );
};

const Template: Story = () => {
  const [tags] = useState([]);

  const onChangeHandler = state => {
    console.warn(state);
    console.warn("executing on change handler");
  };

  const { repeatedComponents, repeat, remove } = useRepeater<RepeatedComponentProps>({
    componentToRepeat: <ComponentToRepeat onChange={onChangeHandler} />
  });

  useEffect(() => {}, [repeatedComponents]);

  useEffect(() => {
    console.warn(tags);
  }, [tags]);

  return (
    <div>
      {repeatedComponents.map((component, index) => (
        <div style={{ display: "flex", width: "100%", marginBottom: "16px" }} key={component.key}>
          <div style={{ flexGrow: "1" }}>
            {React.cloneElement(component, { identifier: generateID() })}
          </div>
          {index !== 0 && (
            <div style={{ marginTop: "25px", marginLeft: "8px" }}>
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

Repeater.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const addTagButton = await canvas.findByText("Add tag!");

  await userEvent.click(addTagButton);
  await userEvent.click(addTagButton);

  const input = await canvas.findAllByLabelText("Enter tag name");

  expect(input).toHaveLength(3);

  await userEvent.tab();
};

Repeater.args = {};
