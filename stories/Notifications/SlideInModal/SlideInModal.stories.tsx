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

import React, { Fragment, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  SlideInModal as SlideInModalComponent,
  Props
} from "../../../src/components/Notifications/SlideInModal/SlideInModal";
import SlideInModalDocumentation from "./SlideInModal.mdx";
import { Button } from "../../../src/components/Button/Button";
import { ModalHeader } from "../../../src/components/Notifications/Modal/ModalHeader/ModalHeader";
import { ModalContent } from "../../../src/components/Notifications/Modal/ModalContent/ModalContent";
import { InputWrapper } from "../../../src/components/Form/Wrapper/InputWrapper/InputWrapper";
import { within, userEvent, waitFor, expect } from "@storybook/test";
import { conditionalPlay } from "../../../.storybook/conditionalPlay";

const meta: Meta = {
  title: "components/Utils/SlideInModal (deprecated)",
  component: SlideInModalComponent,
  parameters: {
    docs: {
      page: SlideInModalDocumentation
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Fragment>
      <Button onClick={onOpen}>Open modal</Button>
      <SlideInModalComponent {...args} id="slide-in-modal" open={open} onClose={onClose}>
        <ModalHeader id={"modal-header"} title={"Modal header"} onClose={onClose} />
        <ModalContent id={`modal-description`} disableAutoFocus={args["content.disableAutoFocus"]}>
          <InputWrapper
            type="text"
            label="Name"
            name="Name"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </ModalContent>
      </SlideInModalComponent>
    </Fragment>
  );
};

export const SlideInModal = Template.bind({});

SlideInModal.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.queryByText("Open modal")).not.toBeNull());

  await userEvent.click(canvas.getByText("Open modal"));

  expect(canvas.getByText("Modal header")).not.toBeNull();
  expect(canvas.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  expect(canvas.getByRole("dialog")).toHaveAttribute("aria-hidden", "false");
});
