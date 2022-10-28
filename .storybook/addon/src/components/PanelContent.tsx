import React, { useEffect, useState } from "react";
import { styled } from "@storybook/theming";
import { Button, Table, ColorControl } from "@storybook/components";

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
  "buttonFillBackgroundColor",
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

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC<PanelContentProps> = ({ properties, propertyChanged }) => {
  const [propertiesState, setPropertiesState] = useState<Record<string, string>>(undefined);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (properties && !propertiesState) {
      setPropertiesState(properties);
    }
  }, [properties]);

  useEffect(() => {
    renderContent();
  }, [propertiesState]);

  const handlePropertyChange = (propertyName: string, propertyValue: string) => {
    setPropertiesState((prevState: Record<string, string>) => ({
      ...prevState,
      [propertyName]: propertyValue
    }));
  };

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
                  onChange={value => handlePropertyChange(property, value)}
                  onBlur={e => {
                    propertyChanged(propertiesState);
                  }}
                  value={propertiesState[property]}
                />
              ) : (
                <PropertyValueInput
                  onChange={e => handlePropertyChange(property, e.target.value)}
                  onBlur={e => {
                    propertyChanged(propertiesState);
                  }}
                  type="text"
                  value={propertiesState[property]}
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
