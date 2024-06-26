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

import React, { Fragment, useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal as ModalComponent, Props } from "../../../src/components/Notifications/Modal/Modal";
import { ModalActions } from "../../../src/components/Notifications/Modal/ModalActions/ModalActions";
import { ModalContent } from "../../../src/components/Notifications/Modal/ModalContent/ModalContent";
import { ModalHeader } from "../../../src/components/Notifications/Modal/ModalHeader/ModalHeader";
import { Button } from "../../../src/components/Button/Button";
import { Typography } from "../../../src/components/Typography/Typography";
import ModalDocumentation from "./Modal.mdx";
import { FormControl } from "../../../src/components/Form/FormControl/FormControl";
import { InputWrapper } from "../../../src/components/Form/Wrapper/InputWrapper/InputWrapper";

const meta: Meta = {
  title: "components/Utils/Modal",
  component: ModalComponent,
  subcomponents: {
    ModalHeader,
    ModalContent,
    ModalActions
  },
  parameters: {
    docs: {
      page: ModalDocumentation
    }
  },
  args: {
    id: "modal",
    ["header.title"]: "Modal title",
    ["content.disableAutoFocus"]: false,
    ["actions.className"]: undefined
  },
  argTypes: {
    open: {
      control: false
    },
    ["header.title"]: {
      control: "text"
    },
    ["content.disableAutoFocus"]: {
      control: "boolean"
    },
    ["actions.className"]: {
      control: "text"
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("initial value");
  const [value2, setValue2] = useState("initial value");
  const [value3, setValue3] = useState("initial value");
  const [value4, setValue4] = useState("initial value");

  /** When we're on the story page, we want the dialog to start in the "open" state. However, when we're on the "docs" page, we don't. */
  useEffect(() => {
    if (window.location.search.includes("story")) {
      setOpen(true);
    }
  }, []);

  const id = args.id;
  const onClose = () => setOpen(false);
  const onExampleClick = () => alert("Example button clicked");
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalComponent
        id={id}
        open={open}
        onClose={onClose}
        zIndex={args.zIndex}
        disableBackdrop={args.disableBackdrop}
        disableEscapeKeyDown={args.disableEscapeKeyDown}
      >
        <ModalHeader id={`${id}-label`} title={args["header.title"]} />
        <ModalContent id={`${id}-description`} disableAutoFocus={args["content.disableAutoFocus"]}>
          <form
            id="modalForm"
            onSubmit={e => {
              e.preventDefault();
              alert("form submitted");
              onClose();
            }}
          >
            <Typography variant="body" spacing={{ margin: 0, paddingBottom: 5 }}>
              This modal shows various options of form controls. It is not meant to be a realistic
              example of any of our forms.
              <br /> Clicking Save, Cancel or Close may bring you to a different screen than you
              came from.
            </Typography>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input1"
                type="text"
                value={value}
                error={false}
                label="Name"
                onChange={e => setValue(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input2"
                type="text"
                value={value2}
                error={false}
                label="Name"
                onChange={e => setValue2(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input3"
                type="text"
                value={value3}
                error={false}
                label="Name"
                onChange={e => setValue3(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputWrapper
                helperText="Helper text for this field. Description should be short and not repeat the label"
                name="input4"
                type="text"
                value={value4}
                error={false}
                label="Name"
                onChange={e => setValue4(e.target.value)}
              />
            </FormControl>
          </form>
        </ModalContent>
        <ModalActions className={args["actions.className"]} cancelAction={{ label: "Cancel" }}>
          <Button variant="outline" onClick={onExampleClick}>
            Example
          </Button>
          <Button form="modalForm" type="submit">
            Save
          </Button>
        </ModalActions>
      </ModalComponent>
    </Fragment>
  );
};

export const Modal = Template.bind({});
