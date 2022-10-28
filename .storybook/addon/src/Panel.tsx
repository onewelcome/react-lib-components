import React, { useEffect } from "react";
import { AddonPanel } from "@storybook/components";
import { PanelContent } from "./components/PanelContent";
import { useGlobals } from "@storybook/api";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = props => {
  const [{ baseStyling }, updateGlobals] = useGlobals();

  const updateProperties = (newPropertyObject: Record<string, string>) => {
    updateGlobals({ baseStyling: newPropertyObject });
  };

  return (
    <AddonPanel {...props}>
      <PanelContent propertyChanged={updateProperties} properties={baseStyling} />
    </AddonPanel>
  );
};
