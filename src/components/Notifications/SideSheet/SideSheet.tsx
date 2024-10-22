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

import React, {
  ForwardRefRenderFunction,
  TransitionEventHandler,
  useState,
  useRef,
  useCallback,
  useEffect
} from "react";
import { Props as ModalProps, Modal } from "../Modal/Modal";
import classes from "./SideSheet.module.scss";
import { IconButton } from "../../Button/IconButton";
import { Icon, Icons } from "../../Icon/Icon";

export interface Props extends ModalProps {
  handleButtonProps?: {
    onOpen: () => void;
    onClose: () => void;
    title?: string;
  };
}

const SideSheetComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, id, open, handleButtonProps, ...rest }: Props,
  ref
) => {
  const [classHideOnTransition, setClassHideOnTransition] = useState<string>("hide");
  const [controlledOpen, setControlledOpen] = useState(false);
  const containerRef = useRef(null);
  const handleTitle = handleButtonProps?.title ?? "Side sheet handle";

  const onTransitionEnd: TransitionEventHandler<HTMLDivElement> = useCallback(
    e => {
      if (e.target === containerRef.current) {
        setClassHideOnTransition(prev => (prev ? "" : "hide"));
        if (!open && controlledOpen) {
          setControlledOpen(false);
        }
      }
    },
    [open]
  );

  useEffect(() => {
    open && setControlledOpen(open);
  }, [open]);

  return (
    <>
      {handleButtonProps && !open && (
        <div className={classes["collapsed-sheet"]}>
          <div className={classes["handle"]}>
            <IconButton
              style={{ width: "1rem", height: "1rem" }}
              className={classes["handle-button"]}
              onClick={handleButtonProps.onOpen}
              title={handleTitle}
            >
              <Icon size="0.9rem" icon={Icons.SideSheetHandle} />
            </IconButton>
          </div>
        </div>
      )}
      <Modal
        {...rest}
        id={id}
        open={controlledOpen}
        className={`${classes["slide-in-modal"]} ${open ? classes["visible"] : ""} ${
          !open ? classes[classHideOnTransition] : ""
        }`}
        containerProps={{ className: classes["container"] }}
        hideBackdrop={true}
        onTransitionEnd={onTransitionEnd}
        ref={ref ?? containerRef}
      >
        {handleButtonProps && (
          <div className={classes["handle"]}>
            <IconButton
              style={{ width: "1rem", height: "1rem" }}
              title={handleTitle}
              onClick={handleButtonProps.onClose}
            >
              <Icon size="0.9rem" icon={Icons.SideSheetHandle} />
            </IconButton>
          </div>
        )}
        {children}
      </Modal>
    </>
  );
};

export const SideSheet = React.forwardRef(SideSheetComponent);
