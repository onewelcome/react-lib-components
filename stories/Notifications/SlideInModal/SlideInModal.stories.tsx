import React, { Fragment, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  SlideInModal as SlideInModalComponent,
  Props
} from "../../../src/Notifications/SlideInModal/SlideInModal";
import SlideInModalDocumentation from "./SlideInModal.mdx";
import { Button } from "../../../src/Button/Button";
import { ModalHeader } from "../../../src/Notifications/Modal/ModalHeader/ModalHeader";
import { ModalContent } from "../../../src/Notifications/Modal/ModalContent/ModalContent";
import { InputWrapper } from "../../../src/Form/Wrapper/InputWrapper/InputWrapper";

const meta: Meta = {
  title: "components/Utils/SlideInModal",
  component: SlideInModalComponent,
  parameters: {
    docs: {
      page: SlideInModalDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
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
