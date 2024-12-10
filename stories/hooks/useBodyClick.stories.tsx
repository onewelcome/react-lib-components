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
import RepeaterDocumentation from "./useBodyClick.mdx";
import { Button, Modal, ModalActions, ModalContent, ModalHeader } from "../../src";
import { useBodyClick } from "../../src/hooks/useBodyClick";

const meta: Meta = {
  title: "Hooks/useBodyClick",
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

const ExampleModalTemplate: StoryFn = () => {
  const ExampleComponent = () => {
    const [open, setOpen] = useState(false);

    const myElementRef = useRef<HTMLDivElement>(null);

    useBodyClick(
      event =>
        (event.target! as any).tagName !== "BUTTON" && //without a condition similar to this the example does not work
        (!(event.target! as any).classList.contains("modalclass") || //also in the example there is ||, which does not work
          !(event.target! as any).closest(".modalclass")) &&
        open,
      () => setOpen(false),
      open
    );

    return (
      <Fragment>
        <button data-testid="button1" onClick={() => setOpen(true)}>
          open modal
        </button>
        <div
          ref={myElementRef}
          className="modalclass"
          style={{ display: open ? "block" : "none", backgroundColor: "#ff8" }}
        >
          fake modal dialog
        </div>
      </Fragment>
    );
  };

  return <ExampleComponent></ExampleComponent>;
};

export const ExampleModal = ExampleModalTemplate.bind({});
ExampleModal.args = {};
