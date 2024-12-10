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

import React, { Fragment, useRef, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import RepeaterDocumentation from "./useClickOutside.mdx";
import { Button, Modal, ModalActions, ModalContent, ModalHeader, useClickOutside } from "../../src";

const meta: Meta = {
  title: "Hooks/useClickOutside",
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

const ExampleTemplate: StoryFn = () => {
  const ExampleComponent = () => {
    const [button1ClickCount, setButton1ClickCount] = useState(0);
    const [button2ClickCount, setButton2ClickCount] = useState(0);
    const [outsideButton1ClickCount, setOutsideButton1ClickCount] = useState(0);

    const myElementRef = useRef<HTMLButtonElement>(null);

    useClickOutside(myElementRef, () => {
      setOutsideButton1ClickCount(outsideButton1ClickCount + 1);
    }, []);

    return (
      <Fragment>
        <button
          ref={myElementRef}
          data-testid="button1"
          onClick={() => setButton1ClickCount(button1ClickCount + 1)}
        >
          button1 clicked {button1ClickCount} times
        </button>
        <button data-testid="button2" onClick={() => setButton2ClickCount(button2ClickCount + 1)}>
          button2 clicked {button2ClickCount} times
        </button>
        outside of button1 clicked {outsideButton1ClickCount} times
      </Fragment>
    );
  };

  return <ExampleComponent></ExampleComponent>;
};

export const Example = ExampleTemplate.bind({});
Example.args = {};
