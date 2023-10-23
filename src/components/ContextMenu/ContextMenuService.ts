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

import { Placement, Offset, vertical, horizontal } from "../../hooks/usePosition";
import { remToPx } from "../../util/helper";

interface UseArrowNavigation {
  selectedContextMenuItem: number;
  setSelectedContextMenuItem: React.Dispatch<React.SetStateAction<number>>;
  focusedContextMenuItem: number;
  setFocusedContextMenuItem: React.Dispatch<React.SetStateAction<number>>;
  showContextMenu: boolean;
  setShowContextMenu: React.Dispatch<React.SetStateAction<boolean>>;
  childrenCount: number;
  setShouldClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useArrowNavigation = ({
  selectedContextMenuItem,
  setSelectedContextMenuItem,
  focusedContextMenuItem,
  setFocusedContextMenuItem,
  showContextMenu,
  setShowContextMenu,
  childrenCount,
  setShouldClick
}: UseArrowNavigation) => {
  const onArrowNavigation = (event: React.KeyboardEvent) => {
    if (focusedContextMenuItem === -1 && selectedContextMenuItem !== -1) {
      setFocusedContextMenuItem(selectedContextMenuItem);
    }

    const codesToPrevenDefault = [
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "Enter",
      "Space",
      "Escape",
      "End",
      "Home"
    ];

    if (codesToPrevenDefault.includes(event.code)) {
      event.preventDefault();
    }

    switch (event.code) {
      case "ArrowDown":
        if (!showContextMenu) {
          setShowContextMenu(true);
          return;
        }
        setFocusedContextMenuItem(prevState => {
          return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
        });
        return;
      case "ArrowUp":
        setFocusedContextMenuItem(prevState => {
          return prevState - 1 < 0 ? childrenCount - 1 : prevState - 1;
        });
        return;
      case "Enter":
      case "Space":
        if (!showContextMenu) {
          setShowContextMenu(true);
          return;
        }

        setShouldClick(true);
        setSelectedContextMenuItem(focusedContextMenuItem);
        setShowContextMenu(false);
        return;
      case "Tab":
      case "Escape":
        setShowContextMenu(false);
        return;
      case "End":
        setFocusedContextMenuItem(childrenCount - 1);
        return;
      case "Home":
        setFocusedContextMenuItem(0);
        return;
    }
  };

  return { onArrowNavigation };
};

const defaultOffsetSpacing = remToPx(0.25);

export const useDefaultOffset = () => {
  const calculateDefaultOffset = (placement: Placement, transformOrigin: Placement): Offset => {
    const offset = { left: 0, right: 0, top: 0, bottom: 0 };
    if (placement.vertical === vertical.BOTTOM && transformOrigin.vertical === vertical.TOP) {
      offset.top = defaultOffsetSpacing;
    } else if (
      placement.vertical === vertical.TOP &&
      transformOrigin.vertical === vertical.BOTTOM
    ) {
      offset.top = -defaultOffsetSpacing;
    }

    if (placement.horizontal === horizontal.RIGHT) {
      offset.left = defaultOffsetSpacing;
    }
    return offset;
  };

  return { calculateDefaultOffset };
};
