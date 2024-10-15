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
  SideSheet as SideSheetComponent,
  Props
} from "../../../src/components/Notifications/SideSheet/SideSheet";
import SideSheetDocumentation from "./SideSheet.mdx";
import { Button } from "../../../src/components/Button/Button";
import { SideSheetHeader } from "../../../src/components/Notifications/SideSheet/SideSheetHeader/SideSheetHeader";
import { SideSheetContent } from "../../../src/components/Notifications/SideSheet/SideSheetContent/SideSheetContent";
import { InputWrapper } from "../../../src/components/Form/Wrapper/InputWrapper/InputWrapper";
import { within, userEvent, waitFor, expect } from "@storybook/test";
import { conditionalPlay } from "../../../.storybook/conditionalPlay";
import { SideSheetActions } from "../../../src/components/Notifications/SideSheet/SideSheetActions/SideSheetActions";

const meta: Meta = {
  title: "components/Utils/SideSheet",
  component: SideSheetComponent,
  parameters: {
    docs: {
      page: SideSheetDocumentation
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const onToggle = () => setOpen(!open);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Fragment>
      <Button onClick={onToggle}>{!open ? "Open" : "Close"} modal</Button>
      <SideSheetComponent
        {...args}
        id="slide-in-modal"
        open={open}
        onClose={onClose}
        handleProps={{ onOpen, onClose }}
      >
        <SideSheetHeader
          id={"modal-header"}
          title={"Modal header"}
          description={"Modal description"}
          onClose={onClose}
        />
        <SideSheetContent
          id={`modal-description`}
          disableAutoFocus={args["content.disableAutoFocus"]}
        >
          <InputWrapper
            type="text"
            label="Name"
            name="Name"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </SideSheetContent>
        <SideSheetActions className={args["actions.className"]} cancelAction={{ label: "Cancel" }}>
          <Button variant="outline">Example</Button>
          <Button form="modalForm" type="submit">
            Save
          </Button>
        </SideSheetActions>
      </SideSheetComponent>
    </Fragment>
  );
};

export const SideSheet = Template.bind({});

SideSheet.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.queryByText("Open modal")).not.toBeNull());

  await userEvent.click(canvas.getByText("Open modal"));

  expect(canvas.getByText("Modal header")).not.toBeNull();
  expect(canvas.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  expect(canvas.getByRole("dialog")).toHaveAttribute("aria-hidden", "false");
});
