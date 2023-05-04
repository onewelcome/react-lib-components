import React from "react";
interface PanelContentProps {
  properties: Record<string, string>;
  propertyChanged: (newPropertyObject: Record<string, string>) => void;
}
export declare const PanelContent: React.FC<PanelContentProps>;
export {};
