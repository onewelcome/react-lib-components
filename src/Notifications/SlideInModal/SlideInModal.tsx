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

import React, { ForwardRefRenderFunction, TransitionEventHandler, useState, useRef } from "react";
import { Props as ModalProps, Modal } from "../Modal/Modal";
import classes from "./SlideInModal.module.scss";

const SlideInModalComponent: ForwardRefRenderFunction<HTMLDivElement, ModalProps> = (
  { children, id, open, ...rest }: ModalProps,
  ref
) => {
  const [classHideOnTransition, setClassHideOnTransition] = useState<string>("hidden");
  const containerRef = useRef(null);

  const onTransitionEnd: TransitionEventHandler<HTMLDivElement> = e => {
    if (e.target === containerRef.current) {
      setClassHideOnTransition(prev => (prev ? "" : "hidden"));
    }
  };

  return (
    <Modal
      {...rest}
      id={id}
      open={open}
      className={`${classes["slide-in-modal"]} ${open ? classes["visible"] : ""} ${
        !open ? classes[classHideOnTransition] : ""
      }`}
      containerProps={{ className: classes["container"] }}
      backdropProps={{ className: classes["backdrop-slide"] }}
      forceContainerOpen
      onTransitionEnd={onTransitionEnd}
      ref={ref || containerRef}
    >
      {children}
    </Modal>
  );
};

export { Props } from "../Modal/Modal";

export const SlideInModal = React.forwardRef(SlideInModalComponent);
