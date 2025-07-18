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

import React from "react";
import { useInlineEditing } from "../../../context/InlineEditingContext";
import { useDetermineStatusIcon } from "../../../hooks/useDetermineStatusIcon";
import { getStatusIcon, getStatusState } from "../../../utils/statusUtils";
import { Tooltip } from "../../Tooltip/Tooltip";

export interface FormStatusIndicatorProps {
  isReadOnlyView?: boolean;
  children: React.ReactNode;
}

export const FormStatusIndicator: React.FC<FormStatusIndicatorProps> = ({
  isReadOnlyView,
  children
}) => {
  const { enabled, error, success, tooltipText } = useInlineEditing();
  const showTooltip = enabled && tooltipText;
  const statusIcon = useDetermineStatusIcon({ success, error });

  if (showTooltip && !isReadOnlyView) {
    return (
      <Tooltip
        label=""
        location="right"
        position="center"
        icon={getStatusIcon({ error, success }, true)}
        iconState={getStatusState({ error, success }, true)}
      >
        {tooltipText}
      </Tooltip>
    );
  }

  return <>{statusIcon || (!isReadOnlyView && children)}</>;
};
