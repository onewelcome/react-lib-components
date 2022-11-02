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

import React, { useEffect, useState } from "react";
import { styled } from "@storybook/theming";
import { Button, Table, ColorControl } from "@storybook/components";
import { cssPropertyToObjectKey } from "../utils/helpers";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem"
});

const PropertyValueInput = styled.input`
  background-color: #fff;
  border-radius: 4px;
  border-color: #eee;
  border-style: solid;
  padding: 5px;
  font-family: monospace;
`;

const PropertyValueLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

interface PanelContentProps {
  properties: Record<string, string>;
  propertyChanged: (newPropertyObject: Record<string, string>) => void;
}

const shouldBeColorPicker = [
  "colorFocus",
  "colorPrimary",
  "colorSecondary",
  "colorTertiary",
  "buttonFillTextColor",
  "buttonFillHoverBackgroundColor",
  "buttonOutlineHoverTextColor",
  "inputBackgroundColor",
  "modalShadowColor",
  "modalBackgroundColor",
  "modalHeaderBackgroundColor",
  "snackbarTextColor",
  "snackbarInfoBackgroundColor",
  "snackbarSuccessBackgroundColor",
  "snackbarErrorBackgroundColor",
  "dataGridRowBackgroundColor",
  "dataGridRowHoverBackgroundColor",
  "tabActiveBorderColor",
  "tabsBackgroundColor",
  "tablistBorderColor",
  "tabTextColor",
  "default",
  "success",
  "error",
  "disabled",
  "greyedOut",
  "lightGreyBorder",
  "warning",
  "light",
  "grey"
];

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export const PanelContent: React.FC<PanelContentProps> = ({ properties, propertyChanged }) => {
  const [propertiesState, setPropertiesState] = useState<Record<string, string>>(undefined);
  const [rows, setRows] = useState([]);
  const debouncedPropertyState = useDebounce(propertiesState, 200);

  useEffect(() => {
    propertyChanged(propertiesState);
  }, [debouncedPropertyState]);

  useEffect(() => {
    if (properties && !propertiesState) {
      setPropertiesState(properties);
    }
  }, [properties]);

  useEffect(() => {
    renderContent();
  }, [propertiesState]);

  /**
   * It could be that CSS properties refer to other existing CSS properties. In that case we want to parse those colors so the color pickers show the correct color and not var(--color-primary) for example
   * colorFocus by default refers to var(--color-primary) so we parse that here.
   */
  const parseValue = (value: string): string => {
    if (/var\(--.+\)/.test(value)) {
      const { key } = cssPropertyToObjectKey(value);

      return parseValue(propertiesState[key]);
    }

    return value;
  };

  const handlePropertyChange = (propertyName: string, propertyValue: string) =>
    setPropertiesState((prevState: Record<string, string>) => ({
      ...prevState,
      [propertyName]: propertyValue
    }));

  const renderContent = () => {
    const rows: JSX.Element[] = [];

    if (propertiesState) {
      for (const property in propertiesState) {
        rows.push(
          <tr key={property}>
            <td>{property}</td>
            <td style={{ textAlign: "left" }}>
              <PropertyValueLabel>{property}</PropertyValueLabel>
              {shouldBeColorPicker.includes(property) ? (
                <ColorControl
                  name={property}
                  onChange={value => {
                    handlePropertyChange(property, value);
                  }}
                  value={parseValue(propertiesState[property])}
                />
              ) : (
                <PropertyValueInput
                  onChange={e => handlePropertyChange(property, e.target.value)}
                  type="text"
                  value={parseValue(propertiesState[property])}
                />
              )}
            </td>
          </tr>
        );
      }
    }

    setRows(rows);
  };

  return (
    <Table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Property name</th>
          <th>Property value</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
